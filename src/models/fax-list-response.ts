import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { faxResponseSchema, type FaxResponse } from "./fax-response.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";

export type FaxListResponse = {
  faxes: FaxResponse[];
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
};

export const faxListResponseSchema: Schema<FaxListResponse> = s.object<FaxListResponse>({
  faxes: s.array(s.lazy(() => faxResponseSchema)),
  listInfo: listInfoResponseSchema,
  _keysMap: {
    listInfo: "list_info",
  },
});
