import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specific metadata about the event. */
export type EventCallbackRequestEventMetadata = {
  /**
   * Signature ID for a specific signer. Applicable to `signature_request_signed` and
   * `signature_request_viewed` events.
   */
  relatedSignatureId?: string | null;
  /** Account ID the event was reported for. */
  reportedForAccountId?: string | null;
  /** App ID the event was reported for. */
  reportedForAppId?: string | null;
  /** Message about a declined or failed (due to error) signature flow. */
  eventMessage?: string | null;
};

export const eventCallbackRequestEventMetadataSchema: Schema<EventCallbackRequestEventMetadata> =
  s.object<EventCallbackRequestEventMetadata>({
    relatedSignatureId: s.optionalNullable(s.string()),
    reportedForAccountId: s.optionalNullable(s.string()),
    reportedForAppId: s.optionalNullable(s.string()),
    eventMessage: s.optionalNullable(s.string()),
    _keysMap: {
      relatedSignatureId: "related_signature_id",
      reportedForAccountId: "reported_for_account_id",
      reportedForAppId: "reported_for_app_id",
      eventMessage: "event_message",
    },
  });
