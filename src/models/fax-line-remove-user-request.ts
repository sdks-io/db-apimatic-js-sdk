import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FaxLineRemoveUserRequest = {
  /** The Fax Line number */
  number: string;
  /** Account ID of the user to remove access */
  accountId?: string;
  /** Email address of the user to remove access */
  emailAddress?: string;
};

export const faxLineRemoveUserRequestSchema: Schema<FaxLineRemoveUserRequest> =
  s.object<FaxLineRemoveUserRequest>({
    number: s.string(),
    accountId: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    _keysMap: {
      accountId: "account_id",
      emailAddress: "email_address",
    },
  });
