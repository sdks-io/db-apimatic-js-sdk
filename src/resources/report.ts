import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { reportCreateRequestSchema, type ReportCreateRequest } from "../models/report-create-request.js";
import { reportCreateResponseSchema, type ReportCreateResponse } from "../models/report-create-response.js";
import type { Servers } from "../servers.js";

export class Report {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Report
   *
   * @remarks
   * Request the creation of one or more report(s).
   *
   * When the report(s) have been generated, you will receive an email (one per requested report
   * type) containing a link to download the report as a CSV file. The requested date range may be
   * up to 12 months in duration, and `start_date` must not be more than 10 years in the past.
   *
   * @returns successful operation
   *
   * @throws {@link Report.ReportCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reportCreate(
    request: Report.ReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReportCreateResponse, Report.ReportCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/report/create"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: reportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: reportCreateResponseSchema },
        errorFactory: Report.ReportCreateError,
      },
      options,
    );
  }
}

export namespace Report {
  export type ReportCreateRequestParams = {
    body: ReportCreateRequest;
  };

  export class ReportCreateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ReportCreateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
