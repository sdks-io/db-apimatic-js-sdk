import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object describing the app's OAuth properties, or null if OAuth is not configured for the app.
 */
export type ApiAppResponseOAuth = {
  /** The app's OAuth callback URL. */
  callbackUrl?: string;
  /** The app's OAuth secret, or null if the app does not belong to user. */
  secret?: string | null;
  /** Array of OAuth scopes used by the app. */
  scopes?: string[];
  /**
   * Boolean indicating whether the app owner or the account granting permission is billed for OAuth
   * requests.
   */
  chargesUsers?: boolean;
};

export const apiAppResponseOAuthSchema: Schema<ApiAppResponseOAuth> = s.object<ApiAppResponseOAuth>({
  callbackUrl: s.optional(s.string()),
  secret: s.optionalNullable(s.string()),
  scopes: s.optional(s.array(s.string())),
  chargesUsers: s.optional(s.boolean()),
  _keysMap: {
    callbackUrl: "callback_url",
    chargesUsers: "charges_users",
  },
});
