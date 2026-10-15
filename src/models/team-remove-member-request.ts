import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { newRoleSchema, type NewRole } from "./new-role.js";

export type TeamRemoveMemberRequest = {
  /**
   * **account_id** or **email_address** is required. If both are provided, the account id prevails.
   *
   * Account id to remove from your Team.
   */
  accountId?: string;
  /**
   * **account_id** or **email_address** is required. If both are provided, the account id prevails.
   *
   * Email address of the Account to remove from your Team.
   */
  emailAddress?: string;
  /**
   * The email address of an Account on this Team to receive all documents, templates, and API apps
   * (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data
   * will remain with the removed Account.
   *
   * **NOTE:** Only available for Enterprise plans.
   */
  newOwnerEmailAddress?: string;
  /** Id of the new Team. */
  newTeamId?: string;
  /**
   * A new role member will take in a new Team.
   *
   * **NOTE:** This parameter is used only if `new_team_id` is provided.
   */
  newRole?: NewRole;
};

export const teamRemoveMemberRequestSchema: Schema<TeamRemoveMemberRequest> =
  s.object<TeamRemoveMemberRequest>({
    accountId: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    newOwnerEmailAddress: s.optional(s.string()),
    newTeamId: s.optional(s.string()),
    newRole: s.optional(s.lazy(() => newRoleSchema)),
    _keysMap: {
      accountId: "account_id",
      emailAddress: "email_address",
      newOwnerEmailAddress: "new_owner_email_address",
      newTeamId: "new_team_id",
      newRole: "new_role",
    },
  });
