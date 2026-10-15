import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defaultTypeSchema, type DefaultType } from "./default-type.js";

/**
 * This allows the requester to specify the types allowed for creating a signature and specify
 * another signing options.
 *
 * **NOTE:** If `signing_options` are not defined in the request, the allowed types will default to
 * those specified in the account settings.
 *
 * **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.
 */
export type SubSigningOptions = {
  /** The default type shown (limited to the listed types) */
  defaultType: DefaultType;
  /** Allows drawing the signature @default false */
  draw?: boolean;
  /** Allows using a smartphone to email the signature @default false */
  phone?: boolean;
  /** Allows typing the signature @default false */
  type?: boolean;
  /** Allows uploading the signature @default false */
  upload?: boolean;
  /** Turning on advanced signature details for the signature request @default false */
  forceAdvancedSignatureDetails?: boolean;
};

export const subSigningOptionsSchema: Schema<SubSigningOptions> = s.object<SubSigningOptions>({
  defaultType: defaultTypeSchema,
  draw: s.defaulted(s.boolean(), false),
  phone: s.defaulted(s.boolean(), false),
  type: s.defaulted(s.boolean(), false),
  upload: s.defaulted(s.boolean(), false),
  forceAdvancedSignatureDetails: s.defaulted(s.boolean(), false),
  _keysMap: {
    defaultType: "default_type",
    forceAdvancedSignatureDetails: "force_advanced_signature_details",
  },
});
