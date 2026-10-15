import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignatureRequestRemindRequest = {
  /** The email address of the signer to send a reminder to. */
  emailAddress: string;
  /**
   * The name of the signer to send a reminder to. Include if two or more signers share an email
   * address.
   */
  name?: string;
};

export const signatureRequestRemindRequestSchema: Schema<SignatureRequestRemindRequest> =
  s.object<SignatureRequestRemindRequest>({
    emailAddress: s.string(),
    name: s.optional(s.string()),
    _keysMap: {
      emailAddress: "email_address",
    },
  });
