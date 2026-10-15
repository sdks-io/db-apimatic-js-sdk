import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  eventCallbackRequestEventMetadataSchema,
  type EventCallbackRequestEventMetadata,
} from "./event-callback-request-event-metadata.js";
import { eventTypeSchema, type EventType } from "./event-type.js";

/** Basic information about the event that occurred. */
export type EventCallbackRequestEvent = {
  /** Time the event was created (using Unix time). */
  eventTime: string;
  /** Type of callback event that was triggered. */
  eventType: EventType;
  /** Generated hash used to verify source of event data. */
  eventHash: string;
  /** Specific metadata about the event. */
  eventMetadata?: EventCallbackRequestEventMetadata;
};

export const eventCallbackRequestEventSchema: Schema<EventCallbackRequestEvent> =
  s.object<EventCallbackRequestEvent>({
    eventTime: s.string(),
    eventType: eventTypeSchema,
    eventHash: s.string(),
    eventMetadata: s.optional(s.lazy(() => eventCallbackRequestEventMetadataSchema)),
    _keysMap: {
      eventTime: "event_time",
      eventType: "event_type",
      eventHash: "event_hash",
      eventMetadata: "event_metadata",
    },
  });
