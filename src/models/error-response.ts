import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseErrorSchema, type ErrorResponseError } from "./error-response-error.js";

export type ErrorResponse = {
  /** Contains information about an error that occurred. */
  error: ErrorResponseError;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  error: errorResponseErrorSchema,
});
