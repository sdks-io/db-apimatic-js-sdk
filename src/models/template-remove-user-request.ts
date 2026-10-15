import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateRemoveUserRequest = {
  /**
   * The id or email address of the Account to remove access to the Template. The account id
   * prevails if both are provided.
   */
  accountId?: string;
  /**
   * The id or email address of the Account to remove access to the Template. The account id
   * prevails if both are provided.
   */
  emailAddress?: string;
};

export const templateRemoveUserRequestSchema: Schema<TemplateRemoveUserRequest> =
  s.object<TemplateRemoveUserRequest>({
    accountId: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    _keysMap: {
      accountId: "account_id",
      emailAddress: "email_address",
    },
  });
