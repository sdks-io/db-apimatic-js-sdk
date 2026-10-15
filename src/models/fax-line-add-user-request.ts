import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FaxLineAddUserRequest = {
  /** The Fax Line number */
  number: string;
  /** Account ID */
  accountId?: string;
  /** Email address */
  emailAddress?: string;
};

export const faxLineAddUserRequestSchema: Schema<FaxLineAddUserRequest> = s.object<FaxLineAddUserRequest>({
  number: s.string(),
  accountId: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  _keysMap: {
    accountId: "account_id",
    emailAddress: "email_address",
  },
});
