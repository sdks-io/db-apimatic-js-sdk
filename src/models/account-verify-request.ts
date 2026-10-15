import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountVerifyRequest = {
  /** Email address to run the verification for. */
  emailAddress: string;
};

export const accountVerifyRequestSchema: Schema<AccountVerifyRequest> = s.object<AccountVerifyRequest>({
  emailAddress: s.string(),
  _keysMap: {
    emailAddress: "email_address",
  },
});
