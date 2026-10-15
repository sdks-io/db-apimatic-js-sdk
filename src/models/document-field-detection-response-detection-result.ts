import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseErrorSchema, type ErrorResponseError } from "./error-response-error.js";
import { subFormFieldGroupSchema, type SubFormFieldGroup } from "./sub-form-field-group.js";
import { detectionMode1Schema, type DetectionMode1 } from "./unions/detection-mode1.js";
import {
  subFormFieldsPerDocumentBaseSchema,
  type SubFormFieldsPerDocumentBase,
} from "./unions/sub-form-fields-per-document-base.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type DocumentFieldDetectionResponseDetectionResult = {
  /** The SHA-256 hash of the analyzed document. */
  documentHash: string;
  /** The field detection method used to analyze the document: `annotations` or `text_tags`. */
  detectionMode: DetectionMode1;
  /** The total number of pages in the document. */
  pageCount: number;
  /**
   * The zero-based page indexes analyzed, represented by the requested `page_range`, or `all` when
   * every page was analyzed.
   */
  pagesAnalyzed: string;
  /** The Unix timestamp when the field detection result was generated. */
  detectedAt: number;
  /**
   * The fields that should appear on the document, expressed as an array of objects. (For more
   * details you can read about it here: [Using Form Fields per
   * Document](/docs/openapi/form-fields-per-document).)
   *
   * **NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have
   * additional required and optional parameters. Check out the list of [additional
   * parameters](/api/reference/constants/#form-fields-per-document) for these field types.
   *
   * * Text Field use `SubFormFieldsPerDocumentText`
   * * Dropdown Field use `SubFormFieldsPerDocumentDropdown`
   * * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
   * * Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
   * * Radio Field use `SubFormFieldsPerDocumentRadio`
   * * Signature Field use `SubFormFieldsPerDocumentSignature`
   * * Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
   * * Initials Field use `SubFormFieldsPerDocumentInitials`
   * * Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
   * * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  formFieldsPerDocument: SubFormFieldsPerDocumentBase[];
  /**
   * Group information for fields defined in `form_fields_per_document`. String-indexed JSON array
   * with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields
   * referencing a group defined in `form_field_groups`.
   */
  formFieldGroups: SubFormFieldGroup[];
  /** Non-fatal issues encountered during field detection. */
  warnings: WarningResponse[];
  /**
   * Errors encountered during field detection. Successfully detected fields may still be included
   * in the response.
   */
  errors: ErrorResponseError[];
  /** Suggestions for improving the field detection results. */
  suggestions: string[];
};

export const documentFieldDetectionResponseDetectionResultSchema: Schema<DocumentFieldDetectionResponseDetectionResult> =
  s.object<DocumentFieldDetectionResponseDetectionResult>({
    documentHash: s.string(),
    detectionMode: detectionMode1Schema,
    pageCount: s.int(),
    pagesAnalyzed: s.string(),
    detectedAt: s.int(),
    formFieldsPerDocument: s.array(s.lazy(() => subFormFieldsPerDocumentBaseSchema)),
    formFieldGroups: s.array(s.lazy(() => subFormFieldGroupSchema)),
    warnings: s.array(s.lazy(() => warningResponseSchema)),
    errors: s.array(s.lazy(() => errorResponseErrorSchema)),
    suggestions: s.array(s.string()),
    _keysMap: {
      documentHash: "document_hash",
      detectionMode: "detection_mode",
      pageCount: "page_count",
      pagesAnalyzed: "pages_analyzed",
      detectedAt: "detected_at",
      formFieldsPerDocument: "form_fields_per_document",
      formFieldGroups: "form_field_groups",
    },
  });
