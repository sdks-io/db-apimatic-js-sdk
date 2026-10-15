import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { subAttachmentSchema, type SubAttachment } from "../models/sub-attachment.js";
import { subCcSchema, type SubCc } from "../models/sub-cc.js";
import { subCustomFieldSchema, type SubCustomField } from "../models/sub-custom-field.js";
import { subEditorOptionsSchema, type SubEditorOptions } from "../models/sub-editor-options.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "../models/sub-field-options.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "../models/sub-form-field-group.js";
import { subFormFieldRuleSchema, type SubFormFieldRule } from "../models/sub-form-field-rule.js";
import { subSigningOptionsSchema, type SubSigningOptions } from "../models/sub-signing-options.js";
import {
  subUnclaimedDraftSignerSchema,
  type SubUnclaimedDraftSigner,
} from "../models/sub-unclaimed-draft-signer.js";
import {
  subUnclaimedDraftTemplateSignerSchema,
  type SubUnclaimedDraftTemplateSigner,
} from "../models/sub-unclaimed-draft-template-signer.js";
import { type2Schema, type Type2 } from "../models/type2.js";
import { Type3, type3Schema } from "../models/type3.js";
import {
  unclaimedDraftCreateResponseSchema,
  type UnclaimedDraftCreateResponse,
} from "../models/unclaimed-draft-create-response.js";
import {
  unclaimedDraftEditAndResendRequestSchema,
  type UnclaimedDraftEditAndResendRequest,
} from "../models/unclaimed-draft-edit-and-resend-request.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "../models/unions/sub-form-fields-per-document-base.js";
import type { Servers } from "../servers.js";

