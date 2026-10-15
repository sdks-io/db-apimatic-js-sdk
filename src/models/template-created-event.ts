import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { templateResponseSchema, type TemplateResponse } from "./template-response.js";

export type TemplateCreatedEvent = {
  event: Event;
  /** Contains information about the templates you and your team have created. */
  template?: TemplateResponse;
};

export const templateCreatedEventSchema: Schema<TemplateCreatedEvent> = s.object<TemplateCreatedEvent>({
  event: eventSchema,
  template: s.optional(s.lazy(() => templateResponseSchema)),
});
