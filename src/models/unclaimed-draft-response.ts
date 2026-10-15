import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A group of documents that a user can take ownership of via the claim URL. */
export type UnclaimedDraftResponse = {
  /** The ID of the signature request that is represented by this UnclaimedDraft. */
  signatureRequestId?: string | null;
  /** The URL to be used to claim this UnclaimedDraft. */
  claimUrl?: string;
  /** The URL you want signers redirected to after they successfully sign. */
  signingRedirectUrl?: string | null;
  /**
   * The URL you want signers redirected to after they successfully request a signature (Will only
   * be returned in the response if it is applicable to the request.).
   */
  requestingRedirectUrl?: string | null;
  /** When the link expires. */
  expiresAt?: number | null;
  /** Whether this is a test draft. Signature requests made from test drafts have no legal value. */
  testMode?: boolean;
};

export const unclaimedDraftResponseSchema: Schema<UnclaimedDraftResponse> = s.object<UnclaimedDraftResponse>({
  signatureRequestId: s.optionalNullable(s.string()),
  claimUrl: s.optional(s.string()),
  signingRedirectUrl: s.optionalNullable(s.string()),
  requestingRedirectUrl: s.optionalNullable(s.string()),
  expiresAt: s.optionalNullable(s.int()),
  testMode: s.optional(s.boolean()),
  _keysMap: {
    signatureRequestId: "signature_request_id",
    claimUrl: "claim_url",
    signingRedirectUrl: "signing_redirect_url",
    requestingRedirectUrl: "requesting_redirect_url",
    expiresAt: "expires_at",
    testMode: "test_mode",
  },
});
