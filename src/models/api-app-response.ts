import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiAppResponseOAuthSchema, type ApiAppResponseOAuth } from "./api-app-response-oauth.js";
import { apiAppResponseOptionsSchema, type ApiAppResponseOptions } from "./api-app-response-options.js";
import {
  apiAppResponseOwnerAccountSchema,
  type ApiAppResponseOwnerAccount,
} from "./api-app-response-owner-account.js";
import {
  apiAppResponseWhiteLabelingOptionsSchema,
  type ApiAppResponseWhiteLabelingOptions,
} from "./api-app-response-white-labeling-options.js";

/** Contains information about an API App. */
export type ApiAppResponse = {
  /** The app's callback URL (for events) */
  callbackUrl?: string | null;
  /** The app's client id */
  clientId?: string;
  /** The time that the app was created */
  createdAt?: number;
  /** The domain name(s) associated with the app */
  domains?: string[];
  /** The name of the app */
  name?: string;
  /** Boolean to indicate if the app has been approved */
  isApproved?: boolean;
  /**
   * An object describing the app's OAuth properties, or null if OAuth is not configured for the
   * app.
   */
  oauth?: ApiAppResponseOAuth | null;
  /** An object with options that override account settings. */
  options?: ApiAppResponseOptions | null;
  /** An object describing the app's owner */
  ownerAccount?: ApiAppResponseOwnerAccount;
  /** An object with options to customize the app's signer page */
  whiteLabelingOptions?: ApiAppResponseWhiteLabelingOptions | null;
};

export const apiAppResponseSchema: Schema<ApiAppResponse> = s.object<ApiAppResponse>({
  callbackUrl: s.optionalNullable(s.string()),
  clientId: s.optional(s.string()),
  createdAt: s.optional(s.int()),
  domains: s.optional(s.array(s.string())),
  name: s.optional(s.string()),
  isApproved: s.optional(s.boolean()),
  oauth: s.optionalNullable(s.lazy(() => apiAppResponseOAuthSchema)),
  options: s.optionalNullable(s.lazy(() => apiAppResponseOptionsSchema)),
  ownerAccount: s.optional(s.lazy(() => apiAppResponseOwnerAccountSchema)),
  whiteLabelingOptions: s.optionalNullable(s.lazy(() => apiAppResponseWhiteLabelingOptionsSchema)),
  _keysMap: {
    callbackUrl: "callback_url",
    clientId: "client_id",
    createdAt: "created_at",
    isApproved: "is_approved",
    ownerAccount: "owner_account",
    whiteLabelingOptions: "white_labeling_options",
  },
});
