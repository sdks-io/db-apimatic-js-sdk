import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional options supported by API App. */
export type SubOptions = {
  /** Determines if signers can use "Insert Everywhere" when signing a document. @default false */
  canInsertEverywhere?: boolean;
};

export const subOptionsSchema: Schema<SubOptions> = s.object<SubOptions>({
  canInsertEverywhere: s.defaulted(s.boolean(), false),
  _keysMap: {
    canInsertEverywhere: "can_insert_everywhere",
  },
});
