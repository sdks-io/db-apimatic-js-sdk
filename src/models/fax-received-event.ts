import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";

export type FaxReceivedEvent = {
  event: Event;
  /** Contains information about a signature request. */
  transmission?: SignatureRequestResponse;
};

export const faxReceivedEventSchema: Schema<FaxReceivedEvent> = s.object<FaxReceivedEvent>({
  event: eventSchema,
  transmission: s.optional(s.lazy(() => signatureRequestResponseSchema)),
});
