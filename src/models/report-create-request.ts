import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportTypeSchema, type ReportType } from "./report-type.js";

export type ReportCreateRequest = {
  /** The (inclusive) end date for the report data in `MM/DD/YYYY` format. */
  endDate: string;
  /**
   * The type(s) of the report you are requesting. Allowed values are `user_activity` and
   * `document_status`. User activity reports contain list of all users and their activity during
   * the specified date range. Document status report contain a list of signature requests created
   * in the specified time range (and their status).
   */
  reportType: ReportType[];
  /** The (inclusive) start date for the report data in `MM/DD/YYYY` format. */
  startDate: string;
};

export const reportCreateRequestSchema: Schema<ReportCreateRequest> = s.object<ReportCreateRequest>({
  endDate: s.string(),
  reportType: s.array(s.lazy(() => reportTypeSchema)),
  startDate: s.string(),
  _keysMap: {
    endDate: "end_date",
    reportType: "report_type",
    startDate: "start_date",
  },
});
