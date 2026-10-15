import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { faxResponseSchema, type FaxResponse } from "./fax-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type FaxGetResponse = {
  fax: FaxResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const faxGetResponseSchema: Schema<FaxGetResponse> = s.object<FaxGetResponse>({
  fax: faxResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
