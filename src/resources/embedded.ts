import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  embeddedEditUrlRequestSchema,
  type EmbeddedEditUrlRequest,
} from "../models/embedded-edit-url-request.js";
import {
  embeddedEditUrlResponseSchema,
  type EmbeddedEditUrlResponse,
} from "../models/embedded-edit-url-response.js";
import {
  embeddedSignUrlResponseSchema,
  type EmbeddedSignUrlResponse,
} from "../models/embedded-sign-url-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class Embedded {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Embedded Template Edit URL
   *
   * @remarks
   * Retrieves an embedded object containing a template url that can be opened in an iFrame. Note
   * that only templates created via the embedded template process are available to be edited with
   * this endpoint.
   *
   * @returns successful operation
   *
   * @throws {@link Embedded.EmbeddedEditUrlError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  embeddedEditUrl(
    request: Embedded.EmbeddedEditUrlRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EmbeddedEditUrlResponse, Embedded.EmbeddedEditUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/embedded/edit_url/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: embeddedEditUrlRequestSchema },
      },
      {
        success: { kind: "json", schema: embeddedEditUrlResponseSchema },
        errorFactory: Embedded.EmbeddedEditUrlError,
      },
      options,
    );
  }

  /**
   * Get Embedded Sign URL
   *
   * @remarks
   * Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note
   * that templates created via the embedded template process will only be accessible through the
   * API.
   *
   * @returns successful operation
   *
   * @throws {@link Embedded.EmbeddedSignUrlError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  embeddedSignUrl(
    request: Embedded.EmbeddedSignUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<EmbeddedSignUrlResponse, Embedded.EmbeddedSignUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/embedded/sign_url/{signature_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_id", value: request.signatureId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: embeddedSignUrlResponseSchema },
        errorFactory: Embedded.EmbeddedSignUrlError,
      },
      options,
    );
  }
}

export namespace Embedded {
  export type EmbeddedEditUrlRequestParams = {
    /** The id of the template to edit. */
    templateId: string;
    body: EmbeddedEditUrlRequest;
  };

  export class EmbeddedEditUrlError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<EmbeddedEditUrlError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type EmbeddedSignUrlRequest = {
    /** The id of the signature to get a signature url for. */
    signatureId: string;
  };

  export class EmbeddedSignUrlError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<EmbeddedSignUrlError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
