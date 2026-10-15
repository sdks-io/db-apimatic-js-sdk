import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  signatureRequestResponseCustomFieldCheckboxSchema,
  type SignatureRequestResponseCustomFieldCheckbox,
} from "../signature-request-response-custom-field-checkbox.js";
import {
  signatureRequestResponseCustomFieldTextSchema,
  type SignatureRequestResponseCustomFieldText,
} from "../signature-request-response-custom-field-text.js";

/**
 * An array of Custom Field objects containing the name and type of each custom field.
 *
 * * Text Field uses `SignatureRequestResponseCustomFieldText`
 * * Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`
 */
export type SignatureRequestResponseCustomFieldBase =
  | (SignatureRequestResponseCustomFieldCheckbox & { type: "checkbox" })
  | (SignatureRequestResponseCustomFieldText & { type: "text" });

export const signatureRequestResponseCustomFieldBaseSchema: Schema<SignatureRequestResponseCustomFieldBase> =
  s.discriminatedUnion<SignatureRequestResponseCustomFieldBase>("type", {
    checkbox: signatureRequestResponseCustomFieldCheckboxSchema,
    text: signatureRequestResponseCustomFieldTextSchema,
  });
