<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureRequest — operations

Accessor: `client.signatureRequest` · Source: `src/resources/signature-request.ts` · 20 operations · Request and error types: namespace `SignatureRequest`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### signatureRequestBulkCreateEmbeddedWithTemplate

- **Signature**: `signatureRequestBulkCreateEmbeddedWithTemplate(request: SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise<BulkSendJobSendResponse, SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError>`
- **Wire**: `POST /signature_request/bulk_create_embedded_with_template`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `signer_file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkSendJobSendResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateRequestParams` (14):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateIds` | `form` | `template_ids` | `string[]` | yes | — |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `signerFile` | `form` | `signer_file` | `FileInput` | no | — |
| `signerList` | `form` | `signer_list` | `SubBulkSignerList[]` | no | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `ccs` | `form` | — | `SubCc[]` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubBulkSignerList` | `subBulkSignerListSchema` | `src/models/sub-bulk-signer-list.ts` |
| `SubCc` | `subCcSchema` | `src/models/sub-cc.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `BulkSendJobSendResponse` | `bulkSendJobSendResponseSchema` | `src/models/bulk-send-job-send-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestBulkSendWithTemplate

- **Signature**: `signatureRequestBulkSendWithTemplate(request: SignatureRequest.SignatureRequestBulkSendWithTemplateRequestParams, options?: RequestOptions): ApiPromise<BulkSendJobSendResponse, SignatureRequest.SignatureRequestBulkSendWithTemplateError>`
- **Wire**: `POST /signature_request/bulk_send_with_template`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `signer_file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkSendJobSendResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestBulkSendWithTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestBulkSendWithTemplateRequestParams` (14):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateIds` | `form` | `template_ids` | `string[]` | yes | — |
| `signerFile` | `form` | `signer_file` | `FileInput` | no | — |
| `signerList` | `form` | `signer_list` | `SubBulkSignerList[]` | no | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `ccs` | `form` | — | `SubCc[]` | no | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubBulkSignerList` | `subBulkSignerListSchema` | `src/models/sub-bulk-signer-list.ts` |
| `SubCc` | `subCcSchema` | `src/models/sub-cc.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `BulkSendJobSendResponse` | `bulkSendJobSendResponseSchema` | `src/models/bulk-send-job-send-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestCancel

