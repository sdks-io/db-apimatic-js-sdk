import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FaxLineAreaCodeGetResponse = {
  areaCodes: number[];
};

export const faxLineAreaCodeGetResponseSchema: Schema<FaxLineAreaCodeGetResponse> =
  s.object<FaxLineAreaCodeGetResponse>({
    areaCodes: s.array(s.int()),
    _keysMap: {
      areaCodes: "area_codes",
    },
  });
