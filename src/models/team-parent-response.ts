import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the parent team if a team has one, set to `null` otherwise. */
export type TeamParentResponse = {
  /** The id of a team */
  teamId?: string;
  /** The name of a team */
  name?: string;
};

export const teamParentResponseSchema: Schema<TeamParentResponse> = s.object<TeamParentResponse>({
  teamId: s.optional(s.string()),
  name: s.optional(s.string()),
  _keysMap: {
    teamId: "team_id",
  },
});
