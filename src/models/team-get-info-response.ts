import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamInfoResponseSchema, type TeamInfoResponse } from "./team-info-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TeamGetInfoResponse = {
  team: TeamInfoResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const teamGetInfoResponseSchema: Schema<TeamGetInfoResponse> = s.object<TeamGetInfoResponse>({
  team: teamInfoResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
