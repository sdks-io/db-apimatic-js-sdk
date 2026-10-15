import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of SignatureRequestResponseDataBase, SignatureRequestResponseDataValueInitials. */
export type SignatureRequestResponseDataValueInitials = {
  /** The unique ID for this field. */
  apiId?: string;
  /** The ID of the signature to which this response is linked. */
  signatureId?: string;
  /** The name of the form field. */
  name?: string;
  /** A boolean value denoting if this field is required. */
  required?: boolean;
  /** An input field for initials @default "initials" */
  type?: string;
  /** The value of the form field. */
  value?: string;
  /** This field contains the boolean true if the field is signed. */
  isSigned?: boolean | null;
};

export const signatureRequestResponseDataValueInitialsSchema: Schema<SignatureRequestResponseDataValueInitials> =
  s.object<SignatureRequestResponseDataValueInitials>({
    apiId: s.optional(s.string()),
    signatureId: s.optional(s.string()),
    name: s.optional(s.string()),
    required: s.optional(s.boolean()),
    type: s.defaulted(s.string(), "initials"),
    value: s.optional(s.string()),
    isSigned: s.optionalNullable(s.boolean()),
    _keysMap: {
      apiId: "api_id",
      signatureId: "signature_id",
      isSigned: "is_signed",
    },
  });
