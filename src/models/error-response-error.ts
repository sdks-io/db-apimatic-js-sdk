import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about an error that occurred. */
export type ErrorResponseError = {
  /** Message describing an error. */
  errorMsg: string;
  /** Path at which an error occurred. */
  errorPath?: string;
  /**
   * Name of the error. See the `x-error-codes` catalog in openapi file for a complete list of
   * possible error codes with detailed information including HTTP status codes, causes, remediation
   * steps, and retry guidance.
   */
  errorName: string;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>({
  errorMsg: s.string(),
  errorPath: s.optional(s.string()),
  errorName: s.string(),
  _keysMap: {
    errorMsg: "error_msg",
    errorPath: "error_path",
    errorName: "error_name",
  },
});
