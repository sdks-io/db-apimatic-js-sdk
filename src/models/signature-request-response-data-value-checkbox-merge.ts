import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of SignatureRequestResponseDataBase, SignatureRequestResponseDataValueCheckboxMerge. */
export type SignatureRequestResponseDataValueCheckboxMerge = {
  /** The unique ID for this field. */
  apiId?: string;
  /** The ID of the signature to which this response is linked. */
  signatureId?: string;
  /** The name of the form field. */
  name?: string;
  /** A boolean value denoting if this field is required. */
  required?: boolean;
  /** A checkbox field that has default value set by the api @default "checkbox-merge" */
  type?: string;
  /** The value of the form field. */
  value?: string;
};

export const signatureRequestResponseDataValueCheckboxMergeSchema: Schema<SignatureRequestResponseDataValueCheckboxMerge> =
  s.object<SignatureRequestResponseDataValueCheckboxMerge>({
    apiId: s.optional(s.string()),
    signatureId: s.optional(s.string()),
    name: s.optional(s.string()),
    required: s.optional(s.boolean()),
    type: s.defaulted(s.string(), "checkbox-merge"),
    value: s.optional(s.string()),
    _keysMap: {
      apiId: "api_id",
      signatureId: "signature_id",
    },
  });
