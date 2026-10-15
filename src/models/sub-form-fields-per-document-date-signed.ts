import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fontFamilySchema, type FontFamily } from "./font-family.js";

/** All Of SubFormFieldsPerDocumentBase, SubFormFieldsPerDocumentDateSigned. */
export type SubFormFieldsPerDocumentDateSigned = {
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
  /** A date. Use the `SubFormFieldsPerDocumentDateSigned` class. @default "date_signed" */
  type?: string;
  /** Size of the field in pixels. */
  width: number;
  /** Location coordinates of the field in pixels. */
  x: number;
  /** Location coordinates of the field in pixels. */
  y: number;
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

export const subFormFieldsPerDocumentDateSignedSchema: Schema<SubFormFieldsPerDocumentDateSigned> =
  s.object<SubFormFieldsPerDocumentDateSigned>({
    documentIndex: s.int(),
    apiId: s.string(),
    height: s.int(),
    name: s.optional(s.string()),
    page: s.optionalNullable(s.int()),
    required: s.boolean(),
    signer: s.string(),
    type: s.defaulted(s.string(), "date_signed"),
    width: s.int(),
    x: s.int(),
    y: s.int(),
    fontFamily: s.optional(s.lazy(() => fontFamilySchema)),
    fontSize: s.defaulted(s.int(), 12),
    _keysMap: {
      documentIndex: "document_index",
      apiId: "api_id",
      fontFamily: "font_family",
      fontSize: "font_size",
    },
  });
