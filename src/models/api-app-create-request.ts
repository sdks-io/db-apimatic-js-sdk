import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subOAuthSchema, type SubOAuth } from "./sub-oauth.js";
import { subOptionsSchema, type SubOptions } from "./sub-options.js";
import { subWhiteLabelingOptionsSchema, type SubWhiteLabelingOptions } from "./sub-white-labeling-options.js";

export type ApiAppCreateRequest = {
  /** The URL at which the ApiApp should receive event callbacks. */
  callbackUrl?: string;
  /**
   * An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)
   */
  customLogoFile?: Uint8Array;
  /** The domain names the ApiApp will be associated with. */
  domains: string[];
  /** The name you want to assign to the ApiApp. */
  name: string;
  /** OAuth related parameters. */
  oauth?: SubOAuth;
  /** Additional options supported by API App. */
  options?: SubOptions;
  /**
   * An array of elements and values serialized to a string, to be used to customize the app's
   * signer page. (Only applies to some API plans)
   *
   * Take a look at our [white labeling
   * guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.
   */
  whiteLabelingOptions?: SubWhiteLabelingOptions;
};

export const apiAppCreateRequestSchema: Schema<ApiAppCreateRequest> = s.object<ApiAppCreateRequest>({
  callbackUrl: s.optional(s.string()),
  customLogoFile: s.optional(s.bytes()),
  domains: s.array(s.string()),
  name: s.string(),
  oauth: s.optional(s.lazy(() => subOAuthSchema)),
  options: s.optional(s.lazy(() => subOptionsSchema)),
  whiteLabelingOptions: s.optional(s.lazy(() => subWhiteLabelingOptionsSchema)),
  _keysMap: {
    callbackUrl: "callback_url",
    customLogoFile: "custom_logo_file",
    whiteLabelingOptions: "white_labeling_options",
  },
});
