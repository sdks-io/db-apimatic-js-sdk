<!-- Generated file — do not edit; regenerated with the SDK. -->

# UnclaimedDraft — operations

Accessor: `client.unclaimedDraft` · Source: `src/resources/unclaimed-draft.ts` · 4 operations · Request and error types: namespace `UnclaimedDraft`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### unclaimedDraftCreate

- **Signature**: `unclaimedDraftCreate(request: UnclaimedDraft.UnclaimedDraftCreateRequestParams, options?: RequestOptions): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateError>`
- **Wire**: `POST /unclaimed_draft/create`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnclaimedDraftCreateResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `UnclaimedDraft.UnclaimedDraftCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnclaimedDraft.UnclaimedDraftCreateRequestParams` (25):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `type` | `form` | — | `Type2` | yes | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccEmailAddresses` | `form` | `cc_email_addresses` | `string[]` | no | — |
| `clientId` | `form` | `client_id` | `string` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | no | — |
| `hideTextTags` | `form` | `hide_text_tags` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `showProgressStepper` | `form` | `show_progress_stepper` | `boolean` | no | `true` |
| `signers` | `form` | — | `SubUnclaimedDraftSigner[]` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `usePreexistingFields` | `form` | `use_preexisting_fields` | `boolean` | no | `false` |
| `useTextTags` | `form` | `use_text_tags` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type2` | `type2Schema` | `src/models/type2.ts` |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubUnclaimedDraftSigner` | `subUnclaimedDraftSignerSchema` | `src/models/sub-unclaimed-draft-signer.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `UnclaimedDraftCreateResponse` | `unclaimedDraftCreateResponseSchema` | `src/models/unclaimed-draft-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### unclaimedDraftCreateEmbedded

- **Signature**: `unclaimedDraftCreateEmbedded(request: UnclaimedDraft.UnclaimedDraftCreateEmbeddedRequestParams, options?: RequestOptions): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedError>`
- **Wire**: `POST /unclaimed_draft/create_embedded`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnclaimedDraftCreateResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `UnclaimedDraft.UnclaimedDraftCreateEmbeddedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnclaimedDraft.UnclaimedDraftCreateEmbeddedRequestParams` (37):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `requesterEmailAddress` | `form` | `requester_email_address` | `string` | yes | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `allowCcs` | `form` | `allow_ccs` | `boolean` | no | `true` |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `attachments` | `form` | — | `SubAttachment[]` | no | — |
| `ccEmailAddresses` | `form` | `cc_email_addresses` | `string[]` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `editorOptions` | `form` | `editor_options` | `SubEditorOptions` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `forceSignerPage` | `form` | `force_signer_page` | `boolean` | no | `false` |
| `forceSubjectMessage` | `form` | `force_subject_message` | `boolean` | no | `false` |
| `formFieldGroups` | `form` | `form_field_groups` | `SubFormFieldGroup[]` | no | — |
| `formFieldRules` | `form` | `form_field_rules` | `SubFormFieldRule[]` | no | — |
| `formFieldsPerDocument` | `form` | `form_fields_per_document` | `SubFormFieldsPerDocumentBase[]` | no | — |
| `hideTextTags` | `form` | `hide_text_tags` | `boolean` | no | `false` |
| `holdRequest` | `form` | `hold_request` | `boolean` | no | `false` |
| `isForEmbeddedSigning` | `form` | `is_for_embedded_signing` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `requestingRedirectUrl` | `form` | `requesting_redirect_url` | `string` | no | — |
| `showPreview` | `form` | `show_preview` | `boolean` | no | — |
| `showProgressStepper` | `form` | `show_progress_stepper` | `boolean` | no | `true` |
| `signers` | `form` | — | `SubUnclaimedDraftSigner[]` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `skipMeNow` | `form` | `skip_me_now` | `boolean` | no | `false` |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `type` | `form` | — | `Type3` | no | `Type3.RequestSignature` |
| `usePreexistingFields` | `form` | `use_preexisting_fields` | `boolean` | no | `false` |
| `useTextTags` | `form` | `use_text_tags` | `boolean` | no | `false` |
| `ignoreTextTagsExtractionErrors` | `form` | `ignore_text_tags_extraction_errors` | `boolean` | no | `false` |
| `populateAutoFillFields` | `form` | `populate_auto_fill_fields` | `boolean` | no | `false` |
| `expiresAt` | `form` | `expires_at` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubAttachment` | `subAttachmentSchema` | `src/models/sub-attachment.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubEditorOptions` | `subEditorOptionsSchema` | `src/models/sub-editor-options.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubFormFieldGroup` | `subFormFieldGroupSchema` | `src/models/sub-form-field-group.ts` |
| `SubFormFieldRule` | `subFormFieldRuleSchema` | `src/models/sub-form-field-rule.ts` |
| `SubFormFieldsPerDocumentBase` | `subFormFieldsPerDocumentBaseSchema` | `src/models/unions/sub-form-fields-per-document-base.ts` |
| `SubUnclaimedDraftSigner` | `subUnclaimedDraftSignerSchema` | `src/models/sub-unclaimed-draft-signer.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `Type3` | `type3Schema` | `src/models/type3.ts` |
| `UnclaimedDraftCreateResponse` | `unclaimedDraftCreateResponseSchema` | `src/models/unclaimed-draft-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### unclaimedDraftCreateEmbeddedWithTemplate

