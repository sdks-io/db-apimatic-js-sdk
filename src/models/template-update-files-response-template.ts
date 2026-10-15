import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

/** Contains template id */
export type TemplateUpdateFilesResponseTemplate = {
  /** The id of the Template. */
  templateId?: string;
  /**
   * A list of warnings.
   *
   * @deprecated
   */
  warnings?: WarningResponse[];
};

export const templateUpdateFilesResponseTemplateSchema: Schema<TemplateUpdateFilesResponseTemplate> =
  s.object<TemplateUpdateFilesResponseTemplate>({
    templateId: s.optional(s.string()),
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      templateId: "template_id",
    },
  });
