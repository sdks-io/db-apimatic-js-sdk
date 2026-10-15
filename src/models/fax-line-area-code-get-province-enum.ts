import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FaxLineAreaCodeGetProvinceEnum = {
  Ab: "AB",
  Bc: "BC",
  Mb: "MB",
  Nb: "NB",
  Nl: "NL",
  Nt: "NT",
  Ns: "NS",
  Nu: "NU",
  On: "ON",
  Pe: "PE",
  Qc: "QC",
  Sk: "SK",
  Yt: "YT",
} as const;
export type FaxLineAreaCodeGetProvinceEnum =
  | (typeof FaxLineAreaCodeGetProvinceEnum)[keyof typeof FaxLineAreaCodeGetProvinceEnum]
  | (string & {});

export const faxLineAreaCodeGetProvinceEnumSchema: EnumSchema<FaxLineAreaCodeGetProvinceEnum> =
  s.enumOf<FaxLineAreaCodeGetProvinceEnum>(FaxLineAreaCodeGetProvinceEnum);
