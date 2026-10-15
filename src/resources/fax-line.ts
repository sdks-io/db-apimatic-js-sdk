import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  faxLineAddUserRequestSchema,
  type FaxLineAddUserRequest,
} from "../models/fax-line-add-user-request.js";
import {
  faxLineAreaCodeGetCountryEnumSchema,
  type FaxLineAreaCodeGetCountryEnum,
} from "../models/fax-line-area-code-get-country-enum.js";
import {
  faxLineAreaCodeGetProvinceEnumSchema,
  type FaxLineAreaCodeGetProvinceEnum,
} from "../models/fax-line-area-code-get-province-enum.js";
import {
  faxLineAreaCodeGetResponseSchema,
  type FaxLineAreaCodeGetResponse,
} from "../models/fax-line-area-code-get-response.js";
import {
  faxLineAreaCodeGetStateEnumSchema,
  type FaxLineAreaCodeGetStateEnum,
} from "../models/fax-line-area-code-get-state-enum.js";
import { faxLineCreateRequestSchema, type FaxLineCreateRequest } from "../models/fax-line-create-request.js";
import { faxLineDeleteRequestSchema, type FaxLineDeleteRequest } from "../models/fax-line-delete-request.js";
import { faxLineListResponseSchema, type FaxLineListResponse } from "../models/fax-line-list-response.js";
import {
  faxLineRemoveUserRequestSchema,
  type FaxLineRemoveUserRequest,
} from "../models/fax-line-remove-user-request.js";
import { faxLineResponseSchema, type FaxLineResponse } from "../models/fax-line-response.js";
import type { Servers } from "../servers.js";

export class FaxLine {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Fax Line User
   *
   * @remarks
   * Grants a user access to the specified Fax Line.
   *
   * @returns successful operation
   *
   * @throws {@link FaxLine.FaxLineAddUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxLineAddUser(
    request: FaxLine.FaxLineAddUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FaxLineResponse, FaxLine.FaxLineAddUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/fax_line/add_user"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: faxLineAddUserRequestSchema },
      },
      {
        success: { kind: "json", schema: faxLineResponseSchema },
        errorFactory: FaxLine.FaxLineAddUserError,
      },
      options,
    );
  }

  /**
   * Get Available Fax Line Area Codes
   *
   * @remarks
   * Returns a list of available area codes for a given state/province and city
   *
   * @returns successful operation
   *
   * @throws {@link FaxLine.FaxLineAreaCodeGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxLineAreaCodeGet(
    request: FaxLine.FaxLineAreaCodeGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FaxLineAreaCodeGetResponse, FaxLine.FaxLineAreaCodeGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fax_line/area_codes"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: faxLineAreaCodeGetCountryEnumSchema },
          {
            name: "state",
            value: request.state,
            schema: s.optional(s.lazy(() => faxLineAreaCodeGetStateEnumSchema)),
          },
          {
            name: "province",
            value: request.province,
            schema: s.optional(s.lazy(() => faxLineAreaCodeGetProvinceEnumSchema)),
          },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: faxLineAreaCodeGetResponseSchema },
        errorFactory: FaxLine.FaxLineAreaCodeGetError,
      },
      options,
    );
  }

  /**
   * Purchase Fax Line
   *
   * @remarks
   * Purchases a new Fax Line
   *
   * @returns successful operation
   *
   * @throws {@link FaxLine.FaxLineCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxLineCreate(
    request: FaxLine.FaxLineCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FaxLineResponse, FaxLine.FaxLineCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/fax_line/create"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: faxLineCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: faxLineResponseSchema },
        errorFactory: FaxLine.FaxLineCreateError,
      },
      options,
    );
  }

  /**
   * Delete Fax Line
   *
   * @remarks
   * Deletes the specified Fax Line from the subscription.
   *
   * @returns successful operation
   *
   * @throws {@link FaxLine.FaxLineDeleteError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxLineDelete(
    request: FaxLine.FaxLineDeleteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaxLine.FaxLineDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/fax_line"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: faxLineDeleteRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaxLine.FaxLineDeleteError,
      },
      options,
    );
  }

  /**
   * Get Fax Line
   *
   * @remarks
   * Returns the properties and settings of a Fax Line.
   *
   * @returns successful operation
   *
   * @throws {@link FaxLine.FaxLineGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxLineGet(
    request: FaxLine.FaxLineGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FaxLineResponse, FaxLine.FaxLineGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fax_line"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "number", value: request.number, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: faxLineResponseSchema },
        errorFactory: FaxLine.FaxLineGetError,
      },
      options,
    );
  }

  /**
   * List Fax Lines
   *
   * @remarks
   * Returns the properties and settings of multiple Fax Lines.
   *
   * @returns successful operation
   *
   * @throws {@link FaxLine.FaxLineListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxLineList(
    request: FaxLine.FaxLineListRequest,
    options?: RequestOptions,
  ): ApiPromise<FaxLineListResponse, FaxLine.FaxLineListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fax_line/list"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "account_id", value: request.accountId, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
          { name: "show_team_lines", value: request.showTeamLines, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: faxLineListResponseSchema },
        errorFactory: FaxLine.FaxLineListError,
      },
      options,
    );
  }

  /**
   * Remove Fax Line Access
   *
   * @remarks
   * Removes a user's access to the specified Fax Line
   *
   * @returns successful operation
   *
   * @throws {@link FaxLine.FaxLineRemoveUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxLineRemoveUser(
    request: FaxLine.FaxLineRemoveUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FaxLineResponse, FaxLine.FaxLineRemoveUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/fax_line/remove_user"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: faxLineRemoveUserRequestSchema },
      },
      {
        success: { kind: "json", schema: faxLineResponseSchema },
        errorFactory: FaxLine.FaxLineRemoveUserError,
      },
      options,
    );
  }
}

export namespace FaxLine {
  export type FaxLineAddUserRequestParams = {
    body: FaxLineAddUserRequest;
  };

  export class FaxLineAddUserError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxLineAddUserError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxLineAreaCodeGetRequest = {
    /** Filter area codes by country */
    country: FaxLineAreaCodeGetCountryEnum;
    /** Filter area codes by state */
    state?: FaxLineAreaCodeGetStateEnum;
    /** Filter area codes by province */
    province?: FaxLineAreaCodeGetProvinceEnum;
    /** Filter area codes by city */
    city?: string;
  };

  export class FaxLineAreaCodeGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxLineAreaCodeGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxLineCreateRequestParams = {
    body: FaxLineCreateRequest;
  };

  export class FaxLineCreateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxLineCreateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxLineDeleteRequestParams = {
    body: FaxLineDeleteRequest;
  };

  export class FaxLineDeleteError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxLineDeleteError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxLineGetRequest = {
    /** The Fax Line number */
    number: string;
  };

  export class FaxLineGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxLineGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxLineListRequest = {
    /** Account ID */
    accountId?: string;
    /** Which page number of the Fax Line List to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     *
     * @default 20
     */
    pageSize?: number;
    /** Include Fax Lines belonging to team members in the list */
    showTeamLines?: boolean;
  };

  export class FaxLineListError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxLineListError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxLineRemoveUserRequestParams = {
    body: FaxLineRemoveUserRequest;
  };

  export class FaxLineRemoveUserError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxLineRemoveUserError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
