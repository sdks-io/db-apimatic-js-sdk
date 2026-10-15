import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";

export type FaxBusyEvent = {
  event: Event;
  /** Contains information about a signature request. */
  transmission?: SignatureRequestResponse;
};

export const faxBusyEventSchema: Schema<FaxBusyEvent> = s.object<FaxBusyEvent>({
  event: eventSchema,
  transmission: s.optional(s.lazy(() => signatureRequestResponseSchema)),
});
