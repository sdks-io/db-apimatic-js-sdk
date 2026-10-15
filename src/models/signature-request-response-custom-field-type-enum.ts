import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SignatureRequestResponseCustomFieldTypeEnum = {
  Text: "text",
  Checkbox: "checkbox",
} as const;
export type SignatureRequestResponseCustomFieldTypeEnum =
  | (typeof SignatureRequestResponseCustomFieldTypeEnum)[keyof typeof SignatureRequestResponseCustomFieldTypeEnum]
  | (string & {});

export const signatureRequestResponseCustomFieldTypeEnumSchema: EnumSchema<SignatureRequestResponseCustomFieldTypeEnum> =
  s.enumOf<SignatureRequestResponseCustomFieldTypeEnum>(SignatureRequestResponseCustomFieldTypeEnum);
