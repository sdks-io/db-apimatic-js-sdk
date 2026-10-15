import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  signatureRequestResponseDataValueCheckboxMergeSchema,
  type SignatureRequestResponseDataValueCheckboxMerge,
} from "../signature-request-response-data-value-checkbox-merge.js";
import {
  signatureRequestResponseDataValueCheckboxSchema,
  type SignatureRequestResponseDataValueCheckbox,
} from "../signature-request-response-data-value-checkbox.js";
import {
  signatureRequestResponseDataValueDateSignedSchema,
  type SignatureRequestResponseDataValueDateSigned,
} from "../signature-request-response-data-value-date-signed.js";
import {
  signatureRequestResponseDataValueDropdownSchema,
  type SignatureRequestResponseDataValueDropdown,
} from "../signature-request-response-data-value-dropdown.js";
import {
  signatureRequestResponseDataValueInitialsSchema,
  type SignatureRequestResponseDataValueInitials,
} from "../signature-request-response-data-value-initials.js";
import {
  signatureRequestResponseDataValueRadioSchema,
  type SignatureRequestResponseDataValueRadio,
} from "../signature-request-response-data-value-radio.js";
import {
  signatureRequestResponseDataValueSignatureSchema,
  type SignatureRequestResponseDataValueSignature,
} from "../signature-request-response-data-value-signature.js";
import {
  signatureRequestResponseDataValueTextMergeSchema,
  type SignatureRequestResponseDataValueTextMerge,
} from "../signature-request-response-data-value-text-merge.js";
import {
  signatureRequestResponseDataValueTextSchema,
  type SignatureRequestResponseDataValueText,
} from "../signature-request-response-data-value-text.js";

/**
 * An array of form field objects containing the name, value, and type of each textbox or checkmark
 * field filled in by the signers.
 */
export type SignatureRequestResponseDataBase =
  | (SignatureRequestResponseDataValueCheckbox & { type: "checkbox" })
  | (SignatureRequestResponseDataValueCheckboxMerge & { type: "checkbox-merge" })
  | (SignatureRequestResponseDataValueDateSigned & { type: "date_signed" })
  | (SignatureRequestResponseDataValueDropdown & { type: "dropdown" })
  | (SignatureRequestResponseDataValueInitials & { type: "initials" })
  | (SignatureRequestResponseDataValueRadio & { type: "radio" })
  | (SignatureRequestResponseDataValueSignature & { type: "signature" })
  | (SignatureRequestResponseDataValueText & { type: "text" })
  | (SignatureRequestResponseDataValueTextMerge & { type: "text-merge" });

export const signatureRequestResponseDataBaseSchema: Schema<SignatureRequestResponseDataBase> =
  s.discriminatedUnion<SignatureRequestResponseDataBase>("type", {
    checkbox: signatureRequestResponseDataValueCheckboxSchema,
    "checkbox-merge": signatureRequestResponseDataValueCheckboxMergeSchema,
    date_signed: signatureRequestResponseDataValueDateSignedSchema,
    dropdown: signatureRequestResponseDataValueDropdownSchema,
    initials: signatureRequestResponseDataValueInitialsSchema,
    radio: signatureRequestResponseDataValueRadioSchema,
    signature: signatureRequestResponseDataValueSignatureSchema,
    text: signatureRequestResponseDataValueTextSchema,
    "text-merge": signatureRequestResponseDataValueTextMergeSchema,
  });
