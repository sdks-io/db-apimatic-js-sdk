import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fontFamilySchema, type FontFamily } from "./font-family.js";
import { validationTypeSchema, type ValidationType } from "./validation-type.js";

/** All Of SubFormFieldsPerDocumentBase, SubFormFieldsPerDocumentText. */
export type SubFormFieldsPerDocumentText = {
  /**
   * Represents the integer index of the `file` or `file_url` document the field should be attached
   * to.
   */
  documentIndex: number;
  /** An identifier for the field that is unique across all documents in the request. */
  apiId: string;
  /** Size of the field in pixels. */
  height: number;
  /** Display name for the field. */
  name?: string;
  /**
   * Page in the document where the field should be placed (requires documents be PDF files).
   *
   * - When the page number parameter is supplied, the API will use the new coordinate system.
   * - Check out the differences between both [coordinate
   *   systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.
   */
  page?: number | null;
  /** Whether this field is required. */
  required: boolean;
  /**
   * Signer index identified by the offset in the signers parameter (0-based indexing), indicating
   * which signer should fill out the field.
   *
   * **NOTE:** To set the value of the field as the preparer you must set this to `me_now`
   *
   * **NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to
   * use pre-filled data.
   */
  signer: string;
  /** A text input field. Use the `SubFormFieldsPerDocumentText` class. @default "text" */
  type?: string;
  /** Size of the field in pixels. */
  width: number;
  /** Location coordinates of the field in pixels. */
  x: number;
  /** Location coordinates of the field in pixels. */
  y: number;
  /** Placeholder value for text field. */
  placeholder?: string;
  /**
   * Auto fill type for populating fields automatically. Check out the list of [auto fill
   * types](/api/reference/constants/#auto-fill-types) to learn more about the possible values.
   */
  autoFillType?: string;
  /**
   * Link two or more text fields. Enter data into one linked text field, which automatically fill
   * all other linked text fields.
   */
  linkId?: string;
  /**
   * Masks entered data. For more information see [Masking sensitive
   * information](https://faq.hellosign.com/hc/en-us/articles/360040742811-Masking-sensitive-information).
   * `true` for masking the data in a text field, otherwise `false`.
   */
  masked?: boolean;
  /**
   * Each text field may contain a `validation_type` parameter. Check out the list of [validation
   * types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible
   * values.
   *
   * **NOTE:** When using `custom_regex` you are required to pass a second parameter
   * `validation_custom_regex` and you can optionally provide `validation_custom_regex_format_label`
   * for the error message the user will see in case of an invalid value.
   */
  validationType?: ValidationType;
  validationCustomRegex?: string;
  validationCustomRegexFormatLabel?: string;
  /** Content of a `me_now` text field */
  content?: string;
  /** Font family for the field. */
  fontFamily?: FontFamily;
  /**
   * The initial px font size for the field contents. Can be any integer value between `7` and `49`.
   *
   * **NOTE:** Font size may be reduced during processing in order to fit the contents within the
   * dimensions of the field.
   *
   * @default 12
   */
  fontSize?: number;
};

export const subFormFieldsPerDocumentTextSchema: Schema<SubFormFieldsPerDocumentText> =
  s.object<SubFormFieldsPerDocumentText>({
    documentIndex: s.int(),
    apiId: s.string(),
    height: s.int(),
    name: s.optional(s.string()),
    page: s.optionalNullable(s.int()),
    required: s.boolean(),
    signer: s.string(),
    type: s.defaulted(s.string(), "text"),
    width: s.int(),
    x: s.int(),
    y: s.int(),
    placeholder: s.optional(s.string()),
    autoFillType: s.optional(s.string()),
    linkId: s.optional(s.string()),
    masked: s.optional(s.boolean()),
    validationType: s.optional(s.lazy(() => validationTypeSchema)),
    validationCustomRegex: s.optional(s.string()),
    validationCustomRegexFormatLabel: s.optional(s.string()),
    content: s.optional(s.string()),
    fontFamily: s.optional(s.lazy(() => fontFamilySchema)),
    fontSize: s.defaulted(s.int(), 12),
    _keysMap: {
      documentIndex: "document_index",
      apiId: "api_id",
      autoFillType: "auto_fill_type",
      linkId: "link_id",
      validationType: "validation_type",
      validationCustomRegex: "validation_custom_regex",
      validationCustomRegexFormatLabel: "validation_custom_regex_format_label",
      fontFamily: "font_family",
      fontSize: "font_size",
    },
  });
