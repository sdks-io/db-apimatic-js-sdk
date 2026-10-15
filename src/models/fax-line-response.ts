import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { faxLineResponseFaxLineSchema, type FaxLineResponseFaxLine } from "./fax-line-response-fax-line.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type FaxLineResponse = {
  faxLine: FaxLineResponseFaxLine;
  /** A list of warnings. */
  warnings?: WarningResponse;
};

export const faxLineResponseSchema: Schema<FaxLineResponse> = s.object<FaxLineResponse>({
  faxLine: faxLineResponseFaxLineSchema,
  warnings: s.optional(s.lazy(() => warningResponseSchema)),
  _keysMap: {
    faxLine: "fax_line",
  },
});
