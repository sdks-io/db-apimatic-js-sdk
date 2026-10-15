import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { smsPhoneNumberTypeSchema, type SmsPhoneNumberType } from "./sms-phone-number-type.js";

export type SubSignatureRequestTemplateSigner = {
  /** Must match an existing role in chosen Template(s). It's case-sensitive. */
  role: string;
  /** The name of the signer. */
  name: string;
  /** The email address of the signer. */
  emailAddress: string;
  /** The 4- to 12-character access code that will secure this signer's signature page. */
  pin?: string;
  /**
   * An E.164 formatted phone number.
   *
   * By using the feature, you agree you are responsible for obtaining a signer's consent to receive
   * text messages from Dropbox Sign related to this signature request and confirm you have obtained
   * such consent from all signers prior to enabling SMS delivery for this signature request. [Learn
   * more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).
   *
   * **NOTE:** Not available in test mode and requires a Standard plan or higher.
   */
  smsPhoneNumber?: string;
  /**
   * Specifies the feature used with the `sms_phone_number`. Default `authentication`.
   *
   * If `authentication`, signer is sent a verification code via SMS that is required to access the
   * document.
   *
   * If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).
   */
  smsPhoneNumberType?: SmsPhoneNumberType;
};

export const subSignatureRequestTemplateSignerSchema: Schema<SubSignatureRequestTemplateSigner> =
  s.object<SubSignatureRequestTemplateSigner>({
    role: s.string(),
    name: s.string(),
    emailAddress: s.string(),
    pin: s.optional(s.string()),
    smsPhoneNumber: s.optional(s.string()),
    smsPhoneNumberType: s.optional(s.lazy(() => smsPhoneNumberTypeSchema)),
    _keysMap: {
      emailAddress: "email_address",
      smsPhoneNumber: "sms_phone_number",
      smsPhoneNumberType: "sms_phone_number_type",
    },
  });
