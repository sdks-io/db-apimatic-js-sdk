import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuth, bearerAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly oauth2: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKey: basicAuth(options.apiKey),
    oauth2: bearerAuth(options.oauth2),
  };
}
