import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountResponseSchema, type AccountResponse } from "./account-response.js";
import { eventSchema, type Event } from "./event.js";

export type AccountConfirmedEvent = {
  event: Event;
  account?: AccountResponse;
};

export const accountConfirmedEventSchema: Schema<AccountConfirmedEvent> = s.object<AccountConfirmedEvent>({
  event: eventSchema,
  account: s.optional(s.lazy(() => accountResponseSchema)),
});
