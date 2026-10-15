import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubUnclaimedDraftSigner = {
  /** The email address of the signer. */
  emailAddress: string;
  /** The name of the signer. */
  name: string;
  /** The order the signer is required to sign in. */
  order?: number | null;
};

export const subUnclaimedDraftSignerSchema: Schema<SubUnclaimedDraftSigner> =
  s.object<SubUnclaimedDraftSigner>({
    emailAddress: s.string(),
    name: s.string(),
    order: s.optionalNullable(s.int()),
    _keysMap: {
      emailAddress: "email_address",
    },
  });
