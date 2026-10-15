import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { faxGetResponseSchema, type FaxGetResponse } from "../models/fax-get-response.js";
import { faxListResponseSchema, type FaxListResponse } from "../models/fax-list-response.js";
import type { Servers } from "../servers.js";

export class Fax {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Fax
   *
   * @remarks
   * Deletes the specified Fax from the system
   *
   * @returns successful operation
   *
   * @throws {@link Fax.FaxDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxDelete(
    request: Fax.FaxDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Fax.FaxDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/fax/{fax_id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "fax_id", value: request.faxId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Fax.FaxDeleteError,
      },
      options,
    );
  }

  /**
   * Download Fax Files
   *
   * @remarks
   * Downloads files associated with a Fax
   *
   * @returns successful operation
   *
   * @throws {@link Fax.FaxFilesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxFiles(request: Fax.FaxFilesRequest, options?: RequestOptions): ApiPromise<undefined, Fax.FaxFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fax/files/{fax_id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "fax_id", value: request.faxId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Fax.FaxFilesError,
      },
      options,
    );
  }

  /**
   * Get Fax
   *
   * @remarks
   * Returns information about a Fax
   *
   * @returns successful operation
   *
   * @throws {@link Fax.FaxGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxGet(request: Fax.FaxGetRequest, options?: RequestOptions): ApiPromise<FaxGetResponse, Fax.FaxGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fax/{fax_id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "fax_id", value: request.faxId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: faxGetResponseSchema },
        errorFactory: Fax.FaxGetError,
      },
      options,
    );
  }

  /**
   * Lists Faxes
   *
   * @remarks
   * Returns properties of multiple Faxes
   *
   * @returns successful operation
   *
   * @throws {@link Fax.FaxListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxList(
    request: Fax.FaxListRequest,
    options?: RequestOptions,
  ): ApiPromise<FaxListResponse, Fax.FaxListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fax/list"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: faxListResponseSchema },
        errorFactory: Fax.FaxListError,
      },
      options,
    );
  }

  /**
   * Send Fax
   *
   * @remarks
   * Creates and sends a new Fax with the submitted file(s)
   *
   * @returns successful operation
   *
   * @throws {@link Fax.FaxSendError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  faxSend(
    request: Fax.FaxSendRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FaxGetResponse, Fax.FaxSendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/fax/send"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "recipient", value: request.recipient, schema: s.string() },
            { kind: "text", name: "sender", value: request.sender, schema: s.optional(s.string()) },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "test_mode",
              value: request.testMode,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "cover_page_to",
              value: request.coverPageTo,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "cover_page_from",
              value: request.coverPageFrom,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "cover_page_message",
              value: request.coverPageMessage,
              schema: s.optional(s.string()),
            },
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: faxGetResponseSchema },
        errorFactory: Fax.FaxSendError,
      },
      options,
    );
  }
}

export namespace Fax {
  export type FaxDeleteRequest = {
    /** Fax ID */
    faxId: string;
  };

  export class FaxDeleteError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxDeleteError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxFilesRequest = {
    /** Fax ID */
    faxId: string;
  };

  export class FaxFilesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxFilesError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxGetRequest = {
    /** Fax ID */
    faxId: string;
  };

  export class FaxGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxListRequest = {
    /** Which page number of the Fax List to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export class FaxListError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxListError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FaxSendRequestParams = {
    /** Recipient of the fax Can be a phone number in E.164 format or email address */
    recipient: string;
    /** Fax Send From Sender (used only with fax number) */
    sender?: string;
    /**
     * Use `files[]` to indicate the uploaded file(s) to fax
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    files?: FileInput;
    /**
     * Use `file_urls[]` to have Dropbox Fax download the file(s) to fax
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    fileUrls?: string[];
    /** API Test Mode Setting @default false */
    testMode?: boolean;
    /** Fax cover page recipient information */
    coverPageTo?: string;
    /** Fax cover page sender information */
    coverPageFrom?: string;
    /** Fax Cover Page Message */
    coverPageMessage?: string;
    /** Fax Title */
    title?: string;
  };

  export class FaxSendError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<FaxSendError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
