import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";

export type SignatureRequestViewedEvent = {
  event: Event;
  /** Contains information about a signature request. */
  signatureRequest?: SignatureRequestResponse;
};

export const signatureRequestViewedEventSchema: Schema<SignatureRequestViewedEvent> =
  s.object<SignatureRequestViewedEvent>({
    event: eventSchema,
    signatureRequest: s.optional(s.lazy(() => signatureRequestResponseSchema)),
    _keysMap: {
      signatureRequest: "signature_request",
    },
  });
