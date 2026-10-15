import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubFormFieldsPerDocumentFontEnum = {
  Helvetica: "helvetica",
  Arial: "arial",
  Courier: "courier",
  Calibri: "calibri",
  Cambria: "cambria",
  Georgia: "georgia",
  Times: "times",
  Trebuchet: "trebuchet",
  Verdana: "verdana",
  Roboto: "roboto",
  RobotoMono: "robotoMono",
  NotoSans: "notoSans",
  NotoSerif: "notoSerif",
  NotoCjkJpRegular: "notoCJK-JP-Regular",
  NotoHebrewRegular: "notoHebrew-Regular",
  NotoSanThaiMerged: "notoSanThaiMerged",
} as const;
export type SubFormFieldsPerDocumentFontEnum =
  | (typeof SubFormFieldsPerDocumentFontEnum)[keyof typeof SubFormFieldsPerDocumentFontEnum]
  | (string & {});

export const subFormFieldsPerDocumentFontEnumSchema: EnumSchema<SubFormFieldsPerDocumentFontEnum> =
  s.enumOf<SubFormFieldsPerDocumentFontEnum>(SubFormFieldsPerDocumentFontEnum);
