import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamInviteResponseSchema, type TeamInviteResponse } from "./team-invite-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TeamInvitesResponse = {
  /** Contains a list of team invites and their roles. */
  teamInvites: TeamInviteResponse[];
  warnings?: WarningResponse[];
};

export const teamInvitesResponseSchema: Schema<TeamInvitesResponse> = s.object<TeamInvitesResponse>({
  teamInvites: s.array(s.lazy(() => teamInviteResponseSchema)),
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    teamInvites: "team_invites",
  },
});
