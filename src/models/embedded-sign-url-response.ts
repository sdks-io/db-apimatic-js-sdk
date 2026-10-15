import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  embeddedSignUrlResponseEmbeddedSchema,
  type EmbeddedSignUrlResponseEmbedded,
} from "./embedded-sign-url-response-embedded.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type EmbeddedSignUrlResponse = {
  /** An object that contains necessary information to set up embedded signing. */
  embedded: EmbeddedSignUrlResponseEmbedded;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const embeddedSignUrlResponseSchema: Schema<EmbeddedSignUrlResponse> =
  s.object<EmbeddedSignUrlResponse>({
    embedded: embeddedSignUrlResponseEmbeddedSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  });
