import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An embedded template object. */
export type EmbeddedEditUrlResponseEmbedded = {
  /** A template url that can be opened in an iFrame. */
  editUrl?: string;
  /** The specific time that the the `edit_url` link expires, in epoch. */
  expiresAt?: number;
};

export const embeddedEditUrlResponseEmbeddedSchema: Schema<EmbeddedEditUrlResponseEmbedded> =
  s.object<EmbeddedEditUrlResponseEmbedded>({
    editUrl: s.optional(s.string()),
    expiresAt: s.optional(s.int()),
    _keysMap: {
      editUrl: "edit_url",
      expiresAt: "expires_at",
    },
  });
