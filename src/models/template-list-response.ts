import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import { templateResponseSchema, type TemplateResponse } from "./template-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TemplateListResponse = {
  /** List of templates that the API caller has access to. */
  templates: TemplateResponse[];
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const templateListResponseSchema: Schema<TemplateListResponse> = s.object<TemplateListResponse>({
  templates: s.array(s.lazy(() => templateResponseSchema)),
  listInfo: listInfoResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
  _keysMap: {
    listInfo: "list_info",
  },
});
