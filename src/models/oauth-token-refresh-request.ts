import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthTokenRefreshRequest = {
  /** When refreshing an existing token use `refresh_token`. @default "refresh_token" */
  grantType?: string;
  /** The token provided when you got the expired access token. */
  refreshToken: string;
  /**
   * The client ID for your API app. Required for new API apps. To enhance security, we recommend
   * making it required for existing apps in your app settings.
   */
  clientId?: string;
  /**
   * The client secret for your API app. Required for new API apps. To enhance security, we
   * recommend making it required for existing apps in your app settings.
   */
  clientSecret?: string;
};

export const oAuthTokenRefreshRequestSchema: Schema<OAuthTokenRefreshRequest> =
  s.object<OAuthTokenRefreshRequest>({
    grantType: s.defaulted(s.string(), "refresh_token"),
    refreshToken: s.string(),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    _keysMap: {
      grantType: "grant_type",
      refreshToken: "refresh_token",
      clientId: "client_id",
      clientSecret: "client_secret",
    },
  });
