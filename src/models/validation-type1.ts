import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Each text field may contain a `validation_type` parameter. Check out the list of [validation
 * types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible
 * values.
 */
export const ValidationType1 = {
  NumbersOnly: "numbers_only",
  LettersOnly: "letters_only",
  PhoneNumber: "phone_number",
  BankRoutingNumber: "bank_routing_number",
  BankAccountNumber: "bank_account_number",
  EmailAddress: "email_address",
  ZipCode: "zip_code",
  SocialSecurityNumber: "social_security_number",
  EmployerIdentificationNumber: "employer_identification_number",
  CustomRegex: "custom_regex",
} as const;
export type ValidationType1 = (typeof ValidationType1)[keyof typeof ValidationType1] | (string & {});

export const validationType1Schema: EnumSchema<ValidationType1> = s.enumOf<ValidationType1>(ValidationType1);
