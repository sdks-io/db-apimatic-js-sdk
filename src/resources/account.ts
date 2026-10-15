import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { accountCreateRequestSchema, type AccountCreateRequest } from "../models/account-create-request.js";
import {
  accountCreateResponseSchema,
  type AccountCreateResponse,
} from "../models/account-create-response.js";
import { accountGetResponseSchema, type AccountGetResponse } from "../models/account-get-response.js";
import { accountUpdateRequestSchema, type AccountUpdateRequest } from "../models/account-update-request.js";
import { accountVerifyRequestSchema, type AccountVerifyRequest } from "../models/account-verify-request.js";
import {
  accountVerifyResponseSchema,
  type AccountVerifyResponse,
} from "../models/account-verify-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Account
   *
   * @remarks
   * Creates a new Dropbox Sign Account that is associated with the specified `email_address`.
   *
   * @returns successful operation
   *
   * @throws {@link Account.AccountCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountCreate(
    request: Account.AccountCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccountCreateResponse, Account.AccountCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/account/create"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: accountCreateResponseSchema },
        errorFactory: Account.AccountCreateError,
      },
      options,
    );
  }

  /**
   * Get Account
   *
   * @remarks
   * Returns the properties and settings of your Account.
   *
   * @returns successful operation
   *
   * @throws {@link Account.AccountGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountGet(
    request: Account.AccountGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountGetResponse, Account.AccountGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/account"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "account_id", value: request.accountId, schema: s.optional(s.string()) },
          { name: "email_address", value: request.emailAddress, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountGetResponseSchema },
        errorFactory: Account.AccountGetError,
      },
      options,
    );
  }

  /**
   * Update Account
   *
   * @remarks
   * Updates the properties and settings of your Account. Currently only allows for updates to the
   * [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.
   *
   * @returns successful operation
   *
   * @throws {@link Account.AccountUpdateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountUpdate(
    request: Account.AccountUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccountGetResponse, Account.AccountUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/account"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: accountGetResponseSchema },
        errorFactory: Account.AccountUpdateError,
      },
      options,
    );
  }

  /**
   * Verify Account
   *
   * @remarks
   * Verifies whether an Dropbox Sign Account exists for the given email address.
   *
   * @returns successful operation
   *
   * @throws {@link Account.AccountVerifyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountVerify(
    request: Account.AccountVerifyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccountVerifyResponse, Account.AccountVerifyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/account/verify"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountVerifyRequestSchema },
      },
      {
        success: { kind: "json", schema: accountVerifyResponseSchema },
        errorFactory: Account.AccountVerifyError,
      },
      options,
    );
  }
}

export namespace Account {
  export type AccountCreateRequestParams = {
    body: AccountCreateRequest;
  };

  export class AccountCreateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AccountCreateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AccountGetRequest = {
    /**
     * `account_id` or `email_address` is required. If both are provided, the account id prevails.
     *
     * The ID of the Account.
     */
    accountId?: string;
    /**
     * `account_id` or `email_address` is required, If both are provided, the account id prevails.
     *
     * The email address of the Account.
     */
    emailAddress?: string;
  };

  export class AccountGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AccountGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AccountUpdateRequestParams = {
    body: AccountUpdateRequest;
  };

  export class AccountUpdateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AccountUpdateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AccountVerifyRequestParams = {
    body: AccountVerifyRequest;
  };

  export class AccountVerifyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AccountVerifyError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
