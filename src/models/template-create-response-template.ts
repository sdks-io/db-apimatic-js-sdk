import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Template object with parameters: `template_id`. */
export type TemplateCreateResponseTemplate = {
  /** The id of the Template. */
  templateId?: string;
};

export const templateCreateResponseTemplateSchema: Schema<TemplateCreateResponseTemplate> =
  s.object<TemplateCreateResponseTemplate>({
    templateId: s.optional(s.string()),
    _keysMap: {
      templateId: "template_id",
    },
  });
