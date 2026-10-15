import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  embeddedEditUrlResponseEmbeddedSchema,
  type EmbeddedEditUrlResponseEmbedded,
} from "./embedded-edit-url-response-embedded.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type EmbeddedEditUrlResponse = {
  /** An embedded template object. */
  embedded: EmbeddedEditUrlResponseEmbedded;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const embeddedEditUrlResponseSchema: Schema<EmbeddedEditUrlResponse> =
  s.object<EmbeddedEditUrlResponse>({
    embedded: embeddedEditUrlResponseEmbeddedSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  });
