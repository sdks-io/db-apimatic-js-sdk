import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of SignatureRequestResponseDataBase, SignatureRequestResponseDataValueDropdown. */
export type SignatureRequestResponseDataValueDropdown = {
  /** The unique ID for this field. */
  apiId?: string;
  /** The ID of the signature to which this response is linked. */
  signatureId?: string;
  /** The name of the form field. */
  name?: string;
  /** A boolean value denoting if this field is required. */
  required?: boolean;
  /** An input field for dropdowns @default "dropdown" */
  type?: string;
  /** The value of the form field. */
  value?: string;
};

export const signatureRequestResponseDataValueDropdownSchema: Schema<SignatureRequestResponseDataValueDropdown> =
  s.object<SignatureRequestResponseDataValueDropdown>({
    apiId: s.optional(s.string()),
    signatureId: s.optional(s.string()),
    name: s.optional(s.string()),
    required: s.optional(s.boolean()),
    type: s.defaulted(s.string(), "dropdown"),
    value: s.optional(s.string()),
    _keysMap: {
      apiId: "api_id",
      signatureId: "signature_id",
    },
  });
