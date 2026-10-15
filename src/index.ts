export { DropboxSignApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { BasicAuthCredentials, TokenProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { Account } from "./resources/account.js";
export { SignatureRequest } from "./resources/signature-request.js";
export { Template } from "./resources/template.js";
export { BulkSendJob } from "./resources/bulk-send-job.js";
export { Report } from "./resources/report.js";
export { Team } from "./resources/team.js";
export { UnclaimedDraft } from "./resources/unclaimed-draft.js";
export { Embedded } from "./resources/embedded.js";
export { ApiApp } from "./resources/api-app.js";
export { OAuth } from "./resources/oauth.js";
export { FaxLine } from "./resources/fax-line.js";
export { Document } from "./resources/document.js";
export { Fax } from "./resources/fax.js";

export { accountConfirmedEventSchema, type AccountConfirmedEvent } from "./models/account-confirmed-event.js";
export { accountCreateRequestSchema, type AccountCreateRequest } from "./models/account-create-request.js";
export { accountCreateResponseSchema, type AccountCreateResponse } from "./models/account-create-response.js";
export { accountGetResponseSchema, type AccountGetResponse } from "./models/account-get-response.js";
export { accountResponseSchema, type AccountResponse } from "./models/account-response.js";
export { accountResponseQuotasSchema, type AccountResponseQuotas } from "./models/account-response-quotas.js";
export {
  accountResponseSettingsSchema,
  type AccountResponseSettings,
} from "./models/account-response-settings.js";
export { accountResponseUsageSchema, type AccountResponseUsage } from "./models/account-response-usage.js";
export { accountUpdateRequestSchema, type AccountUpdateRequest } from "./models/account-update-request.js";
export { accountVerifyRequestSchema, type AccountVerifyRequest } from "./models/account-verify-request.js";
export { accountVerifyResponseSchema, type AccountVerifyResponse } from "./models/account-verify-response.js";
export {
  accountVerifyResponseAccountSchema,
  type AccountVerifyResponseAccount,
} from "./models/account-verify-response-account.js";
export { apiAppCreateRequestSchema, type ApiAppCreateRequest } from "./models/api-app-create-request.js";
export { apiAppGetResponseSchema, type ApiAppGetResponse } from "./models/api-app-get-response.js";
export { apiAppListResponseSchema, type ApiAppListResponse } from "./models/api-app-list-response.js";
export { apiAppResponseSchema, type ApiAppResponse } from "./models/api-app-response.js";
export { apiAppResponseOAuthSchema, type ApiAppResponseOAuth } from "./models/api-app-response-oauth.js";
export {
  apiAppResponseOptionsSchema,
  type ApiAppResponseOptions,
} from "./models/api-app-response-options.js";
export {
  apiAppResponseOwnerAccountSchema,
  type ApiAppResponseOwnerAccount,
} from "./models/api-app-response-owner-account.js";
export {
  apiAppResponseWhiteLabelingOptionsSchema,
  type ApiAppResponseWhiteLabelingOptions,
} from "./models/api-app-response-white-labeling-options.js";
export { apiAppUpdateRequestSchema, type ApiAppUpdateRequest } from "./models/api-app-update-request.js";
export {
  bulkSendJobGetResponseSchema,
  type BulkSendJobGetResponse,
} from "./models/bulk-send-job-get-response.js";
export {
  bulkSendJobGetResponseSignatureRequestsSchema,
  type BulkSendJobGetResponseSignatureRequests,
} from "./models/bulk-send-job-get-response-signature-requests.js";
export {
  bulkSendJobListResponseSchema,
  type BulkSendJobListResponse,
} from "./models/bulk-send-job-list-response.js";
export { bulkSendJobResponseSchema, type BulkSendJobResponse } from "./models/bulk-send-job-response.js";
export {
  bulkSendJobSendResponseSchema,
  type BulkSendJobSendResponse,
} from "./models/bulk-send-job-send-response.js";
export { callbackTestEventSchema, type CallbackTestEvent } from "./models/callback-test-event.js";
export { Country, countrySchema } from "./models/country.js";
export { DateFormat, dateFormatSchema } from "./models/date-format.js";
export { DefaultType, defaultTypeSchema } from "./models/default-type.js";
export { detectionModeSchema, type DetectionMode } from "./models/unions/detection-mode.js";
export { detectionMode1Schema, type DetectionMode1 } from "./models/unions/detection-mode1.js";
export {
  documentFieldDetectionRequestSchema,
  type DocumentFieldDetectionRequest,
} from "./models/document-field-detection-request.js";
export {
  documentFieldDetectionResponseSchema,
  type DocumentFieldDetectionResponse,
} from "./models/document-field-detection-response.js";
export {
  documentFieldDetectionResponseDetectionResultSchema,
  type DocumentFieldDetectionResponseDetectionResult,
} from "./models/document-field-detection-response-detection-result.js";
export {
  embeddedEditUrlRequestSchema,
  type EmbeddedEditUrlRequest,
} from "./models/embedded-edit-url-request.js";
export {
  embeddedEditUrlResponseSchema,
  type EmbeddedEditUrlResponse,
} from "./models/embedded-edit-url-response.js";
export {
  embeddedEditUrlResponseEmbeddedSchema,
  type EmbeddedEditUrlResponseEmbedded,
} from "./models/embedded-edit-url-response-embedded.js";
export {
  embeddedSignUrlResponseSchema,
  type EmbeddedSignUrlResponse,
} from "./models/embedded-sign-url-response.js";
export {
  embeddedSignUrlResponseEmbeddedSchema,
  type EmbeddedSignUrlResponseEmbedded,
} from "./models/embedded-sign-url-response-embedded.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { errorResponseError1Schema, type ErrorResponseError1 } from "./models/error-response-error1.js";
export { eventSchema, type Event } from "./models/event.js";
export {
  eventCallbackPayloadSchema,
  type EventCallbackPayload,
} from "./models/unions/event-callback-payload.js";
export {
  eventCallbackPayload1Schema,
  type EventCallbackPayload1,
} from "./models/unions/event-callback-payload1.js";
export { eventCallbackRequestSchema, type EventCallbackRequest } from "./models/event-callback-request.js";
export {
  eventCallbackRequestEventSchema,
  type EventCallbackRequestEvent,
} from "./models/event-callback-request-event.js";
export {
  eventCallbackRequestEventMetadataSchema,
  type EventCallbackRequestEventMetadata,
} from "./models/event-callback-request-event-metadata.js";
export { EventType, eventTypeSchema } from "./models/event-type.js";
export { faxBlacklistedEventSchema, type FaxBlacklistedEvent } from "./models/fax-blacklisted-event.js";
export { faxBusyEventSchema, type FaxBusyEvent } from "./models/fax-busy-event.js";
export { faxDisconnectedEventSchema, type FaxDisconnectedEvent } from "./models/fax-disconnected-event.js";
export { faxNoAnswerEventSchema, type FaxNoAnswerEvent } from "./models/fax-no-answer-event.js";
export { faxOnHoldEventSchema, type FaxOnHoldEvent } from "./models/fax-on-hold-event.js";
export { faxReceivedEventSchema, type FaxReceivedEvent } from "./models/fax-received-event.js";
export { faxSentEventSchema, type FaxSentEvent } from "./models/fax-sent-event.js";
export { faxGetResponseSchema, type FaxGetResponse } from "./models/fax-get-response.js";
export {
  faxLineAddUserRequestSchema,
  type FaxLineAddUserRequest,
} from "./models/fax-line-add-user-request.js";
export {
  FaxLineAreaCodeGetCountryEnum,
  faxLineAreaCodeGetCountryEnumSchema,
} from "./models/fax-line-area-code-get-country-enum.js";
export {
  FaxLineAreaCodeGetProvinceEnum,
  faxLineAreaCodeGetProvinceEnumSchema,
} from "./models/fax-line-area-code-get-province-enum.js";
export {
  faxLineAreaCodeGetResponseSchema,
  type FaxLineAreaCodeGetResponse,
} from "./models/fax-line-area-code-get-response.js";
export {
  FaxLineAreaCodeGetStateEnum,
  faxLineAreaCodeGetStateEnumSchema,
} from "./models/fax-line-area-code-get-state-enum.js";
export { faxLineCreateRequestSchema, type FaxLineCreateRequest } from "./models/fax-line-create-request.js";
export { faxLineDeleteRequestSchema, type FaxLineDeleteRequest } from "./models/fax-line-delete-request.js";
export { faxLineListResponseSchema, type FaxLineListResponse } from "./models/fax-line-list-response.js";
export {
  faxLineRemoveUserRequestSchema,
  type FaxLineRemoveUserRequest,
} from "./models/fax-line-remove-user-request.js";
export { faxLineResponseSchema, type FaxLineResponse } from "./models/fax-line-response.js";
export {
  faxLineResponseFaxLineSchema,
  type FaxLineResponseFaxLine,
} from "./models/fax-line-response-fax-line.js";
export { faxListResponseSchema, type FaxListResponse } from "./models/fax-list-response.js";
export { faxResponseSchema, type FaxResponse } from "./models/fax-response.js";
export {
  faxResponseTransmissionSchema,
  type FaxResponseTransmission,
} from "./models/fax-response-transmission.js";
export { faxSendRequestSchema, type FaxSendRequest } from "./models/fax-send-request.js";
export { fileErrorEventSchema, type FileErrorEvent } from "./models/file-error-event.js";
export { fileResponseSchema, type FileResponse } from "./models/file-response.js";
export { fileResponseDataUriSchema, type FileResponseDataUri } from "./models/file-response-data-uri.js";
export { FontFamily, fontFamilySchema } from "./models/font-family.js";
export { LegalVersion, legalVersionSchema } from "./models/legal-version.js";
export { listInfoResponseSchema, type ListInfoResponse } from "./models/list-info-response.js";
export { NewRole, newRoleSchema } from "./models/new-role.js";
export {
  oAuthTokenGenerateRequestSchema,
  type OAuthTokenGenerateRequest,
} from "./models/oauth-token-generate-request.js";
export {
  oAuthTokenRefreshRequestSchema,
  type OAuthTokenRefreshRequest,
} from "./models/oauth-token-refresh-request.js";
export { oAuthTokenResponseSchema, type OAuthTokenResponse } from "./models/oauth-token-response.js";
export { Operator, operatorSchema } from "./models/operator.js";
export { reportCreateRequestSchema, type ReportCreateRequest } from "./models/report-create-request.js";
export { reportCreateResponseSchema, type ReportCreateResponse } from "./models/report-create-response.js";
export { reportResponseSchema, type ReportResponse } from "./models/report-response.js";
export { ReportType, reportTypeSchema } from "./models/report-type.js";
export { Role, roleSchema } from "./models/role.js";
export { Scope, scopeSchema } from "./models/scope.js";
export { signUrlInvalidEventSchema, type SignUrlInvalidEvent } from "./models/sign-url-invalid-event.js";
export {
  signatureRequestAllSignedEventSchema,
  type SignatureRequestAllSignedEvent,
} from "./models/signature-request-all-signed-event.js";
export {
  signatureRequestCanceledEventSchema,
  type SignatureRequestCanceledEvent,
} from "./models/signature-request-canceled-event.js";
export {
  signatureRequestDeclinedEventSchema,
  type SignatureRequestDeclinedEvent,
} from "./models/signature-request-declined-event.js";
export {
  signatureRequestDestroyedEventSchema,
  type SignatureRequestDestroyedEvent,
} from "./models/signature-request-destroyed-event.js";
export {
  signatureRequestDownloadableEventSchema,
  type SignatureRequestDownloadableEvent,
} from "./models/signature-request-downloadable-event.js";
export {
  signatureRequestEmailBounceEventSchema,
  type SignatureRequestEmailBounceEvent,
} from "./models/signature-request-email-bounce-event.js";
export {
  signatureRequestExpiredEventSchema,
  type SignatureRequestExpiredEvent,
} from "./models/signature-request-expired-event.js";
export {
  signatureRequestIncompleteQesEventSchema,
  type SignatureRequestIncompleteQesEvent,
} from "./models/signature-request-incomplete-qes-event.js";
export {
  signatureRequestInvalidEventSchema,
  type SignatureRequestInvalidEvent,
} from "./models/signature-request-invalid-event.js";
export {
  signatureRequestPreparedEventSchema,
  type SignatureRequestPreparedEvent,
} from "./models/signature-request-prepared-event.js";
export {
  signatureRequestReassignedEventSchema,
  type SignatureRequestReassignedEvent,
} from "./models/signature-request-reassigned-event.js";
export {
  signatureRequestRemindEventSchema,
  type SignatureRequestRemindEvent,
} from "./models/signature-request-remind-event.js";
export {
  signatureRequestSentEventSchema,
  type SignatureRequestSentEvent,
} from "./models/signature-request-sent-event.js";
export {
  signatureRequestSignedEventSchema,
  type SignatureRequestSignedEvent,
} from "./models/signature-request-signed-event.js";
export {
  signatureRequestSignerRemovedEventSchema,
  type SignatureRequestSignerRemovedEvent,
} from "./models/signature-request-signer-removed-event.js";
export {
  signatureRequestViewedEventSchema,
  type SignatureRequestViewedEvent,
} from "./models/signature-request-viewed-event.js";
export {
  signatureRequestBulkCreateEmbeddedWithTemplateRequestSchema,
  type SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
} from "./models/signature-request-bulk-create-embedded-with-template-request.js";
export {
  signatureRequestBulkSendWithTemplateRequestSchema,
  type SignatureRequestBulkSendWithTemplateRequest,
} from "./models/signature-request-bulk-send-with-template-request.js";
export {
  signatureRequestCreateEmbeddedRequestSchema,
  type SignatureRequestCreateEmbeddedRequest,
} from "./models/signature-request-create-embedded-request.js";
export {
  signatureRequestCreateEmbeddedWithTemplateRequestSchema,
  type SignatureRequestCreateEmbeddedWithTemplateRequest,
} from "./models/signature-request-create-embedded-with-template-request.js";
export {
  signatureRequestEditEmbeddedRequestSchema,
  type SignatureRequestEditEmbeddedRequest,
} from "./models/signature-request-edit-embedded-request.js";
export {
  signatureRequestEditEmbeddedWithTemplateRequestSchema,
  type SignatureRequestEditEmbeddedWithTemplateRequest,
} from "./models/signature-request-edit-embedded-with-template-request.js";
export {
  signatureRequestEditRequestSchema,
  type SignatureRequestEditRequest,
} from "./models/signature-request-edit-request.js";
export {
  signatureRequestEditWithTemplateRequestSchema,
  type SignatureRequestEditWithTemplateRequest,
} from "./models/signature-request-edit-with-template-request.js";
export {
  signatureRequestGetResponseSchema,
  type SignatureRequestGetResponse,
} from "./models/signature-request-get-response.js";
export {
  signatureRequestListResponseSchema,
  type SignatureRequestListResponse,
} from "./models/signature-request-list-response.js";
export {
  signatureRequestRemindRequestSchema,
  type SignatureRequestRemindRequest,
} from "./models/signature-request-remind-request.js";
export {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./models/signature-request-response.js";
export {
  signatureRequestResponseAttachmentSchema,
  type SignatureRequestResponseAttachment,
} from "./models/signature-request-response-attachment.js";
export {
  signatureRequestResponseCustomFieldBaseSchema,
  type SignatureRequestResponseCustomFieldBase,
} from "./models/unions/signature-request-response-custom-field-base.js";
export {
  signatureRequestResponseCustomFieldCheckboxSchema,
  type SignatureRequestResponseCustomFieldCheckbox,
} from "./models/signature-request-response-custom-field-checkbox.js";
export {
  signatureRequestResponseCustomFieldTextSchema,
  type SignatureRequestResponseCustomFieldText,
} from "./models/signature-request-response-custom-field-text.js";
export {
  SignatureRequestResponseCustomFieldTypeEnum,
  signatureRequestResponseCustomFieldTypeEnumSchema,
} from "./models/signature-request-response-custom-field-type-enum.js";
export {
  signatureRequestResponseDataBaseSchema,
  type SignatureRequestResponseDataBase,
} from "./models/unions/signature-request-response-data-base.js";
export {
  SignatureRequestResponseDataTypeEnum,
  signatureRequestResponseDataTypeEnumSchema,
} from "./models/signature-request-response-data-type-enum.js";
export {
  signatureRequestResponseDataValueCheckboxSchema,
  type SignatureRequestResponseDataValueCheckbox,
} from "./models/signature-request-response-data-value-checkbox.js";
export {
  signatureRequestResponseDataValueCheckboxMergeSchema,
  type SignatureRequestResponseDataValueCheckboxMerge,
} from "./models/signature-request-response-data-value-checkbox-merge.js";
export {
  signatureRequestResponseDataValueDateSignedSchema,
  type SignatureRequestResponseDataValueDateSigned,
} from "./models/signature-request-response-data-value-date-signed.js";
export {
  signatureRequestResponseDataValueDropdownSchema,
  type SignatureRequestResponseDataValueDropdown,
} from "./models/signature-request-response-data-value-dropdown.js";
export {
  signatureRequestResponseDataValueInitialsSchema,
  type SignatureRequestResponseDataValueInitials,
} from "./models/signature-request-response-data-value-initials.js";
export {
  signatureRequestResponseDataValueRadioSchema,
  type SignatureRequestResponseDataValueRadio,
} from "./models/signature-request-response-data-value-radio.js";
export {
  signatureRequestResponseDataValueSignatureSchema,
  type SignatureRequestResponseDataValueSignature,
} from "./models/signature-request-response-data-value-signature.js";
export {
  signatureRequestResponseDataValueTextSchema,
  type SignatureRequestResponseDataValueText,
} from "./models/signature-request-response-data-value-text.js";
export {
  signatureRequestResponseDataValueTextMergeSchema,
  type SignatureRequestResponseDataValueTextMerge,
} from "./models/signature-request-response-data-value-text-merge.js";
export {
  signatureRequestResponseSignaturesSchema,
  type SignatureRequestResponseSignatures,
} from "./models/signature-request-response-signatures.js";
export {
  signatureRequestSendRequestSchema,
  type SignatureRequestSendRequest,
} from "./models/signature-request-send-request.js";
export {
  signatureRequestSendWithTemplateRequestSchema,
  type SignatureRequestSendWithTemplateRequest,
} from "./models/signature-request-send-with-template-request.js";
export {
  signatureRequestUpdateRequestSchema,
  type SignatureRequestUpdateRequest,
} from "./models/signature-request-update-request.js";
export { SmsPhoneNumberType, smsPhoneNumberTypeSchema } from "./models/sms-phone-number-type.js";
export { StatusCode, statusCodeSchema } from "./models/status-code.js";
export { subAttachmentSchema, type SubAttachment } from "./models/sub-attachment.js";
export { subBulkSignerListSchema, type SubBulkSignerList } from "./models/sub-bulk-signer-list.js";
export {
  subBulkSignerListCustomFieldSchema,
  type SubBulkSignerListCustomField,
} from "./models/sub-bulk-signer-list-custom-field.js";
export { subCcSchema, type SubCc } from "./models/sub-cc.js";
export { subCustomFieldSchema, type SubCustomField } from "./models/sub-custom-field.js";
export { subEditorOptionsSchema, type SubEditorOptions } from "./models/sub-editor-options.js";
export { subFieldOptionsSchema, type SubFieldOptions } from "./models/sub-field-options.js";
export { subFormFieldGroupSchema, type SubFormFieldGroup } from "./models/sub-form-field-group.js";
export { subFormFieldRuleSchema, type SubFormFieldRule } from "./models/sub-form-field-rule.js";
export {
  subFormFieldRuleActionSchema,
  type SubFormFieldRuleAction,
} from "./models/sub-form-field-rule-action.js";
export {
  subFormFieldRuleTriggerSchema,
  type SubFormFieldRuleTrigger,
} from "./models/sub-form-field-rule-trigger.js";
export {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "./models/unions/sub-form-fields-per-document-base.js";
export {
  subFormFieldsPerDocumentCheckboxSchema,
  type SubFormFieldsPerDocumentCheckbox,
} from "./models/sub-form-fields-per-document-checkbox.js";
export {
  subFormFieldsPerDocumentCheckboxMergeSchema,
  type SubFormFieldsPerDocumentCheckboxMerge,
} from "./models/sub-form-fields-per-document-checkbox-merge.js";
export {
  subFormFieldsPerDocumentDateSignedSchema,
  type SubFormFieldsPerDocumentDateSigned,
} from "./models/sub-form-fields-per-document-date-signed.js";
export {
  subFormFieldsPerDocumentDropdownSchema,
  type SubFormFieldsPerDocumentDropdown,
} from "./models/sub-form-fields-per-document-dropdown.js";
export {
  SubFormFieldsPerDocumentFontEnum,
  subFormFieldsPerDocumentFontEnumSchema,
} from "./models/sub-form-fields-per-document-font-enum.js";
export {
  subFormFieldsPerDocumentHyperlinkSchema,
  type SubFormFieldsPerDocumentHyperlink,
} from "./models/sub-form-fields-per-document-hyperlink.js";
export {
  subFormFieldsPerDocumentInitialsSchema,
  type SubFormFieldsPerDocumentInitials,
} from "./models/sub-form-fields-per-document-initials.js";
export {
  subFormFieldsPerDocumentRadioSchema,
  type SubFormFieldsPerDocumentRadio,
} from "./models/sub-form-fields-per-document-radio.js";
export {
  subFormFieldsPerDocumentSignatureSchema,
  type SubFormFieldsPerDocumentSignature,
} from "./models/sub-form-fields-per-document-signature.js";
export {
  subFormFieldsPerDocumentTextSchema,
  type SubFormFieldsPerDocumentText,
} from "./models/sub-form-fields-per-document-text.js";
export {
  subFormFieldsPerDocumentTextMergeSchema,
  type SubFormFieldsPerDocumentTextMerge,
} from "./models/sub-form-fields-per-document-text-merge.js";
export {
  SubFormFieldsPerDocumentTypeEnum,
  subFormFieldsPerDocumentTypeEnumSchema,
} from "./models/sub-form-fields-per-document-type-enum.js";
export { subMergeFieldSchema, type SubMergeField } from "./models/sub-merge-field.js";
export { subOAuthSchema, type SubOAuth } from "./models/sub-oauth.js";
export { subOptionsSchema, type SubOptions } from "./models/sub-options.js";
export {
  subSignatureRequestGroupedSignersSchema,
  type SubSignatureRequestGroupedSigners,
} from "./models/sub-signature-request-grouped-signers.js";
export {
  subSignatureRequestSignerSchema,
  type SubSignatureRequestSigner,
} from "./models/sub-signature-request-signer.js";
export {
  subSignatureRequestTemplateSignerSchema,
  type SubSignatureRequestTemplateSigner,
} from "./models/sub-signature-request-template-signer.js";
export { subSigningOptionsSchema, type SubSigningOptions } from "./models/sub-signing-options.js";
export { subTeamResponseSchema, type SubTeamResponse } from "./models/sub-team-response.js";
export { subTemplateRoleSchema, type SubTemplateRole } from "./models/sub-template-role.js";
export {
  subUnclaimedDraftSignerSchema,
  type SubUnclaimedDraftSigner,
} from "./models/sub-unclaimed-draft-signer.js";
export {
  subUnclaimedDraftTemplateSignerSchema,
  type SubUnclaimedDraftTemplateSigner,
} from "./models/sub-unclaimed-draft-template-signer.js";
export {
  subWhiteLabelingOptionsSchema,
  type SubWhiteLabelingOptions,
} from "./models/sub-white-labeling-options.js";
export { teamAddMemberRequestSchema, type TeamAddMemberRequest } from "./models/team-add-member-request.js";
export { teamCreateRequestSchema, type TeamCreateRequest } from "./models/team-create-request.js";
export { teamGetInfoResponseSchema, type TeamGetInfoResponse } from "./models/team-get-info-response.js";
export { teamGetResponseSchema, type TeamGetResponse } from "./models/team-get-response.js";
export { teamInfoResponseSchema, type TeamInfoResponse } from "./models/team-info-response.js";
export { teamInviteResponseSchema, type TeamInviteResponse } from "./models/team-invite-response.js";
export { teamInvitesResponseSchema, type TeamInvitesResponse } from "./models/team-invites-response.js";
export { teamMemberResponseSchema, type TeamMemberResponse } from "./models/team-member-response.js";
export { teamMembersResponseSchema, type TeamMembersResponse } from "./models/team-members-response.js";
export { teamParentResponseSchema, type TeamParentResponse } from "./models/team-parent-response.js";
export {
  teamRemoveMemberRequestSchema,
  type TeamRemoveMemberRequest,
} from "./models/team-remove-member-request.js";
export { teamResponseSchema, type TeamResponse } from "./models/team-response.js";
export { teamSubTeamsResponseSchema, type TeamSubTeamsResponse } from "./models/team-sub-teams-response.js";
export { teamUpdateRequestSchema, type TeamUpdateRequest } from "./models/team-update-request.js";
export { templateCreatedEventSchema, type TemplateCreatedEvent } from "./models/template-created-event.js";
export { templateErrorEventSchema, type TemplateErrorEvent } from "./models/template-error-event.js";
export {
  templateAddUserRequestSchema,
  type TemplateAddUserRequest,
} from "./models/template-add-user-request.js";
export {
  templateCreateEmbeddedDraftRequestSchema,
  type TemplateCreateEmbeddedDraftRequest,
} from "./models/template-create-embedded-draft-request.js";
export {
  templateCreateEmbeddedDraftResponseSchema,
  type TemplateCreateEmbeddedDraftResponse,
} from "./models/template-create-embedded-draft-response.js";
export {
  templateCreateEmbeddedDraftResponseTemplateSchema,
  type TemplateCreateEmbeddedDraftResponseTemplate,
} from "./models/template-create-embedded-draft-response-template.js";
export { templateCreateRequestSchema, type TemplateCreateRequest } from "./models/template-create-request.js";
export {
  templateCreateResponseSchema,
  type TemplateCreateResponse,
} from "./models/template-create-response.js";
export {
  templateCreateResponseTemplateSchema,
  type TemplateCreateResponseTemplate,
} from "./models/template-create-response-template.js";
export { templateGetResponseSchema, type TemplateGetResponse } from "./models/template-get-response.js";
export { templateListResponseSchema, type TemplateListResponse } from "./models/template-list-response.js";
export {
  templateRemoveUserRequestSchema,
  type TemplateRemoveUserRequest,
} from "./models/template-remove-user-request.js";
export { templateResponseSchema, type TemplateResponse } from "./models/template-response.js";
export {
  templateResponseAccountSchema,
  type TemplateResponseAccount,
} from "./models/template-response-account.js";
export {
  templateResponseAccountQuotaSchema,
  type TemplateResponseAccountQuota,
} from "./models/template-response-account-quota.js";
export {
  templateResponseCcRoleSchema,
  type TemplateResponseCcRole,
} from "./models/template-response-cc-role.js";
export {
  templateResponseDocumentSchema,
  type TemplateResponseDocument,
} from "./models/template-response-document.js";
export {
  templateResponseDocumentCustomFieldBaseSchema,
  type TemplateResponseDocumentCustomFieldBase,
} from "./models/unions/template-response-document-custom-field-base.js";
export {
  templateResponseDocumentCustomFieldCheckboxSchema,
  type TemplateResponseDocumentCustomFieldCheckbox,
} from "./models/template-response-document-custom-field-checkbox.js";
export {
  templateResponseDocumentCustomFieldTextSchema,
  type TemplateResponseDocumentCustomFieldText,
} from "./models/template-response-document-custom-field-text.js";
export {
  templateResponseDocumentFieldGroupSchema,
  type TemplateResponseDocumentFieldGroup,
} from "./models/template-response-document-field-group.js";
export {
  templateResponseDocumentFieldGroupRuleSchema,
  type TemplateResponseDocumentFieldGroupRule,
} from "./models/template-response-document-field-group-rule.js";
export {
  templateResponseDocumentFormFieldBaseSchema,
  type TemplateResponseDocumentFormFieldBase,
} from "./models/unions/template-response-document-form-field-base.js";
export {
  templateResponseDocumentFormFieldCheckboxSchema,
  type TemplateResponseDocumentFormFieldCheckbox,
} from "./models/template-response-document-form-field-checkbox.js";
export {
  templateResponseDocumentFormFieldDateSignedSchema,
  type TemplateResponseDocumentFormFieldDateSigned,
} from "./models/template-response-document-form-field-date-signed.js";
export {
  templateResponseDocumentFormFieldDropdownSchema,
  type TemplateResponseDocumentFormFieldDropdown,
} from "./models/template-response-document-form-field-dropdown.js";
export {
  templateResponseDocumentFormFieldHyperlinkSchema,
  type TemplateResponseDocumentFormFieldHyperlink,
} from "./models/template-response-document-form-field-hyperlink.js";
export {
  templateResponseDocumentFormFieldInitialsSchema,
  type TemplateResponseDocumentFormFieldInitials,
} from "./models/template-response-document-form-field-initials.js";
export {
  templateResponseDocumentFormFieldRadioSchema,
  type TemplateResponseDocumentFormFieldRadio,
} from "./models/template-response-document-form-field-radio.js";
export {
  templateResponseDocumentFormFieldSignatureSchema,
  type TemplateResponseDocumentFormFieldSignature,
} from "./models/template-response-document-form-field-signature.js";
export {
  templateResponseDocumentFormFieldTextSchema,
  type TemplateResponseDocumentFormFieldText,
} from "./models/template-response-document-form-field-text.js";
export {
  templateResponseDocumentStaticFieldBaseSchema,
  type TemplateResponseDocumentStaticFieldBase,
} from "./models/unions/template-response-document-static-field-base.js";
export {
  templateResponseDocumentStaticFieldCheckboxSchema,
  type TemplateResponseDocumentStaticFieldCheckbox,
} from "./models/template-response-document-static-field-checkbox.js";
export {
  templateResponseDocumentStaticFieldDateSignedSchema,
  type TemplateResponseDocumentStaticFieldDateSigned,
} from "./models/template-response-document-static-field-date-signed.js";
export {
  templateResponseDocumentStaticFieldDropdownSchema,
  type TemplateResponseDocumentStaticFieldDropdown,
} from "./models/template-response-document-static-field-dropdown.js";
export {
  templateResponseDocumentStaticFieldHyperlinkSchema,
  type TemplateResponseDocumentStaticFieldHyperlink,
} from "./models/template-response-document-static-field-hyperlink.js";
export {
  templateResponseDocumentStaticFieldInitialsSchema,
  type TemplateResponseDocumentStaticFieldInitials,
} from "./models/template-response-document-static-field-initials.js";
export {
  templateResponseDocumentStaticFieldRadioSchema,
  type TemplateResponseDocumentStaticFieldRadio,
} from "./models/template-response-document-static-field-radio.js";
export {
  templateResponseDocumentStaticFieldSignatureSchema,
  type TemplateResponseDocumentStaticFieldSignature,
} from "./models/template-response-document-static-field-signature.js";
export {
  templateResponseDocumentStaticFieldTextSchema,
  type TemplateResponseDocumentStaticFieldText,
} from "./models/template-response-document-static-field-text.js";
export {
  templateResponseFieldAvgTextLengthSchema,
  type TemplateResponseFieldAvgTextLength,
} from "./models/template-response-field-avg-text-length.js";
export {
  templateResponseSignerRoleSchema,
  type TemplateResponseSignerRole,
} from "./models/template-response-signer-role.js";
export {
  templateUpdateFilesRequestSchema,
  type TemplateUpdateFilesRequest,
} from "./models/template-update-files-request.js";
export {
  templateUpdateFilesResponseSchema,
  type TemplateUpdateFilesResponse,
} from "./models/template-update-files-response.js";
export {
  templateUpdateFilesResponseTemplateSchema,
  type TemplateUpdateFilesResponseTemplate,
} from "./models/template-update-files-response-template.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { Type2, type2Schema } from "./models/type2.js";
export { Type3, type3Schema } from "./models/type3.js";
export {
  unclaimedDraftCreateEmbeddedRequestSchema,
  type UnclaimedDraftCreateEmbeddedRequest,
} from "./models/unclaimed-draft-create-embedded-request.js";
export {
  unclaimedDraftCreateEmbeddedWithTemplateRequestSchema,
  type UnclaimedDraftCreateEmbeddedWithTemplateRequest,
} from "./models/unclaimed-draft-create-embedded-with-template-request.js";
export {
  unclaimedDraftCreateRequestSchema,
  type UnclaimedDraftCreateRequest,
} from "./models/unclaimed-draft-create-request.js";
export {
  unclaimedDraftCreateResponseSchema,
  type UnclaimedDraftCreateResponse,
} from "./models/unclaimed-draft-create-response.js";
export {
  unclaimedDraftEditAndResendRequestSchema,
  type UnclaimedDraftEditAndResendRequest,
} from "./models/unclaimed-draft-edit-and-resend-request.js";
export {
  unclaimedDraftResponseSchema,
  type UnclaimedDraftResponse,
} from "./models/unclaimed-draft-response.js";
export { unknownErrorEventSchema, type UnknownErrorEvent } from "./models/unknown-error-event.js";
export { ValidationType, validationTypeSchema } from "./models/validation-type.js";
export { ValidationType1, validationType1Schema } from "./models/validation-type1.js";
export { warningResponseSchema, type WarningResponse } from "./models/warning-response.js";
export { FileType, fileTypeSchema } from "./models/file-type.js";

export {
  CoreError as DropboxSignApiError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded } from "./core/validation/schema.js";
