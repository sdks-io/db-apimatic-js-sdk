import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Allows requester to specify the date format (see list of allowed
 * [formats](/api/reference/constants/#date-formats))
 *
 * **NOTE:** Only available for Premium and higher.
 */
export const DateFormat = {
  MmDdYyyy: "MM / DD / YYYY",
  MmDdYyyy2: "MM - DD - YYYY",
  DdMmYyyy: "DD / MM / YYYY",
  DdMmYyyy2: "DD - MM - YYYY",
  YyyyMmDd: "YYYY / MM / DD",
  YyyyMmDd2: "YYYY - MM - DD",
} as const;
export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat] | (string & {});

export const dateFormatSchema: EnumSchema<DateFormat> = s.enumOf<DateFormat>(DateFormat);
