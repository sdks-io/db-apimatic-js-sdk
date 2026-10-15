import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";

export type FaxLineCreateRequest = {
  /** Area code of the new Fax Line */
  areaCode: number;
  /** Country of the area code */
  country: Country;
  /** City of the area code */
  city?: string;
  /** Account ID of the account that will be assigned this new Fax Line */
  accountId?: string;
};

export const faxLineCreateRequestSchema: Schema<FaxLineCreateRequest> = s.object<FaxLineCreateRequest>({
  areaCode: s.int(),
  country: countrySchema,
  city: s.optional(s.string()),
  accountId: s.optional(s.string()),
  _keysMap: {
    areaCode: "area_code",
    accountId: "account_id",
  },
});
