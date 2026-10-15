import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkSendJobGetResponseSignatureRequestsSchema,
  type BulkSendJobGetResponseSignatureRequests,
} from "./bulk-send-job-get-response-signature-requests.js";
import { bulkSendJobResponseSchema, type BulkSendJobResponse } from "./bulk-send-job-response.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type BulkSendJobGetResponse = {
  /**
   * Contains information about the BulkSendJob such as when it was created and how many signature
   * requests are queued.
   */
  bulkSendJob: BulkSendJobResponse;
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  /** Contains information about the Signature Requests sent in bulk. */
  signatureRequests: BulkSendJobGetResponseSignatureRequests[];
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const bulkSendJobGetResponseSchema: Schema<BulkSendJobGetResponse> = s.object<BulkSendJobGetResponse>({
  bulkSendJob: bulkSendJobResponseSchema,
  listInfo: listInfoResponseSchema,
  signatureRequests: s.array(s.lazy(() => bulkSendJobGetResponseSignatureRequestsSchema)),
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    bulkSendJob: "bulk_send_job",
    listInfo: "list_info",
    signatureRequests: "signature_requests",
  },
});
