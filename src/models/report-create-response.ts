import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportResponseSchema, type ReportResponse } from "./report-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type ReportCreateResponse = {
  /** Contains information about the report request. */
  report: ReportResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const reportCreateResponseSchema: Schema<ReportCreateResponse> = s.object<ReportCreateResponse>({
  report: reportResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
