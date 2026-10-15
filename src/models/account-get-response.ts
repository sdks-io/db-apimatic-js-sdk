import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountResponseSchema, type AccountResponse } from "./account-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type AccountGetResponse = {
  account: AccountResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const accountGetResponseSchema: Schema<AccountGetResponse> = s.object<AccountGetResponse>({
  account: accountResponseSchema,
  warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
});
