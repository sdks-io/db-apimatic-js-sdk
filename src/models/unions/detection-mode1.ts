import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The field detection method used to analyze the document: `annotations` or `text_tags`. */
export type DetectionMode1 = string;

export const detectionMode1Schema: Schema<DetectionMode1> = s.of<DetectionMode1>(s.union([s.string()]));
