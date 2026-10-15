import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubTeamResponse = {
  /** The id of a team */
  teamId?: string;
  /** The name of a team */
  name?: string;
};

export const subTeamResponseSchema: Schema<SubTeamResponse> = s.object<SubTeamResponse>({
  teamId: s.optional(s.string()),
  name: s.optional(s.string()),
  _keysMap: {
    teamId: "team_id",
  },
});
