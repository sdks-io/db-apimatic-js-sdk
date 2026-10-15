import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountResponseSchema, type AccountResponse } from "./account-response.js";

export type FaxLineResponseFaxLine = {
  /** Number */
  number?: string;
  /** Created at */
  createdAt?: number;
  /** Updated at */
  updatedAt?: number;
  accounts?: AccountResponse[];
};

export const faxLineResponseFaxLineSchema: Schema<FaxLineResponseFaxLine> = s.object<FaxLineResponseFaxLine>({
  number: s.optional(s.string()),
  createdAt: s.optional(s.int()),
  updatedAt: s.optional(s.int()),
  accounts: s.optional(s.array(s.lazy(() => accountResponseSchema))),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
