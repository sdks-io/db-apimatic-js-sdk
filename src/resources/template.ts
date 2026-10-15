import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { fileResponseDataUriSchema, type FileResponseDataUri } from "../models/file-response-data-uri.js";
import { fileResponseSchema, type FileResponse } from "../models/file-response.js";
import { fileTypeSchema, type FileType } from "../models/file-type.js";
import { subAttachmentSchema, type SubAttachment } from "../models/sub-attachment.js";
import { subEditorOptionsSchema, type SubEditorOptions } from "../models/sub-editor-options.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "../models/sub-field-options.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "../models/sub-form-field-group.js";
import { subFormFieldRuleSchema, type SubFormFieldRule } from "../models/sub-form-field-rule.js";
import { subMergeFieldSchema, type SubMergeField } from "../models/sub-merge-field.js";
import { subTemplateRoleSchema, type SubTemplateRole } from "../models/sub-template-role.js";
import {
  templateAddUserRequestSchema,
  type TemplateAddUserRequest,
} from "../models/template-add-user-request.js";
import {
  templateCreateEmbeddedDraftResponseSchema,
  type TemplateCreateEmbeddedDraftResponse,
} from "../models/template-create-embedded-draft-response.js";
import {
  templateCreateResponseSchema,
  type TemplateCreateResponse,
} from "../models/template-create-response.js";
import { templateGetResponseSchema, type TemplateGetResponse } from "../models/template-get-response.js";
import { templateListResponseSchema, type TemplateListResponse } from "../models/template-list-response.js";
import {
  templateRemoveUserRequestSchema,
  type TemplateRemoveUserRequest,
} from "../models/template-remove-user-request.js";
import {
  templateUpdateFilesResponseSchema,
  type TemplateUpdateFilesResponse,
} from "../models/template-update-files-response.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "../models/unions/sub-form-fields-per-document-base.js";
import type { Servers } from "../servers.js";

