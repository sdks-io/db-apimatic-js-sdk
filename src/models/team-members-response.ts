import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import { teamMemberResponseSchema, type TeamMemberResponse } from "./team-member-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TeamMembersResponse = {
  /** Contains a list of team members and their roles for a specific team. */
  teamMembers: TeamMemberResponse[];
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  warnings?: WarningResponse[];
};

export const teamMembersResponseSchema: Schema<TeamMembersResponse> = s.object<TeamMembersResponse>({
  teamMembers: s.array(s.lazy(() => teamMemberResponseSchema)),
  listInfo: listInfoResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    teamMembers: "team_members",
    listInfo: "list_info",
  },
});
