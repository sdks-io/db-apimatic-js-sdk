import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountResponseSchema, type AccountResponse } from "./account-response.js";
import {
  eventCallbackRequestEventSchema,
  type EventCallbackRequestEvent,
} from "./event-callback-request-event.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";
import { templateResponseSchema, type TemplateResponse } from "./template-response.js";

export type EventCallbackRequest = {
  /** Basic information about the event that occurred. */
  event: EventCallbackRequestEvent;
  account?: AccountResponse;
  /** Contains information about a signature request. */
  signatureRequest?: SignatureRequestResponse;
  /** Contains information about the templates you and your team have created. */
  template?: TemplateResponse;
};

export const eventCallbackRequestSchema: Schema<EventCallbackRequest> = s.object<EventCallbackRequest>({
  event: eventCallbackRequestEventSchema,
  account: s.optional(s.lazy(() => accountResponseSchema)),
  signatureRequest: s.optional(s.lazy(() => signatureRequestResponseSchema)),
  template: s.optional(s.lazy(() => templateResponseSchema)),
  _keysMap: {
    signatureRequest: "signature_request",
  },
});
