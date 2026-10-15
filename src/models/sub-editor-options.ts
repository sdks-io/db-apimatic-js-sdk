import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** This allows the requester to specify editor options when a preparing a document */
export type SubEditorOptions = {
  /** Allows requesters to edit the list of signers @default false */
  allowEditSigners?: boolean;
  /** Allows requesters to edit documents, including delete and add @default false */
  allowEditDocuments?: boolean;
};

export const subEditorOptionsSchema: Schema<SubEditorOptions> = s.object<SubEditorOptions>({
  allowEditSigners: s.defaulted(s.boolean(), false),
  allowEditDocuments: s.defaulted(s.boolean(), false),
  _keysMap: {
    allowEditSigners: "allow_edit_signers",
    allowEditDocuments: "allow_edit_documents",
  },
});