- **Signature**: `unclaimedDraftCreateEmbeddedWithTemplate(request: UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError>`
- **Wire**: `POST /unclaimed_draft/create_embedded_with_template`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnclaimedDraftCreateResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateRequestParams` (30):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `clientId` | `form` | `client_id` | `string` | yes | — |
| `requesterEmailAddress` | `form` | `requester_email_address` | `string` | yes | — |
| `templateIds` | `form` | `template_ids` | `string[]` | yes | — |
| `allowDecline` | `form` | `allow_decline` | `boolean` | no | `false` |
| `allowReassign` | `form` | `allow_reassign` | `boolean` | no | `false` |
| `ccs` | `form` | — | `SubCc[]` | no | — |
| `customFields` | `form` | `custom_fields` | `SubCustomField[]` | no | — |
| `editorOptions` | `form` | `editor_options` | `SubEditorOptions` | no | — |
| `fieldOptions` | `form` | `field_options` | `SubFieldOptions` | no | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `forceSignerRoles` | `form` | `force_signer_roles` | `boolean` | no | `false` |
| `forceSubjectMessage` | `form` | `force_subject_message` | `boolean` | no | `false` |
| `holdRequest` | `form` | `hold_request` | `boolean` | no | `false` |
| `isForEmbeddedSigning` | `form` | `is_for_embedded_signing` | `boolean` | no | `false` |
| `message` | `form` | — | `string` | no | — |
| `metadata` | `form` | — | `Record<string, unknown>` | no | — |
| `previewOnly` | `form` | `preview_only` | `boolean` | no | `false` |
| `requestingRedirectUrl` | `form` | `requesting_redirect_url` | `string` | no | — |
| `showPreview` | `form` | `show_preview` | `boolean` | no | `false` |
| `showProgressStepper` | `form` | `show_progress_stepper` | `boolean` | no | `true` |
| `signers` | `form` | — | `SubUnclaimedDraftTemplateSigner[]` | no | — |
| `signingOptions` | `form` | `signing_options` | `SubSigningOptions` | no | — |
| `signingRedirectUrl` | `form` | `signing_redirect_url` | `string` | no | — |
| `skipMeNow` | `form` | `skip_me_now` | `boolean` | no | `false` |
| `subject` | `form` | — | `string` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `title` | `form` | — | `string` | no | — |
| `populateAutoFillFields` | `form` | `populate_auto_fill_fields` | `boolean` | no | `false` |
| `allowCcs` | `form` | `allow_ccs` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubCc` | `subCcSchema` | `src/models/sub-cc.ts` |
| `SubCustomField` | `subCustomFieldSchema` | `src/models/sub-custom-field.ts` |
| `SubEditorOptions` | `subEditorOptionsSchema` | `src/models/sub-editor-options.ts` |
| `SubFieldOptions` | `subFieldOptionsSchema` | `src/models/sub-field-options.ts` |
| `SubUnclaimedDraftTemplateSigner` | `subUnclaimedDraftTemplateSignerSchema` | `src/models/sub-unclaimed-draft-template-signer.ts` |
| `SubSigningOptions` | `subSigningOptionsSchema` | `src/models/sub-signing-options.ts` |
| `UnclaimedDraftCreateResponse` | `unclaimedDraftCreateResponseSchema` | `src/models/unclaimed-draft-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### unclaimedDraftEditAndResend

- **Signature**: `unclaimedDraftEditAndResend(request: UnclaimedDraft.UnclaimedDraftEditAndResendRequestParams, options?: RequestOptions): ApiPromise<UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftEditAndResendError>`
- **Wire**: `POST /unclaimed_draft/edit_and_resend/{signature_request_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnclaimedDraftCreateResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `UnclaimedDraft.UnclaimedDraftEditAndResendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UnclaimedDraft.UnclaimedDraftEditAndResendRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureRequestId` | `path` | `signature_request_id` | `string` | yes |
| `body` | `body` | — | `UnclaimedDraftEditAndResendRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnclaimedDraftEditAndResendRequest` | `unclaimedDraftEditAndResendRequestSchema` | `src/models/unclaimed-draft-edit-and-resend-request.ts` |
| `UnclaimedDraftCreateResponse` | `unclaimedDraftCreateResponseSchema` | `src/models/unclaimed-draft-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

