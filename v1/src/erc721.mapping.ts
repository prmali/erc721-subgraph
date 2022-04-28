import { BigInt, Address, log } from "@graphprotocol/graph-ts";
import { ERC721, Transfer } from "../generated/ERC721/ERC721";
import {
	NonFungibleEntity,
	ContractEntity,
	AccountEntity,
	TransactionEntity,
} from "../generated/schema";

export function handleTransfer(event: Transfer): void {
	let contract = ERC721.bind(event.address);
	const address = event.address.toHexString();
	let accountEntity = AccountEntity.load(event.params.from.toHexString());
	let accountToEntity = AccountEntity.load(event.params.to.toHexString());
	let contractEntity = ContractEntity.load(address);
	let nonFungibleEntity = NonFungibleEntity.load(
		`${address}-${event.params.tokenId}`
	);

	// account
	if (!accountEntity) {
		accountEntity = new AccountEntity(event.params.from.toHexString());
		accountEntity.address = event.params.from;

		accountEntity.save();
	}
	if (!accountToEntity) {
		accountToEntity = new AccountEntity(event.params.to.toHexString());
		accountToEntity.address = event.params.to;

		accountToEntity.save();
	}

	// contract
	if (!contractEntity) {
		contractEntity = new ContractEntity(address);
		contractEntity.created_at = event.block.timestamp;
		contractEntity.transaction_count = BigInt.fromI32(0);
		let symbol = contract.try_symbol();
		let name = contract.try_name();
		let baseUri = contract.try_baseURI();

		if (symbol.reverted) {
			log.info("symbol() reverted", []);
		} else {
			contractEntity.symbol = symbol.value;
		}

		if (name.reverted) {
			log.info("name() reverted", []);
		} else {
			contractEntity.name = name.value;
		}

		if (baseUri.reverted) {
			log.info("baseURI() reverted", []);
		} else {
			contractEntity.base_uri = baseUri.value;
		}
	}

	let totalSupply = contract.try_totalSupply();
	if (totalSupply.reverted) {
		log.info("totalSupply() reverted", []);
	} else {
		if (contractEntity.total_supply != totalSupply.value) {
			contractEntity.total_supply = totalSupply.value;
		}
	}
	contractEntity.transaction_count = contractEntity.transaction_count.plus(
		BigInt.fromI32(1)
	);

	contractEntity.save();

	// nft
	if (!nonFungibleEntity) {
		nonFungibleEntity = new NonFungibleEntity(
			`${address}-${event.params.tokenId}`
		);
		nonFungibleEntity.token_id = event.params.tokenId;
		nonFungibleEntity.created_at = event.block.timestamp;
		nonFungibleEntity.contract = address;
		let tokenUri = contract.try_tokenURI(event.params.tokenId);
		if (tokenUri.reverted) {
			log.info("tokenURI() reverted", []);
		} else {
			nonFungibleEntity.token_uri = tokenUri.value;
		}
	}
	nonFungibleEntity.owner = event.params.to.toHexString();
	nonFungibleEntity.save();

	// txn
	let transactionEntity = new TransactionEntity(
		`${address}-${event.params.tokenId}-${event.block.timestamp}`
	);
	transactionEntity.type =
		event.params.from.toHexString() ==
		"0x0000000000000000000000000000000000000000"
			? "MINT"
			: "TRANSFER";
	transactionEntity.asset_type = "ERC721";
	transactionEntity.non_fungible = `${address}-${event.params.tokenId}`;
	transactionEntity.occurred_at = event.block.timestamp;
	transactionEntity.contract = address;
	transactionEntity.from = event.params.from.toHexString();
	transactionEntity.to = event.params.to.toHexString();
	transactionEntity.market = "DEFAULT";
	transactionEntity.save();
}
