import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountVerifyResponseAccount = {
  /** The email address associated with the Account. */
  emailAddress?: string;
};

export const accountVerifyResponseAccountSchema: Schema<AccountVerifyResponseAccount> =
  s.object<AccountVerifyResponseAccount>({
    emailAddress: s.optional(s.string()),
    _keysMap: {
      emailAddress: "email_address",
    },
  });
