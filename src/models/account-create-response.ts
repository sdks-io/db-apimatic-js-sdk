import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountResponseSchema, type AccountResponse } from "./account-response.js";
import { oAuthTokenResponseSchema, type OAuthTokenResponse } from "./oauth-token-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type AccountCreateResponse = {
  account: AccountResponse;
  oauthData?: OAuthTokenResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const accountCreateResponseSchema: Schema<AccountCreateResponse> = s.object<AccountCreateResponse>({
  account: accountResponseSchema,
  oauthData: s.optional(s.lazy(() => oAuthTokenResponseSchema)),
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    oauthData: "oauth_data",
  },
});
