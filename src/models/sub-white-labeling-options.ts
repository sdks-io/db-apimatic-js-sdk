import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { LegalVersion, legalVersionSchema } from "./legal-version.js";

/**
 * An array of elements and values serialized to a string, to be used to customize the app's signer
 * page. (Only applies to some API plans)
 *
 * Take a look at our [white labeling
 * guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.
 */
export type SubWhiteLabelingOptions = {
  /** @default "#1a1a1a" */
  headerBackgroundColor?: string;
  /** @default LegalVersion.Terms1 */
  legalVersion?: LegalVersion;
  /** @default "#0061FE" */
  linkColor?: string;
  /** @default "#f7f8f9" */
  pageBackgroundColor?: string;
  /** @default "#0061FE" */
  primaryButtonColor?: string;
  /** @default "#0061FE" */
  primaryButtonColorHover?: string;
  /** @default "#ffffff" */
  primaryButtonTextColor?: string;
  /** @default "#ffffff" */
  primaryButtonTextColorHover?: string;
  /** @default "#ffffff" */
  secondaryButtonColor?: string;
  /** @default "#ffffff" */
  secondaryButtonColorHover?: string;
  /** @default "#0061FE" */
  secondaryButtonTextColor?: string;
  /** @default "#0061FE" */
  secondaryButtonTextColorHover?: string;
  /** @default "#808080" */
  textColor1?: string;
  /** @default "#ffffff" */
  textColor2?: string;
  /** Resets white labeling options to defaults. Only useful when updating an API App. */
  resetToDefault?: boolean;
};

export const subWhiteLabelingOptionsSchema: Schema<SubWhiteLabelingOptions> =
  s.object<SubWhiteLabelingOptions>({
    headerBackgroundColor: s.defaulted(s.string(), "#1a1a1a"),
    legalVersion: s.defaulted(legalVersionSchema, LegalVersion.Terms1),
    linkColor: s.defaulted(s.string(), "#0061FE"),
    pageBackgroundColor: s.defaulted(s.string(), "#f7f8f9"),
    primaryButtonColor: s.defaulted(s.string(), "#0061FE"),
    primaryButtonColorHover: s.defaulted(s.string(), "#0061FE"),
    primaryButtonTextColor: s.defaulted(s.string(), "#ffffff"),
    primaryButtonTextColorHover: s.defaulted(s.string(), "#ffffff"),
    secondaryButtonColor: s.defaulted(s.string(), "#ffffff"),
    secondaryButtonColorHover: s.defaulted(s.string(), "#ffffff"),
    secondaryButtonTextColor: s.defaulted(s.string(), "#0061FE"),
    secondaryButtonTextColorHover: s.defaulted(s.string(), "#0061FE"),
    textColor1: s.defaulted(s.string(), "#808080"),
    textColor2: s.defaulted(s.string(), "#ffffff"),
    resetToDefault: s.optional(s.boolean()),
    _keysMap: {
      headerBackgroundColor: "header_background_color",
      legalVersion: "legal_version",
      linkColor: "link_color",
      pageBackgroundColor: "page_background_color",
      primaryButtonColor: "primary_button_color",
      primaryButtonColorHover: "primary_button_color_hover",
      primaryButtonTextColor: "primary_button_text_color",
      primaryButtonTextColorHover: "primary_button_text_color_hover",
      secondaryButtonColor: "secondary_button_color",
      secondaryButtonColorHover: "secondary_button_color_hover",
      secondaryButtonTextColor: "secondary_button_text_color",
      secondaryButtonTextColorHover: "secondary_button_text_color_hover",
      textColor1: "text_color1",
      textColor2: "text_color2",
      resetToDefault: "reset_to_default",
    },
  });
