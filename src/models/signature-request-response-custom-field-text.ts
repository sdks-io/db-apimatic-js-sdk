import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of SignatureRequestResponseCustomFieldBase, SignatureRequestResponseCustomFieldText. */
export type SignatureRequestResponseCustomFieldText = {
  /**
   * The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.
   *
   * @default "text"
   */
  type?: string;
  /** The name of the Custom Field. */
  name: string;
  /** A boolean value denoting if this field is required. */
  required?: boolean;
  /** The unique ID for this field. */
  apiId?: string;
  /** The name of the Role that is able to edit this field. */
  editor?: string | null;
  /** A text string for text fields */
  value?: string;
};

export const signatureRequestResponseCustomFieldTextSchema: Schema<SignatureRequestResponseCustomFieldText> =
  s.object<SignatureRequestResponseCustomFieldText>({
    type: s.defaulted(s.string(), "text"),
    name: s.string(),
    required: s.optional(s.boolean()),
    apiId: s.optional(s.string()),
    editor: s.optionalNullable(s.string()),
    value: s.optional(s.string()),
    _keysMap: {
      apiId: "api_id",
    },
  });
