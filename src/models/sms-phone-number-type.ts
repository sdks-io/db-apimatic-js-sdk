import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the feature used with the `sms_phone_number`. Default `authentication`.
 *
 * If `authentication`, signer is sent a verification code via SMS that is required to access the
 * document.
 *
 * If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).
 */
export const SmsPhoneNumberType = {
  Authentication: "authentication",
  Delivery: "delivery",
} as const;
export type SmsPhoneNumberType = (typeof SmsPhoneNumberType)[keyof typeof SmsPhoneNumberType] | (string & {});

export const smsPhoneNumberTypeSchema: EnumSchema<SmsPhoneNumberType> =
  s.enumOf<SmsPhoneNumberType>(SmsPhoneNumberType);
