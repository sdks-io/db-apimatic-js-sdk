import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkSendJobResponseSchema, type BulkSendJobResponse } from "./bulk-send-job-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type BulkSendJobSendResponse = {
  /**
   * Contains information about the BulkSendJob such as when it was created and how many signature
   * requests are queued.
   */
  bulkSendJob: BulkSendJobResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const bulkSendJobSendResponseSchema: Schema<BulkSendJobSendResponse> =
  s.object<BulkSendJobSendResponse>({
    bulkSendJob: bulkSendJobResponseSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      bulkSendJob: "bulk_send_job",
    },
  });
