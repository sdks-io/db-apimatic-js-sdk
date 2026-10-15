import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object describing the app's owner */
export type ApiAppResponseOwnerAccount = {
  /** The owner account's ID */
  accountId?: string;
  /** The owner account's email address */
  emailAddress?: string;
};

export const apiAppResponseOwnerAccountSchema: Schema<ApiAppResponseOwnerAccount> =
  s.object<ApiAppResponseOwnerAccount>({
    accountId: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    _keysMap: {
      accountId: "account_id",
      emailAddress: "email_address",
    },
  });
