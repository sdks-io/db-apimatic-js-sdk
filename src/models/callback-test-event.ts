import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type CallbackTestEvent = {
  event: Event;
};

export const callbackTestEventSchema: Schema<CallbackTestEvent> = s.object<CallbackTestEvent>({
  event: eventSchema,
});
