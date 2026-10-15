import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubFormFieldsPerDocumentTypeEnum = {
  Checkbox: "checkbox",
  CheckboxMerge: "checkbox-merge",
  DateSigned: "date_signed",
  Dropdown: "dropdown",
  Hyperlink: "hyperlink",
  Initials: "initials",
  Signature: "signature",
  Radio: "radio",
  Text: "text",
  TextMerge: "text-merge",
} as const;
export type SubFormFieldsPerDocumentTypeEnum =
  | (typeof SubFormFieldsPerDocumentTypeEnum)[keyof typeof SubFormFieldsPerDocumentTypeEnum]
  | (string & {});

export const subFormFieldsPerDocumentTypeEnumSchema: EnumSchema<SubFormFieldsPerDocumentTypeEnum> =
  s.enumOf<SubFormFieldsPerDocumentTypeEnum>(SubFormFieldsPerDocumentTypeEnum);
