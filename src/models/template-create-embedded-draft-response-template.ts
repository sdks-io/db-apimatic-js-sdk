import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

/** Template object with parameters: `template_id`, `edit_url`, `expires_at`. */
export type TemplateCreateEmbeddedDraftResponseTemplate = {
  /** The id of the Template. */
  templateId?: string;
  /** Link to edit the template. */
  editUrl?: string;
  /** When the link expires. */
  expiresAt?: number;
  /**
   * A list of warnings.
   *
   * @deprecated
   */
  warnings?: WarningResponse[];
};

export const templateCreateEmbeddedDraftResponseTemplateSchema: Schema<TemplateCreateEmbeddedDraftResponseTemplate> =
  s.object<TemplateCreateEmbeddedDraftResponseTemplate>({
    templateId: s.optional(s.string()),
    editUrl: s.optional(s.string()),
    expiresAt: s.optional(s.int()),
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      templateId: "template_id",
      editUrl: "edit_url",
      expiresAt: "expires_at",
    },
  });
