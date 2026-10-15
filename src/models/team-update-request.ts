import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamUpdateRequest = {
  /** The name of your Team. */
  name?: string;
};

export const teamUpdateRequestSchema: Schema<TeamUpdateRequest> = s.object<TeamUpdateRequest>({
  name: s.optional(s.string()),
});
