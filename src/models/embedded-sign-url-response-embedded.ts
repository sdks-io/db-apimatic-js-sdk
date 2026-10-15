import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object that contains necessary information to set up embedded signing. */
export type EmbeddedSignUrlResponseEmbedded = {
  /** A signature url that can be opened in an iFrame. */
  signUrl?: string;
  /** The specific time that the the `sign_url` link expires, in epoch. */
  expiresAt?: number;
};

export const embeddedSignUrlResponseEmbeddedSchema: Schema<EmbeddedSignUrlResponseEmbedded> =
  s.object<EmbeddedSignUrlResponseEmbedded>({
    signUrl: s.optional(s.string()),
    expiresAt: s.optional(s.int()),
    _keysMap: {
      signUrl: "sign_url",
      expiresAt: "expires_at",
    },
  });
