import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subFormFieldsPerDocumentCheckboxMergeSchema,
  type SubFormFieldsPerDocumentCheckboxMerge,
} from "../sub-form-fields-per-document-checkbox-merge.js";
import {
  subFormFieldsPerDocumentCheckboxSchema,
  type SubFormFieldsPerDocumentCheckbox,
} from "../sub-form-fields-per-document-checkbox.js";
import {
  subFormFieldsPerDocumentDateSignedSchema,
  type SubFormFieldsPerDocumentDateSigned,
} from "../sub-form-fields-per-document-date-signed.js";
import {
  subFormFieldsPerDocumentDropdownSchema,
  type SubFormFieldsPerDocumentDropdown,
} from "../sub-form-fields-per-document-dropdown.js";
import {
  subFormFieldsPerDocumentHyperlinkSchema,
  type SubFormFieldsPerDocumentHyperlink,
} from "../sub-form-fields-per-document-hyperlink.js";
import {
  subFormFieldsPerDocumentInitialsSchema,
  type SubFormFieldsPerDocumentInitials,
} from "../sub-form-fields-per-document-initials.js";
import {
  subFormFieldsPerDocumentRadioSchema,
  type SubFormFieldsPerDocumentRadio,
} from "../sub-form-fields-per-document-radio.js";
import {
  subFormFieldsPerDocumentSignatureSchema,
  type SubFormFieldsPerDocumentSignature,
} from "../sub-form-fields-per-document-signature.js";
import {
  subFormFieldsPerDocumentTextMergeSchema,
  type SubFormFieldsPerDocumentTextMerge,
} from "../sub-form-fields-per-document-text-merge.js";
import {
  subFormFieldsPerDocumentTextSchema,
  type SubFormFieldsPerDocumentText,
} from "../sub-form-fields-per-document-text.js";

/**
 * The fields that should appear on the document, expressed as an array of objects. (For more
 * details you can read about it here: [Using Form Fields per
 * Document](/docs/openapi/form-fields-per-document).)
 *
 * **NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have
 * additional required and optional parameters. Check out the list of [additional
 * parameters](/api/reference/constants/#form-fields-per-document) for these field types.
 *
 * * Text Field use `SubFormFieldsPerDocumentText`
 * * Dropdown Field use `SubFormFieldsPerDocumentDropdown`
 * * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
 * * Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
 * * Radio Field use `SubFormFieldsPerDocumentRadio`
 * * Signature Field use `SubFormFieldsPerDocumentSignature`
 * * Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
 * * Initials Field use `SubFormFieldsPerDocumentInitials`
 * * Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
 * * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
 */
export type SubFormFieldsPerDocumentBase =
  | (SubFormFieldsPerDocumentCheckbox & { type: "checkbox" })
  | (SubFormFieldsPerDocumentCheckboxMerge & { type: "checkbox-merge" })
  | (SubFormFieldsPerDocumentDateSigned & { type: "date_signed" })
  | (SubFormFieldsPerDocumentDropdown & { type: "dropdown" })
  | (SubFormFieldsPerDocumentHyperlink & { type: "hyperlink" })
  | (SubFormFieldsPerDocumentInitials & { type: "initials" })
  | (SubFormFieldsPerDocumentRadio & { type: "radio" })
  | (SubFormFieldsPerDocumentSignature & { type: "signature" })
  | (SubFormFieldsPerDocumentText & { type: "text" })
  | (SubFormFieldsPerDocumentTextMerge & { type: "text-merge" });

export const subFormFieldsPerDocumentBaseSchema: Schema<SubFormFieldsPerDocumentBase> =
  s.discriminatedUnion<SubFormFieldsPerDocumentBase>("type", {
    checkbox: subFormFieldsPerDocumentCheckboxSchema,
    "checkbox-merge": subFormFieldsPerDocumentCheckboxMergeSchema,
    date_signed: subFormFieldsPerDocumentDateSignedSchema,
    dropdown: subFormFieldsPerDocumentDropdownSchema,
    hyperlink: subFormFieldsPerDocumentHyperlinkSchema,
    initials: subFormFieldsPerDocumentInitialsSchema,
    radio: subFormFieldsPerDocumentRadioSchema,
    signature: subFormFieldsPerDocumentSignatureSchema,
    text: subFormFieldsPerDocumentTextSchema,
    "text-merge": subFormFieldsPerDocumentTextMergeSchema,
  });
