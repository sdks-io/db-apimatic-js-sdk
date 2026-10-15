import type { BasicAuthCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Your API key can be used to make calls to the Dropbox Sign API. See
   * [Authentication](/api/reference/authentication) for more information. ✅ Supported by Try it
   * console (calls sent in `test_mode` only).
   */
  readonly apiKey?: BasicAuthCredentials | undefined;
  /**
   * You can use an Access Token issued through an OAuth flow to send calls to the Dropbox Sign API
   * from your app. The access scopes required by this endpoint are listed in the gray box above.
   * See [Authentication](/api/reference/authentication) for more information. ❌ **Not supported**
   * by Try it console.
   */
  readonly oauth2?: TokenProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
