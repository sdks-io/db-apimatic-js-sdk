import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details concerning remaining monthly quotas. */
export type AccountResponseQuotas = {
  /** API signature requests remaining. */
  apiSignatureRequestsLeft?: number | null;
  /** Signature requests remaining. */
  documentsLeft?: number | null;
  /** Total API templates allowed. */
  templatesTotal?: number | null;
  /** API templates remaining. */
  templatesLeft?: number | null;
  /** SMS verifications remaining. */
  smsVerificationsLeft?: number | null;
  /** Number of fax pages left */
  numFaxPagesLeft?: number | null;
};

export const accountResponseQuotasSchema: Schema<AccountResponseQuotas> = s.object<AccountResponseQuotas>({
  apiSignatureRequestsLeft: s.optionalNullable(s.int()),
  documentsLeft: s.optionalNullable(s.int()),
  templatesTotal: s.optionalNullable(s.int()),
  templatesLeft: s.optionalNullable(s.int()),
  smsVerificationsLeft: s.optionalNullable(s.int()),
  numFaxPagesLeft: s.optionalNullable(s.int()),
  _keysMap: {
    apiSignatureRequestsLeft: "api_signature_requests_left",
    documentsLeft: "documents_left",
    templatesTotal: "templates_total",
    templatesLeft: "templates_left",
    smsVerificationsLeft: "sms_verifications_left",
    numFaxPagesLeft: "num_fax_pages_left",
  },
});
