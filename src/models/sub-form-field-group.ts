import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubFormFieldGroup = {
  /**
   * ID of group. Use this to reference a specific group from the `group` value in
   * `form_fields_per_document`.
   */
  groupId: string;
  /** Name of the group */
  groupLabel: string;
  /**
   * Examples: `require_0-1` `require_1` `require_1-ormore`
   *
   * - Check out the list of [acceptable `requirement` checkbox type
   *   values](/api/reference/constants/#checkbox-field-grouping).
   * - Check out the list of [acceptable `requirement` radio type
   *   fields](/api/reference/constants/#radio-field-grouping).
   * - Radio groups require **at least** two fields per group.
   */
  requirement: string;
};

export const subFormFieldGroupSchema: Schema<SubFormFieldGroup> = s.object<SubFormFieldGroup>({
  groupId: s.string(),
  groupLabel: s.string(),
  requirement: s.string(),
  _keysMap: {
    groupId: "group_id",
    groupLabel: "group_label",
  },
});
