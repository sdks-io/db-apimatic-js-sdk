import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { faxLineResponseFaxLineSchema, type FaxLineResponseFaxLine } from "./fax-line-response-fax-line.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type FaxLineListResponse = {
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  faxLines: FaxLineResponseFaxLine[];
  /** A list of warnings. */
  warnings?: WarningResponse;
};

export const faxLineListResponseSchema: Schema<FaxLineListResponse> = s.object<FaxLineListResponse>({
  listInfo: listInfoResponseSchema,
  faxLines: s.array(s.lazy(() => faxLineResponseFaxLineSchema)),
  warnings: s.optional(s.lazy(() => warningResponseSchema)),
  _keysMap: {
    listInfo: "list_info",
    faxLines: "fax_lines",
  },
});
