import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object with options that override account settings. */
export type ApiAppResponseOptions = {
  /** Boolean denoting if signers can "Insert Everywhere" in one click while signing a document */
  canInsertEverywhere?: boolean;
};

export const apiAppResponseOptionsSchema: Schema<ApiAppResponseOptions> = s.object<ApiAppResponseOptions>({
  canInsertEverywhere: s.optional(s.boolean()),
  _keysMap: {
    canInsertEverywhere: "can_insert_everywhere",
  },
});
