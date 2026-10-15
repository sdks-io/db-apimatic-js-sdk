import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signatureRequestResponseAttachmentSchema,
  type SignatureRequestResponseAttachment,
} from "./signature-request-response-attachment.js";
import { templateResponseAccountSchema, type TemplateResponseAccount } from "./template-response-account.js";
import { templateResponseCcRoleSchema, type TemplateResponseCcRole } from "./template-response-cc-role.js";
import {
  templateResponseDocumentSchema,
  type TemplateResponseDocument,
} from "./template-response-document.js";
import {
  templateResponseSignerRoleSchema,
  type TemplateResponseSignerRole,
} from "./template-response-signer-role.js";
import {
  templateResponseDocumentCustomFieldBaseSchema,
  type TemplateResponseDocumentCustomFieldBase,
} from "./unions/template-response-document-custom-field-base.js";
import {
  templateResponseDocumentFormFieldBaseSchema,
  type TemplateResponseDocumentFormFieldBase,
} from "./unions/template-response-document-form-field-base.js";

/** Contains information about the templates you and your team have created. */
export type TemplateResponse = {
  /** The id of the Template. */
  templateId?: string;
  /**
   * The title of the Template. This will also be the default subject of the message sent to signers
   * when using this Template to send a SignatureRequest. This can be overridden when sending the
   * SignatureRequest.
   */
  title?: string;
  /**
   * The default message that will be sent to signers when using this Template to send a
   * SignatureRequest. This can be overridden when sending the SignatureRequest.
   */
  message?: string;
  /** Time the template was last updated. */
  updatedAt?: number;
  /**
   * `true` if this template was created using an embedded flow, `false` if it was created on our
   * website. Will be `null` when you are not the creator of the Template.
   */
  isEmbedded?: boolean | null;
  /**
   * `true` if you are the owner of this template, `false` if it's been shared with you by a team
   * member.
   */
  isCreator?: boolean;
  /**
   * Indicates whether edit rights have been granted to you by the owner (always `true` if that's
   * you).
   */
  canEdit?: boolean;
  /**
   * Indicates whether the template is locked. If `true`, then the template was created outside your
   * quota and can only be used in `test_mode`. If `false`, then the template is within your quota
   * and can be used to create signature requests.
   */
  isLocked?: boolean;
  /** The metadata attached to the template. */
  metadata?: Record<string, Record<string, unknown>>;
  /**
   * An array of the designated signer roles that must be specified when sending a SignatureRequest
   * using this Template.
   */
  signerRoles?: TemplateResponseSignerRole[];
  /**
   * An array of the designated CC roles that must be specified when sending a SignatureRequest
   * using this Template.
   */
  ccRoles?: TemplateResponseCcRole[];
  /**
   * An array describing each document associated with this Template. Includes form field data for
   * each document.
   */
  documents?: TemplateResponseDocument[];
  /**
   * Deprecated. Use `custom_fields` inside the
   * [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response)
   * array instead.
   *
   * @deprecated
   */
  customFields?: TemplateResponseDocumentCustomFieldBase[] | null;
  /**
   * Deprecated. Use `form_fields` inside the
   * [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response)
   * array instead.
   *
   * @deprecated
   */
  namedFormFields?: TemplateResponseDocumentFormFieldBase[] | null;
  /** An array of the Accounts that can use this Template. */
  accounts?: TemplateResponseAccount[];
  /** Signer attachments. */
  attachments?: SignatureRequestResponseAttachment[];
};

export const templateResponseSchema: Schema<TemplateResponse> = s.object<TemplateResponse>({
  templateId: s.optional(s.string()),
  title: s.optional(s.string()),
  message: s.optional(s.string()),
  updatedAt: s.optional(s.int()),
  isEmbedded: s.optionalNullable(s.boolean()),
  isCreator: s.optional(s.boolean()),
  canEdit: s.optional(s.boolean()),
  isLocked: s.optional(s.boolean()),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  signerRoles: s.optional(s.array(s.lazy(() => templateResponseSignerRoleSchema))),
  ccRoles: s.optional(s.array(s.lazy(() => templateResponseCcRoleSchema))),
  documents: s.optional(s.array(s.lazy(() => templateResponseDocumentSchema))),
  customFields: s.optionalNullable(s.array(s.lazy(() => templateResponseDocumentCustomFieldBaseSchema))),
  namedFormFields: s.optionalNullable(s.array(s.lazy(() => templateResponseDocumentFormFieldBaseSchema))),
  accounts: s.optional(s.array(s.lazy(() => templateResponseAccountSchema))),
  attachments: s.optional(s.array(s.lazy(() => signatureRequestResponseAttachmentSchema))),
  _keysMap: {
    templateId: "template_id",
    updatedAt: "updated_at",
    isEmbedded: "is_embedded",
    isCreator: "is_creator",
    canEdit: "can_edit",
    isLocked: "is_locked",
    signerRoles: "signer_roles",
    ccRoles: "cc_roles",
    customFields: "custom_fields",
    namedFormFields: "named_form_fields",
  },
});
