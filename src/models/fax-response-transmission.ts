import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusCodeSchema, type StatusCode } from "./status-code.js";

export type FaxResponseTransmission = {
  /** Fax Transmission Recipient */
  recipient: string;
  /** Fax Transmission Status Code */
  statusCode: StatusCode;
  /** Fax Transmission Sent Timestamp */
  sentAt?: number;
};

export const faxResponseTransmissionSchema: Schema<FaxResponseTransmission> =
  s.object<FaxResponseTransmission>({
    recipient: s.string(),
    statusCode: statusCodeSchema,
    sentAt: s.optional(s.int()),
    _keysMap: {
      statusCode: "status_code",
      sentAt: "sent_at",
    },
  });
