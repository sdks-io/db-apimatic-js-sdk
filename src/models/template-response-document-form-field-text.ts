import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  templateResponseFieldAvgTextLengthSchema,
  type TemplateResponseFieldAvgTextLength,
} from "./template-response-field-avg-text-length.js";
import { validationType1Schema, type ValidationType1 } from "./validation-type1.js";

/** All Of TemplateResponseDocumentFormFieldBase, TemplateResponseDocumentFormFieldText. */
export type TemplateResponseDocumentFormFieldText = {
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
   * @default "text"
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
  /** Average text length in this field. */
  avgTextLength?: TemplateResponseFieldAvgTextLength;
  /** Whether this form field is multiline text. */
  isMultiline?: boolean;
  /** Original font size used in this form field's text. */
  originalFontSize?: number;
  /** Font family used in this form field's text. */
  fontFamily?: string;
  /**
   * Each text field may contain a `validation_type` parameter. Check out the list of [validation
   * types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible
   * values.
   */
  validationType?: ValidationType1 | null;
  /**
   * When `validation_type` is set to `custom_regex`, this specifies the custom regular expression
   * pattern that will be used to validate the text field.
   */
  validationCustomRegex?: string | null;
  /**
   * When `validation_type` is set to `custom_regex`, this specifies the error message displayed to
   * the signer when the text does not match the provided regex pattern.
   */
  validationCustomRegexFormatLabel?: string | null;
  /**
   * The name of the group this field is in. If this field is not a group, this defaults to `null`
   * except for Radio fields.
   */
  group?: string | null;
};

export const templateResponseDocumentFormFieldTextSchema: Schema<TemplateResponseDocumentFormFieldText> =
  s.object<TemplateResponseDocumentFormFieldText>({
    apiId: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.defaulted(s.string(), "text"),
    signer: s.optional(s.string()),
    x: s.optional(s.int()),
    y: s.optional(s.int()),
    width: s.optional(s.int()),
    height: s.optional(s.int()),
    required: s.optional(s.boolean()),
    avgTextLength: s.optional(s.lazy(() => templateResponseFieldAvgTextLengthSchema)),
    isMultiline: s.optional(s.boolean()),
    originalFontSize: s.optional(s.int()),
    fontFamily: s.optional(s.string()),
    validationType: s.optionalNullable(s.lazy(() => validationType1Schema)),
    validationCustomRegex: s.optionalNullable(s.string()),
    validationCustomRegexFormatLabel: s.optionalNullable(s.string()),
    group: s.optionalNullable(s.string()),
    _keysMap: {
      apiId: "api_id",
      avgTextLength: "avg_text_length",
      validationType: "validation_type",
      validationCustomRegex: "validation_custom_regex",
      validationCustomRegexFormatLabel: "validation_custom_regex_format_label",
    },
  });
