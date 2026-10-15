import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubTemplateRole = {
  /**
   * The role name of the signer that will be displayed when the template is used to create a
   * signature request.
   */
  name?: string;
  /** The order in which this signer role is required to sign. */
  order?: number | null;
};

export const subTemplateRoleSchema: Schema<SubTemplateRole> = s.object<SubTemplateRole>({
  name: s.optional(s.string()),
  order: s.optionalNullable(s.int()),
});
