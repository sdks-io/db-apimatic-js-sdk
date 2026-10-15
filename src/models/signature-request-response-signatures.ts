import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An array of signature objects, 1 for each signer. */
export type SignatureRequestResponseSignatures = {
  /** Signature identifier. */
  signatureId?: string;
  /** Signer Group GUID */
  signerGroupGuid?: string | null;
  /** The email address of the signer. */
  signerEmailAddress?: string;
  /** The name of the signer. */
  signerName?: string | null;
  /** The role of the signer. */
  signerRole?: string | null;
  /** If signer order is assigned this is the 0-based index for this signer. */
  order?: number | null;
  /** The current status of the signature. eg: awaiting_signature, signed, declined. */
  statusCode?: string;
  /** The reason provided by the signer for declining the request. */
  declineReason?: string | null;
  /** Time that the document was signed or null. */
  signedAt?: number | null;
  /** The time that the document was last viewed by this signer or null. */
  lastViewedAt?: number | null;
  /** The time the last reminder email was sent to the signer or null. */
  lastRemindedAt?: number | null;
  /** Boolean to indicate whether this signature requires a PIN to access. */
  hasPin?: boolean;
  /** Boolean to indicate whether this signature has SMS authentication enabled. */
  hasSmsAuth?: boolean | null;
  /** Boolean to indicate whether this signature has SMS delivery enabled. */
  hasSmsDelivery?: boolean | null;
  /** The SMS phone number used for authentication or signature request delivery. */
  smsPhoneNumber?: string | null;
  /** Email address of original signer who reassigned to this signer. */
  reassignedBy?: string | null;
  /** Reason provided by original signer who reassigned to this signer. */
  reassignmentReason?: string | null;
  /** Previous signature identifier. */
  reassignedFrom?: string | null;
  /** Error message pertaining to this signer, or null. */
  error?: string | null;
};

export const signatureRequestResponseSignaturesSchema: Schema<SignatureRequestResponseSignatures> =
  s.object<SignatureRequestResponseSignatures>({
    signatureId: s.optional(s.string()),
    signerGroupGuid: s.optionalNullable(s.string()),
    signerEmailAddress: s.optional(s.string()),
    signerName: s.optionalNullable(s.string()),
    signerRole: s.optionalNullable(s.string()),
    order: s.optionalNullable(s.int()),
    statusCode: s.optional(s.string()),
    declineReason: s.optionalNullable(s.string()),
    signedAt: s.optionalNullable(s.int()),
    lastViewedAt: s.optionalNullable(s.int()),
    lastRemindedAt: s.optionalNullable(s.int()),
    hasPin: s.optional(s.boolean()),
    hasSmsAuth: s.optionalNullable(s.boolean()),
    hasSmsDelivery: s.optionalNullable(s.boolean()),
    smsPhoneNumber: s.optionalNullable(s.string()),
    reassignedBy: s.optionalNullable(s.string()),
    reassignmentReason: s.optionalNullable(s.string()),
    reassignedFrom: s.optionalNullable(s.string()),
    error: s.optionalNullable(s.string()),
    _keysMap: {
      signatureId: "signature_id",
      signerGroupGuid: "signer_group_guid",
      signerEmailAddress: "signer_email_address",
      signerName: "signer_name",
      signerRole: "signer_role",
      statusCode: "status_code",
      declineReason: "decline_reason",
      signedAt: "signed_at",
      lastViewedAt: "last_viewed_at",
      lastRemindedAt: "last_reminded_at",
      hasPin: "has_pin",
      hasSmsAuth: "has_sms_auth",
      hasSmsDelivery: "has_sms_delivery",
      smsPhoneNumber: "sms_phone_number",
      reassignedBy: "reassigned_by",
      reassignmentReason: "reassignment_reason",
      reassignedFrom: "reassigned_from",
    },
  });
