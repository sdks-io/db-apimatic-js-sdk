import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FileType = {
  Pdf: "pdf",
  Zip: "zip",
} as const;
export type FileType = (typeof FileType)[keyof typeof FileType] | (string & {});

export const fileTypeSchema: EnumSchema<FileType> = s.enumOf<FileType>(FileType);
