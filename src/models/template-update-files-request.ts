import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateUpdateFilesRequest = {
  /** Client id of the app you're using to update this template. */
  clientId?: string;
  /**
   * Use `files[]` to indicate the uploaded file(s) to use for the template.
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  files?: Uint8Array;
  /**
   * Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  fileUrls?: string[];
  /** The new default template email message. */
  message?: string;
  /** The new default template email subject. */
  subject?: string;
  /**
   * Whether this is a test, the signature request created from this draft will not be legally
   * binding if set to `true`. Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
};

export const templateUpdateFilesRequestSchema: Schema<TemplateUpdateFilesRequest> =
  s.object<TemplateUpdateFilesRequest>({
    clientId: s.optional(s.string()),
    files: s.optional(s.bytes()),
    fileUrls: s.optional(s.array(s.string())),
    message: s.optional(s.string()),
    subject: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    _keysMap: {
      clientId: "client_id",
      fileUrls: "file_urls",
      testMode: "test_mode",
    },
  });
