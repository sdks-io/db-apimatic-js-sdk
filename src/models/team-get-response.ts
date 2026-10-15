import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamResponseSchema, type TeamResponse } from "./team-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TeamGetResponse = {
  /** Contains information about your team and its members */
  team: TeamResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const teamGetResponseSchema: Schema<TeamGetResponse> = s.object<TeamGetResponse>({
  team: teamResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
