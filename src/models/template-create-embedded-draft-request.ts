import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subAttachmentSchema, type SubAttachment } from "./sub-attachment.js";
import { subEditorOptionsSchema, type SubEditorOptions } from "./sub-editor-options.js";
import { subFieldOptionsSchema, type SubFieldOptions } from "./sub-field-options.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "./sub-form-field-group.js";
import { subFormFieldRuleSchema, type SubFormFieldRule } from "./sub-form-field-rule.js";
import { subMergeFieldSchema, type SubMergeField } from "./sub-merge-field.js";
import { subTemplateRoleSchema, type SubTemplateRole } from "./sub-template-role.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "./unions/sub-form-fields-per-document-base.js";

export type TemplateCreateEmbeddedDraftRequest = {
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
   * CC when creating a template.
   *
   * @default true
   */
  allowCcs?: boolean;
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
  /** The CC roles that must be assigned when using the template to send a signature request */
  ccRoles?: string[];
  /**
   * Client id of the app you're using to create this draft. Used to apply the branding and callback
   * url defined for the app.
   */
  clientId: string;
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
   * Add merge fields to the template. Merge fields are placed by the user creating the template and
   * used to pre-fill data by passing values into signature requests with the `custom_fields`
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
   * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up
   * to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<string, Record<string, unknown>>;
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
   * An array of the designated signer roles that must be specified when sending a SignatureRequest
   * using this Template.
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
   * Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true`
   * (defaults to disabled, or `false`).
   *
   * @default false
   */
  usePreexistingFields?: boolean;
  /**
   * Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults
   * to `false`.
   *
   * @default false
   */
  ignoreTextTagsExtractionErrors?: boolean;
};

export const templateCreateEmbeddedDraftRequestSchema: Schema<TemplateCreateEmbeddedDraftRequest> =
  s.object<TemplateCreateEmbeddedDraftRequest>({
    files: s.optional(s.bytes()),
    fileUrls: s.optional(s.array(s.string())),
    allowCcs: s.defaulted(s.boolean(), true),
    allowReassign: s.defaulted(s.boolean(), false),
    attachments: s.optional(s.array(s.lazy(() => subAttachmentSchema))),
    ccRoles: s.optional(s.array(s.string())),
    clientId: s.string(),
    editorOptions: s.optional(s.lazy(() => subEditorOptionsSchema)),
    fieldOptions: s.optional(s.lazy(() => subFieldOptionsSchema)),
    forceSignerRoles: s.defaulted(s.boolean(), false),
    forceSubjectMessage: s.defaulted(s.boolean(), false),
    formFieldGroups: s.optional(s.array(s.lazy(() => subFormFieldGroupSchema))),
    formFieldRules: s.optional(s.array(s.lazy(() => subFormFieldRuleSchema))),
    formFieldsPerDocument: s.optional(s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema))),
    mergeFields: s.optional(s.array(s.lazy(() => subMergeFieldSchema))),
    message: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    showPreview: s.defaulted(s.boolean(), false),
    showProgressStepper: s.defaulted(s.boolean(), true),
    signerRoles: s.optional(s.array(s.lazy(() => subTemplateRoleSchema))),
    skipMeNow: s.defaulted(s.boolean(), false),
    subject: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    title: s.optional(s.string()),
    usePreexistingFields: s.defaulted(s.boolean(), false),
    ignoreTextTagsExtractionErrors: s.defaulted(s.boolean(), false),
    _keysMap: {
      fileUrls: "file_urls",
      allowCcs: "allow_ccs",
      allowReassign: "allow_reassign",
      ccRoles: "cc_roles",
      clientId: "client_id",
      editorOptions: "editor_options",
      fieldOptions: "field_options",
      forceSignerRoles: "force_signer_roles",
      forceSubjectMessage: "force_subject_message",
      formFieldGroups: "form_field_groups",
      formFieldRules: "form_field_rules",
      formFieldsPerDocument: "form_fields_per_document",
      mergeFields: "merge_fields",
      showPreview: "show_preview",
      showProgressStepper: "show_progress_stepper",
      signerRoles: "signer_roles",
      skipMeNow: "skip_me_now",
      testMode: "test_mode",
      usePreexistingFields: "use_preexisting_fields",
      ignoreTextTagsExtractionErrors: "ignore_text_tags_extraction_errors",
    },
  });
