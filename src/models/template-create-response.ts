import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  templateCreateResponseTemplateSchema,
  type TemplateCreateResponseTemplate,
} from "./template-create-response-template.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TemplateCreateResponse = {
  /** Template object with parameters: `template_id`. */
  template: TemplateCreateResponseTemplate;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const templateCreateResponseSchema: Schema<TemplateCreateResponse> = s.object<TemplateCreateResponse>({
  template: templateCreateResponseTemplateSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
