import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignatureRequestUpdateRequest = {
  /**
   * The new email address for the recipient.
   *
   * This will generate a new `signature_id` value.
   *
   * **NOTE:** Optional if `name` is provided.
   */
  emailAddress?: string;
  /**
   * The new name for the recipient.
   *
   * **NOTE:** Optional if `email_address` is provided.
   */
  name?: string;
  /** The signature ID for the recipient. */
  signatureId: string;
  /**
   * The new time when the signature request will expire. Unsigned signatures will be moved to the
   * expired status, and no longer signable. See [Signature Request Expiration
   * Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expiresAt?: number | null;
};

export const signatureRequestUpdateRequestSchema: Schema<SignatureRequestUpdateRequest> =
  s.object<SignatureRequestUpdateRequest>({
    emailAddress: s.optional(s.string()),
    name: s.optional(s.string()),
    signatureId: s.string(),
    expiresAt: s.optionalNullable(s.int()),
    _keysMap: {
      emailAddress: "email_address",
      signatureId: "signature_id",
      expiresAt: "expires_at",
    },
  });