- **Signature**: `signatureRequestCancel(request: SignatureRequest.SignatureRequestCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, SignatureRequest.SignatureRequestCancelError>`
- **Wire**: `POST /signature_request/cancel/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestCancelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestCreateEmbedded

- **Signature**: `signatureRequestCreateEmbedded(request: SignatureRequest.SignatureRequestCreateEmbeddedRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestCreateEmbeddedError>`
- **Wire**: `POST /signature_request/create_embedded`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestCreateEmbeddedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestCreateEmbeddedRequestParams` (25):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `signers` | `form` | — | `SubSignatureRequestSigner[]` | no | — |
| `groupedSigners` | `form` | `grouped_signers` | `SubSignatureRequestGroupedSigners[]` | no | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccEmailAddresses` | `form` | `cc_email_addresses` | `string[]` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | no | — |
| `hideTextTags` | `form` | `hide_text_tags` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `useTextTags` | `form` | `use_text_tags` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |
| `populateAutoFillFields` | `form` | `populate_auto_fill_fields` | `boolean` | no | `false` |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestSigner` | `subSignatureRequestSignerSchema` | `src/models/sub-signature-request-signer.ts` |
| `SubSignatureRequestGroupedSigners` | `subSignatureRequestGroupedSignersSchema` | `src/models/sub-signature-request-grouped-signers.ts` |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestCreateEmbeddedWithTemplate

- **Signature**: `signatureRequestCreateEmbeddedWithTemplate(request: SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError>`
- **Wire**: `POST /signature_request/create_embedded_with_template`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateRequestParams` (16):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateIds` | `form` | `template_ids` | `string[]` | yes | — |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `signers` | `form` | — | `SubSignatureRequestTemplateSigner[]` | yes | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `ccs` | `form` | — | `SubCc[]` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `populateAutoFillFields` | `form` | `populate_auto_fill_fields` | `boolean` | no | `false` |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestTemplateSigner` | `subSignatureRequestTemplateSignerSchema` | `src/models/sub-signature-request-template-signer.ts` |
| `SubCc` | `subCcSchema` | `src/models/sub-cc.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestEdit

- **Signature**: `signatureRequestEdit(request: SignatureRequest.SignatureRequestEditRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditError>`
- **Wire**: `PUT /signature_request/edit/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestEditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestEditRequestParams` (27):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `signers` | `form` | — | `SubSignatureRequestSigner[]` | no | — |
| `groupedSigners` | `form` | `grouped_signers` | `SubSignatureRequestGroupedSigners[]` | no | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccEmailAddresses` | `form` | `cc_email_addresses` | `string[]` | no | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | no | — |
| `hideTextTags` | `form` | `hide_text_tags` | `boolean` | no | `false` |
| `isEid` | `form` | `is_eid` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `useTextTags` | `form` | `use_text_tags` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestSigner` | `subSignatureRequestSignerSchema` | `src/models/sub-signature-request-signer.ts` |
| `SubSignatureRequestGroupedSigners` | `subSignatureRequestGroupedSignersSchema` | `src/models/sub-signature-request-grouped-signers.ts` |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestEditEmbedded

- **Signature**: `signatureRequestEditEmbedded(request: SignatureRequest.SignatureRequestEditEmbeddedRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedError>`
- **Wire**: `PUT /signature_request/edit_embedded/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestEditEmbeddedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestEditEmbeddedRequestParams` (26):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes | — |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `signers` | `form` | — | `SubSignatureRequestSigner[]` | no | — |
| `groupedSigners` | `form` | `grouped_signers` | `SubSignatureRequestGroupedSigners[]` | no | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccEmailAddresses` | `form` | `cc_email_addresses` | `string[]` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | no | — |
| `hideTextTags` | `form` | `hide_text_tags` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `useTextTags` | `form` | `use_text_tags` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |
| `populateAutoFillFields` | `form` | `populate_auto_fill_fields` | `boolean` | no | `false` |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestSigner` | `subSignatureRequestSignerSchema` | `src/models/sub-signature-request-signer.ts` |
| `SubSignatureRequestGroupedSigners` | `subSignatureRequestGroupedSignersSchema` | `src/models/sub-signature-request-grouped-signers.ts` |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestEditEmbeddedWithTemplate

- **Signature**: `signatureRequestEditEmbeddedWithTemplate(request: SignatureRequest.SignatureRequestEditEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError>`
- **Wire**: `PUT /signature_request/edit_embedded_with_template/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestEditEmbeddedWithTemplateRequestParams` (16):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes | — |
| `templateIds` | `form` | `template_ids` | `string[]` | yes | — |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `signers` | `form` | — | `SubSignatureRequestTemplateSigner[]` | yes | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `ccs` | `form` | — | `SubCc[]` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `populateAutoFillFields` | `form` | `populate_auto_fill_fields` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestTemplateSigner` | `subSignatureRequestTemplateSignerSchema` | `src/models/sub-signature-request-template-signer.ts` |
| `SubCc` | `subCcSchema` | `src/models/sub-cc.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestEditWithTemplate

- **Signature**: `signatureRequestEditWithTemplate(request: SignatureRequest.SignatureRequestEditWithTemplateRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditWithTemplateError>`
- **Wire**: `PUT /signature_request/edit_with_template/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestEditWithTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestEditWithTemplateRequestParams` (17):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes | — |
| `templateIds` | `form` | `template_ids` | `string[]` | yes | — |
| `signers` | `form` | — | `SubSignatureRequestTemplateSigner[]` | yes | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `ccs` | `form` | — | `SubCc[]` | no | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `isEid` | `form` | `is_eid` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestTemplateSigner` | `subSignatureRequestTemplateSignerSchema` | `src/models/sub-signature-request-template-signer.ts` |
| `SubCc` | `subCcSchema` | `src/models/sub-cc.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestFiles

- **Signature**: `signatureRequestFiles(request: SignatureRequest.SignatureRequestFilesRequest, options?: RequestOptions): ApiPromise<BinaryContent, SignatureRequest.SignatureRequestFilesError>`
- **Wire**: `GET /signature_request/files/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestFilesRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes | — |
| `fileType` | `query` | `file_type` | `FileType` | no | `FileType.Pdf` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileType` | `fileTypeSchema` | `src/models/file-type.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestFilesAsDataUri

- **Signature**: `signatureRequestFilesAsDataUri(request: SignatureRequest.SignatureRequestFilesAsDataUriRequest, options?: RequestOptions): ApiPromise<FileResponseDataUri, SignatureRequest.SignatureRequestFilesAsDataUriError>`
- **Wire**: `GET /signature_request/files_as_data_uri/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileResponseDataUri`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestFilesAsDataUriError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestFilesAsDataUriRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileResponseDataUri` | `fileResponseDataUriSchema` | `src/models/file-response-data-uri.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestFilesAsFileUrl

- **Signature**: `signatureRequestFilesAsFileUrl(request: SignatureRequest.SignatureRequestFilesAsFileUrlRequest, options?: RequestOptions): ApiPromise<FileResponse, SignatureRequest.SignatureRequestFilesAsFileUrlError>`
- **Wire**: `GET /signature_request/files_as_file_url/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestFilesAsFileUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestFilesAsFileUrlRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes | — |
| `forceDownload` | `query` | `force_download` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileResponse` | `fileResponseSchema` | `src/models/file-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestGet

- **Signature**: `signatureRequestGet(request: SignatureRequest.SignatureRequestGetRequest, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestGetError>`
- **Wire**: `GET /signature_request/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestList

- **Signature**: `signatureRequestList(request: SignatureRequest.SignatureRequestListRequest, options?: RequestOptions): ApiPromise<SignatureRequestListResponse, SignatureRequest.SignatureRequestListError>`
- **Wire**: `GET /signature_request/list`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureRequestListResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestListRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountId` | `query` | `account_id` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `query` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureRequestListResponse` | `signatureRequestListResponseSchema` | `src/models/signature-request-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestReleaseHold

- **Signature**: `signatureRequestReleaseHold(request: SignatureRequest.SignatureRequestReleaseHoldRequest, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestReleaseHoldError>`
- **Wire**: `POST /signature_request/release_hold/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestReleaseHoldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestReleaseHoldRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestRemind

- **Signature**: `signatureRequestRemind(request: SignatureRequest.SignatureRequestRemindRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestRemindError>`
- **Wire**: `POST /signature_request/remind/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestRemindError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestRemindRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |
| `body` | `body` | — | `SignatureRequestRemindRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureRequestRemindRequest` | `signatureRequestRemindRequestSchema` | `src/models/signature-request-remind-request.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestRemove

- **Signature**: `signatureRequestRemove(request: SignatureRequest.SignatureRequestRemoveRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, SignatureRequest.SignatureRequestRemoveError>`
- **Wire**: `POST /signature_request/remove/{signature_request_id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestRemoveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestSend

- **Signature**: `signatureRequestSend(request: SignatureRequest.SignatureRequestSendRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendError>`
- **Wire**: `POST /signature_request/send`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestSendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestSendRequestParams` (26):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `signers` | `form` | — | `SubSignatureRequestSigner[]` | no | — |
| `groupedSigners` | `form` | `grouped_signers` | `SubSignatureRequestGroupedSigners[]` | no | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccEmailAddresses` | `form` | `cc_email_addresses` | `string[]` | no | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | no | — |
| `hideTextTags` | `form` | `hide_text_tags` | `boolean` | no | `false` |
| `isEid` | `form` | `is_eid` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `useTextTags` | `form` | `use_text_tags` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestSigner` | `subSignatureRequestSignerSchema` | `src/models/sub-signature-request-signer.ts` |
| `SubSignatureRequestGroupedSigners` | `subSignatureRequestGroupedSignersSchema` | `src/models/sub-signature-request-grouped-signers.ts` |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestSendWithTemplate

- **Signature**: `signatureRequestSendWithTemplate(request: SignatureRequest.SignatureRequestSendWithTemplateRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendWithTemplateError>`
- **Wire**: `POST /signature_request/send_with_template`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestSendWithTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestSendWithTemplateRequestParams` (17):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateIds` | `form` | `template_ids` | `string[]` | yes | — |
| `signers` | `form` | — | `SubSignatureRequestTemplateSigner[]` | yes | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `ccs` | `form` | — | `SubCc[]` | no | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `isEid` | `form` | `is_eid` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubSignatureRequestTemplateSigner` | `subSignatureRequestTemplateSignerSchema` | `src/models/sub-signature-request-template-signer.ts` |
| `SubCc` | `subCcSchema` | `src/models/sub-cc.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### signatureRequestUpdate

- **Signature**: `signatureRequestUpdate(request: SignatureRequest.SignatureRequestUpdateRequestParams, options?: RequestOptions): ApiPromise<SignatureRequestGetResponse, SignatureRequest.SignatureRequestUpdateError>`
- **Wire**: `POST /signature_request/update/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureRequestGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `SignatureRequest.SignatureRequestUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureRequest.SignatureRequestUpdateRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |
| `body` | `body` | — | `SignatureRequestUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureRequestUpdateRequest` | `signatureRequestUpdateRequestSchema` | `src/models/signature-request-update-request.ts` |
| `SignatureRequestGetResponse` | `signatureRequestGetResponseSchema` | `src/models/signature-request-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

