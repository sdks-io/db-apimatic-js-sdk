import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FaxLineDeleteRequest = {
  /** The Fax Line number */
  number: string;
};

export const faxLineDeleteRequestSchema: Schema<FaxLineDeleteRequest> = s.object<FaxLineDeleteRequest>({
  number: s.string(),
});
