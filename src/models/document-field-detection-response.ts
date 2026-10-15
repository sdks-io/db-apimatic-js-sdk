import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentFieldDetectionResponseDetectionResultSchema,
  type DocumentFieldDetectionResponseDetectionResult,
} from "./document-field-detection-response-detection-result.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type DocumentFieldDetectionResponse = {
  detectionResult: DocumentFieldDetectionResponseDetectionResult;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const documentFieldDetectionResponseSchema: Schema<DocumentFieldDetectionResponse> =
  s.object<DocumentFieldDetectionResponse>({
    detectionResult: documentFieldDetectionResponseDetectionResultSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      detectionResult: "detection_result",
    },
  });
