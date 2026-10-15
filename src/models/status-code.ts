import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Fax Transmission Status Code */
export const StatusCode = {
  Success: "success",
  Transmitting: "transmitting",
  ErrorCouldNotFax: "error_could_not_fax",
  ErrorUnknown: "error_unknown",
  ErrorBusy: "error_busy",
  ErrorNoAnswer: "error_no_answer",
  ErrorDisconnected: "error_disconnected",
  ErrorBadDestination: "error_bad_destination",
} as const;
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode] | (string & {});

export const statusCodeSchema: EnumSchema<StatusCode> = s.enumOf<StatusCode>(StatusCode);
