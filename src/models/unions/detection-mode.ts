import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The field detection method to use. Set to `annotations` to detect PDF form annotations or
 * `text_tags` to detect Dropbox Sign text tags.
 */
export type DetectionMode = string;

export const detectionModeSchema: Schema<DetectionMode> = s.of<DetectionMode>(s.union([s.string()]));
