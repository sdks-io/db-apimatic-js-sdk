import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateResponseCcRole = {
  /** The name of the Role. */
  name?: string;
};

export const templateResponseCcRoleSchema: Schema<TemplateResponseCcRole> = s.object<TemplateResponseCcRole>({
  name: s.optional(s.string()),
});
