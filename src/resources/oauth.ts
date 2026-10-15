import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  oAuthTokenGenerateRequestSchema,
  type OAuthTokenGenerateRequest,
} from "../models/oauth-token-generate-request.js";
import {
  oAuthTokenRefreshRequestSchema,
  type OAuthTokenRefreshRequest,
} from "../models/oauth-token-refresh-request.js";
import { oAuthTokenResponseSchema, type OAuthTokenResponse } from "../models/oauth-token-response.js";
import type { Servers } from "../servers.js";

export class OAuth {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * OAuth Token Generate
   *
   * @remarks
   * Once you have retrieved the code from the user callback, you will need to exchange it for an
   * access token via a backend call.
   *
   * @returns successful operation
   *
   * @throws {@link OAuth.OauthTokenGenerateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthTokenGenerate(
    request: OAuth.OauthTokenGenerateRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthTokenResponse, OAuth.OauthTokenGenerateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oAuthTokenGenerateRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthTokenResponseSchema },
        errorFactory: OAuth.OauthTokenGenerateError,
      },
      options,
    );
  }

  /**
   * OAuth Token Refresh
   *
   * @remarks
   * Access tokens are only valid for a given period of time (typically one hour) for security
   * reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along
   * with a refresh token that can be used to acquire a new access token after the current one has
   * expired.
   *
   * @returns successful operation
   *
   * @throws {@link OAuth.OauthTokenRefreshError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthTokenRefresh(
    request: OAuth.OauthTokenRefreshRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthTokenResponse, OAuth.OauthTokenRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/token?refresh"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oAuthTokenRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthTokenResponseSchema },
        errorFactory: OAuth.OauthTokenRefreshError,
      },
      options,
    );
  }
}

export namespace OAuth {
  export type OauthTokenGenerateRequest = {
    body: OAuthTokenGenerateRequest;
  };

  export class OauthTokenGenerateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<OauthTokenGenerateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type OauthTokenRefreshRequest = {
    body: OAuthTokenRefreshRequest;
  };

  export class OauthTokenRefreshError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<OauthTokenRefreshError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
