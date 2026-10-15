import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseErrorSchema, type ErrorResponseError } from "./error-response-error.js";

export type ErrorResponseError1 = {
  /** Contains information about an error that occurred. */
  error: ErrorResponseError;
};

export const errorResponseError1Schema: Schema<ErrorResponseError1> = s.object<ErrorResponseError1>({
  error: errorResponseErrorSchema,
});
