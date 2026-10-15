import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of SignatureRequestResponseCustomFieldBase, SignatureRequestResponseCustomFieldCheckbox. */
export type SignatureRequestResponseCustomFieldCheckbox = {
  /**
   * The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.
   *
   * @default "checkbox"
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
  /** A true/false for checkbox fields */
  value?: boolean;
};

export const signatureRequestResponseCustomFieldCheckboxSchema: Schema<SignatureRequestResponseCustomFieldCheckbox> =
  s.object<SignatureRequestResponseCustomFieldCheckbox>({
    type: s.defaulted(s.string(), "checkbox"),
    name: s.string(),
    required: s.optional(s.boolean()),
    apiId: s.optional(s.string()),
    editor: s.optionalNullable(s.string()),
    value: s.optional(s.boolean()),
    _keysMap: {
      apiId: "api_id",
    },
  });
