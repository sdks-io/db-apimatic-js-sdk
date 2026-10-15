import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains pagination information about the data returned. */
export type ListInfoResponse = {
  /** Total number of pages available. */
  numPages?: number;
  /** Total number of objects available. */
  numResults?: number | null;
  /** Number of the page being returned. */
  page?: number;
  /** Objects returned per page. */
  pageSize?: number;
};

export const listInfoResponseSchema: Schema<ListInfoResponse> = s.object<ListInfoResponse>({
  numPages: s.optional(s.int()),
  numResults: s.optionalNullable(s.int()),
  page: s.optional(s.int()),
  pageSize: s.optional(s.int()),
  _keysMap: {
    numPages: "num_pages",
    numResults: "num_results",
    pageSize: "page_size",
  },
});
