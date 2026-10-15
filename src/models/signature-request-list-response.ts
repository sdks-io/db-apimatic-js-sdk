import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listInfoResponseSchema, type ListInfoResponse } from "./list-info-response.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type SignatureRequestListResponse = {
  /** Contains information about signature requests. */
  signatureRequests: SignatureRequestResponse[];
  /** Contains pagination information about the data returned. */
  listInfo: ListInfoResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const signatureRequestListResponseSchema: Schema<SignatureRequestListResponse> =
  s.object<SignatureRequestListResponse>({
    signatureRequests: s.array(s.lazy(() => signatureRequestResponseSchema)),
    listInfo: listInfoResponseSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      signatureRequests: "signature_requests",
      listInfo: "list_info",
    },
  });
