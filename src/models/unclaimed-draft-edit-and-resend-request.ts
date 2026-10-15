import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subEditorOptionsSchema, type SubEditorOptions } from "./sub-editor-options.js";

export type UnclaimedDraftEditAndResendRequest = {
  /**
   * Client id of the app used to create the draft. Used to apply the branding and callback url
   * defined for the app.
   */
  clientId: string;
  /** This allows the requester to specify editor options when a preparing a document */
  editorOptions?: SubEditorOptions;
  /**
   * The request created from this draft will also be signable in embedded mode if set to `true`.
   */
  isForEmbeddedSigning?: boolean;
  /**
   * The email address of the user that should be designated as the requester of this draft. If not
   * set, original requester's email address will be used.
   */
  requesterEmailAddress?: string;
  /** The URL you want signers redirected to after they successfully request a signature. */
  requestingRedirectUrl?: string;
  /**
   * When only one step remains in the signature request process and this parameter is set to
   * `false` then the progress stepper will be hidden.
   *
   * @default true
   */
  showProgressStepper?: boolean;
  /** The URL you want signers redirected to after they successfully sign. */
  signingRedirectUrl?: string;
  /**
   * Whether this is a test, the signature request created from this draft will not be legally
   * binding if set to `true`. Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
};

export const unclaimedDraftEditAndResendRequestSchema: Schema<UnclaimedDraftEditAndResendRequest> =
  s.object<UnclaimedDraftEditAndResendRequest>({
    clientId: s.string(),
    editorOptions: s.optional(s.lazy(() => subEditorOptionsSchema)),
    isForEmbeddedSigning: s.optional(s.boolean()),
    requesterEmailAddress: s.optional(s.string()),
    requestingRedirectUrl: s.optional(s.string()),
    showProgressStepper: s.defaulted(s.boolean(), true),
    signingRedirectUrl: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    _keysMap: {
      clientId: "client_id",
      editorOptions: "editor_options",
      isForEmbeddedSigning: "is_for_embedded_signing",
      requesterEmailAddress: "requester_email_address",
      requestingRedirectUrl: "requesting_redirect_url",
      showProgressStepper: "show_progress_stepper",
      signingRedirectUrl: "signing_redirect_url",
      testMode: "test_mode",
    },
  });
