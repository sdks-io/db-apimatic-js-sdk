import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details concerning monthly usage */
export type AccountResponseUsage = {
  /** Number of fax pages sent */
  faxPagesSent?: number | null;
};

export const accountResponseUsageSchema: Schema<AccountResponseUsage> = s.object<AccountResponseUsage>({
  faxPagesSent: s.optionalNullable(s.int()),
  _keysMap: {
    faxPagesSent: "fax_pages_sent",
  },
});
