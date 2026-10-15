import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountResponseSchema, type AccountResponse } from "./account-response.js";

/** Contains information about your team and its members */
export type TeamResponse = {
  /** The name of your Team */
  name?: string;
  accounts?: AccountResponse[];
  /**
   * A list of all Accounts that have an outstanding invitation to join your Team. Note that this
   * response is a subset of the response parameters found in `GET /account`.
   */
  invitedAccounts?: AccountResponse[];
  /**
   * A list of email addresses that have an outstanding invitation to join your Team and do not yet
   * have a Dropbox Sign account.
   */
  invitedEmails?: string[];
};

export const teamResponseSchema: Schema<TeamResponse> = s.object<TeamResponse>({
  name: s.optional(s.string()),
  accounts: s.optional(s.array(s.lazy(() => accountResponseSchema))),
  invitedAccounts: s.optional(s.array(s.lazy(() => accountResponseSchema))),
  invitedEmails: s.optional(s.array(s.string())),
  _keysMap: {
    invitedAccounts: "invited_accounts",
    invitedEmails: "invited_emails",
  },
});
