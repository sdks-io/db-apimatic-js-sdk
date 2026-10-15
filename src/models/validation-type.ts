import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Each text field may contain a `validation_type` parameter. Check out the list of [validation
 * types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible
 * values.
 *
 * **NOTE:** When using `custom_regex` you are required to pass a second parameter
 * `validation_custom_regex` and you can optionally provide `validation_custom_regex_format_label`
 * for the error message the user will see in case of an invalid value.
 */
export const ValidationType = {
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
export type ValidationType = (typeof ValidationType)[keyof typeof ValidationType] | (string & {});

export const validationTypeSchema: EnumSchema<ValidationType> = s.enumOf<ValidationType>(ValidationType);
