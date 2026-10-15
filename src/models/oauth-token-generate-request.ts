import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthTokenGenerateRequest = {
  /** The client id of the app requesting authorization. */
  clientId: string;
  /** The secret token of your app. */
  clientSecret: string;
  /** The code passed to your callback when the user granted access. */
  code: string;
  /** When generating a new token use `authorization_code`. @default "authorization_code" */
  grantType?: string;
  /** Same as the state you specified earlier. */
  state: string;
};

export const oAuthTokenGenerateRequestSchema: Schema<OAuthTokenGenerateRequest> =
  s.object<OAuthTokenGenerateRequest>({
    clientId: s.string(),
    clientSecret: s.string(),
    code: s.string(),
    grantType: s.defaulted(s.string(), "authorization_code"),
    state: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      grantType: "grant_type",
    },
  });
