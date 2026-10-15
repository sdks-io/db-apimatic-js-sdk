import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubAttachment = {
  /** The instructions for uploading the attachment. */
  instructions?: string;
  /** The name of attachment. */
  name: string;
  /** Determines if the attachment must be uploaded. @default false */
  required?: boolean;
  /**
   * The signer's index in the `signers` parameter (0-based indexing).
   *
   * **NOTE:** Only one signer can be assigned per attachment.
   */
  signerIndex: number;
};

export const subAttachmentSchema: Schema<SubAttachment> = s.object<SubAttachment>({
  instructions: s.optional(s.string()),
  name: s.string(),
  required: s.defaulted(s.boolean(), false),
  signerIndex: s.int(),
  _keysMap: {
    signerIndex: "signer_index",
  },
});
