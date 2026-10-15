import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of SubFormFieldsPerDocumentBase, SubFormFieldsPerDocumentRadio. */
export type SubFormFieldsPerDocumentRadio = {
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
  /** An input field for radios. Use the `SubFormFieldsPerDocumentRadio` class. @default "radio" */
  type?: string;
  /** Size of the field in pixels. */
  width: number;
  /** Location coordinates of the field in pixels. */
  x: number;
  /** Location coordinates of the field in pixels. */
  y: number;
  /** String referencing group defined in `form_field_groups` parameter. */
  group: string;
  /**
   * `true` for checking the radio field by default, otherwise `false`. Only one radio field per
   * group can be `true`.
   */
  isChecked: boolean;
};

export const subFormFieldsPerDocumentRadioSchema: Schema<SubFormFieldsPerDocumentRadio> =
  s.object<SubFormFieldsPerDocumentRadio>({
    documentIndex: s.int(),
    apiId: s.string(),
    height: s.int(),
    name: s.optional(s.string()),
    page: s.optionalNullable(s.int()),
    required: s.boolean(),
    signer: s.string(),
    type: s.defaulted(s.string(), "radio"),
    width: s.int(),
    x: s.int(),
    y: s.int(),
    group: s.string(),
    isChecked: s.boolean(),
    _keysMap: {
      documentIndex: "document_index",
      apiId: "api_id",
      isChecked: "is_checked",
    },
  });
