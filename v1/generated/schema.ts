// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NonFungibleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token_id", Value.fromBigInt(BigInt.zero()));
    this.set("created_at", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NonFungibleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NonFungibleEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NonFungibleEntity", id.toString(), this);
    }
  }

  static load(id: string): NonFungibleEntity | null {
    return changetype<NonFungibleEntity | null>(
      store.get("NonFungibleEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token_id(): BigInt {
    let value = this.get("token_id");
    return value!.toBigInt();
  }

  set token_id(value: BigInt) {
    this.set("token_id", Value.fromBigInt(value));
  }

  get created_at(): BigInt {
    let value = this.get("created_at");
    return value!.toBigInt();
  }

  set created_at(value: BigInt) {
    this.set("created_at", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value!.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }

  get token_uri(): string | null {
    let value = this.get("token_uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token_uri(value: string | null) {
    if (!value) {
      this.unset("token_uri");
    } else {
      this.set("token_uri", Value.fromString(<string>value));
    }
  }
}

export class SemiFungibleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token_id", Value.fromBigInt(BigInt.zero()));
    this.set("created_at", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SemiFungibleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save SemiFungibleEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("SemiFungibleEntity", id.toString(), this);
    }
  }

  static load(id: string): SemiFungibleEntity | null {
    return changetype<SemiFungibleEntity | null>(
      store.get("SemiFungibleEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token_id(): BigInt {
    let value = this.get("token_id");
    return value!.toBigInt();
  }

  set token_id(value: BigInt) {
    this.set("token_id", Value.fromBigInt(value));
  }

  get created_at(): BigInt {
    let value = this.get("created_at");
    return value!.toBigInt();
  }

  set created_at(value: BigInt) {
    this.set("created_at", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value!.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }

  get token_uri(): string | null {
    let value = this.get("token_uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token_uri(value: string | null) {
    if (!value) {
      this.unset("token_uri");
    } else {
      this.set("token_uri", Value.fromString(<string>value));
    }
  }
}

export class ContractEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("created_at", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("total_supply", Value.fromBigInt(BigInt.zero()));
    this.set("transaction_count", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ContractEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ContractEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ContractEntity", id.toString(), this);
    }
  }

  static load(id: string): ContractEntity | null {
    return changetype<ContractEntity | null>(store.get("ContractEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get created_at(): BigInt {
    let value = this.get("created_at");
    return value!.toBigInt();
  }

  set created_at(value: BigInt) {
    this.set("created_at", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value!.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }

  get base_uri(): string | null {
    let value = this.get("base_uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set base_uri(value: string | null) {
    if (!value) {
      this.unset("base_uri");
    } else {
      this.set("base_uri", Value.fromString(<string>value));
    }
  }

  get total_supply(): BigInt {
    let value = this.get("total_supply");
    return value!.toBigInt();
  }

  set total_supply(value: BigInt) {
    this.set("total_supply", Value.fromBigInt(value));
  }

  get transaction_count(): BigInt {
    let value = this.get("transaction_count");
    return value!.toBigInt();
  }

  set transaction_count(value: BigInt) {
    this.set("transaction_count", Value.fromBigInt(value));
  }

  get semi_fungibles(): Array<string> {
    let value = this.get("semi_fungibles");
    return value!.toStringArray();
  }

  set semi_fungibles(value: Array<string>) {
    this.set("semi_fungibles", Value.fromStringArray(value));
  }

  get non_fungibles(): Array<string> {
    let value = this.get("non_fungibles");
    return value!.toStringArray();
  }

  set non_fungibles(value: Array<string>) {
    this.set("non_fungibles", Value.fromStringArray(value));
  }
}

export class AccountEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccountEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccountEntity", id.toString(), this);
    }
  }

  static load(id: string): AccountEntity | null {
    return changetype<AccountEntity | null>(store.get("AccountEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get contracts(): Array<string> {
    let value = this.get("contracts");
    return value!.toStringArray();
  }

  set contracts(value: Array<string>) {
    this.set("contracts", Value.fromStringArray(value));
  }

  get semi_fungibles(): Array<string> {
    let value = this.get("semi_fungibles");
    return value!.toStringArray();
  }

  set semi_fungibles(value: Array<string>) {
    this.set("semi_fungibles", Value.fromStringArray(value));
  }

  get non_fungibles(): Array<string> {
    let value = this.get("non_fungibles");
    return value!.toStringArray();
  }

  set non_fungibles(value: Array<string>) {
    this.set("non_fungibles", Value.fromStringArray(value));
  }

  get opensea_orders(): Array<string> {
    let value = this.get("opensea_orders");
    return value!.toStringArray();
  }

  set opensea_orders(value: Array<string>) {
    this.set("opensea_orders", Value.fromStringArray(value));
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value!.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }
}

export class TransactionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("occurred_at", Value.fromBigInt(BigInt.zero()));
    this.set("type", Value.fromString(""));
    this.set("asset_type", Value.fromString(""));
    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("market", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransactionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TransactionEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TransactionEntity", id.toString(), this);
    }
  }

  static load(id: string): TransactionEntity | null {
    return changetype<TransactionEntity | null>(
      store.get("TransactionEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get occurred_at(): BigInt {
    let value = this.get("occurred_at");
    return value!.toBigInt();
  }

  set occurred_at(value: BigInt) {
    this.set("occurred_at", Value.fromBigInt(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get asset_type(): string {
    let value = this.get("asset_type");
    return value!.toString();
  }

  set asset_type(value: string) {
    this.set("asset_type", Value.fromString(value));
  }

  get non_fungible(): string | null {
    let value = this.get("non_fungible");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set non_fungible(value: string | null) {
    if (!value) {
      this.unset("non_fungible");
    } else {
      this.set("non_fungible", Value.fromString(<string>value));
    }
  }

  get semi_fungible(): string | null {
    let value = this.get("semi_fungible");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set semi_fungible(value: string | null) {
    if (!value) {
      this.unset("semi_fungible");
    } else {
      this.set("semi_fungible", Value.fromString(<string>value));
    }
  }

  get contract(): string | null {
    let value = this.get("contract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contract(value: string | null) {
    if (!value) {
      this.unset("contract");
    } else {
      this.set("contract", Value.fromString(<string>value));
    }
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get market(): string {
    let value = this.get("market");
    return value!.toString();
  }

  set market(value: string) {
    this.set("market", Value.fromString(value));
  }
}

export class OpenSeaOrderEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("occurred_at", Value.fromBigInt(BigInt.zero()));
    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
    this.set("offer", Value.fromBoolean(false));
    this.set("metadata", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OpenSeaOrderEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OpenSeaOrderEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OpenSeaOrderEntity", id.toString(), this);
    }
  }

  static load(id: string): OpenSeaOrderEntity | null {
    return changetype<OpenSeaOrderEntity | null>(
      store.get("OpenSeaOrderEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get occurred_at(): BigInt {
    let value = this.get("occurred_at");
    return value!.toBigInt();
  }

  set occurred_at(value: BigInt) {
    this.set("occurred_at", Value.fromBigInt(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get offer(): boolean {
    let value = this.get("offer");
    return value!.toBoolean();
  }

  set offer(value: boolean) {
    this.set("offer", Value.fromBoolean(value));
  }

  get metadata(): Bytes {
    let value = this.get("metadata");
    return value!.toBytes();
  }

  set metadata(value: Bytes) {
    this.set("metadata", Value.fromBytes(value));
  }
}