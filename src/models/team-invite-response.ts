import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamInviteResponse = {
  /** Email address of the user invited to this team. */
  emailAddress?: string;
  /** Id of the team. */
  teamId?: string;
  /** Role of the user invited to this team. */
  role?: string;
  /** Timestamp when the invitation was sent. */
  sentAt?: number;
  /** Timestamp when the invitation was redeemed. */
  redeemedAt?: number;
  /** Timestamp when the invitation is expiring. */
  expiresAt?: number;
};

export const teamInviteResponseSchema: Schema<TeamInviteResponse> = s.object<TeamInviteResponse>({
  emailAddress: s.optional(s.string()),
  teamId: s.optional(s.string()),
  role: s.optional(s.string()),
  sentAt: s.optional(s.int()),
  redeemedAt: s.optional(s.int()),
  expiresAt: s.optional(s.int()),
  _keysMap: {
    emailAddress: "email_address",
    teamId: "team_id",
    sentAt: "sent_at",
    redeemedAt: "redeemed_at",
    expiresAt: "expires_at",
  },
});
