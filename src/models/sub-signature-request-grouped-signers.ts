import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subSignatureRequestSignerSchema,
  type SubSignatureRequestSigner,
} from "./sub-signature-request-signer.js";

export type SubSignatureRequestGroupedSigners = {
  /** The name of the group. */
  group: string;
  /** The order the group is required to sign in. Use this instead of Signer-level `order`. */
  order?: number | null;
  /**
   * Signers belonging to this Group.
   *
   * **NOTE:** Only `name`, `email_address`, and `pin` are available to Grouped Signers. We will
   * ignore all other properties, even though they are listed below.
   */
  signers: SubSignatureRequestSigner[];
};

export const subSignatureRequestGroupedSignersSchema: Schema<SubSignatureRequestGroupedSigners> =
  s.object<SubSignatureRequestGroupedSigners>({
    group: s.string(),
    order: s.optionalNullable(s.int()),
    signers: s.array(s.lazy(() => subSignatureRequestSignerSchema)),
  });
