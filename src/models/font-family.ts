import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Font family for the field. */
export const FontFamily = {
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
export type FontFamily = (typeof FontFamily)[keyof typeof FontFamily] | (string & {});

export const fontFamilySchema: EnumSchema<FontFamily> = s.enumOf<FontFamily>(FontFamily);
