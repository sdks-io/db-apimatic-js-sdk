import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  templateUpdateFilesResponseTemplateSchema,
  type TemplateUpdateFilesResponseTemplate,
} from "./template-update-files-response-template.js";

export type TemplateUpdateFilesResponse = {
  /** Contains template id */
  template: TemplateUpdateFilesResponseTemplate;
};

export const templateUpdateFilesResponseSchema: Schema<TemplateUpdateFilesResponse> =
  s.object<TemplateUpdateFilesResponse>({
    template: templateUpdateFilesResponseTemplateSchema,
  });
