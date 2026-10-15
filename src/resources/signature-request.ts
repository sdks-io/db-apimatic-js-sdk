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
import {
  bulkSendJobSendResponseSchema,
  type BulkSendJobSendResponse,
} from "../models/bulk-send-job-send-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { fileResponseDataUriSchema, type FileResponseDataUri } from "../models/file-response-data-uri.js";
import { fileResponseSchema, type FileResponse } from "../models/file-response.js";
import { FileType, fileTypeSchema } from "../models/file-type.js";
import {
  signatureRequestGetResponseSchema,
  type SignatureRequestGetResponse,
} from "../models/signature-request-get-response.js";
import {
  signatureRequestListResponseSchema,
  type SignatureRequestListResponse,
} from "../models/signature-request-list-response.js";
import {
  signatureRequestRemindRequestSchema,
  type SignatureRequestRemindRequest,
} from "../models/signature-request-remind-request.js";
import {
  signatureRequestUpdateRequestSchema,
  type SignatureRequestUpdateRequest,
} from "../models/signature-request-update-request.js";
import { subAttachmentSchema, type SubAttachment } from "../models/sub-attachment.js";
import { subBulkSignerListSchema, type SubBulkSignerList } from "../models/sub-bulk-signer-list.js";
import { subCcSchema, type SubCc } from "../models/sub-cc.js";
import { subCustomFieldSchema, type SubCustomField } from "../models/sub-custom-field.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "../models/sub-field-options.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "../models/sub-form-field-group.js";
import { subFormFieldRuleSchema, type SubFormFieldRule } from "../models/sub-form-field-rule.js";
import {
  subSignatureRequestGroupedSignersSchema,
  type SubSignatureRequestGroupedSigners,
} from "../models/sub-signature-request-grouped-signers.js";
import {
  subSignatureRequestSignerSchema,
  type SubSignatureRequestSigner,
} from "../models/sub-signature-request-signer.js";
import {
  subSignatureRequestTemplateSignerSchema,
  type SubSignatureRequestTemplateSigner,
} from "../models/sub-signature-request-template-signer.js";
import { subSigningOptionsSchema, type SubSigningOptions } from "../models/sub-signing-options.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "../models/unions/sub-form-fields-per-document-base.js";
import type { Servers } from "../servers.js";

