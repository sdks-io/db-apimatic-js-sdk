import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subEditorOptionsSchema, type SubEditorOptions } from "./sub-editor-options.js";
import { subMergeFieldSchema, type SubMergeField } from "./sub-merge-field.js";

export type EmbeddedEditUrlRequest = {
  /**
   * This allows the requester to enable/disable to add or change CC roles when editing the
   * template.
   *
   * @default false
   */
  allowEditCcs?: boolean;
  /**
   * The CC roles that must be assigned when using the template to send a signature request. To
   * remove all CC roles, pass in a single role with no name. For use in a POST request.
   */
  ccRoles?: string[];
  /** This allows the requester to specify editor options when a preparing a document */
  editorOptions?: SubEditorOptions;
  /** Provide users the ability to review/edit the template signer roles. @default false */
  forceSignerRoles?: boolean;
  /** Provide users the ability to review/edit the template subject and message. @default false */
  forceSubjectMessage?: boolean;
  /**
   * Add additional merge fields to the template, which can be used used to pre-fill data by passing
   * values into signature requests made with that template.
   *
   * Remove all merge fields on the template by passing an empty array `[]`.
   */
  mergeFields?: SubMergeField[];
  /**
   * This allows the requester to enable the preview experience (i.e. does not allow the requester's
   * end user to add any additional fields via the editor).
   *
   * **NOTE:** This parameter overwrites `show_preview=true` (if set).
   *
   * @default false
   */
  previewOnly?: boolean;
  /** This allows the requester to enable the editor/preview experience. @default false */
  showPreview?: boolean;
  /**
   * When only one step remains in the signature request process and this parameter is set to
   * `false` then the progress stepper will be hidden.
   *
   * @default true
   */
  showProgressStepper?: boolean;
  /**
   * Whether this is a test, locked templates will only be available for editing if this is set to
   * `true`. Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
};

export const embeddedEditUrlRequestSchema: Schema<EmbeddedEditUrlRequest> = s.object<EmbeddedEditUrlRequest>({
  allowEditCcs: s.defaulted(s.boolean(), false),
  ccRoles: s.optional(s.array(s.string())),
  editorOptions: s.optional(s.lazy(() => subEditorOptionsSchema)),
  forceSignerRoles: s.defaulted(s.boolean(), false),
  forceSubjectMessage: s.defaulted(s.boolean(), false),
  mergeFields: s.optional(s.array(s.lazy(() => subMergeFieldSchema))),
  previewOnly: s.defaulted(s.boolean(), false),
  showPreview: s.defaulted(s.boolean(), false),
  showProgressStepper: s.defaulted(s.boolean(), true),
  testMode: s.defaulted(s.boolean(), false),
  _keysMap: {
    allowEditCcs: "allow_edit_ccs",
    ccRoles: "cc_roles",
    editorOptions: "editor_options",
    forceSignerRoles: "force_signer_roles",
    forceSubjectMessage: "force_subject_message",
    mergeFields: "merge_fields",
    previewOnly: "preview_only",
    showPreview: "show_preview",
    showProgressStepper: "show_progress_stepper",
    testMode: "test_mode",
  },
});
