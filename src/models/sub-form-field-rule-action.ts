import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type SubFormFieldRuleAction = {
  /**
   * **field_id** or **group_id** is required, but not both.
   *
   * Must reference the `api_id` of an existing field defined within `form_fields_per_document`.
   *
   * Cannot use with `group_id`. Trigger and action fields must belong to the same signer.
   */
  fieldId?: string;
  /**
   * **group_id** or **field_id** is required, but not both.
   *
   * Must reference the ID of an existing group defined within `form_field_groups`.
   *
   * Cannot use with `field_id`. Trigger and action fields and groups must belong to the same
   * signer.
   */
  groupId?: string;
  /** `true` to hide the target field when rule is satisfied, otherwise `false`. */
  hidden: boolean;
  type: Type1;
};

export const subFormFieldRuleActionSchema: Schema<SubFormFieldRuleAction> = s.object<SubFormFieldRuleAction>({
  fieldId: s.optional(s.string()),
  groupId: s.optional(s.string()),
  hidden: s.boolean(),
  type: type1Schema,
  _keysMap: {
    fieldId: "field_id",
    groupId: "group_id",
  },
});
