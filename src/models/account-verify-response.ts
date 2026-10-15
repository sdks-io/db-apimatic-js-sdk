import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerifyResponseAccountSchema,
  type AccountVerifyResponseAccount,
} from "./account-verify-response-account.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type AccountVerifyResponse = {
  account?: AccountVerifyResponseAccount;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const accountVerifyResponseSchema: Schema<AccountVerifyResponse> = s.object<AccountVerifyResponse>({
  account: s.optional(s.lazy(() => accountVerifyResponseAccountSchema)),
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
