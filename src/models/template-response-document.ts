import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  templateResponseDocumentFieldGroupSchema,
  type TemplateResponseDocumentFieldGroup,
} from "./template-response-document-field-group.js";
import {
  templateResponseDocumentCustomFieldBaseSchema,
  type TemplateResponseDocumentCustomFieldBase,
} from "./unions/template-response-document-custom-field-base.js";
import {
  templateResponseDocumentFormFieldBaseSchema,
  type TemplateResponseDocumentFormFieldBase,
} from "./unions/template-response-document-form-field-base.js";
import {
  templateResponseDocumentStaticFieldBaseSchema,
  type TemplateResponseDocumentStaticFieldBase,
} from "./unions/template-response-document-static-field-base.js";

export type TemplateResponseDocument = {
  /** Name of the associated file. */
  name?: string;
  /**
   * Document ordering, the lowest index is displayed first and the highest last (0-based indexing).
   */
  index?: number;
  /** An array of Form Field Group objects. */
  fieldGroups?: TemplateResponseDocumentFieldGroup[];
  /** An array of Form Field objects containing the name and type of each named field. */
  formFields?: TemplateResponseDocumentFormFieldBase[];
  /** An array of Form Field objects containing the name and type of each named field. */
  customFields?: TemplateResponseDocumentCustomFieldBase[];
  /**
   * An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.
   */
  staticFields?: TemplateResponseDocumentStaticFieldBase[];
};

export const templateResponseDocumentSchema: Schema<TemplateResponseDocument> =
  s.object<TemplateResponseDocument>({
    name: s.optional(s.string()),
    index: s.optional(s.int()),
    fieldGroups: s.optional(s.array(s.lazy(() => templateResponseDocumentFieldGroupSchema))),
    formFields: s.optional(s.array(s.lazy(() => templateResponseDocumentFormFieldBaseSchema))),
    customFields: s.optional(s.array(s.lazy(() => templateResponseDocumentCustomFieldBaseSchema))),
    staticFields: s.optional(s.array(s.lazy(() => templateResponseDocumentStaticFieldBaseSchema))),
    _keysMap: {
      fieldGroups: "field_groups",
      formFields: "form_fields",
      customFields: "custom_fields",
      staticFields: "static_fields",
    },
  });