export class Template {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add User to Template
   *
   * @remarks
   * Gives the specified Account access to the specified Template. The specified Account must be a
   * part of your Team.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateAddUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateAddUser(
    request: Template.TemplateAddUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TemplateGetResponse, Template.TemplateAddUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/template/add_user/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: templateAddUserRequestSchema },
      },
      {
        success: { kind: "json", schema: templateGetResponseSchema },
        errorFactory: Template.TemplateAddUserError,
      },
      options,
    );
  }

  /**
   * Create Template
   *
   * @remarks
   * Creates a template that can be used in future signature requests.
   *
   * If `client_id` is provided, the template will be created as an embedded template. Embedded
   * templates can be used for embedded signature requests and can be edited later by generating a
   * new `edit_url` with
   * [/embedded/edit_url/{template_id}](/api/reference/operation/embeddedEditUrl/).
   *
   * Template creation may complete asynchronously after the initial request is accepted. It is
   * recommended that a callback be implemented to listen for the callback event. A
   * `template_created` event indicates the template is ready to use, while a `template_error` event
   * indicates there was a problem while creating the template. If a callback handler has been
   * configured and the event has not been received within 60 minutes of making the call, check the
   * status of the request in the API dashboard and retry the request if necessary.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateCreate(
    request: Template.TemplateCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TemplateCreateResponse, Template.TemplateCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/template/create"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "form_fields_per_document",
              value: request.formFieldsPerDocument,
              schema: s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema)),
            },
            {
              kind: "text",
              name: "signer_roles",
              value: request.signerRoles,
              schema: s.array(s.lazy(() => subTemplateRoleSchema)),
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
              name: "cc_roles",
              value: request.ccRoles,
              schema: s.optional(s.array(s.string())),
            },
            { kind: "text", name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
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
              name: "merge_fields",
              value: request.mergeFields,
              schema: s.optional(s.array(s.lazy(() => subMergeFieldSchema))),
            },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.unknown())),
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
              name: "use_preexisting_fields",
              value: request.usePreexistingFields,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ignore_text_tags_extraction_errors",
              value: request.ignoreTextTagsExtractionErrors,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: templateCreateResponseSchema },
        errorFactory: Template.TemplateCreateError,
      },
      options,
    );
  }

  /**
   * Create Embedded Template Draft
   *
   * @remarks
   * The first step in an embedded template workflow. Creates a draft template that can then be
   * further set up in the template 'edit' stage.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateCreateEmbeddedDraftError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateCreateEmbeddedDraft(
    request: Template.TemplateCreateEmbeddedDraftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TemplateCreateEmbeddedDraftResponse, Template.TemplateCreateEmbeddedDraftError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/template/create_embedded_draft"),
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
              name: "allow_ccs",
              value: request.allowCcs,
              schema: s.defaulted(s.boolean(), true),
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
              name: "cc_roles",
              value: request.ccRoles,
              schema: s.optional(s.array(s.string())),
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
              name: "merge_fields",
              value: request.mergeFields,
              schema: s.optional(s.array(s.lazy(() => subMergeFieldSchema))),
            },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.unknown())),
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
              name: "signer_roles",
              value: request.signerRoles,
              schema: s.optional(s.array(s.lazy(() => subTemplateRoleSchema))),
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
              name: "use_preexisting_fields",
              value: request.usePreexistingFields,
              schema: s.defaulted(s.boolean(), false),
            },
            {
              kind: "text",
              name: "ignore_text_tags_extraction_errors",
              value: request.ignoreTextTagsExtractionErrors,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: templateCreateEmbeddedDraftResponseSchema },
        errorFactory: Template.TemplateCreateEmbeddedDraftError,
      },
      options,
    );
  }

  /**
   * Delete Template
   *
   * @remarks
   * Completely deletes the template specified from the account.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateDeleteError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateDelete(
    request: Template.TemplateDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Template.TemplateDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/template/delete/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Template.TemplateDeleteError,
      },
      options,
    );
  }

  /**
   * Get Template Files
   *
   * @remarks
   * Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF
   * or ZIP file.
   *
   * If the files are currently being prepared, a status code of `409` will be returned instead. In
   * this case please wait for the `template_created` callback event.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateFilesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateFiles(
    request: Template.TemplateFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Template.TemplateFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/template/files/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [
          { name: "file_type", value: request.fileType, schema: s.optional(s.lazy(() => fileTypeSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Template.TemplateFilesError,
      },
      options,
    );
  }

  /**
   * Get Template Files as Data Uri
   *
   * @remarks
   * Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON
   * object with a `data_uri` representing the base64 encoded file (PDFs only).
   *
   * If the files are currently being prepared, a status code of `409` will be returned instead. In
   * this case please wait for the `template_created` callback event.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateFilesAsDataUriError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateFilesAsDataUri(
    request: Template.TemplateFilesAsDataUriRequest,
    options?: RequestOptions,
  ): ApiPromise<FileResponseDataUri, Template.TemplateFilesAsDataUriError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/template/files_as_data_uri/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileResponseDataUriSchema },
        errorFactory: Template.TemplateFilesAsDataUriError,
      },
      options,
    );
  }

  /**
   * Get Template Files as File Url
   *
   * @remarks
   * Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON
   * object with a url to the file (PDFs only).
   *
   * If the files are currently being prepared, a status code of `409` will be returned instead. In
   * this case please wait for the `template_created` callback event.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateFilesAsFileUrlError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateFilesAsFileUrl(
    request: Template.TemplateFilesAsFileUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<FileResponse, Template.TemplateFilesAsFileUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/template/files_as_file_url/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [{ name: "force_download", value: request.forceDownload, schema: s.defaulted(s.int(), 1) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileResponseSchema },
        errorFactory: Template.TemplateFilesAsFileUrlError,
      },
      options,
    );
  }

  /**
   * Get Template
   *
   * @remarks
   * Returns the Template specified by the `template_id` parameter.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateGet(
    request: Template.TemplateGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TemplateGetResponse, Template.TemplateGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/template/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: templateGetResponseSchema },
        errorFactory: Template.TemplateGetError,
      },
      options,
    );
  }

  /**
   * List Templates
   *
   * @remarks
   * Returns a list of the Templates that are accessible by you.
   *
   * Take a look at our [search guide](/api/reference/search/) to learn more about querying
   * templates.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateList(
    request: Template.TemplateListRequest,
    options?: RequestOptions,
  ): ApiPromise<TemplateListResponse, Template.TemplateListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/template/list"),
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
        success: { kind: "json", schema: templateListResponseSchema },
        errorFactory: Template.TemplateListError,
      },
      options,
    );
  }

  /**
   * Remove User from Template
   *
   * @remarks
   * Removes the specified Account's access to the specified Template.
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateRemoveUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateRemoveUser(
    request: Template.TemplateRemoveUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TemplateGetResponse, Template.TemplateRemoveUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/template/remove_user/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: templateRemoveUserRequestSchema },
      },
      {
        success: { kind: "json", schema: templateGetResponseSchema },
        errorFactory: Template.TemplateRemoveUserError,
      },
      options,
    );
  }

  /**
   * Update Template Files
   *
   * @remarks
   * Overlays a new file with the overlay of an existing template. The new file(s) must:
   *
   * 1. have the same or higher page count
   * 2. the same orientation as the file(s) being replaced.
   *
   * This will not overwrite or in any way affect the existing template. Both the existing template
   * and new template will be available for use after executing this endpoint. Also note that this
   * will decrement your template quota.
   *
   * Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK
   * response if the request passes initial validation checks.
   *
   * It is recommended that a callback be implemented to listen for the callback event. A
   * `template_created` event will be sent when the files are updated or a `template_error` event
   * will be sent if there was a problem while updating the files. If a callback handler has been
   * configured and the event has not been received within 60 minutes of making the call, check the
   * status of the request in the API dashboard and retry the request if necessary.
   *
   * If the page orientation or page count is different from the original template document, we will
   * notify you with a `template_error` [callback
   * event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).
   *
   * @returns successful operation
   *
   * @throws {@link Template.TemplateUpdateFilesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  templateUpdateFiles(
    request: Template.TemplateUpdateFilesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TemplateUpdateFilesResponse, Template.TemplateUpdateFilesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/template/update_files/{template_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "file_urls",
              value: request.fileUrls,
              schema: s.optional(s.array(s.string())),
            },
            { kind: "text", name: "message", value: request.message, schema: s.optional(s.string()) },
            { kind: "text", name: "subject", value: request.subject, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "test_mode",
              value: request.testMode,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: templateUpdateFilesResponseSchema },
        errorFactory: Template.TemplateUpdateFilesError,
      },
      options,
    );
  }
}

export namespace Template {
  export type TemplateAddUserRequestParams = {
    /** The id of the Template to give the Account access to. */
    templateId: string;
    body: TemplateAddUserRequest;
  };

  export class TemplateAddUserError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateAddUserError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateCreateRequestParams = {
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
    formFieldsPerDocument: SubFormFieldsPerDocumentBase[];
    /**
     * An array of the designated signer roles that must be specified when sending a
     * SignatureRequest using this Template.
     */
    signerRoles: SubTemplateRole[];
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
    /** The CC roles that must be assigned when using the template to send a signature request */
    ccRoles?: string[];
    /**
     * Client id of the app you're using to create this draft. Used to apply the branding and
     * callback url defined for the app.
     */
    clientId?: string;
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
     * Add merge fields to the template. Merge fields are placed by the user creating the template
     * and used to pre-fill data by passing values into signature requests with the `custom_fields`
     * parameter. If the signature request using that template *does not* pass a value into a merge
     * field, then an empty field remains in the document.
     */
    mergeFields?: SubMergeField[];
    /** The default template email message. */
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
    metadata?: Record<string, unknown>;
    /** The template title (alias). */
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
     * Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to
     * `true` (defaults to disabled, or `false`).
     *
     * @default false
     */
    usePreexistingFields?: boolean;
    /**
     * Sent with a value of `true` to ignore the validation errors from text tags extraction.
     * Defaults to `false`.
     *
     * @default false
     */
    ignoreTextTagsExtractionErrors?: boolean;
  };

  export class TemplateCreateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateCreateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateCreateEmbeddedDraftRequestParams = {
    /**
     * Client id of the app you're using to create this draft. Used to apply the branding and
     * callback url defined for the app.
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
     * This allows the requester to specify whether the user is allowed to provide email addresses
     * to CC when creating a template.
     *
     * @default true
     */
    allowCcs?: boolean;
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
    /** The CC roles that must be assigned when using the template to send a signature request */
    ccRoles?: string[];
    /** This allows the requester to specify editor options when a preparing a document */
    editorOptions?: SubEditorOptions;
    /** This allows the requester to specify field options for a signature request. */
    fieldOptions?: SubFieldOptions;
    /** Provide users the ability to review/edit the template signer roles. @default false */
    forceSignerRoles?: boolean;
    /** Provide users the ability to review/edit the template subject and message. @default false */
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
     * Add merge fields to the template. Merge fields are placed by the user creating the template
     * and used to pre-fill data by passing values into signature requests with the `custom_fields`
     * parameter. If the signature request using that template *does not* pass a value into a merge
     * field, then an empty field remains in the document.
     */
    mergeFields?: SubMergeField[];
    /** The default template email message. */
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
    metadata?: Record<string, unknown>;
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
    /**
     * An array of the designated signer roles that must be specified when sending a
     * SignatureRequest using this Template.
     */
    signerRoles?: SubTemplateRole[];
    /**
     * Disables the "Me (Now)" option for the person preparing the document. Does not work with type
     * `send_document`. Defaults to `false`.
     *
     * @default false
     */
    skipMeNow?: boolean;
    /** The template title (alias). */
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
     * Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to
     * `true` (defaults to disabled, or `false`).
     *
     * @default false
     */
    usePreexistingFields?: boolean;
    /**
     * Sent with a value of `true` to ignore the validation errors from text tags extraction.
     * Defaults to `false`.
     *
     * @default false
     */
    ignoreTextTagsExtractionErrors?: boolean;
  };

  export class TemplateCreateEmbeddedDraftError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateCreateEmbeddedDraftError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateDeleteRequest = {
    /** The id of the Template to delete. */
    templateId: string;
  };

  export class TemplateDeleteError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateDeleteError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateFilesRequest = {
    /** The id of the template files to retrieve. */
    templateId: string;
    /**
     * Set to `pdf` for a single merged document or `zip` for a collection of individual documents.
     */
    fileType?: FileType;
  };

  export class TemplateFilesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateFilesError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateFilesAsDataUriRequest = {
    /** The id of the template files to retrieve. */
    templateId: string;
  };

  export class TemplateFilesAsDataUriError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateFilesAsDataUriError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateFilesAsFileUrlRequest = {
    /** The id of the template files to retrieve. */
    templateId: string;
    /**
     * By default when opening the `file_url` a browser will download the PDF and save it locally.
     * When set to `0` the PDF file will be displayed in the browser.
     *
     * @default 1
     */
    forceDownload?: number;
  };

  export class TemplateFilesAsFileUrlError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateFilesAsFileUrlError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateGetRequest = {
    /** The id of the Template to retrieve. */
    templateId: string;
  };

  export class TemplateGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateListRequest = {
    /**
     * Which account to return Templates for. Must be a team member. Use `all` to indicate all team
     * members. Defaults to your account.
     */
    accountId?: string;
    /** Which page number of the Template List to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     *
     * @default 20
     */
    pageSize?: number;
    /**
     * String that includes search terms and/or fields to be used to filter the Template objects.
     */
    query?: string;
  };

  export class TemplateListError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateListError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateRemoveUserRequestParams = {
    /** The id of the Template to remove the Account's access to. */
    templateId: string;
    body: TemplateRemoveUserRequest;
  };

  export class TemplateRemoveUserError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateRemoveUserError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TemplateUpdateFilesRequestParams = {
    /** The ID of the template whose files to update. */
    templateId: string;
    /** Client id of the app you're using to update this template. */
    clientId?: string;
    /**
     * Use `files[]` to indicate the uploaded file(s) to use for the template.
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    files?: FileInput;
    /**
     * Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.
     *
     * This endpoint requires either **files** or **file_urls[]**, but not both.
     */
    fileUrls?: string[];
    /** The new default template email message. */
    message?: string;
    /** The new default template email subject. */
    subject?: string;
    /**
     * Whether this is a test, the signature request created from this draft will not be legally
     * binding if set to `true`. Defaults to `false`.
     *
     * @default false
     */
    testMode?: boolean;
  };

  export class TemplateUpdateFilesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TemplateUpdateFilesError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
