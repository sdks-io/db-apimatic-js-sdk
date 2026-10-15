import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of TemplateResponseDocumentCustomFieldBase, TemplateResponseDocumentCustomFieldCheckbox. */
export type TemplateResponseDocumentCustomFieldCheckbox = {
  /** The unique ID for this field. */
  apiId?: string;
  /** The name of the Custom Field. */
  name?: string;
  /**
   * The type of this Custom Field. Only `text` and `checkbox` are currently supported.
   *
   * * Text uses `TemplateResponseDocumentCustomFieldText`
   * * Checkbox uses `TemplateResponseDocumentCustomFieldCheckbox`
   *
   * @default "checkbox"
   */
  type?: string;
  /**
   * The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).
   */
  signer?: string | null;
  /** The horizontal offset in pixels for this form field. */
  x?: number;
  /** The vertical offset in pixels for this form field. */
  y?: number;
  /** The width in pixels of this form field. */
  width?: number;
  /** The height in pixels of this form field. */
  height?: number;
  /** Boolean showing whether or not this field is required. */
  required?: boolean;
  /**
   * The name of the group this field is in. If this field is not a group, this defaults to `null`.
   */
  group?: string | null;
};

export const templateResponseDocumentCustomFieldCheckboxSchema: Schema<TemplateResponseDocumentCustomFieldCheckbox> =
  s.object<TemplateResponseDocumentCustomFieldCheckbox>({
    apiId: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.defaulted(s.string(), "checkbox"),
    signer: s.optionalNullable(s.string()),
    x: s.optional(s.int()),
    y: s.optional(s.int()),
    width: s.optional(s.int()),
    height: s.optional(s.int()),
    required: s.optional(s.boolean()),
    group: s.optionalNullable(s.string()),
    _keysMap: {
      apiId: "api_id",
    },
  });
