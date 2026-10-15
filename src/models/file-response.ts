import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FileResponse = {
  /** URL to the file. */
  fileUrl: string;
  /** When the link expires. */
  expiresAt: number;
};

export const fileResponseSchema: Schema<FileResponse> = s.object<FileResponse>({
  fileUrl: s.string(),
  expiresAt: s.int(),
  _keysMap: {
    fileUrl: "file_url",
    expiresAt: "expires_at",
  },
});
