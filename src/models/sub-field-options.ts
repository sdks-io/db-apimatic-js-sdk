import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateFormatSchema, type DateFormat } from "./date-format.js";

/** This allows the requester to specify field options for a signature request. */
export type SubFieldOptions = {
  /**
   * Allows requester to specify the date format (see list of allowed
   * [formats](/api/reference/constants/#date-formats))
   *
   * **NOTE:** Only available for Premium and higher.
   */
  dateFormat: DateFormat;
};

export const subFieldOptionsSchema: Schema<SubFieldOptions> = s.object<SubFieldOptions>({
  dateFormat: dateFormatSchema,
  _keysMap: {
    dateFormat: "date_format",
  },
});
