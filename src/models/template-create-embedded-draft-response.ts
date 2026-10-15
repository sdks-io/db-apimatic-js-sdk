import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  templateCreateEmbeddedDraftResponseTemplateSchema,
  type TemplateCreateEmbeddedDraftResponseTemplate,
} from "./template-create-embedded-draft-response-template.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TemplateCreateEmbeddedDraftResponse = {
  /** Template object with parameters: `template_id`, `edit_url`, `expires_at`. */
  template: TemplateCreateEmbeddedDraftResponseTemplate;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const templateCreateEmbeddedDraftResponseSchema: Schema<TemplateCreateEmbeddedDraftResponse> =
  s.object<TemplateCreateEmbeddedDraftResponse>({
    template: templateCreateEmbeddedDraftResponseTemplateSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  });
