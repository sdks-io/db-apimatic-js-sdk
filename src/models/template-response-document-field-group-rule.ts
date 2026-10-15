import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The rule used to validate checkboxes in the form field group. See [checkbox field
 * grouping](/api/reference/constants/#checkbox-field-grouping).
 */
export type TemplateResponseDocumentFieldGroupRule = {
  /**
   * Examples: `require_0-1` `require_1` `require_1-ormore`
   *
   * - Check out the list of [acceptable `requirement` checkbox type
   *   values](/api/reference/constants/#checkbox-field-grouping).
   * - Check out the list of [acceptable `requirement` radio type
   *   fields](/api/reference/constants/#radio-field-grouping).
   * - Radio groups require **at least** two fields per group.
   */
  requirement?: string;
  /** Name of the group */
  groupLabel?: string;
};

export const templateResponseDocumentFieldGroupRuleSchema: Schema<TemplateResponseDocumentFieldGroupRule> =
  s.object<TemplateResponseDocumentFieldGroupRule>({
    requirement: s.optional(s.string()),
    groupLabel: s.optional(s.string()),
  });
