import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { templateResponseSchema, type TemplateResponse } from "./template-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type TemplateGetResponse = {
  /** Contains information about the templates you and your team have created. */
  template: TemplateResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const templateGetResponseSchema: Schema<TemplateGetResponse> = s.object<TemplateGetResponse>({
  template: templateResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
