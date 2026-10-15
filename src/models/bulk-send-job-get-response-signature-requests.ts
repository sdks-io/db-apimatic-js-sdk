import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signatureRequestResponseAttachmentSchema,
  type SignatureRequestResponseAttachment,
} from "./signature-request-response-attachment.js";
import {
  signatureRequestResponseSignaturesSchema,
  type SignatureRequestResponseSignatures,
} from "./signature-request-response-signatures.js";
import {
  signatureRequestResponseCustomFieldBaseSchema,
  type SignatureRequestResponseCustomFieldBase,
} from "./unions/signature-request-response-custom-field-base.js";
import {
  signatureRequestResponseDataBaseSchema,
  type SignatureRequestResponseDataBase,
} from "./unions/signature-request-response-data-base.js";

export type BulkSendJobGetResponseSignatureRequests = {
  /**
   * Whether this is a test signature request. Test requests have no legal value. Defaults to
   * `false`.
   *
   * @default false
   */
  testMode?: boolean;
  /** The id of the SignatureRequest. */
  signatureRequestId?: string;
  /** The email address of the initiator of the SignatureRequest. */
  requesterEmailAddress?: string | null;
  /** The title the specified Account uses for the SignatureRequest. */
  title?: string;
  /** Default Label for account. */
  originalTitle?: string;
  /** The subject in the email that was initially sent to the signers. */
  subject?: string | null;
  /** The custom message in the email that was initially sent to the signers. */
  message?: string | null;
  /** The metadata attached to the signature request. */
  metadata?: Record<string, unknown>;
  /** Time the signature request was created. */
  createdAt?: number;
  /**
   * The time when the signature request will expire unsigned signatures. See [Signature Request
   * Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for
   * details.
   */
  expiresAt?: number | null;
  /** Whether or not the SignatureRequest has been fully executed by all signers. */
  isComplete?: boolean;
  /** Whether or not the SignatureRequest has been declined by a signer. */
  isDeclined?: boolean;
  /**
   * Whether or not an error occurred (either during the creation of the SignatureRequest or during
   * one of the signings).
   */
  hasError?: boolean;
  /** The URL where a copy of the request's documents can be downloaded. */
  filesUrl?: string;
  /**
   * The URL where a signer, after authenticating, can sign the documents. This should only be used
   * by users with existing Dropbox Sign accounts as they will be required to log in before signing.
   */
  signingUrl?: string | null;
  /**
   * The URL where the requester and the signers can view the current status of the
   * SignatureRequest.
   */
  detailsUrl?: string;
  /**
   * A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of
   * the final PDF once all the signers have signed.
   */
  ccEmailAddresses?: string[];
  /** The URL you want the signer redirected to after they successfully sign. */
  signingRedirectUrl?: string | null;
  /** The path where the completed document can be downloaded */
  finalCopyUri?: string | null;
  /** Templates IDs used in this SignatureRequest (if any). */
  templateIds?: string[] | null;
  /**
   * An array of Custom Field objects containing the name and type of each custom field.
   *
   * * Text Field uses `SignatureRequestResponseCustomFieldText`
   * * Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`
   */
  customFields?: SignatureRequestResponseCustomFieldBase[] | null;
  /** Signer attachments. */
  attachments?: SignatureRequestResponseAttachment[] | null;
  /**
   * An array of form field objects containing the name, value, and type of each textbox or
   * checkmark field filled in by the signers.
   */
  responseData?: SignatureRequestResponseDataBase[] | null;
  /** An array of signature objects, 1 for each signer. */
  signatures?: SignatureRequestResponseSignatures[];
  /** The ID of the Bulk Send job which sent the signature request, if applicable. */
  bulkSendJobId?: string | null;
};

export const bulkSendJobGetResponseSignatureRequestsSchema: Schema<BulkSendJobGetResponseSignatureRequests> =
  s.object<BulkSendJobGetResponseSignatureRequests>({
    testMode: s.defaulted(s.boolean(), false),
    signatureRequestId: s.optional(s.string()),
    requesterEmailAddress: s.optionalNullable(s.string()),
    title: s.optional(s.string()),
    originalTitle: s.optional(s.string()),
    subject: s.optionalNullable(s.string()),
    message: s.optionalNullable(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    createdAt: s.optional(s.int()),
    expiresAt: s.optionalNullable(s.int()),
    isComplete: s.optional(s.boolean()),
    isDeclined: s.optional(s.boolean()),
    hasError: s.optional(s.boolean()),
    filesUrl: s.optional(s.string()),
    signingUrl: s.optionalNullable(s.string()),
    detailsUrl: s.optional(s.string()),
    ccEmailAddresses: s.optional(s.array(s.string())),
    signingRedirectUrl: s.optionalNullable(s.string()),
    finalCopyUri: s.optionalNullable(s.string()),
    templateIds: s.optionalNullable(s.array(s.string())),
    customFields: s.optionalNullable(s.array(s.lazy(() => signatureRequestResponseCustomFieldBaseSchema))),
    attachments: s.optionalNullable(s.array(s.lazy(() => signatureRequestResponseAttachmentSchema))),
    responseData: s.optionalNullable(s.array(s.lazy(() => signatureRequestResponseDataBaseSchema))),
    signatures: s.optional(s.array(s.lazy(() => signatureRequestResponseSignaturesSchema))),
    bulkSendJobId: s.optionalNullable(s.string()),
    _keysMap: {
      testMode: "test_mode",
      signatureRequestId: "signature_request_id",
      requesterEmailAddress: "requester_email_address",
      originalTitle: "original_title",
      createdAt: "created_at",
      expiresAt: "expires_at",
      isComplete: "is_complete",
      isDeclined: "is_declined",
      hasError: "has_error",
      filesUrl: "files_url",
      signingUrl: "signing_url",
      detailsUrl: "details_url",
      ccEmailAddresses: "cc_email_addresses",
      signingRedirectUrl: "signing_redirect_url",
      finalCopyUri: "final_copy_uri",
      templateIds: "template_ids",
      customFields: "custom_fields",
      responseData: "response_data",
      bulkSendJobId: "bulk_send_job_id",
    },
  });
