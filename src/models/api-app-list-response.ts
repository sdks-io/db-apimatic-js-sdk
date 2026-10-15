import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiAppResponseSchema, type ApiAppResponse } from "./api-app-response.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type ApiAppListResponse = {
  /** Contains information about API Apps. */
  apiApps: ApiAppResponse[];
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const apiAppListResponseSchema: Schema<ApiAppListResponse> = s.object<ApiAppListResponse>({
  apiApps: s.array(s.lazy(() => apiAppResponseSchema)),
  listInfo: listInfoResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    apiApps: "api_apps",
    listInfo: "list_info",
  },
});
