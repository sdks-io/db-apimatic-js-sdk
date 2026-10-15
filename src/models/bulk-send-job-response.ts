import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Contains information about the BulkSendJob such as when it was created and how many signature
 * requests are queued.
 */
export type BulkSendJobResponse = {
  /** The id of the BulkSendJob. */
  bulkSendJobId?: string | null;
  /** The total amount of Signature Requests queued for sending. */
  total?: number;
  /**
   * True if you are the owner of this BulkSendJob, false if it's been shared with you by a team
   * member.
   */
  isCreator?: boolean;
  /** Time that the BulkSendJob was created. */
  createdAt?: number;
};

export const bulkSendJobResponseSchema: Schema<BulkSendJobResponse> = s.object<BulkSendJobResponse>({
  bulkSendJobId: s.optionalNullable(s.string()),
  total: s.optional(s.int()),
  isCreator: s.optional(s.boolean()),
  createdAt: s.optional(s.int()),
  _keysMap: {
    bulkSendJobId: "bulk_send_job_id",
    isCreator: "is_creator",
    createdAt: "created_at",
  },
});
