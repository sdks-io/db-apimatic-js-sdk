import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountConfirmedEventSchema, type AccountConfirmedEvent } from "../account-confirmed-event.js";
import { callbackTestEventSchema, type CallbackTestEvent } from "../callback-test-event.js";
import { faxBlacklistedEventSchema, type FaxBlacklistedEvent } from "../fax-blacklisted-event.js";
import { faxBusyEventSchema, type FaxBusyEvent } from "../fax-busy-event.js";
import { faxDisconnectedEventSchema, type FaxDisconnectedEvent } from "../fax-disconnected-event.js";
import { faxNoAnswerEventSchema, type FaxNoAnswerEvent } from "../fax-no-answer-event.js";
import { faxOnHoldEventSchema, type FaxOnHoldEvent } from "../fax-on-hold-event.js";
import { faxReceivedEventSchema, type FaxReceivedEvent } from "../fax-received-event.js";
import { faxSentEventSchema, type FaxSentEvent } from "../fax-sent-event.js";
import { fileErrorEventSchema, type FileErrorEvent } from "../file-error-event.js";
import { signUrlInvalidEventSchema, type SignUrlInvalidEvent } from "../sign-url-invalid-event.js";
import {
  signatureRequestAllSignedEventSchema,
  type SignatureRequestAllSignedEvent,
} from "../signature-request-all-signed-event.js";
import {
  signatureRequestCanceledEventSchema,
  type SignatureRequestCanceledEvent,
} from "../signature-request-canceled-event.js";
import {
  signatureRequestDeclinedEventSchema,
  type SignatureRequestDeclinedEvent,
} from "../signature-request-declined-event.js";
import {
  signatureRequestDestroyedEventSchema,
  type SignatureRequestDestroyedEvent,
} from "../signature-request-destroyed-event.js";
import {
  signatureRequestDownloadableEventSchema,
  type SignatureRequestDownloadableEvent,
} from "../signature-request-downloadable-event.js";
import {
  signatureRequestEmailBounceEventSchema,
  type SignatureRequestEmailBounceEvent,
} from "../signature-request-email-bounce-event.js";
import {
  signatureRequestExpiredEventSchema,
  type SignatureRequestExpiredEvent,
} from "../signature-request-expired-event.js";
import {
  signatureRequestIncompleteQesEventSchema,
  type SignatureRequestIncompleteQesEvent,
} from "../signature-request-incomplete-qes-event.js";
import {
  signatureRequestInvalidEventSchema,
  type SignatureRequestInvalidEvent,
} from "../signature-request-invalid-event.js";
import {
  signatureRequestPreparedEventSchema,
  type SignatureRequestPreparedEvent,
} from "../signature-request-prepared-event.js";
import {
  signatureRequestReassignedEventSchema,
  type SignatureRequestReassignedEvent,
} from "../signature-request-reassigned-event.js";
import {
  signatureRequestRemindEventSchema,
  type SignatureRequestRemindEvent,
} from "../signature-request-remind-event.js";
import {
  signatureRequestSentEventSchema,
  type SignatureRequestSentEvent,
} from "../signature-request-sent-event.js";
import {
  signatureRequestSignedEventSchema,
  type SignatureRequestSignedEvent,
} from "../signature-request-signed-event.js";
import {
  signatureRequestSignerRemovedEventSchema,
  type SignatureRequestSignerRemovedEvent,
} from "../signature-request-signer-removed-event.js";
import {
  signatureRequestViewedEventSchema,
  type SignatureRequestViewedEvent,
} from "../signature-request-viewed-event.js";
import { templateCreatedEventSchema, type TemplateCreatedEvent } from "../template-created-event.js";
import { templateErrorEventSchema, type TemplateErrorEvent } from "../template-error-event.js";
import { unknownErrorEventSchema, type UnknownErrorEvent } from "../unknown-error-event.js";

/**
 * JSON payload delivered for a webhook event. The concrete shape is selected by `event.event_type`.
 */
export type EventCallbackPayload =
  | SignatureRequestViewedEvent
  | SignatureRequestSignedEvent
  | SignatureRequestSignerRemovedEvent
  | SignatureRequestDownloadableEvent
  | SignatureRequestSentEvent
  | SignatureRequestAllSignedEvent
  | SignatureRequestInvalidEvent
  | SignatureRequestEmailBounceEvent
  | SignatureRequestRemindEvent
  | SignatureRequestIncompleteQesEvent
  | SignatureRequestDestroyedEvent
  | SignatureRequestCanceledEvent
  | SignatureRequestDeclinedEvent
  | SignatureRequestExpiredEvent
  | SignatureRequestReassignedEvent
  | SignatureRequestPreparedEvent
  | AccountConfirmedEvent
  | UnknownErrorEvent
  | FileErrorEvent
  | TemplateCreatedEvent
  | TemplateErrorEvent
  | SignUrlInvalidEvent
  | CallbackTestEvent
  | FaxReceivedEvent
  | FaxSentEvent
  | FaxOnHoldEvent
  | FaxBusyEvent
  | FaxNoAnswerEvent
  | FaxDisconnectedEvent
  | FaxBlacklistedEvent;

export const eventCallbackPayloadSchema: Schema<EventCallbackPayload> = s.of<EventCallbackPayload>(
  s.union([
    s.lazy(() => signatureRequestViewedEventSchema),
    s.lazy(() => signatureRequestSignedEventSchema),
    s.lazy(() => signatureRequestSignerRemovedEventSchema),
    s.lazy(() => signatureRequestDownloadableEventSchema),
    s.lazy(() => signatureRequestSentEventSchema),
    s.lazy(() => signatureRequestAllSignedEventSchema),
    s.lazy(() => signatureRequestInvalidEventSchema),
    s.lazy(() => signatureRequestEmailBounceEventSchema),
    s.lazy(() => signatureRequestRemindEventSchema),
    s.lazy(() => signatureRequestIncompleteQesEventSchema),
    s.lazy(() => signatureRequestDestroyedEventSchema),
    s.lazy(() => signatureRequestCanceledEventSchema),
    s.lazy(() => signatureRequestDeclinedEventSchema),
    s.lazy(() => signatureRequestExpiredEventSchema),
    s.lazy(() => signatureRequestReassignedEventSchema),
    s.lazy(() => signatureRequestPreparedEventSchema),
    s.lazy(() => accountConfirmedEventSchema),
    s.lazy(() => unknownErrorEventSchema),
    s.lazy(() => fileErrorEventSchema),
    s.lazy(() => templateCreatedEventSchema),
    s.lazy(() => templateErrorEventSchema),
    s.lazy(() => signUrlInvalidEventSchema),
    s.lazy(() => callbackTestEventSchema),
    s.lazy(() => faxReceivedEventSchema),
    s.lazy(() => faxSentEventSchema),
    s.lazy(() => faxOnHoldEventSchema),
    s.lazy(() => faxBusyEventSchema),
    s.lazy(() => faxNoAnswerEventSchema),
    s.lazy(() => faxDisconnectedEventSchema),
    s.lazy(() => faxBlacklistedEventSchema),
  ]),
);
