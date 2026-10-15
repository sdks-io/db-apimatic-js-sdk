import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountCreateRequest = {
  /**
   * Used when creating a new account with OAuth authorization.
   *
   * See [OAuth 2.0
   * Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)
   */
  clientId?: string;
  /**
   * Used when creating a new account with OAuth authorization.
   *
   * See [OAuth 2.0
   * Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)
   */
  clientSecret?: string;
  /** The email address which will be associated with the new Account. */
  emailAddress: string;
  /**
   * The locale used in this Account. Check out the list of [supported
   * locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  locale?: string;
};

export const accountCreateRequestSchema: Schema<AccountCreateRequest> = s.object<AccountCreateRequest>({
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  emailAddress: s.string(),
  locale: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    clientSecret: "client_secret",
    emailAddress: "email_address",
  },
});
