import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamParentResponseSchema, type TeamParentResponse } from "./team-parent-response.js";

export type TeamInfoResponse = {
  /** The id of a team */
  teamId?: string;
  /** Information about the parent team if a team has one, set to `null` otherwise. */
  teamParent?: TeamParentResponse | null;
  /** The name of a team */
  name?: string;
  /** Number of members within a team */
  numMembers?: number;
  /** Number of sub teams within a team */
  numSubTeams?: number;
};

export const teamInfoResponseSchema: Schema<TeamInfoResponse> = s.object<TeamInfoResponse>({
  teamId: s.optional(s.string()),
  teamParent: s.optionalNullable(s.lazy(() => teamParentResponseSchema)),
  name: s.optional(s.string()),
  numMembers: s.optional(s.int()),
  numSubTeams: s.optional(s.int()),
  _keysMap: {
    teamId: "team_id",
    teamParent: "team_parent",
    numMembers: "num_members",
    numSubTeams: "num_sub_teams",
  },
});
