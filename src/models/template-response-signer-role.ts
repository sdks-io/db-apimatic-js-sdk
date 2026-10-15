import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateResponseSignerRole = {
  /** The name of the Role. */
  name?: string;
  /** If signer order is assigned this is the 0-based index for this role. */
  order?: number;
};

export const templateResponseSignerRoleSchema: Schema<TemplateResponseSignerRole> =
  s.object<TemplateResponseSignerRole>({
    name: s.optional(s.string()),
    order: s.optional(s.int()),
  });
