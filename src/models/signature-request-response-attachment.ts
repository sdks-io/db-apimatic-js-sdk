import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Signer attachments. */
export type SignatureRequestResponseAttachment = {
  /** The unique ID for this attachment. */
  id: string;
  /** The Signer this attachment is assigned to. */
  signer: string;
  /** The name of this attachment. */
  name: string;
  /** A boolean value denoting if this attachment is required. */
  required: boolean;
  /** Instructions for Signer. */
  instructions?: string | null;
  /** Timestamp when attachment was uploaded by Signer. */
  uploadedAt?: number | null;
};

export const signatureRequestResponseAttachmentSchema: Schema<SignatureRequestResponseAttachment> =
  s.object<SignatureRequestResponseAttachment>({
    id: s.string(),
    signer: s.string(),
    name: s.string(),
    required: s.boolean(),
    instructions: s.optionalNullable(s.string()),
    uploadedAt: s.optionalNullable(s.int()),
    _keysMap: {
      uploadedAt: "uploaded_at",
    },
  });
