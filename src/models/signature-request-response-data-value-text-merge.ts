import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of SignatureRequestResponseDataBase, SignatureRequestResponseDataValueTextMerge. */
export type SignatureRequestResponseDataValueTextMerge = {
  /** The unique ID for this field. */
  apiId?: string;
  /** The ID of the signature to which this response is linked. */
  signatureId?: string;
  /** The name of the form field. */
  name?: string;
  /** A boolean value denoting if this field is required. */
  required?: boolean;
  /** A text field that has default text set by the api @default "text-merge" */
  type?: string;
  /** The value of the form field. */
  value?: string;
};

export const signatureRequestResponseDataValueTextMergeSchema: Schema<SignatureRequestResponseDataValueTextMerge> =
  s.object<SignatureRequestResponseDataValueTextMerge>({
    apiId: s.optional(s.string()),
    signatureId: s.optional(s.string()),
    name: s.optional(s.string()),
    required: s.optional(s.boolean()),
    type: s.defaulted(s.string(), "text-merge"),
    value: s.optional(s.string()),
    _keysMap: {
      apiId: "api_id",
      signatureId: "signature_id",
    },
  });
