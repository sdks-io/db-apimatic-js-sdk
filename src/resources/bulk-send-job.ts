import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  bulkSendJobGetResponseSchema,
  type BulkSendJobGetResponse,
} from "../models/bulk-send-job-get-response.js";
import {
  bulkSendJobListResponseSchema,
  type BulkSendJobListResponse,
} from "../models/bulk-send-job-list-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class BulkSendJob {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Bulk Send Job
   *
   * @remarks
   * Returns the status of the BulkSendJob and its SignatureRequests specified by the
   * `bulk_send_job_id` parameter.
   *
   * @returns successful operation
   *
   * @throws {@link BulkSendJob.BulkSendJobGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkSendJobGet(
    request: BulkSendJob.BulkSendJobGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkSendJobGetResponse, BulkSendJob.BulkSendJobGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bulk_send_job/{bulk_send_job_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "bulk_send_job_id", value: request.bulkSendJobId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkSendJobGetResponseSchema },
        errorFactory: BulkSendJob.BulkSendJobGetError,
      },
      options,
    );
  }

  /**
   * List Bulk Send Jobs
   *
   * @remarks
   * Returns a list of BulkSendJob that you can access.
   *
   * @returns successful operation
   *
   * @throws {@link BulkSendJob.BulkSendJobListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkSendJobList(
    request: BulkSendJob.BulkSendJobListRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkSendJobListResponse, BulkSendJob.BulkSendJobListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bulk_send_job/list"),
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
        success: { kind: "json", schema: bulkSendJobListResponseSchema },
        errorFactory: BulkSendJob.BulkSendJobListError,
      },
      options,
    );
  }
}

export namespace BulkSendJob {
  export type BulkSendJobGetRequest = {
    /** The id of the BulkSendJob to retrieve. */
    bulkSendJobId: string;
    /** Which page number of the BulkSendJob list to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export class BulkSendJobGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<BulkSendJobGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type BulkSendJobListRequest = {
    /** Which page number of the BulkSendJob List to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export class BulkSendJobListError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<BulkSendJobListError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
