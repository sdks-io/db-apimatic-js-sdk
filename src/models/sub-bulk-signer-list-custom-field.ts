import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubBulkSignerListCustomField = {
  /** The name of the custom field. Must be the field's `name` or `api_id`. */
  name: string;
  /** The value of the custom field. */
  value: string;
};

export const subBulkSignerListCustomFieldSchema: Schema<SubBulkSignerListCustomField> =
  s.object<SubBulkSignerListCustomField>({
    name: s.string(),
    value: s.string(),
  });
