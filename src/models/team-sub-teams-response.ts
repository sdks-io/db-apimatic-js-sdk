import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import { subTeamResponseSchema, type SubTeamResponse } from "./sub-team-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TeamSubTeamsResponse = {
  /** Contains a list with sub teams. */
  subTeams: SubTeamResponse[];
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  warnings?: WarningResponse[];
};

export const teamSubTeamsResponseSchema: Schema<TeamSubTeamsResponse> = s.object<TeamSubTeamsResponse>({
  subTeams: s.array(s.lazy(() => subTeamResponseSchema)),
  listInfo: listInfoResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    subTeams: "sub_teams",
    listInfo: "list_info",
  },
});
