import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamCreateRequest = {
  /** The name of your Team. @default "Untitled Team" */
  name?: string;
};

export const teamCreateRequestSchema: Schema<TeamCreateRequest> = s.object<TeamCreateRequest>({
  name: s.defaulted(s.string(), "Untitled Team"),
});
