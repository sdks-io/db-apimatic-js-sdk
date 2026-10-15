import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of TemplateResponseDocumentFormFieldBase, TemplateResponseDocumentFormFieldRadio. */
export type TemplateResponseDocumentFormFieldRadio = {
  /** A unique id for the form field. */
  apiId?: string;
  /** The name of the form field. */
  name?: string;
  /**
   * The type of this form field. See [field types](/api/reference/constants/#field-types).
   *
   * * Text Field uses `TemplateResponseDocumentFormFieldText`
   * * Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`
   * * Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`
   * * Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`
   * * Radio Field uses `TemplateResponseDocumentFormFieldRadio`
   * * Signature Field uses `TemplateResponseDocumentFormFieldSignature`
   * * Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`
   * * Initials Field uses `TemplateResponseDocumentFormFieldInitials`
   *
   * @default "radio"
   */
  type?: string;
  /** The signer of the Form Field. */
  signer?: string;
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
   * The name of the group this field is in. If this field is not a group, this defaults to `null`
   * except for Radio fields.
   */
  group: string;
};

export const templateResponseDocumentFormFieldRadioSchema: Schema<TemplateResponseDocumentFormFieldRadio> =
  s.object<TemplateResponseDocumentFormFieldRadio>({
    apiId: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.defaulted(s.string(), "radio"),
    signer: s.optional(s.string()),
    x: s.optional(s.int()),
    y: s.optional(s.int()),
    width: s.optional(s.int()),
    height: s.optional(s.int()),
    required: s.optional(s.boolean()),
    group: s.string(),
    _keysMap: {
      apiId: "api_id",
    },
  });
