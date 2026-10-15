import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unclaimedDraftResponseSchema, type UnclaimedDraftResponse } from "./unclaimed-draft-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type UnclaimedDraftCreateResponse = {
  /** A group of documents that a user can take ownership of via the claim URL. */
  unclaimedDraft: UnclaimedDraftResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const unclaimedDraftCreateResponseSchema: Schema<UnclaimedDraftCreateResponse> =
  s.object<UnclaimedDraftCreateResponse>({
    unclaimedDraft: unclaimedDraftResponseSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      unclaimedDraft: "unclaimed_draft",
    },
  });
