import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  templateResponseAccountQuotaSchema,
  type TemplateResponseAccountQuota,
} from "./template-response-account-quota.js";

export type TemplateResponseAccount = {
  /** The id of the Account. */
  accountId?: string;
  /** The email address associated with the Account. */
  emailAddress?: string;
  /** Returns `true` if the user has been locked out of their account by a team admin. */
  isLocked?: boolean;
  /** Returns `true` if the user has a paid Dropbox Sign account. */
  isPaidHs?: boolean;
  /** Returns `true` if the user has a paid HelloFax account. */
  isPaidHf?: boolean;
  /**
   * An array of the designated CC roles that must be specified when sending a SignatureRequest
   * using this Template.
   */
  quotas?: TemplateResponseAccountQuota;
};

export const templateResponseAccountSchema: Schema<TemplateResponseAccount> =
  s.object<TemplateResponseAccount>({
    accountId: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    isLocked: s.optional(s.boolean()),
    isPaidHs: s.optional(s.boolean()),
    isPaidHf: s.optional(s.boolean()),
    quotas: s.optional(s.lazy(() => templateResponseAccountQuotaSchema)),
    _keysMap: {
      accountId: "account_id",
      emailAddress: "email_address",
      isLocked: "is_locked",
      isPaidHs: "is_paid_hs",
      isPaidHf: "is_paid_hf",
    },
  });
