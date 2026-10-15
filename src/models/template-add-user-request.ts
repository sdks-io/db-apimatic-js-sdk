import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateAddUserRequest = {
  /**
   * The id of the Account to give access to the Template. **NOTE:** The account id prevails if
   * email address is also provided.
   */
  accountId?: string;
  /**
   * The email address of the Account to give access to the Template. **NOTE:** The account id
   * prevails if it is also provided.
   */
  emailAddress?: string;
  /**
   * If set to `true`, the user does not receive an email notification when a template has been
   * shared with them. Defaults to `false`.
   *
   * @default false
   */
  skipNotification?: boolean;
};

export const templateAddUserRequestSchema: Schema<TemplateAddUserRequest> = s.object<TemplateAddUserRequest>({
  accountId: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  skipNotification: s.defaulted(s.boolean(), false),
  _keysMap: {
    accountId: "account_id",
    emailAddress: "email_address",
    skipNotification: "skip_notification",
  },
});
