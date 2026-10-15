import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FaxLineAreaCodeGetCountryEnum = {
  Ca: "CA",
  Us: "US",
  Uk: "UK",
} as const;
export type FaxLineAreaCodeGetCountryEnum =
  | (typeof FaxLineAreaCodeGetCountryEnum)[keyof typeof FaxLineAreaCodeGetCountryEnum]
  | (string & {});

export const faxLineAreaCodeGetCountryEnumSchema: EnumSchema<FaxLineAreaCodeGetCountryEnum> =
  s.enumOf<FaxLineAreaCodeGetCountryEnum>(FaxLineAreaCodeGetCountryEnum);
