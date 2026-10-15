import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiAppGetResponseSchema, type ApiAppGetResponse } from "../models/api-app-get-response.js";
import { apiAppListResponseSchema, type ApiAppListResponse } from "../models/api-app-list-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { subOAuthSchema, type SubOAuth } from "../models/sub-oauth.js";
import { subOptionsSchema, type SubOptions } from "../models/sub-options.js";
import {
  subWhiteLabelingOptionsSchema,
  type SubWhiteLabelingOptions,
} from "../models/sub-white-labeling-options.js";
import type { Servers } from "../servers.js";

export class ApiApp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create API App
   *
   * @remarks
   * Creates a new API App.
   *
   * @returns successful operation
   *
   * @throws {@link ApiApp.ApiAppCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiAppCreate(
    request: ApiApp.ApiAppCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ApiAppGetResponse, ApiApp.ApiAppCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api_app"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "domains", value: request.domains, schema: s.array(s.string()) },
            { kind: "text", name: "name", value: request.name, schema: s.string() },
            {
              kind: "text",
              name: "callback_url",
              value: request.callbackUrl,
              schema: s.optional(s.string()),
            },
            { kind: "file", name: "custom_logo_file", value: request.customLogoFile },
            {
              kind: "text",
              name: "oauth",
              value: request.oauth,
              schema: s.optional(s.lazy(() => subOAuthSchema)),
            },
            {
              kind: "text",
              name: "options",
              value: request.options,
              schema: s.optional(s.lazy(() => subOptionsSchema)),
            },
            {
              kind: "text",
              name: "white_labeling_options",
              value: request.whiteLabelingOptions,
              schema: s.optional(s.lazy(() => subWhiteLabelingOptionsSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiAppGetResponseSchema },
        errorFactory: ApiApp.ApiAppCreateError,
      },
      options,
    );
  }

  /**
   * Delete API App
   *
   * @remarks
   * Deletes an API App. Can only be invoked for apps you own.
   *
   * @returns successful operation
   *
   * @throws {@link ApiApp.ApiAppDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiAppDelete(
    request: ApiApp.ApiAppDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiApp.ApiAppDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api_app/{client_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "client_id", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiApp.ApiAppDeleteError,
      },
      options,
    );
  }

  /**
   * Get API App
   *
   * @remarks
   * Returns an object with information about an API App.
   *
   * @returns successful operation
   *
   * @throws {@link ApiApp.ApiAppGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiAppGet(
    request: ApiApp.ApiAppGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppGetResponse, ApiApp.ApiAppGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api_app/{client_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "client_id", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAppGetResponseSchema },
        errorFactory: ApiApp.ApiAppGetError,
      },
      options,
    );
  }

  /**
   * List API Apps
   *
   * @remarks
   * Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or
   * Developer role, this list will include apps owned by teammates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiApp.ApiAppListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiAppList(
    request: ApiApp.ApiAppListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppListResponse, ApiApp.ApiAppListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api_app/list"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAppListResponseSchema },
        errorFactory: ApiApp.ApiAppListError,
      },
      options,
    );
  }

  /**
   * Update API App
   *
   * @remarks
   * Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide
   * will be updated. If you wish to clear an existing optional field, provide an empty string.
   *
   * @returns successful operation
   *
   * @throws {@link ApiApp.ApiAppUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiAppUpdate(
    request: ApiApp.ApiAppUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ApiAppGetResponse, ApiApp.ApiAppUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api_app/{client_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "client_id", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "callback_url",
              value: request.callbackUrl,
              schema: s.optional(s.string()),
            },
            { kind: "file", name: "custom_logo_file", value: request.customLogoFile },
            {
              kind: "text",
              name: "domains",
              value: request.domains,
              schema: s.optional(s.array(s.string())),
            },
            { kind: "text", name: "name", value: request.name, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "oauth",
              value: request.oauth,
              schema: s.optional(s.lazy(() => subOAuthSchema)),
            },
            {
              kind: "text",
              name: "options",
              value: request.options,
              schema: s.optional(s.lazy(() => subOptionsSchema)),
            },
            {
              kind: "text",
              name: "white_labeling_options",
              value: request.whiteLabelingOptions,
              schema: s.optional(s.lazy(() => subWhiteLabelingOptionsSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiAppGetResponseSchema },
        errorFactory: ApiApp.ApiAppUpdateError,
      },
      options,
    );
  }
}

export namespace ApiApp {
  export type ApiAppCreateRequestParams = {
    /** The domain names the ApiApp will be associated with. */
    domains: string[];
    /** The name you want to assign to the ApiApp. */
    name: string;
    /** The URL at which the ApiApp should receive event callbacks. */
    callbackUrl?: string;
    /**
     * An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)
     */
    customLogoFile?: FileInput;
    /** OAuth related parameters. */
    oauth?: SubOAuth;
    /** Additional options supported by API App. */
    options?: SubOptions;
    /**
     * An array of elements and values serialized to a string, to be used to customize the app's
     * signer page. (Only applies to some API plans)
     *
     * Take a look at our [white labeling
     * guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.
     */
    whiteLabelingOptions?: SubWhiteLabelingOptions;
  };

  export class ApiAppCreateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ApiAppCreateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ApiAppDeleteRequest = {
    /** The client id of the API App to delete. */
    clientId: string;
  };

  export class ApiAppDeleteError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ApiAppDeleteError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ApiAppGetRequest = {
    /** The client id of the API App to retrieve. */
    clientId: string;
  };

  export class ApiAppGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ApiAppGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ApiAppListRequest = {
    /** Which page number of the API App List to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export class ApiAppListError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ApiAppListError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ApiAppUpdateRequestParams = {
    /** The client id of the API App to update. */
    clientId: string;
    /** The URL at which the API App should receive event callbacks. */
    callbackUrl?: string;
    /**
     * An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)
     */
    customLogoFile?: FileInput;
    /** The domain names the ApiApp will be associated with. */
    domains?: string[];
    /** The name you want to assign to the ApiApp. */
    name?: string;
    /** OAuth related parameters. */
    oauth?: SubOAuth;
    /** Additional options supported by API App. */
    options?: SubOptions;
    /**
     * An array of elements and values serialized to a string, to be used to customize the app's
     * signer page. (Only applies to some API plans)
     *
     * Take a look at our [white labeling
     * guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.
     */
    whiteLabelingOptions?: SubWhiteLabelingOptions;
  };

  export class ApiAppUpdateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ApiAppUpdateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
