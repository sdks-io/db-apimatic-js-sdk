import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subBulkSignerListSchema, type SubBulkSignerList } from "./sub-bulk-signer-list.js";
import { subCcSchema, type SubCc } from "./sub-cc.js";
import { subCustomFieldSchema, type SubCustomField } from "./sub-custom-field.js";

export type SignatureRequestBulkCreateEmbeddedWithTemplateRequest = {
  /**
   * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
   * which the template will be used.
   */
  templateIds: string[];
  /**
   * `signer_file` is a CSV file defining values and options for signer fields. Required unless a
   * `signer_list` is used, you may not use both. The CSV can have the following columns:
   *
   * - `name`: the name of the signer filling the role of RoleName
   * - `email_address`: email address of the signer filling the role of RoleName
   * - `pin`: the 4- to 12-character access code that will secure this signer's signature page
   *   (optional)
   * - `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to
   *   access this signer's signature page. (optional)
   *
   * By using the feature, you agree you are responsible for obtaining a signer's consent to receive
   * text messages from Dropbox Sign related to this signature request and confirm you have obtained
   * such consent from all signers prior to enabling SMS delivery for this signature request. [Learn
   * more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).
   *
   * **NOTE:** Not available in test mode and requires a Standard plan or higher.
   * - `*_field`: any column with a _field" suffix will be treated as a custom field (optional)
   *
   * You may only specify field values here, any other options should be set in the custom_fields
   * request parameter.
   *
   * Example CSV:
   *
   * ```
   * name, email_address, pin, company_field
   * George, george@example.com, d79a3td, ABC Corp
   * Mary, mary@example.com, gd9as5b, 123 LLC
   * ```
   */
  signerFile?: Uint8Array;
  /**
   * `signer_list` is an array defining values and options for signer fields. Required unless a
   * `signer_file` is used, you may not use both.
   */
  signerList?: SubBulkSignerList[];
  /** Allows signers to decline to sign a document if `true`. Defaults to `false`. @default false */
  allowDecline?: boolean;
  /** Add CC email recipients. Required when a CC role exists for the Template. */
  ccs?: SubCc[];
  /**
   * Client id of the app you're using to create this embedded signature request. Used for security
   * purposes.
   */
  clientId: string;
  /**
   * When used together with merge fields, `custom_fields` allows users to add pre-filled data to
   * their signature requests.
   *
   * Pre-filled data can be used with "send-once" signature requests by adding merge fields with
   * `form_fields_per_document` or [Text
   * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back
   * with `custom_fields` together in one API call.
   *
   * For using pre-filled on repeatable signature requests, merge fields are added to templates in
   * the Dropbox Sign UI or by calling
   * [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and
   * then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  customFields?: SubCustomField[];
  /** The custom message in the email that will be sent to the signers. */
  message?: string;
  /**
   * Key-value data that should be attached to the signature request. This metadata is included in
   * all API responses and events involving the signature request. For example, use the metadata
   * field to store a signer's order number for look up when receiving events for the signature
   * request.
   *
   * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up
   * to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<string, Record<string, unknown>>;
  /** The URL you want signers redirected to after they successfully sign. */
  signingRedirectUrl?: string;
  /** The subject in the email that will be sent to the signers. */
  subject?: string;
  /**
   * Whether this is a test, the signature request will not be legally binding if set to `true`.
   * Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
  /** The title you want to assign to the SignatureRequest. */
  title?: string;
  /**
   * When the signature request will expire. Unsigned signatures will be moved to the expired
   * status, and no longer signable. See [Signature Request Expiration
   * Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expiresAt?: number | null;
};

export const signatureRequestBulkCreateEmbeddedWithTemplateRequestSchema: Schema<SignatureRequestBulkCreateEmbeddedWithTemplateRequest> =
  s.object<SignatureRequestBulkCreateEmbeddedWithTemplateRequest>({
    templateIds: s.array(s.string()),
    signerFile: s.optional(s.bytes()),
    signerList: s.optional(s.array(s.lazy(() => subBulkSignerListSchema))),
    allowDecline: s.defaulted(s.boolean(), false),
    ccs: s.optional(s.array(s.lazy(() => subCcSchema))),
    clientId: s.string(),
    customFields: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
    message: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    signingRedirectUrl: s.optional(s.string()),
    subject: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    title: s.optional(s.string()),
    expiresAt: s.optionalNullable(s.int()),
    _keysMap: {
      templateIds: "template_ids",
      signerFile: "signer_file",
      signerList: "signer_list",
      allowDecline: "allow_decline",
      clientId: "client_id",
      customFields: "custom_fields",
      signingRedirectUrl: "signing_redirect_url",
      testMode: "test_mode",
      expiresAt: "expires_at",
    },
  });
