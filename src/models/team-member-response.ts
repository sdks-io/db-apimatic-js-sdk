import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamMemberResponse = {
  /** Account id of the team member. */
  accountId?: string;
  /** Email address of the team member. */
  emailAddress?: string;
  /** The specific role a member has on the team. */
  role?: string;
};

export const teamMemberResponseSchema: Schema<TeamMemberResponse> = s.object<TeamMemberResponse>({
  accountId: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  role: s.optional(s.string()),
  _keysMap: {
    accountId: "account_id",
    emailAddress: "email_address",
  },
});
