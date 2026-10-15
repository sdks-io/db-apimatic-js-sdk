import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportTypeSchema, type ReportType } from "./report-type.js";

/** Contains information about the report request. */
export type ReportResponse = {
  /** A message indicating the requested operation's success */
  success?: string;
  /** The (inclusive) start date for the report data in MM/DD/YYYY format. */
  startDate?: string;
  /** The (inclusive) end date for the report data in MM/DD/YYYY format. */
  endDate?: string;
  /**
   * The type(s) of the report you are requesting. Allowed values are "user_activity" and
   * "document_status". User activity reports contain list of all users and their activity during
   * the specified date range. Document status report contain a list of signature requests created
   * in the specified time range (and their status).
   */
  reportType?: ReportType[];
};

export const reportResponseSchema: Schema<ReportResponse> = s.object<ReportResponse>({
  success: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  reportType: s.optional(s.array(s.lazy(() => reportTypeSchema))),
  _keysMap: {
    startDate: "start_date",
    endDate: "end_date",
    reportType: "report_type",
  },
});
