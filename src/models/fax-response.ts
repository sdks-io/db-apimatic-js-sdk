import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { faxResponseTransmissionSchema, type FaxResponseTransmission } from "./fax-response-transmission.js";

export type FaxResponse = {
  /** Fax ID */
  faxId: string;
  /** Fax Title */
  title: string;
  /** Fax Original Title */
  originalTitle: string;
  /** Fax Subject */
  subject?: string | null;
  /** Fax Message */
  message?: string | null;
  /** Fax Metadata */
  metadata: Record<string, unknown>;
  /** Fax Created At Timestamp */
  createdAt: number;
  /** Fax Sender Email */
  sender: string;
  /** Fax Files URL */
  filesUrl: string;
  /** The path where the completed document can be downloaded */
  finalCopyUri?: string | null;
  /** Fax Transmissions List */
  transmissions: FaxResponseTransmission[];
  /**
   * Whether this is a test fax. Test faxes are not delivered to the recipient. Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
};

export const faxResponseSchema: Schema<FaxResponse> = s.object<FaxResponse>({
  faxId: s.string(),
  title: s.string(),
  originalTitle: s.string(),
  subject: s.optionalNullable(s.string()),
  message: s.optionalNullable(s.string()),
  metadata: s.record(s.string(), s.unknown()),
  createdAt: s.int(),
  sender: s.string(),
  filesUrl: s.string(),
  finalCopyUri: s.optionalNullable(s.string()),
  transmissions: s.array(s.lazy(() => faxResponseTransmissionSchema)),
  testMode: s.defaulted(s.boolean(), false),
  _keysMap: {
    faxId: "fax_id",
    originalTitle: "original_title",
    createdAt: "created_at",
    filesUrl: "files_url",
    finalCopyUri: "final_copy_uri",
    testMode: "test_mode",
  },
});
