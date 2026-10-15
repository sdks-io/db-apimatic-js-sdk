import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of callback event that was triggered. */
export const EventType = {
  AccountConfirmed: "account_confirmed",
  UnknownError: "unknown_error",
  FileError: "file_error",
  SignUrlInvalid: "sign_url_invalid",
  SignatureRequestViewed: "signature_request_viewed",
  SignatureRequestSigned: "signature_request_signed",
  SignatureRequestSent: "signature_request_sent",
  SignatureRequestAllSigned: "signature_request_all_signed",
  SignatureRequestEmailBounce: "signature_request_email_bounce",
  SignatureRequestRemind: "signature_request_remind",
  SignatureRequestIncompleteQes: "signature_request_incomplete_qes",
  SignatureRequestDestroyed: "signature_request_destroyed",
  SignatureRequestCanceled: "signature_request_canceled",
  SignatureRequestDownloadable: "signature_request_downloadable",
  SignatureRequestDeclined: "signature_request_declined",
  SignatureRequestReassigned: "signature_request_reassigned",
  SignatureRequestInvalid: "signature_request_invalid",
  SignatureRequestPrepared: "signature_request_prepared",
  SignatureRequestExpired: "signature_request_expired",
  TemplateCreated: "template_created",
  TemplateError: "template_error",
  CallbackTest: "callback_test",
  SignatureRequestSignerRemoved: "signature_request_signer_removed",
  FaxReceived: "fax_received",
  FaxSent: "fax_sent",
  FaxOnHold: "fax_on_hold",
  FaxBusy: "fax_busy",
  FaxNoAnswer: "fax_no_answer",
  FaxDisconnected: "fax_disconnected",
  FaxBlacklisted: "fax_blacklisted",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
