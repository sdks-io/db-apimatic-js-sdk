import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the draft. By default this is `request_signature`, but you can set it to
 * `send_document` if you want to self sign a document and download it.
 */
export const Type3 = {
  SendDocument: "send_document",
  RequestSignature: "request_signature",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
