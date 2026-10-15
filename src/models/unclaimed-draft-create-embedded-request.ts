import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subAttachmentSchema, type SubAttachment } from "./sub-attachment.js";
import { subCustomFieldSchema, type SubCustomField } from "./sub-custom-field.js";
import { subEditorOptionsSchema, type SubEditorOptions } from "./sub-editor-options.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "./sub-field-options.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "./sub-form-field-group.js";
import { subFormFieldRuleSchema, type SubFormFieldRule } from "./sub-form-field-rule.js";
import { subSigningOptionsSchema, type SubSigningOptions } from "./sub-signing-options.js";
import { subUnclaimedDraftSignerSchema, type SubUnclaimedDraftSigner } from "./sub-unclaimed-draft-signer.js";
import { Type3, type3Schema } from "./type3.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "./unions/sub-form-fields-per-document-base.js";

export type UnclaimedDraftCreateEmbeddedRequest = {
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
   * This allows the requester to specify whether the user is allowed to provide email addresses to
   * CC when claiming the draft.
   *
   * @default true
   */
  allowCcs?: boolean;
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
   * Client id of the app used to create the draft. Used to apply the branding and callback url
   * defined for the app.
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
  /** This allows the requester to specify editor options when a preparing a document */
  editorOptions?: SubEditorOptions;
  /** This allows the requester to specify field options for a signature request. */
  fieldOptions?: SubFieldOptions;
  /** Provide users the ability to review/edit the signers. @default false */
  forceSignerPage?: boolean;
  /** Provide users the ability to review/edit the subject and message. @default false */
  forceSubjectMessage?: boolean;
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
  /**
   * The request from this draft will not automatically send to signers post-claim if set to `true`.
   * Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request
   * from hold when ready to send. Defaults to `false`.
   *
   * @default false
   */
  holdRequest?: boolean;
  /**
   * The request created from this draft will also be signable in embedded mode if set to `true`.
   * Defaults to `false`.
   *
   * @default false
   */
  isForEmbeddedSigning?: boolean;
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
   * The email address of the user that should be designated as the requester of this draft, if the
   * draft type is `request_signature`.
   */
  requesterEmailAddress: string;
  /** The URL you want signers redirected to after they successfully request a signature. */
  requestingRedirectUrl?: string;
  /**
   * This allows the requester to enable the editor/preview experience.
   *
   * - `show_preview=true`: Allows requesters to enable the editor/preview experience.
   * - `show_preview=false`: Allows requesters to disable the editor/preview experience.
   */
  showPreview?: boolean;
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
  /**
   * Disables the "Me (Now)" option for the person preparing the document. Does not work with type
   * `send_document`. Defaults to `false`.
   *
   * @default false
   */
  skipMeNow?: boolean;
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
   * The type of the draft. By default this is `request_signature`, but you can set it to
   * `send_document` if you want to self sign a document and download it.
   *
   * @default Type3.RequestSignature
   */
  type?: Type3;
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
   * Controls whether [auto fill
   * fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can
   * automatically populate a signer's information during signing.
   *
   * **NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature
   * request is the intended party_ before using this feature.
   *
   * @default false
   */
  populateAutoFillFields?: boolean;
  /**
   * When the signature request will expire. Unsigned signatures will be moved to the expired
   * status, and no longer signable. See [Signature Request Expiration
   * Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   *
   * **NOTE:** This does not correspond to the **expires_at** returned in the response.
   */
  expiresAt?: number | null;
};

export const unclaimedDraftCreateEmbeddedRequestSchema: Schema<UnclaimedDraftCreateEmbeddedRequest> =
  s.object<UnclaimedDraftCreateEmbeddedRequest>({
    files: s.optional(s.bytes()),
    fileUrls: s.optional(s.array(s.string())),
    allowCcs: s.defaulted(s.boolean(), true),
    allowDecline: s.defaulted(s.boolean(), false),
    allowReassign: s.defaulted(s.boolean(), false),
    attachments: s.optional(s.array(s.lazy(() => subAttachmentSchema))),
    ccEmailAddresses: s.optional(s.array(s.string())),
    clientId: s.string(),
    customFields: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
    editorOptions: s.optional(s.lazy(() => subEditorOptionsSchema)),
    fieldOptions: s.optional(s.lazy(() => subFieldOptionsSchema)),
    forceSignerPage: s.defaulted(s.boolean(), false),
    forceSubjectMessage: s.defaulted(s.boolean(), false),
    formFieldGroups: s.optional(s.array(s.lazy(() => subFormFieldGroupSchema))),
    formFieldRules: s.optional(s.array(s.lazy(() => subFormFieldRuleSchema))),
    formFieldsPerDocument: s.optional(s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema))),
    hideTextTags: s.defaulted(s.boolean(), false),
    holdRequest: s.defaulted(s.boolean(), false),
    isForEmbeddedSigning: s.defaulted(s.boolean(), false),
    message: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    requesterEmailAddress: s.string(),
    requestingRedirectUrl: s.optional(s.string()),
    showPreview: s.optional(s.boolean()),
    showProgressStepper: s.defaulted(s.boolean(), true),
    signers: s.optional(s.array(s.lazy(() => subUnclaimedDraftSignerSchema))),
    signingOptions: s.optional(s.lazy(() => subSigningOptionsSchema)),
    signingRedirectUrl: s.optional(s.string()),
    skipMeNow: s.defaulted(s.boolean(), false),
    subject: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    type: s.defaulted(type3Schema, Type3.RequestSignature),
    usePreexistingFields: s.defaulted(s.boolean(), false),
    useTextTags: s.defaulted(s.boolean(), false),
    ignoreTextTagsExtractionErrors: s.defaulted(s.boolean(), false),
    populateAutoFillFields: s.defaulted(s.boolean(), false),
    expiresAt: s.optionalNullable(s.int()),
    _keysMap: {
      fileUrls: "file_urls",
      allowCcs: "allow_ccs",
      allowDecline: "allow_decline",
      allowReassign: "allow_reassign",
      ccEmailAddresses: "cc_email_addresses",
      clientId: "client_id",
      customFields: "custom_fields",
      editorOptions: "editor_options",
      fieldOptions: "field_options",
      forceSignerPage: "force_signer_page",
      forceSubjectMessage: "force_subject_message",
      formFieldGroups: "form_field_groups",
      formFieldRules: "form_field_rules",
      formFieldsPerDocument: "form_fields_per_document",
      hideTextTags: "hide_text_tags",
      holdRequest: "hold_request",
      isForEmbeddedSigning: "is_for_embedded_signing",
      requesterEmailAddress: "requester_email_address",
      requestingRedirectUrl: "requesting_redirect_url",
      showPreview: "show_preview",
      showProgressStepper: "show_progress_stepper",
      signingOptions: "signing_options",
      signingRedirectUrl: "signing_redirect_url",
      skipMeNow: "skip_me_now",
      testMode: "test_mode",
      usePreexistingFields: "use_preexisting_fields",
      useTextTags: "use_text_tags",
      ignoreTextTagsExtractionErrors: "ignore_text_tags_extraction_errors",
      populateAutoFillFields: "populate_auto_fill_fields",
      expiresAt: "expires_at",
    },
  });
