import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An array of the designated CC roles that must be specified when sending a SignatureRequest using
 * this Template.
 */
export type TemplateResponseAccountQuota = {
  /** API templates remaining. */
  templatesLeft?: number;
  /** API signature requests remaining. */
  apiSignatureRequestsLeft?: number;
  /** Signature requests remaining. */
  documentsLeft?: number;
  /** SMS verifications remaining. */
  smsVerificationsLeft?: number;
};

export const templateResponseAccountQuotaSchema: Schema<TemplateResponseAccountQuota> =
  s.object<TemplateResponseAccountQuota>({
    templatesLeft: s.optional(s.int()),
    apiSignatureRequestsLeft: s.optional(s.int()),
    documentsLeft: s.optional(s.int()),
    smsVerificationsLeft: s.optional(s.int()),
    _keysMap: {
      templatesLeft: "templates_left",
      apiSignatureRequestsLeft: "api_signature_requests_left",
      documentsLeft: "documents_left",
      smsVerificationsLeft: "sms_verifications_left",
    },
  });
