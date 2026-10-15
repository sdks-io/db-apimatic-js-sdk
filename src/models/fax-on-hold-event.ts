import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";

export type FaxOnHoldEvent = {
  event: Event;
  /** Contains information about a signature request. */
  transmission?: SignatureRequestResponse;
};

export const faxOnHoldEventSchema: Schema<FaxOnHoldEvent> = s.object<FaxOnHoldEvent>({
  event: eventSchema,
  transmission: s.optional(s.lazy(() => signatureRequestResponseSchema)),
});
