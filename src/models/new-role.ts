import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A new role member will take in a new Team.
 *
 * **NOTE:** This parameter is used only if `new_team_id` is provided.
 */
export const NewRole = {
  Member: "Member",
  Developer: "Developer",
  TeamManager: "Team Manager",
  Admin: "Admin",
} as const;
export type NewRole = (typeof NewRole)[keyof typeof NewRole] | (string & {});

export const newRoleSchema: EnumSchema<NewRole> = s.enumOf<NewRole>(NewRole);
