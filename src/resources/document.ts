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
import {
  documentFieldDetectionResponseSchema,
  type DocumentFieldDetectionResponse,
} from "../models/document-field-detection-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { detectionModeSchema, type DetectionMode } from "../models/unions/detection-mode.js";
import type { Servers } from "../servers.js";

export class Document {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detect Document Fields
   *
   * @remarks
   * Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text
   * tags.
   *
   * @returns successful operation
   *
   * @throws {@link Document.DocumentDetectFieldsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentDetectFields(
    request: Document.DocumentDetectFieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentFieldDetectionResponse, Document.DocumentDetectFieldsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/document/detect_fields"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "detection_mode",
              value: request.detectionMode,
              schema: detectionModeSchema,
            },
            { kind: "file", name: "file", value: request.file },
            { kind: "text", name: "file_url", value: request.fileUrl, schema: s.optional(s.string()) },
            { kind: "text", name: "page_range", value: request.pageRange, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: documentFieldDetectionResponseSchema },
        errorFactory: Document.DocumentDetectFieldsError,
      },
      options,
    );
  }
}

export namespace Document {
  export type DocumentDetectFieldsRequest = {
    /**
     * The field detection method to use. Set to `annotations` to detect PDF form annotations or
     * `text_tags` to detect Dropbox Sign text tags.
     */
    detectionMode: DetectionMode;
    /**
     * The PDF file to analyze.
     *
     * This endpoint requires either `file` or `file_url`, but not both.
     */
    file?: FileInput;
    /**
     * The URL of the PDF file to analyze.
     *
     * This endpoint requires either `file` or `file_url`, but not both.
     */
    fileUrl?: string;
    /**
     * The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or
     * comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.
     */
    pageRange?: string;
  };

  export class DocumentDetectFieldsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DocumentDetectFieldsError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
