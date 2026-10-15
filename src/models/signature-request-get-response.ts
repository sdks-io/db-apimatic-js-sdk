import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signatureRequestResponseSchema,
  type SignatureRequestResponse,
} from "./signature-request-response.js";
import { warningResponseSchema, type WarningResponse } from "./warning-response.js";

export type SignatureRequestGetResponse = {
  /** Contains information about a signature request. */
  signatureRequest: SignatureRequestResponse;
  /** A list of warnings. */
  warnings?: WarningResponse[];
};

export const signatureRequestGetResponseSchema: Schema<SignatureRequestGetResponse> =
  s.object<SignatureRequestGetResponse>({
    signatureRequest: signatureRequestResponseSchema,
    warnings: s.optional(s.array(s.lazy(() => warningResponseSchema))),
    _keysMap: {
      signatureRequest: "signature_request",
    },
  });