export class SignatureRequest {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Embedded Bulk Send with Template
   *
   * @remarks
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided
   * Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame.
   * These embedded signature requests can only be signed in embedded iFrames whereas normal
   * signature requests can only be signed on Dropbox Sign.
   *
   * **NOTE:** Only available for Standard plan and higher.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestBulkCreateEmbeddedWithTemplate(
    request: SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    BulkSendJobSendResponse,
    SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/bulk_create_embedded_with_template"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "template_ids", value: request.templateIds, schema: s.array(s.string()) },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.string() },
            { kind: "file", name: "signer_file", value: request.signerFile },
            {
              kind: "text",
              name: "signer_list",
              value: request.signerList,
              schema: s.optional(s.array(s.lazy(() => subBulkSignerListSchema))),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
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
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
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
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: bulkSendJobSendResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError,
      },
      options,
    );
  }

  /**
   * Bulk Send with Template
   *
   * @remarks
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided
   * Template(s) specified with the `template_ids` parameter.
   *
   * **NOTE:** Only available for Standard plan and higher.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestBulkSendWithTemplateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestBulkSendWithTemplate(
    request: SignatureRequest.SignatureRequestBulkSendWithTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkSendJobSendResponse, SignatureRequest.SignatureRequestBulkSendWithTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/bulk_send_with_template"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "template_ids", value: request.templateIds, schema: s.array(s.string()) },
            { kind: "file", name: "signer_file", value: request.signerFile },
            {
              kind: "text",
              name: "signer_list",
              value: request.signerList,
              schema: s.optional(s.array(s.lazy(() => subBulkSignerListSchema))),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ccs",
              value: request.ccs,
              schema: s.optional(s.array(s.lazy(() => subCcSchema))),
            },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "custom_fields",
              value: request.customFields,
              schema: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
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
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: bulkSendJobSendResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestBulkSendWithTemplateError,
      },
      options,
    );
  }

  /**
   * Cancel Incomplete Signature Request
   *
   * @remarks
   * Cancels an incomplete signature request. This action is **not reversible**.
   *
   * The request will be canceled and signers will no longer be able to sign. If they try to access
   * the signature request they will receive a HTTP 410 status code indicating that the resource has
   * been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an
   * empty 200 OK response if the signature request is eligible to be canceled and has been
   * successfully queued.
   *
   * This 200 OK response does not indicate a successful cancelation of the signature request
   * itself. The cancelation is confirmed via the `signature_request_canceled` event. It is
   * recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented
   * to listen for the `signature_request_canceled` event. This callback will be sent only when the
   * cancelation has completed successfully. If a callback handler has been configured and the event
   * has not been received within 60 minutes of making the call, check the status of the request in
   * the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if
   * necessary.
   *
   * To be eligible for cancelation, a signature request must have been sent successfully, must not
   * yet have been signed by all signers, and you must either be the sender or own the API app under
   * which it was sent. A partially signed signature request can be canceled.
   *
   * **NOTE:** To remove your access to a completed signature request, use the endpoint: `POST
   * /signature_request/remove/[:signature_request_id]`.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestCancelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestCancel(
    request: SignatureRequest.SignatureRequestCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, SignatureRequest.SignatureRequestCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/cancel/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: SignatureRequest.SignatureRequestCancelError,
      },
      options,
    );
  }

  /**
   * Create Embedded Signature Request
   *
   * @remarks
   * Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame.
   * If form_fields_per_document is not specified, a signature page will be affixed where all
   * signers will be required to add their signature, signifying their agreement to all contained
   * documents. Note that embedded signature requests can only be signed in embedded iFrames whereas
   * normal signature requests can only be signed on Dropbox Sign.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestCreateEmbeddedError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestCreateEmbedded(
    request: SignatureRequest.SignatureRequestCreateEmbeddedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestCreateEmbeddedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/create_embedded"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "client_id", value: request.clientId, schema: s.string() },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestSignerSchema))),
            },
            {
              kind: "text",
              name: "grouped_signers",
              value: request.groupedSigners,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestGroupedSignersSchema))),
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
              name: "signing_options",
              value: request.signingOptions,
              schema: s.optional(s.lazy(() => subSigningOptionsSchema)),
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
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestCreateEmbeddedError,
      },
      options,
    );
  }

  /**
   * Create Embedded Signature Request with Template
   *
   * @remarks
   * Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded
   * iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas
   * normal signature requests can only be signed on Dropbox Sign.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestCreateEmbeddedWithTemplate(
    request: SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SignatureRequestGetResponse,
    SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/create_embedded_with_template"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "template_ids", value: request.templateIds, schema: s.array(s.string()) },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.string() },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.array(s.lazy(() => subSignatureRequestTemplateSignerSchema)),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
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
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
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
              name: "signing_options",
              value: request.signingOptions,
              schema: s.optional(s.lazy(() => subSigningOptionsSchema)),
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
              name: "expires_at",
              value: request.expiresAt,
              schema: s.optionalNullable(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError,
      },
      options,
    );
  }

  /**
   * Edit Signature Request
   *
   * @remarks
   * Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document`
   * is not specified, a signature page will be affixed where all signers will be required to add
   * their signature, signifying their agreement to all contained documents.
   *
   * **NOTE:** Edit and resend *will* deduct your signature request quota.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestEditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestEdit(
    request: SignatureRequest.SignatureRequestEditRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/signature_request/edit/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestSignerSchema))),
            },
            {
              kind: "text",
              name: "grouped_signers",
              value: request.groupedSigners,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestGroupedSignersSchema))),
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
            { kind: "text", name: "is_eid", value: request.isEid, schema: s.defaulted(s.boolean(), false) },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
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
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestEditError,
      },
      options,
    );
  }

  /**
   * Edit Embedded Signature Request
   *
   * @remarks
   * Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If
   * form_fields_per_document is not specified, a signature page will be affixed where all signers
   * will be required to add their signature, signifying their agreement to all contained documents.
   * Note that embedded signature requests can only be signed in embedded iFrames whereas normal
   * signature requests can only be signed on Dropbox Sign.
   *
   * **NOTE:** Edit and resend *will* deduct your signature request quota.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestEditEmbeddedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestEditEmbedded(
    request: SignatureRequest.SignatureRequestEditEmbeddedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/signature_request/edit_embedded/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "client_id", value: request.clientId, schema: s.string() },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestSignerSchema))),
            },
            {
              kind: "text",
              name: "grouped_signers",
              value: request.groupedSigners,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestGroupedSignersSchema))),
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
              name: "signing_options",
              value: request.signingOptions,
              schema: s.optional(s.lazy(() => subSigningOptionsSchema)),
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
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestEditEmbeddedError,
      },
      options,
    );
  }

  /**
   * Edit Embedded Signature Request with Template
   *
   * @remarks
   * Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame.
   * Note that embedded signature requests can only be signed in embedded iFrames whereas normal
   * signature requests can only be signed on Dropbox Sign.
   *
   * **NOTE:** Edit and resend *will* deduct your signature request quota.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestEditEmbeddedWithTemplate(
    request: SignatureRequest.SignatureRequestEditEmbeddedWithTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/signature_request/edit_embedded_with_template/{signature_request_id}",
        ),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "template_ids", value: request.templateIds, schema: s.array(s.string()) },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.string() },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.array(s.lazy(() => subSignatureRequestTemplateSignerSchema)),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
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
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
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
              name: "signing_options",
              value: request.signingOptions,
              schema: s.optional(s.lazy(() => subSigningOptionsSchema)),
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
          ],
        },
      },
      {
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError,
      },
      options,
    );
  }

  /**
   * Edit Signature Request With Template
   *
   * @remarks
   * Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids
   * parameter.
   *
   * **NOTE:** Edit and resend *will* deduct your signature request quota.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestEditWithTemplateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestEditWithTemplate(
    request: SignatureRequest.SignatureRequestEditWithTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditWithTemplateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/signature_request/edit_with_template/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "template_ids", value: request.templateIds, schema: s.array(s.string()) },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.array(s.lazy(() => subSignatureRequestTemplateSignerSchema)),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ccs",
              value: request.ccs,
              schema: s.optional(s.array(s.lazy(() => subCcSchema))),
            },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "custom_fields",
              value: request.customFields,
              schema: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
            },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            { kind: "text", name: "is_eid", value: request.isEid, schema: s.defaulted(s.boolean(), false) },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
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
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestEditWithTemplateError,
      },
      options,
    );
  }

  /**
   * Download Files
   *
   * @remarks
   * Obtain a copy of the current documents specified by the `signature_request_id` parameter.
   * Returns a PDF or ZIP file.
   *
   * If the files are currently being prepared, a status code of `409` will be returned instead.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestFilesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestFiles(
    request: SignatureRequest.SignatureRequestFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SignatureRequest.SignatureRequestFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signature_request/files/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [
          { name: "file_type", value: request.fileType, schema: s.defaulted(fileTypeSchema, FileType.Pdf) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SignatureRequest.SignatureRequestFilesError,
      },
      options,
    );
  }

  /**
   * Download Files as Data Uri
   *
   * @remarks
   * Obtain a copy of the current documents specified by the `signature_request_id` parameter.
   * Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).
   *
   * If the files are currently being prepared, a status code of `409` will be returned instead.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestFilesAsDataUriError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestFilesAsDataUri(
    request: SignatureRequest.SignatureRequestFilesAsDataUriRequest,
    options?: RequestOptions,
  ): ApiPromise<FileResponseDataUri, SignatureRequest.SignatureRequestFilesAsDataUriError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signature_request/files_as_data_uri/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileResponseDataUriSchema },
        errorFactory: SignatureRequest.SignatureRequestFilesAsDataUriError,
      },
      options,
    );
  }

  /**
   * Download Files as File Url
   *
   * @remarks
   * Obtain a copy of the current documents specified by the `signature_request_id` parameter.
   * Returns a JSON object with a url to the file (PDFs only).
   *
   * If the files are currently being prepared, a status code of `409` will be returned instead.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestFilesAsFileUrlError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestFilesAsFileUrl(
    request: SignatureRequest.SignatureRequestFilesAsFileUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<FileResponse, SignatureRequest.SignatureRequestFilesAsFileUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signature_request/files_as_file_url/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [{ name: "force_download", value: request.forceDownload, schema: s.defaulted(s.int(), 1) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestFilesAsFileUrlError,
      },
      options,
    );
  }

  /**
   * Get Signature Request
   *
   * @remarks
   * Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestGet(
    request: SignatureRequest.SignatureRequestGetRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signature_request/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestGetError,
      },
      options,
    );
  }

  /**
   * List Signature Requests
   *
   * @remarks
   * Returns a list of SignatureRequests that you can access. This includes SignatureRequests you
   * have sent as well as received, but not ones that you have been CCed on.
   *
   * Take a look at our [search guide](/api/reference/search/) to learn more about querying
   * signature requests.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestList(
    request: SignatureRequest.SignatureRequestListRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestListResponse, SignatureRequest.SignatureRequestListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signature_request/list"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "account_id", value: request.accountId, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signatureRequestListResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestListError,
      },
      options,
    );
  }

  /**
   * Release On-Hold Signature Request
   *
   * @remarks
   * Releases a held SignatureRequest that was claimed and prepared from an
   * [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at
   * Draft creation that the SignatureRequest created from the Draft should be held. Releasing the
   * SignatureRequest will send requests to all signers.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestReleaseHoldError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestReleaseHold(
    request: SignatureRequest.SignatureRequestReleaseHoldRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestReleaseHoldError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/release_hold/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestReleaseHoldError,
      },
      options,
    );
  }

  /**
   * Send Request Reminder
   *
   * @remarks
   * Sends an email to the signer reminding them to sign the signature request. You cannot send a
   * reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic
   * reminders.
   *
   * **NOTE:** This action can **not** be used with embedded signature requests.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestRemindError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestRemind(
    request: SignatureRequest.SignatureRequestRemindRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestRemindError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/remind/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signatureRequestRemindRequestSchema },
      },
      {
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestRemindError,
      },
      options,
    );
  }

  /**
   * Remove Signature Request Access
   *
   * @remarks
   * Removes your access to a completed signature request. This action is **not reversible**.
   *
   * The signature request must be fully executed by all parties (signed or declined to sign). Other
   * parties will continue to maintain access to the completed signature request document(s).
   *
   * Unlike /signature_request/cancel, this endpoint is synchronous and your access will be
   * immediately removed. Upon successful removal, this endpoint will return a 200 OK response.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestRemove(
    request: SignatureRequest.SignatureRequestRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, SignatureRequest.SignatureRequestRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/remove/{signature_request_id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: SignatureRequest.SignatureRequestRemoveError,
      },
      options,
    );
  }

  /**
   * Send Signature Request
   *
   * @remarks
   * Creates and sends a new SignatureRequest with the submitted documents. If
   * `form_fields_per_document` is not specified, a signature page will be affixed where all signers
   * will be required to add their signature, signifying their agreement to all contained documents.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestSendError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestSend(
    request: SignatureRequest.SignatureRequestSendRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/send"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestSignerSchema))),
            },
            {
              kind: "text",
              name: "grouped_signers",
              value: request.groupedSigners,
              schema: s.optional(s.array(s.lazy(() => subSignatureRequestGroupedSignersSchema))),
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
            { kind: "text", name: "is_eid", value: request.isEid, schema: s.defaulted(s.boolean(), false) },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
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
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestSendError,
      },
      options,
    );
  }

  /**
   * Send with Template
   *
   * @remarks
   * Creates and sends a new SignatureRequest based off of the Template(s) specified with the
   * `template_ids` parameter.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestSendWithTemplateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestSendWithTemplate(
    request: SignatureRequest.SignatureRequestSendWithTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendWithTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/send_with_template"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "template_ids", value: request.templateIds, schema: s.array(s.string()) },
            {
              kind: "text",
              name: "signers",
              value: request.signers,
              schema: s.array(s.lazy(() => subSignatureRequestTemplateSignerSchema)),
            },
            {
              kind: "text",
              name: "allow_decline",
              value: request.allowDecline,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ccs",
              value: request.ccs,
              schema: s.optional(s.array(s.lazy(() => subCcSchema))),
            },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "custom_fields",
              value: request.customFields,
              schema: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
            },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            { kind: "text", name: "is_eid", value: request.isEid, schema: s.defaulted(s.boolean(), false) },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
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
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestSendWithTemplateError,
      },
      options,
    );
  }

  /**
   * Update Signature Request
   *
   * @remarks
   * Updates the email address and/or the name for a given signer on a signature request. You can
   * listen for the `signature_request_email_bounce` event on your app or account to detect bounced
   * emails, and respond with this method.
   *
   * Updating the email address of a signer will generate a new `signature_id` value.
   *
   * **NOTE:** This action cannot be performed on a signature request with an appended signature
   * page.
   *
   * @returns successful operation
   *
   * @throws {@link SignatureRequest.SignatureRequestUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signatureRequestUpdate(
    request: SignatureRequest.SignatureRequestUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature_request/update/{signature_request_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "signature_request_id", value: request.signatureRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signatureRequestUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: signatureRequestGetResponseSchema },
        errorFactory: SignatureRequest.SignatureRequestUpdateError,
      },
      options,
    );
  }
}

export namespace SignatureRequest {
  export type SignatureRequestBulkCreateEmbeddedWithTemplateRequestParams = {
    /**
     * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
     * which the template will be used.
     */
    templateIds: string[];
    /**
     * Client id of the app you're using to create this embedded signature request. Used for
     * security purposes.
     */
    clientId: string;
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
     * By using the feature, you agree you are responsible for obtaining a signer's consent to
     * receive text messages from Dropbox Sign related to this signature request and confirm you
     * have obtained such consent from all signers prior to enabling SMS delivery for this signature
     * request. [Learn
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
    signerFile?: FileInput;
    /**
     * `signer_list` is an array defining values and options for signer fields. Required unless a
     * `signer_file` is used, you may not use both.
     */
    signerList?: SubBulkSignerList[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /** Add CC email recipients. Required when a CC role exists for the Template. */
    ccs?: SubCc[];
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

  export class SignatureRequestBulkCreateEmbeddedWithTemplateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestBulkCreateEmbeddedWithTemplateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestBulkSendWithTemplateRequestParams = {
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
     * By using the feature, you agree you are responsible for obtaining a signer's consent to
     * receive text messages from Dropbox Sign related to this signature request and confirm you
     * have obtained such consent from all signers prior to enabling SMS delivery for this signature
     * request. [Learn
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
    signerFile?: FileInput;
    /**
     * `signer_list` is an array defining values and options for signer fields. Required unless a
     * `signer_file` is used, you may not use both.
     */
    signerList?: SubBulkSignerList[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /** Add CC email recipients. Required when a CC role exists for the Template. */
    ccs?: SubCc[];
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
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values
     * back with `custom_fields` together in one API call.
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
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

  export class SignatureRequestBulkSendWithTemplateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestBulkSendWithTemplateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestCancelRequest = {
    /** The id of the incomplete SignatureRequest to cancel. */
    signatureRequestId: string;
  };

  export class SignatureRequestCancelError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestCancelError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestCreateEmbeddedRequestParams = {
    /**
     * Client id of the app you're using to create this embedded signature request. Used for
     * security purposes.
     */
    clientId: string;
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
     * **NOTE:** Only available for Premium plan.
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
     * See the [Text Tags
     * Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more
     * information.
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
     * This allows the requester to specify the types allowed for creating a signature and specify
     * another signing options.
     *
     * **NOTE:** If `signing_options` are not defined in the request, the allowed types will default
     * to those specified in the account settings.
     *
     * **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.
     */
    signingOptions?: SubSigningOptions;
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
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document. Defaults to disabled, or `false`.
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
     */
    expiresAt?: number | null;
  };

  export class SignatureRequestCreateEmbeddedError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestCreateEmbeddedError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestCreateEmbeddedWithTemplateRequestParams = {
    /**
     * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
     * which the template will be used.
     */
    templateIds: string[];
    /**
     * Client id of the app you're using to create this embedded signature request. Used for
     * security purposes.
     */
    clientId: string;
    /** Add Signers to your Templated-based Signature Request. */
    signers: SubSignatureRequestTemplateSigner[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /** Add CC email recipients. Required when a CC role exists for the Template. */
    ccs?: SubCc[];
    /**
     * An array defining values and options for custom fields. Required when a custom field exists
     * in the Template.
     */
    customFields?: SubCustomField[];
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
     * This allows the requester to specify the types allowed for creating a signature and specify
     * another signing options.
     *
     * **NOTE:** If `signing_options` are not defined in the request, the allowed types will default
     * to those specified in the account settings.
     *
     * **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.
     */
    signingOptions?: SubSigningOptions;
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
     */
    expiresAt?: number | null;
  };

  export class SignatureRequestCreateEmbeddedWithTemplateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestCreateEmbeddedWithTemplateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestEditRequestParams = {
    /** The id of the SignatureRequest to edit. */
    signatureRequestId: string;
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
     * Enables automatic Text Tag removal when set to true.
     *
     * **NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this
     * setting on `false` and instead hiding your text tags using white text or a similar approach.
     * See the [Text Tags
     * Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more
     * information.
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
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
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document. Defaults to disabled, or `false`.
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
     */
    expiresAt?: number | null;
  };

  export class SignatureRequestEditError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestEditError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestEditEmbeddedRequestParams = {
    /** The id of the SignatureRequest to edit. */
    signatureRequestId: string;
    /**
     * Client id of the app you're using to create this embedded signature request. Used for
     * security purposes.
     */
    clientId: string;
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
     * **NOTE:** Only available for Premium plan.
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
     * See the [Text Tags
     * Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more
     * information.
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
     * This allows the requester to specify the types allowed for creating a signature and specify
     * another signing options.
     *
     * **NOTE:** If `signing_options` are not defined in the request, the allowed types will default
     * to those specified in the account settings.
     *
     * **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.
     */
    signingOptions?: SubSigningOptions;
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
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document. Defaults to disabled, or `false`.
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
     */
    expiresAt?: number | null;
  };

  export class SignatureRequestEditEmbeddedError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestEditEmbeddedError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestEditEmbeddedWithTemplateRequestParams = {
    /** The id of the SignatureRequest to edit. */
    signatureRequestId: string;
    /**
     * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
     * which the template will be used.
     */
    templateIds: string[];
    /**
     * Client id of the app you're using to create this embedded signature request. Used for
     * security purposes.
     */
    clientId: string;
    /** Add Signers to your Templated-based Signature Request. */
    signers: SubSignatureRequestTemplateSigner[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /** Add CC email recipients. Required when a CC role exists for the Template. */
    ccs?: SubCc[];
    /**
     * An array defining values and options for custom fields. Required when a custom field exists
     * in the Template.
     */
    customFields?: SubCustomField[];
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
     * This allows the requester to specify the types allowed for creating a signature and specify
     * another signing options.
     *
     * **NOTE:** If `signing_options` are not defined in the request, the allowed types will default
     * to those specified in the account settings.
     *
     * **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.
     */
    signingOptions?: SubSigningOptions;
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
  };

  export class SignatureRequestEditEmbeddedWithTemplateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestEditEmbeddedWithTemplateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestEditWithTemplateRequestParams = {
    /** The id of the SignatureRequest to edit. */
    signatureRequestId: string;
    /**
     * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
     * which the template will be used.
     */
    templateIds: string[];
    /** Add Signers to your Templated-based Signature Request. */
    signers: SubSignatureRequestTemplateSigner[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /** Add CC email recipients. Required when a CC role exists for the Template. */
    ccs?: SubCc[];
    /**
     * Client id of the app to associate with the signature request. Used to apply the branding and
     * callback url defined for the app.
     */
    clientId?: string;
    /**
     * An array defining values and options for custom fields. Required when a custom field exists
     * in the Template.
     */
    customFields?: SubCustomField[];
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
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
  };

  export class SignatureRequestEditWithTemplateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestEditWithTemplateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestFilesRequest = {
    /** The id of the SignatureRequest to retrieve. */
    signatureRequestId: string;
    /**
     * Set to `pdf` for a single merged document or `zip` for a collection of individual documents.
     *
     * @default FileType.Pdf
     */
    fileType?: FileType;
  };

  export class SignatureRequestFilesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestFilesError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestFilesAsDataUriRequest = {
    /** The id of the SignatureRequest to retrieve. */
    signatureRequestId: string;
  };

  export class SignatureRequestFilesAsDataUriError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestFilesAsDataUriError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestFilesAsFileUrlRequest = {
    /** The id of the SignatureRequest to retrieve. */
    signatureRequestId: string;
    /**
     * By default when opening the `file_url` a browser will download the PDF and save it locally.
     * When set to `0` the PDF file will be displayed in the browser.
     *
     * @default 1
     */
    forceDownload?: number;
  };

  export class SignatureRequestFilesAsFileUrlError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestFilesAsFileUrlError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestGetRequest = {
    /** The id of the SignatureRequest to retrieve. */
    signatureRequestId: string;
  };

  export class SignatureRequestGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestListRequest = {
    /**
     * Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate
     * all team members. Defaults to your account.
     */
    accountId?: string;
    /** Which page number of the SignatureRequest List to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     *
     * @default 20
     */
    pageSize?: number;
    /**
     * String that includes search terms and/or fields to be used to filter the SignatureRequest
     * objects.
     */
    query?: string;
  };

  export class SignatureRequestListError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestListError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestReleaseHoldRequest = {
    /** The id of the SignatureRequest to release. */
    signatureRequestId: string;
  };

  export class SignatureRequestReleaseHoldError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestReleaseHoldError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestRemindRequestParams = {
    /** The id of the SignatureRequest to send a reminder for. */
    signatureRequestId: string;
    body: SignatureRequestRemindRequest;
  };

  export class SignatureRequestRemindError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestRemindError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestRemoveRequest = {
    /** The id of the SignatureRequest to remove. */
    signatureRequestId: string;
  };

  export class SignatureRequestRemoveError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestRemoveError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestSendRequestParams = {
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
     * Enables automatic Text Tag removal when set to true.
     *
     * **NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this
     * setting on `false` and instead hiding your text tags using white text or a similar approach.
     * See the [Text Tags
     * Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more
     * information.
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
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
     * Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your
     * document. Defaults to disabled, or `false`.
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
     */
    expiresAt?: number | null;
  };

  export class SignatureRequestSendError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestSendError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestSendWithTemplateRequestParams = {
    /**
     * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
     * which the template will be used.
     */
    templateIds: string[];
    /** Add Signers to your Templated-based Signature Request. */
    signers: SubSignatureRequestTemplateSigner[];
    /**
     * Allows signers to decline to sign a document if `true`. Defaults to `false`.
     *
     * @default false
     */
    allowDecline?: boolean;
    /** Add CC email recipients. Required when a CC role exists for the Template. */
    ccs?: SubCc[];
    /**
     * Client id of the app to associate with the signature request. Used to apply the branding and
     * callback url defined for the app.
     */
    clientId?: string;
    /**
     * An array defining values and options for custom fields. Required when a custom field exists
     * in the Template.
     */
    customFields?: SubCustomField[];
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
     * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
     * up to 40 characters long and values up to 1000 characters long.
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
     * When the signature request will expire. Unsigned signatures will be moved to the expired
     * status, and no longer signable. See [Signature Request Expiration
     * Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
     */
    expiresAt?: number | null;
  };

  export class SignatureRequestSendWithTemplateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestSendWithTemplateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SignatureRequestUpdateRequestParams = {
    /** The id of the SignatureRequest to update. */
    signatureRequestId: string;
    body: SignatureRequestUpdateRequest;
  };

  export class SignatureRequestUpdateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SignatureRequestUpdateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
