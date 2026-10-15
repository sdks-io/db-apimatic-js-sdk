import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubUnclaimedDraftTemplateSigner = {
  /** Must match an existing role in chosen Template(s). */
  role: string;
  /** The name of the signer filling the role of `role`. */
  name: string;
  /** The email address of the signer filling the role of `role`. */
  emailAddress: string;
};

export const subUnclaimedDraftTemplateSignerSchema: Schema<SubUnclaimedDraftTemplateSigner> =
  s.object<SubUnclaimedDraftTemplateSigner>({
    role: s.string(),
    name: s.string(),
    emailAddress: s.string(),
    _keysMap: {
      emailAddress: "email_address",
    },
  });
