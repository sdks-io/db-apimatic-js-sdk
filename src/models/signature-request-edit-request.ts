import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subAttachmentSchema, type SubAttachment } from "./sub-attachment.js";
import { subCustomFieldSchema, type SubCustomField } from "./sub-custom-field.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "./sub-field-options.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "./sub-form-field-group.js";
import { subFormFieldRuleSchema, type SubFormFieldRule } from "./sub-form-field-rule.js";
import {
  subSignatureRequestGroupedSignersSchema,
  type SubSignatureRequestGroupedSigners,
} from "./sub-signature-request-grouped-signers.js";
import {
  subSignatureRequestSignerSchema,
  type SubSignatureRequestSigner,
} from "./sub-signature-request-signer.js";
import { subSigningOptionsSchema, type SubSigningOptions } from "./sub-signing-options.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "./unions/sub-form-fields-per-document-base.js";

export type SignatureRequestEditRequest = {
  /**
   * Use `files[]` to indicate the uploaded file(s) to send for signature.
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  files?: Uint8Array;
  /**
   * Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  fileUrls?: string[];
  /**
   * Add Signers to your Signature Request.
   *
   * This endpoint requires either **signers** or **grouped_signers**, but not both.
   */
  signers?: SubSignatureRequestSigner[];
  /**
   * Add Grouped Signers to your Signature Request.
   *
   * This endpoint requires either **signers** or **grouped_signers**, but not both.
   */
  groupedSigners?: SubSignatureRequestGroupedSigners[];
  /** Allows signers to decline to sign a document if `true`. Defaults to `false`. @default false */
  allowDecline?: boolean;
  /**
   * Allows signers to reassign their signature requests to other signers if set to `true`. Defaults
   * to `false`.
   *
   * **NOTE:** Only available for Premium plan and higher.
   *
   * @default false
   */
  allowReassign?: boolean;
  /** A list describing the attachments */
  attachments?: SubAttachment[];
  /** The email addresses that should be CCed. */
  ccEmailAddresses?: string[];
  /**
   * The client id of the API App you want to associate with this request. Used to apply the
   * branding and callback url defined for the app.
   */
  clientId?: string;
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
  /** This allows the requester to specify field options for a signature request. */
  fieldOptions?: SubFieldOptions;
  /**
   * Group information for fields defined in `form_fields_per_document`. String-indexed JSON array
   * with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields
   * referencing a group defined in `form_field_groups`.
   */
  formFieldGroups?: SubFormFieldGroup[];
  /** Conditional Logic rules for fields defined in `form_fields_per_document`. */
  formFieldRules?: SubFormFieldRule[];
  /**
   * The fields that should appear on the document, expressed as an array of objects. (For more
   * details you can read about it here: [Using Form Fields per
   * Document](/docs/openapi/form-fields-per-document).)
   *
   * **NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have
   * additional required and optional parameters. Check out the list of [additional
   * parameters](/api/reference/constants/#form-fields-per-document) for these field types.
   *
   * * Text Field use `SubFormFieldsPerDocumentText`
   * * Dropdown Field use `SubFormFieldsPerDocumentDropdown`
   * * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
   * * Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
   * * Radio Field use `SubFormFieldsPerDocumentRadio`
   * * Signature Field use `SubFormFieldsPerDocumentSignature`
   * * Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
   * * Initials Field use `SubFormFieldsPerDocumentInitials`
   * * Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
   * * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  formFieldsPerDocument?: SubFormFieldsPerDocumentBase[];
  /**
   * Enables automatic Text Tag removal when set to true.
   *
   * **NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this
   * setting on `false` and instead hiding your text tags using white text or a similar approach.
   * See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro)
   * for more information.
   *
   * @default false
   */
  hideTextTags?: boolean;
  /**
   * Send with a value of `true` if you wish to enable [electronic identification
   * (eID)](https://www.hellosign.com/features/electronic-id), which requires the signer to verify
   * their identity with an eID provider to sign a document.<br> **NOTE:** You need the eID add-on
   * to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for
   * more information. Cannot be used in `test_mode`. Only works on requests with one signer.
   *
   * @default false
   */
  isEid?: boolean;
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
  /**
   * This allows the requester to specify the types allowed for creating a signature and specify
   * another signing options.
   *
   * **NOTE:** If `signing_options` are not defined in the request, the allowed types will default
   * to those specified in the account settings.
   *
   * **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.
   */
  signingOptions?: SubSigningOptions;
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
   * Send with a value of `true` if you wish to enable [Text
   * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document.
   * Defaults to disabled, or `false`.
   *
   * @default false
   */
  useTextTags?: boolean;
  /**
   * Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults
   * to `false`.
   *
   * @default false
   */
  ignoreTextTagsExtractionErrors?: boolean;
  /**
   * When the signature request will expire. Unsigned signatures will be moved to the expired
   * status, and no longer signable. See [Signature Request Expiration
   * Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expiresAt?: number | null;
};

export const signatureRequestEditRequestSchema: Schema<SignatureRequestEditRequest> =
  s.object<SignatureRequestEditRequest>({
    files: s.optional(s.bytes()),
    fileUrls: s.optional(s.array(s.string())),
    signers: s.optional(s.array(s.lazy(() => subSignatureRequestSignerSchema))),
    groupedSigners: s.optional(s.array(s.lazy(() => subSignatureRequestGroupedSignersSchema))),
    allowDecline: s.defaulted(s.boolean(), false),
    allowReassign: s.defaulted(s.boolean(), false),
    attachments: s.optional(s.array(s.lazy(() => subAttachmentSchema))),
    ccEmailAddresses: s.optional(s.array(s.string())),
    clientId: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
    fieldOptions: s.optional(s.lazy(() => subFieldOptionsSchema)),
    formFieldGroups: s.optional(s.array(s.lazy(() => subFormFieldGroupSchema))),
    formFieldRules: s.optional(s.array(s.lazy(() => subFormFieldRuleSchema))),
    formFieldsPerDocument: s.optional(s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema))),
    hideTextTags: s.defaulted(s.boolean(), false),
    isEid: s.defaulted(s.boolean(), false),
    message: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    signingOptions: s.optional(s.lazy(() => subSigningOptionsSchema)),
    signingRedirectUrl: s.optional(s.string()),
    subject: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    title: s.optional(s.string()),
    useTextTags: s.defaulted(s.boolean(), false),
    ignoreTextTagsExtractionErrors: s.defaulted(s.boolean(), false),
    expiresAt: s.optionalNullable(s.int()),
    _keysMap: {
      fileUrls: "file_urls",
      groupedSigners: "grouped_signers",
      allowDecline: "allow_decline",
      allowReassign: "allow_reassign",
      ccEmailAddresses: "cc_email_addresses",
      clientId: "client_id",
      customFields: "custom_fields",
      fieldOptions: "field_options",
      formFieldGroups: "form_field_groups",
      formFieldRules: "form_field_rules",
      formFieldsPerDocument: "form_fields_per_document",
      hideTextTags: "hide_text_tags",
      isEid: "is_eid",
      signingOptions: "signing_options",
      signingRedirectUrl: "signing_redirect_url",
      testMode: "test_mode",
      useTextTags: "use_text_tags",
      ignoreTextTagsExtractionErrors: "ignore_text_tags_extraction_errors",
      expiresAt: "expires_at",
    },
  });
