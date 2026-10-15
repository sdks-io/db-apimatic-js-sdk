import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object with options to customize the app's signer page */
export type ApiAppResponseWhiteLabelingOptions = {
  headerBackgroundColor?: string;
  legalVersion?: string;
  linkColor?: string;
  pageBackgroundColor?: string;
  primaryButtonColor?: string;
  primaryButtonColorHover?: string;
  primaryButtonTextColor?: string;
  primaryButtonTextColorHover?: string;
  secondaryButtonColor?: string;
  secondaryButtonColorHover?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonTextColorHover?: string;
  textColor1?: string;
  textColor2?: string;
};

export const apiAppResponseWhiteLabelingOptionsSchema: Schema<ApiAppResponseWhiteLabelingOptions> =
  s.object<ApiAppResponseWhiteLabelingOptions>({
    headerBackgroundColor: s.optional(s.string()),
    legalVersion: s.optional(s.string()),
    linkColor: s.optional(s.string()),
    pageBackgroundColor: s.optional(s.string()),
    primaryButtonColor: s.optional(s.string()),
    primaryButtonColorHover: s.optional(s.string()),
    primaryButtonTextColor: s.optional(s.string()),
    primaryButtonTextColorHover: s.optional(s.string()),
    secondaryButtonColor: s.optional(s.string()),
    secondaryButtonColorHover: s.optional(s.string()),
    secondaryButtonTextColor: s.optional(s.string()),
    secondaryButtonTextColorHover: s.optional(s.string()),
    textColor1: s.optional(s.string()),
    textColor2: s.optional(s.string()),
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
    },
  });
