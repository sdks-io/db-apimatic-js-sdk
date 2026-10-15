import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  templateResponseDocumentFieldGroupRuleSchema,
  type TemplateResponseDocumentFieldGroupRule,
} from "./template-response-document-field-group-rule.js";

export type TemplateResponseDocumentFieldGroup = {
  /** The name of the form field group. */
  name?: string;
  /**
   * The rule used to validate checkboxes in the form field group. See [checkbox field
   * grouping](/api/reference/constants/#checkbox-field-grouping).
   */
  rule?: TemplateResponseDocumentFieldGroupRule;
};

export const templateResponseDocumentFieldGroupSchema: Schema<TemplateResponseDocumentFieldGroup> =
  s.object<TemplateResponseDocumentFieldGroup>({
    name: s.optional(s.string()),
    rule: s.optional(s.lazy(() => templateResponseDocumentFieldGroupRuleSchema)),
  });
