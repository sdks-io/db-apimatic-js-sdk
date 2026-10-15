import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The default type shown (limited to the listed types) */
export const DefaultType = {
  Draw: "draw",
  Phone: "phone",
  Type: "type",
  Upload: "upload",
} as const;
export type DefaultType = (typeof DefaultType)[keyof typeof DefaultType] | (string & {});

export const defaultTypeSchema: EnumSchema<DefaultType> = s.enumOf<DefaultType>(DefaultType);
