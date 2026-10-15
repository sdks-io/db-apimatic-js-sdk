import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of unclaimed draft to create. Use `send_document` to create a claimable file, and
 * `request_signature` for a claimable signature request. If the type is `request_signature` then
 * signers name and email_address are not optional.
 */
export const Type2 = {
  SendDocument: "send_document",
  RequestSignature: "request_signature",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
