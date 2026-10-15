import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountUpdateRequest = {
  /** The ID of the Account */
  accountId?: string | null;
  /** The URL that Dropbox Sign should POST events to. */
  callbackUrl?: string;
  /**
   * The locale used in this Account. Check out the list of [supported
   * locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  locale?: string;
};

export const accountUpdateRequestSchema: Schema<AccountUpdateRequest> = s.object<AccountUpdateRequest>({
  accountId: s.optionalNullable(s.string()),
  callbackUrl: s.optional(s.string()),
  locale: s.optional(s.string()),
  _keysMap: {
    accountId: "account_id",
    callbackUrl: "callback_url",
  },
});
