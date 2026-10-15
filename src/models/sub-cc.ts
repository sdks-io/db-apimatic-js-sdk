import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubCc = {
  /**
   * Must match an existing CC role in chosen Template(s). Multiple CC recipients cannot share the
   * same CC role.
   */
  role: string;
  /** The email address of the CC recipient. */
  emailAddress: string;
};

export const subCcSchema: Schema<SubCc> = s.object<SubCc>({
  role: s.string(),
  emailAddress: s.string(),
  _keysMap: {
    emailAddress: "email_address",
  },
});
