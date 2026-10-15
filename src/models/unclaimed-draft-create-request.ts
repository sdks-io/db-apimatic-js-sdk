import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subAttachmentSchema, type SubAttachment } from "./sub-attachment.js";
import { subCustomFieldSchema, type SubCustomField } from "./sub-custom-field.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "./sub-field-options.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "./sub-form-field-group.js";
import { subFormFieldRuleSchema, type SubFormFieldRule } from "./sub-form-field-rule.js";
import { subSigningOptionsSchema, type SubSigningOptions } from "./sub-signing-options.js";
import { subUnclaimedDraftSignerSchema, type SubUnclaimedDraftSigner } from "./sub-unclaimed-draft-signer.js";
import { type2Schema, type Type2 } from "./type2.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "./unions/sub-form-fields-per-document-base.js";

export type UnclaimedDraftCreateRequest = {
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
  /** Allows signers to decline to sign a document if `true`. Defaults to `false`. @default false */
  allowDecline?: boolean;
  /** A list describing the attachments */
  attachments?: SubAttachment[];
  /** The email addresses that should be CCed. */
  ccEmailAddresses?: string[];
  /**
   * Client id of the app used to create the draft. Used to apply the branding and callback url
   * defined for the app.
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
   * Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to
   * `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags
   * with white text or something similar because the automatic removal system can cause unwanted
   * clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro)
   * walkthrough for more details.
   *
   * @default false
   */
  hideTextTags?: boolean;
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
  metadata?: Record<string, unknown>;
  /**
   * When only one step remains in the signature request process and this parameter is set to
   * `false` then the progress stepper will be hidden.
   *
   * @default true
   */
  showProgressStepper?: boolean;
  /** Add Signers to your Unclaimed Draft Signature Request. */
  signers?: SubUnclaimedDraftSigner[];
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
   * Whether this is a test, the signature request created from this draft will not be legally
   * binding if set to `true`. Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
  /**
   * The type of unclaimed draft to create. Use `send_document` to create a claimable file, and
   * `request_signature` for a claimable signature request. If the type is `request_signature` then
   * signers name and email_address are not optional.
   */
  type: Type2;
  /**
   * Set `use_text_tags` to `true` to enable [Text
   * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document
   * (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields,
   * enable the detection of these fields by setting the `use_preexisting_fields` to `true`
   * (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or
   * `use_preexisting_fields` parameter, not both.
   *
   * @default false
   */
  usePreexistingFields?: boolean;
  /**
   * Set `use_text_tags` to `true` to enable [Text
   * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document
   * (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields,
   * enable the detection of these fields by setting the `use_preexisting_fields` to `true`
   * (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or
   * `use_preexisting_fields` parameter, not both.
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
   *
   * **NOTE:** This does not correspond to the **expires_at** returned in the response.
   */
  expiresAt?: number | null;
};

export const unclaimedDraftCreateRequestSchema: Schema<UnclaimedDraftCreateRequest> =
  s.object<UnclaimedDraftCreateRequest>({
    files: s.optional(s.bytes()),
    fileUrls: s.optional(s.array(s.string())),
    allowDecline: s.defaulted(s.boolean(), false),
    attachments: s.optional(s.array(s.lazy(() => subAttachmentSchema))),
    ccEmailAddresses: s.optional(s.array(s.string())),
    clientId: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
    fieldOptions: s.optional(s.lazy(() => subFieldOptionsSchema)),
    formFieldGroups: s.optional(s.array(s.lazy(() => subFormFieldGroupSchema))),
    formFieldRules: s.optional(s.array(s.lazy(() => subFormFieldRuleSchema))),
    formFieldsPerDocument: s.optional(s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema))),
    hideTextTags: s.defaulted(s.boolean(), false),
    message: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    showProgressStepper: s.defaulted(s.boolean(), true),
    signers: s.optional(s.array(s.lazy(() => subUnclaimedDraftSignerSchema))),
    signingOptions: s.optional(s.lazy(() => subSigningOptionsSchema)),
    signingRedirectUrl: s.optional(s.string()),
    subject: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    type: type2Schema,
    usePreexistingFields: s.defaulted(s.boolean(), false),
    useTextTags: s.defaulted(s.boolean(), false),
    ignoreTextTagsExtractionErrors: s.defaulted(s.boolean(), false),
    expiresAt: s.optionalNullable(s.int()),
    _keysMap: {
      fileUrls: "file_urls",
      allowDecline: "allow_decline",
      ccEmailAddresses: "cc_email_addresses",
      clientId: "client_id",
      customFields: "custom_fields",
      fieldOptions: "field_options",
      formFieldGroups: "form_field_groups",
      formFieldRules: "form_field_rules",
      formFieldsPerDocument: "form_fields_per_document",
      hideTextTags: "hide_text_tags",
      showProgressStepper: "show_progress_stepper",
      signingOptions: "signing_options",
      signingRedirectUrl: "signing_redirect_url",
      testMode: "test_mode",
      usePreexistingFields: "use_preexisting_fields",
      useTextTags: "use_text_tags",
      ignoreTextTagsExtractionErrors: "ignore_text_tags_extraction_errors",
      expiresAt: "expires_at",
    },
  });
