<!-- Generated file — do not edit; regenerated with the SDK. -->

# Template — operations

Accessor: `client.template` · Source: `src/resources/template.ts` · 11 operations · Request and error types: namespace `Template`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### templateAddUser

- **Signature**: `templateAddUser(request: Template.TemplateAddUserRequestParams, options?: RequestOptions): ApiPromise<TemplateGetResponse, Template.TemplateAddUserError>`
- **Wire**: `POST /template/add_user/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TemplateGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateAddUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateAddUserRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |
| `body` | `body` | — | `TemplateAddUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateAddUserRequest` | `templateAddUserRequestSchema` | `src/models/template-add-user-request.ts` |
| `TemplateGetResponse` | `templateGetResponseSchema` | `src/models/template-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateCreate

- **Signature**: `templateCreate(request: Template.TemplateCreateRequestParams, options?: RequestOptions): ApiPromise<TemplateCreateResponse, Template.TemplateCreateError>`
- **Wire**: `POST /template/create`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TemplateCreateResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateCreateRequestParams` (19):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | yes | — |
| `signerRoles` | `form` | `signer_roles` | `SubTemplateRole[]` | yes | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccRoles` | `form` | `cc_roles` | `string[]` | no | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `mergeFields` | `form` | `merge_fields` | `SubMergeField[]` | no | — |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, Record<string, unknown>>` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `usePreexistingFields` | `form` | `use_preexisting_fields` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubTemplateRole` | `subTemplateRoleSchema` | `src/models/sub-template-role.ts` |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubMergeField` | `subMergeFieldSchema` | `src/models/sub-merge-field.ts` |
| `TemplateCreateResponse` | `templateCreateResponseSchema` | `src/models/template-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateCreateEmbeddedDraft

- **Signature**: `templateCreateEmbeddedDraft(request: Template.TemplateCreateEmbeddedDraftRequestParams, options?: RequestOptions): ApiPromise<TemplateCreateEmbeddedDraftResponse, Template.TemplateCreateEmbeddedDraftError>`
- **Wire**: `POST /template/create_embedded_draft`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TemplateCreateEmbeddedDraftResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateCreateEmbeddedDraftError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateCreateEmbeddedDraftRequestParams` (26):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `allowCcs` | `form` | `allow_ccs` | `boolean` | no | `true` |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccRoles` | `form` | `cc_roles` | `string[]` | no | — |
| `editorOptions` | `form` | `editor_options` | `SubEditorOptions` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `forceSignerRoles` | `form` | `force_signer_roles` | `boolean` | no | `false` |
| `forceSubjectMessage` | `form` | `force_subject_message` | `boolean` | no | `false` |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | no | — |
| `mergeFields` | `form` | `merge_fields` | `SubMergeField[]` | no | — |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, Record<string, unknown>>` | no | — |
| `showPreview` | `form` | `show_preview` | `boolean` | no | `false` |
| `showProgressStepper` | `form` | `show_progress_stepper` | `boolean` | no | `true` |
| `signerRoles` | `form` | `signer_roles` | `SubTemplateRole[]` | no | — |
| `skipMeNow` | `form` | `skip_me_now` | `boolean` | no | `false` |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `usePreexistingFields` | `form` | `use_preexisting_fields` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubEditorOptions` | `subEditorOptionsSchema` | `src/models/sub-editor-options.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubMergeField` | `subMergeFieldSchema` | `src/models/sub-merge-field.ts` |
| `SubTemplateRole` | `subTemplateRoleSchema` | `src/models/sub-template-role.ts` |
| `TemplateCreateEmbeddedDraftResponse` | `templateCreateEmbeddedDraftResponseSchema` | `src/models/template-create-embedded-draft-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateDelete

- **Signature**: `templateDelete(request: Template.TemplateDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Template.TemplateDeleteError>`
- **Wire**: `POST /template/delete/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateFiles

- **Signature**: `templateFiles(request: Template.TemplateFilesRequest, options?: RequestOptions): ApiPromise<undefined, Template.TemplateFilesError>`
- **Wire**: `GET /template/files/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateFilesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |
| `fileType` | `query` | `file_type` | `FileType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileType` | `fileTypeSchema` | `src/models/file-type.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateFilesAsDataUri

- **Signature**: `templateFilesAsDataUri(request: Template.TemplateFilesAsDataUriRequest, options?: RequestOptions): ApiPromise<FileResponseDataUri, Template.TemplateFilesAsDataUriError>`
- **Wire**: `GET /template/files_as_data_uri/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileResponseDataUri`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateFilesAsDataUriError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateFilesAsDataUriRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileResponseDataUri` | `fileResponseDataUriSchema` | `src/models/file-response-data-uri.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateFilesAsFileUrl

- **Signature**: `templateFilesAsFileUrl(request: Template.TemplateFilesAsFileUrlRequest, options?: RequestOptions): ApiPromise<FileResponse, Template.TemplateFilesAsFileUrlError>`
- **Wire**: `GET /template/files_as_file_url/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateFilesAsFileUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateFilesAsFileUrlRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes | — |
| `forceDownload` | `query` | `force_download` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileResponse` | `fileResponseSchema` | `src/models/file-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateGet

- **Signature**: `templateGet(request: Template.TemplateGetRequest, options?: RequestOptions): ApiPromise<TemplateGetResponse, Template.TemplateGetError>`
- **Wire**: `GET /template/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TemplateGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateGetResponse` | `templateGetResponseSchema` | `src/models/template-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateList

- **Signature**: `templateList(request: Template.TemplateListRequest, options?: RequestOptions): ApiPromise<TemplateListResponse, Template.TemplateListError>`
- **Wire**: `GET /template/list`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TemplateListResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateListRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountId` | `query` | `account_id` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `query` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateListResponse` | `templateListResponseSchema` | `src/models/template-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateRemoveUser

- **Signature**: `templateRemoveUser(request: Template.TemplateRemoveUserRequestParams, options?: RequestOptions): ApiPromise<TemplateGetResponse, Template.TemplateRemoveUserError>`
- **Wire**: `POST /template/remove_user/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TemplateGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateRemoveUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateRemoveUserRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |
| `body` | `body` | — | `TemplateRemoveUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateRemoveUserRequest` | `templateRemoveUserRequestSchema` | `src/models/template-remove-user-request.ts` |
| `TemplateGetResponse` | `templateGetResponseSchema` | `src/models/template-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### templateUpdateFiles

- **Signature**: `templateUpdateFiles(request: Template.TemplateUpdateFilesRequestParams, options?: RequestOptions): ApiPromise<TemplateUpdateFilesResponse, Template.TemplateUpdateFilesError>`
- **Wire**: `POST /template/update_files/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TemplateUpdateFilesResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Template.TemplateUpdateFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Template.TemplateUpdateFilesRequestParams` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `message` | `form` | — | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateUpdateFilesResponse` | `templateUpdateFilesResponseSchema` | `src/models/template-update-files-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

