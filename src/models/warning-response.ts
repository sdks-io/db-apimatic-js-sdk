import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A list of warnings. */
export type WarningResponse = {
  /** Warning message */
  warningMsg: string;
  /** Warning name */
  warningName: string;
};

export const warningResponseSchema: Schema<WarningResponse> = s.object<WarningResponse>({
  warningMsg: s.string(),
  warningName: s.string(),
  _keysMap: {
    warningMsg: "warning_msg",
    warningName: "warning_name",
  },
});