export class UnclaimedDraft {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Unclaimed Draft
   *
   * @remarks
   * Creates a new Draft that can be claimed using the claim URL. The first authenticated user to
   * access the URL will claim the Draft and will be shown either the "Sign and send" or the
   * "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result
   * in a 404.
   *
   * @returns successful operation
   *
   * @throws {@link UnclaimedDraft.UnclaimedDraftCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unclaimedDraftCreate(
    request: UnclaimedDraft.UnclaimedDraftCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/unclaimed_draft/create"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "type", value: request.type, schema: type2Schema },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "attachments",
              value: request.attachments,
              schema: s.optional(s.array(s.lazy(() => subAttachmentSchema))),
            },
            {
              kind: "text",
              name: "cc_email_addresses",
              value: request.ccEmailAddresses,
              schema: s.optional(s.array(s.string())),
            },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "custom_fields",
              value: request.customFields,
              schema: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
            },
            {
              kind: "text",
              name: "field_options",
              value: request.fieldOptions,
              schema: s.optional(s.lazy(() => subFieldOptionsSchema)),
            },
            {
              kind: "text",
              name: "form_field_groups",
              value: request.formFieldGroups,
              schema: s.optional(s.array(s.lazy(() => subFormFieldGroupSchema))),
            },
            {
              kind: "text",
              name: "form_field_rules",
              value: request.formFieldRules,
              schema: s.optional(s.array(s.lazy(() => subFormFieldRuleSchema))),
            },
            {
              kind: "text",
              name: "form_fields_per_document",
              value: request.formFieldsPerDocument,
              schema: s.optional(s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema))),
            },
            {
              kind: "text",
              name: "hide_text_tags",
              value: request.hideTextTags,
              schema: s.defaulted(s.boolean(), false),
            },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
            },
            {
              kind: "text",
              name: "show_progress_stepper",
              value: request.showProgressStepper,
              schema: s.defaulted(s.boolean(), true),
            },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.optional(s.array(s.lazy(() => subUnclaimedDraftSignerSchema))),
            },
            {
              kind: "text",
              name: "signing_options",
              value: request.signingOptions,
              schema: s.optional(s.lazy(() => subSigningOptionsSchema)),
            },
            {
              kind: "text",
              name: "signing_redirect_url",
              value: request.signingRedirectUrl,
              schema: s.optional(s.string()),
            },
            { kind: "text", name: "subject", value: request.subject, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "test_mode",
              value: request.testMode,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "use_preexisting_fields",
              value: request.usePreexistingFields,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "use_text_tags",
              value: request.useTextTags,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ignore_text_tags_extraction_errors",
              value: request.ignoreTextTagsExtractionErrors,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "expires_at",
              value: request.expiresAt,
              schema: s.optionalNullable(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: unclaimedDraftCreateResponseSchema },
        errorFactory: UnclaimedDraft.UnclaimedDraftCreateError,
      },
      options,
    );
  }

  /**
   * Create Embedded Unclaimed Draft
   *
   * @remarks
   * Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated
   * user to access the URL will claim the Draft and will be shown the "Request signature" page with
   * the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded
   * endpoint the `requester_email_address` parameter is required.
   *
   * **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal
   * drafts can be used and accessed on Dropbox Sign.
   *
   * @returns successful operation
   *
   * @throws {@link UnclaimedDraft.UnclaimedDraftCreateEmbeddedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unclaimedDraftCreateEmbedded(
    request: UnclaimedDraft.UnclaimedDraftCreateEmbeddedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/unclaimed_draft/create_embedded"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "client_id", value: request.clientId, schema: s.string() },
            {
              kind: "text",
              name: "requester_email_address",
              value: request.requesterEmailAddress,
              schema: s.string(),
            },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "allow_ccs",
              value: request.allowCcs,
              schema: s.defaulted(s.boolean(), true),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "allow_reassign",
              value: request.allowReassign,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "attachments",
              value: request.attachments,
              schema: s.optional(s.array(s.lazy(() => subAttachmentSchema))),
            },
            {
              kind: "text",
              name: "cc_email_addresses",
              value: request.ccEmailAddresses,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "custom_fields",
              value: request.customFields,
              schema: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
            },
            {
              kind: "text",
              name: "editor_options",
              value: request.editorOptions,
              schema: s.optional(s.lazy(() => subEditorOptionsSchema)),
            },
            {
              kind: "text",
              name: "field_options",
              value: request.fieldOptions,
              schema: s.optional(s.lazy(() => subFieldOptionsSchema)),
            },
            {
              kind: "text",
              name: "force_signer_page",
              value: request.forceSignerPage,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "force_subject_message",
              value: request.forceSubjectMessage,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "form_field_groups",
              value: request.formFieldGroups,
              schema: s.optional(s.array(s.lazy(() => subFormFieldGroupSchema))),
            },
            {
              kind: "text",
              name: "form_field_rules",
              value: request.formFieldRules,
              schema: s.optional(s.array(s.lazy(() => subFormFieldRuleSchema))),
            },
            {
              kind: "text",
              name: "form_fields_per_document",
              value: request.formFieldsPerDocument,
              schema: s.optional(s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema))),
            },
            {
              kind: "text",
              name: "hide_text_tags",
              value: request.hideTextTags,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "hold_request",
              value: request.holdRequest,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "is_for_embedded_signing",
              value: request.isForEmbeddedSigning,
              schema: s.defaulted(s.boolean(), false),
            },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
            },
            {
              kind: "text",
              name: "requesting_redirect_url",
              value: request.requestingRedirectUrl,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "show_preview",
              value: request.showPreview,
              schema: s.optional(s.boolean()),
            },
            {
              kind: "text",
              name: "show_progress_stepper",
              value: request.showProgressStepper,
              schema: s.defaulted(s.boolean(), true),
            },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.optional(s.array(s.lazy(() => subUnclaimedDraftSignerSchema))),
            },
            {
              kind: "text",
              name: "signing_options",
              value: request.signingOptions,
              schema: s.optional(s.lazy(() => subSigningOptionsSchema)),
            },
            {
              kind: "text",
              name: "signing_redirect_url",
              value: request.signingRedirectUrl,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "skip_me_now",
              value: request.skipMeNow,
              schema: s.defaulted(s.boolean(), false),
            },
            { kind: "text", name: "subject", value: request.subject, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "test_mode",
              value: request.testMode,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "type",
              value: request.type,
              schema: s.defaulted(type3Schema, Type3.RequestSignature),
            },
            {
              kind: "text",
              name: "use_preexisting_fields",
              value: request.usePreexistingFields,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "use_text_tags",
              value: request.useTextTags,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ignore_text_tags_extraction_errors",
              value: request.ignoreTextTagsExtractionErrors,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "populate_auto_fill_fields",
              value: request.populateAutoFillFields,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "expires_at",
              value: request.expiresAt,
              schema: s.optionalNullable(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: unclaimedDraftCreateResponseSchema },
        errorFactory: UnclaimedDraft.UnclaimedDraftCreateEmbeddedError,
      },
      options,
    );
  }

  /**
   * Create Embedded Unclaimed Draft with Template
   *
   * @remarks
   * Creates a new Draft with a previously saved template(s) that can be claimed and used in an
   * embedded iFrame. The first authenticated user to access the URL will claim the Draft and will
   * be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL
   * will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is
   * required.
   *
   * **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal
   * drafts can be used and accessed on Dropbox Sign.
   *
   * @returns successful operation
   *
   * @throws {@link UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unclaimedDraftCreateEmbeddedWithTemplate(
    request: UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/unclaimed_draft/create_embedded_with_template"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "client_id", value: request.clientId, schema: s.string() },
            {
              kind: "text",
              name: "requester_email_address",
              value: request.requesterEmailAddress,
              schema: s.string(),
            },
            { kind: "text", name: "template_ids", value: request.templateIds, schema: s.array(s.string()) },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "allow_reassign",
              value: request.allowReassign,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ccs",
              value: request.ccs,
              schema: s.optional(s.array(s.lazy(() => subCcSchema))),
            },
            {
              kind: "text",
              name: "custom_fields",
              value: request.customFields,
              schema: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
            },
            {
              kind: "text",
              name: "editor_options",
              value: request.editorOptions,
              schema: s.optional(s.lazy(() => subEditorOptionsSchema)),
            },
            {
              kind: "text",
              name: "field_options",
              value: request.fieldOptions,
              schema: s.optional(s.lazy(() => subFieldOptionsSchema)),
            },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "force_signer_roles",
              value: request.forceSignerRoles,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "force_subject_message",
              value: request.forceSubjectMessage,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "hold_request",
              value: request.holdRequest,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "is_for_embedded_signing",
              value: request.isForEmbeddedSigning,
              schema: s.defaulted(s.boolean(), false),
            },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
            },
            {
              kind: "text",
              name: "preview_only",
              value: request.previewOnly,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "requesting_redirect_url",
              value: request.requestingRedirectUrl,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "show_preview",
              value: request.showPreview,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "show_progress_stepper",
              value: request.showProgressStepper,
              schema: s.defaulted(s.boolean(), true),
            },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.optional(s.array(s.lazy(() => subUnclaimedDraftTemplateSignerSchema))),
            },
            {
              kind: "text",
              name: "signing_options",
              value: request.signingOptions,
              schema: s.optional(s.lazy(() => subSigningOptionsSchema)),
            },
            {
              kind: "text",
              name: "signing_redirect_url",
              value: request.signingRedirectUrl,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "skip_me_now",
              value: request.skipMeNow,
              schema: s.defaulted(s.boolean(), false),
            },
            { kind: "text", name: "subject", value: request.subject, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "test_mode",
              value: request.testMode,
              schema: s.defaulted(s.boolean(), false),
            },
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "populate_auto_fill_fields",
              value: request.populateAutoFillFields,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "allow_ccs",
              value: request.allowCcs,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: unclaimedDraftCreateResponseSchema },
        errorFactory: UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError,
      },
      options,
    );
  }

  /**
   * Edit and Resend Unclaimed Draft
   *
   * @remarks
   * Creates a new signature request from an embedded request that can be edited prior to being sent
   * to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited
   * in embedded editor. Requester's email address will remain unchanged if
   * `requester_email_address` parameter is not set.
   *
   * **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal
   * drafts can be used and accessed on Dropbox Sign.
   *
   * @returns successful operation
   *
   * @throws {@link UnclaimedDraft.UnclaimedDraftEditAndResendError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unclaimedDraftEditAndResend(
    request: UnclaimedDraft.UnclaimedDraftEditAndResendRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftEditAndResendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/unclaimed_draft/edit_and_resend/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: unclaimedDraftEditAndResendRequestSchema },
      },
      {
        success: { kind: "json", schema: unclaimedDraftCreateResponseSchema },
        errorFactory: UnclaimedDraft.UnclaimedDraftEditAndResendError,
      },
      options,
    );
  }
}

export namespace UnclaimedDraft {
  export type UnclaimedDraftCreateRequestParams = {
    /**
     * The type of unclaimed draft to create. Use `send_document` to create a claimable file, and
     * `request_signature` for a claimable signature request. If the type is `request_signature`
     * then signers name and email_address are not optional.
     */
    type: Type2;
    /**
     * Use `files[]` to indicate the uploaded file(s) to send for signature.
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    files?: FileInput;
    /**
     * Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    fileUrls?: string[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
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
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values
     * back with `custom_fields` together in one API call.
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
     */
    metadata?: Record<string, Record<string, unknown>>;
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
     * Set `use_text_tags` to `true` to enable [Text
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined
     * fields, enable the detection of these fields by setting the `use_preexisting_fields` to
     * `true` (defaults to disabled, or `false`). Currently we only support use of either
     * `use_text_tags` or `use_preexisting_fields` parameter, not both.
     *
     * @default false
     */
    usePreexistingFields?: boolean;
    /**
     * Set `use_text_tags` to `true` to enable [Text
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined
     * fields, enable the detection of these fields by setting the `use_preexisting_fields` to
     * `true` (defaults to disabled, or `false`). Currently we only support use of either
     * `use_text_tags` or `use_preexisting_fields` parameter, not both.
     *
     * @default false
     */
    useTextTags?: boolean;
    /**
     * Sent with a value of `true` to ignore the validation errors from text tags extraction.
     * Defaults to `false`.
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

  export class UnclaimedDraftCreateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UnclaimedDraftCreateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UnclaimedDraftCreateEmbeddedRequestParams = {
    /**
     * Client id of the app used to create the draft. Used to apply the branding and callback url
     * defined for the app.
     */
    clientId: string;
    /**
     * The email address of the user that should be designated as the requester of this draft, if
     * the draft type is `request_signature`.
     */
    requesterEmailAddress: string;
    /**
     * Use `files[]` to indicate the uploaded file(s) to send for signature.
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    files?: FileInput;
    /**
     * Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    fileUrls?: string[];
    /**
     * This allows the requester to specify whether the user is allowed to provide email addresses
     * to CC when claiming the draft.
     *
     * @default true
     */
    allowCcs?: boolean;
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /**
     * Allows signers to reassign their signature requests to other signers if set to `true`.
     * Defaults to `false`.
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
     * When used together with merge fields, `custom_fields` allows users to add pre-filled data to
     * their signature requests.
     *
     * Pre-filled data can be used with "send-once" signature requests by adding merge fields with
     * `form_fields_per_document` or [Text
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values
     * back with `custom_fields` together in one API call.
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
     * The request from this draft will not automatically send to signers post-claim if set to
     * `true`. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the
     * request from hold when ready to send. Defaults to `false`.
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
     */
    metadata?: Record<string, Record<string, unknown>>;
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
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined
     * fields, enable the detection of these fields by setting the `use_preexisting_fields` to
     * `true` (defaults to disabled, or `false`). Currently we only support use of either
     * `use_text_tags` or `use_preexisting_fields` parameter, not both.
     *
     * @default false
     */
    usePreexistingFields?: boolean;
    /**
     * Set `use_text_tags` to `true` to enable [Text
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined
     * fields, enable the detection of these fields by setting the `use_preexisting_fields` to
     * `true` (defaults to disabled, or `false`). Currently we only support use of either
     * `use_text_tags` or `use_preexisting_fields` parameter, not both.
     *
     * @default false
     */
    useTextTags?: boolean;
    /**
     * Sent with a value of `true` to ignore the validation errors from text tags extraction.
     * Defaults to `false`.
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

  export class UnclaimedDraftCreateEmbeddedError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UnclaimedDraftCreateEmbeddedError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UnclaimedDraftCreateEmbeddedWithTemplateRequestParams = {
    /**
     * Client id of the app used to create the draft. Used to apply the branding and callback url
     * defined for the app.
     */
    clientId: string;
    /** The email address of the user that should be designated as the requester of this draft. */
    requesterEmailAddress: string;
    /**
     * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
     * which the templates will be used.
     */
    templateIds: string[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /**
     * Allows signers to reassign their signature requests to other signers if set to `true`.
     * Defaults to `false`.
     *
     * **NOTE:** Only available for Premium plan and higher.
     *
     * @default false
     */
    allowReassign?: boolean;
    /** Add CC email recipients. Required when a CC role exists for the Template. */
    ccs?: SubCc[];
    /**
     * An array defining values and options for custom fields. Required when a custom field exists
     * in the Template.
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
    files?: FileInput;
    /**
     * Use file_urls[] to append additional files to the signature request being created from the
     * template. Dropbox Sign will download the file, then parse it for [text
     * tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature
     * request. Text tags for signers not on the template(s) will be ignored.
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
     */
    metadata?: Record<string, Record<string, unknown>>;
    /**
     * This allows the requester to enable the preview experience (i.e. does not allow the
     * requester's end user to add any additional fields via the editor).
     *
     * - `preview_only=true`: Allows requesters to enable the preview only experience.
     * - `preview_only=false`: Allows requesters to disable the preview only experience.
     *
     * **NOTE:** This parameter overwrites `show_preview=1` (if set).
     *
     * @default false
     */
    previewOnly?: boolean;
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
     * This allows the requester to specify whether the user is allowed to provide email addresses
     * to CC when claiming the draft.
     *
     * @default false
     */
    allowCcs?: boolean;
  };

  export class UnclaimedDraftCreateEmbeddedWithTemplateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UnclaimedDraftCreateEmbeddedWithTemplateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UnclaimedDraftEditAndResendRequestParams = {
    /** The ID of the signature request to edit and resend. */
    signatureRequestId: string;
    body: UnclaimedDraftEditAndResendRequest;
  };

  export class UnclaimedDraftEditAndResendError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UnclaimedDraftEditAndResendError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
