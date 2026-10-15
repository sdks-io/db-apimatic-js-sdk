import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Subset of configured settings */
export type AccountResponseSettings = {
  /**
   * Returns `true` if _Custom access codes_ is enabled in Admin Console. [Read
   * more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  signerAccessCodes?: boolean;
  /**
   * Returns `true` if _Text message_ is enabled in Admin Console. [Read
   * more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  smsDelivery?: boolean;
  /**
   * Returns `true` if _Signer authentication_ is enabled in Admin Console. [Read
   * more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  smsAuthentication?: boolean;
};

export const accountResponseSettingsSchema: Schema<AccountResponseSettings> =
  s.object<AccountResponseSettings>({
    signerAccessCodes: s.optional(s.boolean()),
    smsDelivery: s.optional(s.boolean()),
    smsAuthentication: s.optional(s.boolean()),
    _keysMap: {
      signerAccessCodes: "signer_access_codes",
      smsDelivery: "sms_delivery",
      smsAuthentication: "sms_authentication",
    },
  });
