import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FaxSendRequest = {
  /** Recipient of the fax Can be a phone number in E.164 format or email address */
  recipient: string;
  /** Fax Send From Sender (used only with fax number) */
  sender?: string;
  /**
   * Use `files[]` to indicate the uploaded file(s) to fax
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  files?: Uint8Array;
  /**
   * Use `file_urls[]` to have Dropbox Fax download the file(s) to fax
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  fileUrls?: string[];
  /** API Test Mode Setting @default false */
  testMode?: boolean;
  /** Fax cover page recipient information */
  coverPageTo?: string;
  /** Fax cover page sender information */
  coverPageFrom?: string;
  /** Fax Cover Page Message */
  coverPageMessage?: string;
  /** Fax Title */
  title?: string;
};

export const faxSendRequestSchema: Schema<FaxSendRequest> = s.object<FaxSendRequest>({
  recipient: s.string(),
  sender: s.optional(s.string()),
  files: s.optional(s.bytes()),
  fileUrls: s.optional(s.array(s.string())),
  testMode: s.defaulted(s.boolean(), false),
  coverPageTo: s.optional(s.string()),
  coverPageFrom: s.optional(s.string()),
  coverPageMessage: s.optional(s.string()),
  title: s.optional(s.string()),
  _keysMap: {
    fileUrls: "file_urls",
    testMode: "test_mode",
    coverPageTo: "cover_page_to",
    coverPageFrom: "cover_page_from",
    coverPageMessage: "cover_page_message",
  },
});
