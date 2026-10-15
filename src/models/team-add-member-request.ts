import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type TeamAddMemberRequest = {
  /**
   * `account_id` or `email_address` is required. If both are provided, the account id prevails.
   *
   * Account id of the user to invite to your Team.
   */
  accountId?: string;
  /**
   * `account_id` or `email_address` is required, If both are provided, the account id prevails.
   *
   * Email address of the user to invite to your Team.
   */
  emailAddress?: string;
  /**
   * A role member will take in a new Team.
   *
   * **NOTE:** This parameter is used only if `team_id` is provided.
   */
  role?: Role;
};

export const teamAddMemberRequestSchema: Schema<TeamAddMemberRequest> = s.object<TeamAddMemberRequest>({
  accountId: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  role: s.optional(s.lazy(() => roleSchema)),
  _keysMap: {
    accountId: "account_id",
    emailAddress: "email_address",
  },
});
