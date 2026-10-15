import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthTokenResponse = {
  accessToken?: string;
  tokenType?: string;
  refreshToken?: string;
  /** Number of seconds until the `access_token` expires. Uses epoch time. */
  expiresIn?: number;
  state?: string | null;
};

export const oAuthTokenResponseSchema: Schema<OAuthTokenResponse> = s.object<OAuthTokenResponse>({
  accessToken: s.optional(s.string()),
  tokenType: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  expiresIn: s.optional(s.int()),
  state: s.optionalNullable(s.string()),
  _keysMap: {
    accessToken: "access_token",
    tokenType: "token_type",
    refreshToken: "refresh_token",
    expiresIn: "expires_in",
  },
});
