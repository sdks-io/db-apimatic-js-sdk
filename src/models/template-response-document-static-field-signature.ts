import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of TemplateResponseDocumentStaticFieldBase, TemplateResponseDocumentStaticFieldSignature. */
export type TemplateResponseDocumentStaticFieldSignature = {
  /** A unique id for the static field. */
  apiId?: string;
  /** The name of the static field. */
  name?: string;
  /**
   * The type of this static field. See [field types](/api/reference/constants/#field-types).
   *
   * * Text Field uses `TemplateResponseDocumentStaticFieldText`
   * * Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`
   * * Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`
   * * Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`
   * * Radio Field uses `TemplateResponseDocumentStaticFieldRadio`
   * * Signature Field uses `TemplateResponseDocumentStaticFieldSignature`
   * * Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`
   * * Initials Field uses `TemplateResponseDocumentStaticFieldInitials`
   *
   * @default "signature"
   */
  type?: string;
  /** The signer of the Static Field. @default "me_now" */
  signer?: string;
  /** The horizontal offset in pixels for this static field. */
  x?: number;
  /** The vertical offset in pixels for this static field. */
  y?: number;
  /** The width in pixels of this static field. */
  width?: number;
  /** The height in pixels of this static field. */
  height?: number;
  /** Boolean showing whether or not this field is required. */
  required?: boolean;
  /**
   * The name of the group this field is in. If this field is not a group, this defaults to `null`.
   */
  group?: string | null;
};

export const templateResponseDocumentStaticFieldSignatureSchema: Schema<TemplateResponseDocumentStaticFieldSignature> =
  s.object<TemplateResponseDocumentStaticFieldSignature>({
    apiId: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.defaulted(s.string(), "signature"),
    signer: s.defaulted(s.string(), "me_now"),
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
