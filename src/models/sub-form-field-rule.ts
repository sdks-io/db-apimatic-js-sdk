import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subFormFieldRuleActionSchema, type SubFormFieldRuleAction } from "./sub-form-field-rule-action.js";
import {
  subFormFieldRuleTriggerSchema,
  type SubFormFieldRuleTrigger,
} from "./sub-form-field-rule-trigger.js";

export type SubFormFieldRule = {
  /** Must be unique across all defined rules. */
  id: string;
  /** Currently only `AND` is supported. Support for `OR` is being worked on. @default "AND" */
  triggerOperator?: string;
  /**
   * An array of trigger definitions, the "if this" part of "**if this**, then that". Currently only
   * a single trigger per rule is allowed.
   */
  triggers: SubFormFieldRuleTrigger[];
  /**
   * An array of action definitions, the "then that" part of "if this, **then that**". Any number of
   * actions may be attached to a single rule.
   */
  actions: SubFormFieldRuleAction[];
};

export const subFormFieldRuleSchema: Schema<SubFormFieldRule> = s.object<SubFormFieldRule>({
  id: s.string(),
  triggerOperator: s.defaulted(s.string(), "AND"),
  triggers: s.array(s.lazy(() => subFormFieldRuleTriggerSchema)),
  actions: s.array(s.lazy(() => subFormFieldRuleActionSchema)),
  _keysMap: {
    triggerOperator: "trigger_operator",
  },
});
