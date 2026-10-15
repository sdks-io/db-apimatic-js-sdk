import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A role member will take in a new Team.
 *
 * **NOTE:** This parameter is used only if `team_id` is provided.
 */
export const Role = {
  Member: "Member",
  Developer: "Developer",
  TeamManager: "Team Manager",
  Admin: "Admin",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
