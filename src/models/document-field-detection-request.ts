import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detectionModeSchema, type DetectionMode } from "./unions/detection-mode.js";

export type DocumentFieldDetectionRequest = {
  /**
   * The PDF file to analyze.
   *
   * This endpoint requires either `file` or `file_url`, but not both.
   */
  file?: Uint8Array;
  /**
   * The URL of the PDF file to analyze.
   *
   * This endpoint requires either `file` or `file_url`, but not both.
   */
  fileUrl?: string;
  /**
   * The field detection method to use. Set to `annotations` to detect PDF form annotations or
   * `text_tags` to detect Dropbox Sign text tags.
   */
  detectionMode: DetectionMode;
  /**
   * The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or
   * comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.
   */
  pageRange?: string;
};

export const documentFieldDetectionRequestSchema: Schema<DocumentFieldDetectionRequest> =
  s.object<DocumentFieldDetectionRequest>({
    file: s.optional(s.bytes()),
    fileUrl: s.optional(s.string()),
    detectionMode: detectionModeSchema,
    pageRange: s.optional(s.string()),
    _keysMap: {
      fileUrl: "file_url",
      detectionMode: "detection_mode",
      pageRange: "page_range",
    },
  });
