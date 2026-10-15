import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SignatureRequestResponseDataTypeEnum = {
  Text: "text",
  Checkbox: "checkbox",
  DateSigned: "date_signed",
  Dropdown: "dropdown",
  Initials: "initials",
  Radio: "radio",
  Signature: "signature",
  TextMerge: "text-merge",
  CheckboxMerge: "checkbox-merge",
} as const;
export type SignatureRequestResponseDataTypeEnum =
  | (typeof SignatureRequestResponseDataTypeEnum)[keyof typeof SignatureRequestResponseDataTypeEnum]
  | (string & {});

export const signatureRequestResponseDataTypeEnumSchema: EnumSchema<SignatureRequestResponseDataTypeEnum> =
  s.enumOf<SignatureRequestResponseDataTypeEnum>(SignatureRequestResponseDataTypeEnum);
