import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkSendJobResponseSchema, type BulkSendJobResponse } from "./bulk-send-job-response.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type BulkSendJobListResponse = {
  /** Contains a list of BulkSendJobs that the API caller has access to. */
  bulkSendJobs: BulkSendJobResponse[];
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const bulkSendJobListResponseSchema: Schema<BulkSendJobListResponse> =
  s.object<BulkSendJobListResponse>({
    bulkSendJobs: s.array(s.lazy(() => bulkSendJobResponseSchema)),
    listInfo: listInfoResponseSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      bulkSendJobs: "bulk_send_jobs",
      listInfo: "list_info",
    },
  });
