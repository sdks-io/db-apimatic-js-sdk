import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FileResponseDataUri = {
  /** File as base64 encoded string. */
  dataUri: string;
};

export const fileResponseDataUriSchema: Schema<FileResponseDataUri> = s.object<FileResponseDataUri>({
  dataUri: s.string(),
  _keysMap: {
    dataUri: "data_uri",
  },
});
