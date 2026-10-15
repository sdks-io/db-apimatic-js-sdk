import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subCcSchema, type SubCc } from "./sub-cc.js";
import { subCustomFieldSchema, type SubCustomField } from "./sub-custom-field.js";
import { subEditorOptionsSchema, type SubEditorOptions } from "./sub-editor-options.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "./sub-field-options.js";
import { subSigningOptionsSchema, type SubSigningOptions } from "./sub-signing-options.js";
import {
  subUnclaimedDraftTemplateSignerSchema,
  type SubUnclaimedDraftTemplateSigner,
} from "./sub-unclaimed-draft-template-signer.js";

export type UnclaimedDraftCreateEmbeddedWithTemplateRequest = {
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
  /** Add CC email recipients. Required when a CC role exists for the Template. */
  ccs?: SubCc[];
  /**
   * Client id of the app used to create the draft. Used to apply the branding and callback url
   * defined for the app.
   */
  clientId: string;
  /**
   * An array defining values and options for custom fields. Required when a custom field exists in
   * the Template.
   */
  customFields?: SubCustomField[];
  /** This allows the requester to specify editor options when a preparing a document */
  editorOptions?: SubEditorOptions;
  /** This allows the requester to specify field options for a signature request. */
  fieldOptions?: SubFieldOptions;
  /**
   * Use `files[]` to append additional files to the signature request being created from the
   * template. Dropbox Sign will parse the files for [text
   * tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature
   * request. Text tags for signers not on the template(s) will be ignored.
   *
   * **files** or **file_urls[]** is required, but not both.
   */
  files?: Uint8Array;
  /**
   * Use file_urls[] to append additional files to the signature request being created from the
   * template. Dropbox Sign will download the file, then parse it for [text
   * tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request.
   * Text tags for signers not on the template(s) will be ignored.
   *
   * **files** or **file_urls[]** is required, but not both.
   */
  fileUrls?: string[];
  /** Provide users the ability to review/edit the template signer roles. @default false */
  forceSignerRoles?: boolean;
  /** Provide users the ability to review/edit the template subject and message. @default false */
  forceSubjectMessage?: boolean;
  /**
   * The request from this draft will not automatically send to signers post-claim if set to 1.
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
   * This allows the requester to enable the preview experience (i.e. does not allow the requester's
   * end user to add any additional fields via the editor).
   *
   * - `preview_only=true`: Allows requesters to enable the preview only experience.
   * - `preview_only=false`: Allows requesters to disable the preview only experience.
   *
   * **NOTE:** This parameter overwrites `show_preview=1` (if set).
   *
   * @default false
   */
  previewOnly?: boolean;
  /** The email address of the user that should be designated as the requester of this draft. */
  requesterEmailAddress: string;
  /** The URL you want signers redirected to after they successfully request a signature. */
  requestingRedirectUrl?: string;
  /**
   * This allows the requester to enable the editor/preview experience.
   *
   * - `show_preview=true`: Allows requesters to enable the editor/preview experience.
   * - `show_preview=false`: Allows requesters to disable the editor/preview experience.
   *
   * @default false
   */
  showPreview?: boolean;
  /**
   * When only one step remains in the signature request process and this parameter is set to
   * `false` then the progress stepper will be hidden.
   *
   * @default true
   */
  showProgressStepper?: boolean;
  /** Add Signers to your Templated-based Signature Request. */
  signers?: SubUnclaimedDraftTemplateSigner[];
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
   * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
   * which the templates will be used.
   */
  templateIds: string[];
  /**
   * Whether this is a test, the signature request created from this draft will not be legally
   * binding if set to `true`. Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
  /** The title you want to assign to the SignatureRequest. */
  title?: string;
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
   * This allows the requester to specify whether the user is allowed to provide email addresses to
   * CC when claiming the draft.
   *
   * @default false
   */
  allowCcs?: boolean;
};

export const unclaimedDraftCreateEmbeddedWithTemplateRequestSchema: Schema<UnclaimedDraftCreateEmbeddedWithTemplateRequest> =
  s.object<UnclaimedDraftCreateEmbeddedWithTemplateRequest>({
    allowDecline: s.defaulted(s.boolean(), false),
    allowReassign: s.defaulted(s.boolean(), false),
    ccs: s.optional(s.array(s.lazy(() => subCcSchema))),
    clientId: s.string(),
    customFields: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
    editorOptions: s.optional(s.lazy(() => subEditorOptionsSchema)),
    fieldOptions: s.optional(s.lazy(() => subFieldOptionsSchema)),
    files: s.optional(s.bytes()),
    fileUrls: s.optional(s.array(s.string())),
    forceSignerRoles: s.defaulted(s.boolean(), false),
    forceSubjectMessage: s.defaulted(s.boolean(), false),
    holdRequest: s.defaulted(s.boolean(), false),
    isForEmbeddedSigning: s.defaulted(s.boolean(), false),
    message: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    previewOnly: s.defaulted(s.boolean(), false),
    requesterEmailAddress: s.string(),
    requestingRedirectUrl: s.optional(s.string()),
    showPreview: s.defaulted(s.boolean(), false),
    showProgressStepper: s.defaulted(s.boolean(), true),
    signers: s.optional(s.array(s.lazy(() => subUnclaimedDraftTemplateSignerSchema))),
    signingOptions: s.optional(s.lazy(() => subSigningOptionsSchema)),
    signingRedirectUrl: s.optional(s.string()),
    skipMeNow: s.defaulted(s.boolean(), false),
    subject: s.optional(s.string()),
    templateIds: s.array(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    title: s.optional(s.string()),
    populateAutoFillFields: s.defaulted(s.boolean(), false),
    allowCcs: s.defaulted(s.boolean(), false),
    _keysMap: {
      allowDecline: "allow_decline",
      allowReassign: "allow_reassign",
      clientId: "client_id",
      customFields: "custom_fields",
      editorOptions: "editor_options",
      fieldOptions: "field_options",
      fileUrls: "file_urls",
      forceSignerRoles: "force_signer_roles",
      forceSubjectMessage: "force_subject_message",
      holdRequest: "hold_request",
      isForEmbeddedSigning: "is_for_embedded_signing",
      previewOnly: "preview_only",
      requesterEmailAddress: "requester_email_address",
      requestingRedirectUrl: "requesting_redirect_url",
      showPreview: "show_preview",
      showProgressStepper: "show_progress_stepper",
      signingOptions: "signing_options",
      signingRedirectUrl: "signing_redirect_url",
      skipMeNow: "skip_me_now",
      templateIds: "template_ids",
      testMode: "test_mode",
      populateAutoFillFields: "populate_auto_fill_fields",
      allowCcs: "allow_ccs",
    },
  });
