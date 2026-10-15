import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";

export type FileErrorEvent = {
  event: Event;
  /** Contains information about a signature request. */
  signatureRequest?: SignatureRequestResponse;
};

export const fileErrorEventSchema: Schema<FileErrorEvent> = s.object<FileErrorEvent>({
  event: eventSchema,
  signatureRequest: s.optional(s.lazy(() => signatureRequestResponseSchema)),
  _keysMap: {
    signatureRequest: "signature_request",
  },
});
