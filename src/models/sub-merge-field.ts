import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type SubMergeField = {
  /** The name of the merge field. Must be unique. */
  name: string;
  /** The type of merge field. */
  type: Type;
};

export const subMergeFieldSchema: Schema<SubMergeField> = s.object<SubMergeField>({
  name: s.string(),
  type: typeSchema,
});
