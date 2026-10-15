import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Country of the area code */
export const Country = {
  Ca: "CA",
  Us: "US",
  Uk: "UK",
} as const;
export type Country = (typeof Country)[keyof typeof Country] | (string & {});

export const countrySchema: EnumSchema<Country> = s.enumOf<Country>(Country);
