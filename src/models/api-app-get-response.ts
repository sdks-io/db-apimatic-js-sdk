import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiAppResponseSchema, type ApiAppResponse } from "./api-app-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type ApiAppGetResponse = {
  /** Contains information about an API App. */
  apiApp: ApiAppResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const apiAppGetResponseSchema: Schema<ApiAppGetResponse> = s.object<ApiAppGetResponse>({
  apiApp: apiAppResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    apiApp: "api_app",
  },
});
