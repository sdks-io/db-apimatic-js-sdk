import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Average text length in this field. */
export type TemplateResponseFieldAvgTextLength = {
  /** Number of lines. */
  numLines?: number;
  /** Number of characters per line. */
  numCharsPerLine?: number;
};

export const templateResponseFieldAvgTextLengthSchema: Schema<TemplateResponseFieldAvgTextLength> =
  s.object<TemplateResponseFieldAvgTextLength>({
    numLines: s.optional(s.int()),
    numCharsPerLine: s.optional(s.int()),
    _keysMap: {
      numLines: "num_lines",
      numCharsPerLine: "num_chars_per_line",
    },
  });
