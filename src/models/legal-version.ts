import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LegalVersion = {
  Terms1: "terms1",
  Terms2: "terms2",
} as const;
export type LegalVersion = (typeof LegalVersion)[keyof typeof LegalVersion] | (string & {});

export const legalVersionSchema: EnumSchema<LegalVersion> = s.enumOf<LegalVersion>(LegalVersion);
