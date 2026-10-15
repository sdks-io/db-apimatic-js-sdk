import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountResponseQuotasSchema, type AccountResponseQuotas } from "./account-response-quotas.js";
import { accountResponseSettingsSchema, type AccountResponseSettings } from "./account-response-settings.js";
import { accountResponseUsageSchema, type AccountResponseUsage } from "./account-response-usage.js";

export type AccountResponse = {
  /** The ID of the Account */
  accountId?: string;
  /** The email address associated with the Account. */
  emailAddress?: string;
  /** Returns `true` if the user has been locked out of their account by a team admin. */
  isLocked?: boolean;
  /** Returns `true` if the user has a paid Dropbox Sign account. */
  isPaidHs?: boolean;
  /** Returns `true` if the user has a paid HelloFax account. */
  isPaidHf?: boolean;
  /** Details concerning remaining monthly quotas. */
  quotas?: AccountResponseQuotas;
  /** The URL that Dropbox Sign events will `POST` to. */
  callbackUrl?: string | null;
  /** The membership role for the team. */
  roleCode?: string | null;
  /** The id of the team account belongs to. */
  teamId?: string | null;
  /**
   * The locale used in this Account. Check out the list of [supported
   * locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  locale?: string | null;
  /** Details concerning monthly usage */
  usage?: AccountResponseUsage;
  /** Subset of configured settings */
  settings?: AccountResponseSettings;
};

export const accountResponseSchema: Schema<AccountResponse> = s.object<AccountResponse>({
  accountId: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  isLocked: s.optional(s.boolean()),
  isPaidHs: s.optional(s.boolean()),
  isPaidHf: s.optional(s.boolean()),
  quotas: s.optional(s.lazy(() => accountResponseQuotasSchema)),
  callbackUrl: s.optionalNullable(s.string()),
  roleCode: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.string()),
  locale: s.optionalNullable(s.string()),
  usage: s.optional(s.lazy(() => accountResponseUsageSchema)),
  settings: s.optional(s.lazy(() => accountResponseSettingsSchema)),
  _keysMap: {
    accountId: "account_id",
    emailAddress: "email_address",
    isLocked: "is_locked",
    isPaidHs: "is_paid_hs",
    isPaidHf: "is_paid_hf",
    callbackUrl: "callback_url",
    roleCode: "role_code",
    teamId: "team_id",
  },
});
