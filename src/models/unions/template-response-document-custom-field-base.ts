import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  templateResponseDocumentCustomFieldCheckboxSchema,
  type TemplateResponseDocumentCustomFieldCheckbox,
} from "../template-response-document-custom-field-checkbox.js";
import {
  templateResponseDocumentCustomFieldTextSchema,
  type TemplateResponseDocumentCustomFieldText,
} from "../template-response-document-custom-field-text.js";

/** An array of Form Field objects containing the name and type of each named field. */
export type TemplateResponseDocumentCustomFieldBase =
  | (TemplateResponseDocumentCustomFieldCheckbox & { type: "checkbox" })
  | (TemplateResponseDocumentCustomFieldText & { type: "text" });

export const templateResponseDocumentCustomFieldBaseSchema: Schema<TemplateResponseDocumentCustomFieldBase> =
  s.discriminatedUnion<TemplateResponseDocumentCustomFieldBase>("type", {
    checkbox: templateResponseDocumentCustomFieldCheckboxSchema,
    text: templateResponseDocumentCustomFieldTextSchema,
  });
