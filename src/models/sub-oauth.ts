import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

/** OAuth related parameters. */
export type SubOAuth = {
  /** The callback URL to be used for OAuth flows. (Required if `oauth[scopes]` is provided) */
  callbackUrl?: string;
  /**
   * A list of [OAuth scopes](/api/reference/tag/OAuth) to be granted to the app. (Required if
   * `oauth[callback_url]` is provided).
   */
  scopes?: Scope[];
};

export const subOAuthSchema: Schema<SubOAuth> = s.object<SubOAuth>({
  callbackUrl: s.optional(s.string()),
  scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
  _keysMap: {
    callbackUrl: "callback_url",
  },
});
