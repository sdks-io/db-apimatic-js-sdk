import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subBulkSignerListCustomFieldSchema,
  type SubBulkSignerListCustomField,
} from "./sub-bulk-signer-list-custom-field.js";
import {
  subSignatureRequestTemplateSignerSchema,
  type SubSignatureRequestTemplateSigner,
} from "./sub-signature-request-template-signer.js";

export type SubBulkSignerList = {
  /** An array of custom field values. */
  customFields?: SubBulkSignerListCustomField[];
  /**
   * Add Signers to your Templated-based Signature Request. Allows the requester to specify editor
   * options when a preparing a document.
   *
   * Currently only templates with a single role are supported. All signers must have the same
   * `role` value.
   */
  signers?: SubSignatureRequestTemplateSigner[];
};

export const subBulkSignerListSchema: Schema<SubBulkSignerList> = s.object<SubBulkSignerList>({
  customFields: s.optional(s.array(s.lazy(() => subBulkSignerListCustomFieldSchema))),
  signers: s.optional(s.array(s.lazy(() => subSignatureRequestTemplateSignerSchema))),
  _keysMap: {
    customFields: "custom_fields",
  },
});
