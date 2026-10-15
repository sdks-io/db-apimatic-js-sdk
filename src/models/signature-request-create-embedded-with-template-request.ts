import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subCcSchema, type SubCc } from "./sub-cc.js";
import { subCustomFieldSchema, type SubCustomField } from "./sub-custom-field.js";
import {
  subSignatureRequestTemplateSignerSchema,
  type SubSignatureRequestTemplateSigner,
} from "./sub-signature-request-template-signer.js";
import { subSigningOptionsSchema, type SubSigningOptions } from "./sub-signing-options.js";

export type SignatureRequestCreateEmbeddedWithTemplateRequest = {
  /**
   * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in
   * which the template will be used.
   */
  templateIds: string[];
  /** Allows signers to decline to sign a document if `true`. Defaults to `false`. @default false */
  allowDecline?: boolean;
  /** Add CC email recipients. Required when a CC role exists for the Template. */
  ccs?: SubCc[];
  /**
   * Client id of the app you're using to create this embedded signature request. Used for security
   * purposes.
   */
  clientId: string;
  /**
   * An array defining values and options for custom fields. Required when a custom field exists in
   * the Template.
   */
  customFields?: SubCustomField[];
  /**
   * Use `files[]` to indicate the uploaded file(s) to send for signature.
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  files?: Uint8Array;
  /**
   * Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.
   *
   * This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  fileUrls?: string[];
  /** The custom message in the email that will be sent to the signers. */
  message?: string;
  /**
   * Key-value data that should be attached to the signature request. This metadata is included in
   * all API responses and events involving the signature request. For example, use the metadata
   * field to store a signer's order number for look up when receiving events for the signature
   * request.
   *
   * Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up
   * to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<string, unknown>;
  /** Add Signers to your Templated-based Signature Request. */
  signers: SubSignatureRequestTemplateSigner[];
  /**
   * This allows the requester to specify the types allowed for creating a signature and specify
   * another signing options.
   *
   * **NOTE:** If `signing_options` are not defined in the request, the allowed types will default
   * to those specified in the account settings.
   *
   * **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.
   */
  signingOptions?: SubSigningOptions;
  /** The subject in the email that will be sent to the signers. */
  subject?: string;
  /**
   * Whether this is a test, the signature request will not be legally binding if set to `true`.
   * Defaults to `false`.
   *
   * @default false
   */
  testMode?: boolean;
  /** The title you want to assign to the SignatureRequest. */
  title?: string;
  /**
   * Controls whether [auto fill
   * fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can
   * automatically populate a signer's information during signing.
   *
   * **NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature
   * request is the intended party_ before using this feature.
   *
   * @default false
   */
  populateAutoFillFields?: boolean;
  /**
   * When the signature request will expire. Unsigned signatures will be moved to the expired
   * status, and no longer signable. See [Signature Request Expiration
   * Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expiresAt?: number | null;
};

export const signatureRequestCreateEmbeddedWithTemplateRequestSchema: Schema<SignatureRequestCreateEmbeddedWithTemplateRequest> =
  s.object<SignatureRequestCreateEmbeddedWithTemplateRequest>({
    templateIds: s.array(s.string()),
    allowDecline: s.defaulted(s.boolean(), false),
    ccs: s.optional(s.array(s.lazy(() => subCcSchema))),
    clientId: s.string(),
    customFields: s.optional(s.array(s.lazy(() => subCustomFieldSchema))),
    files: s.optional(s.bytes()),
    fileUrls: s.optional(s.array(s.string())),
    message: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    signers: s.array(s.lazy(() => subSignatureRequestTemplateSignerSchema)),
    signingOptions: s.optional(s.lazy(() => subSigningOptionsSchema)),
    subject: s.optional(s.string()),
    testMode: s.defaulted(s.boolean(), false),
    title: s.optional(s.string()),
    populateAutoFillFields: s.defaulted(s.boolean(), false),
    expiresAt: s.optionalNullable(s.int()),
    _keysMap: {
      templateIds: "template_ids",
      allowDecline: "allow_decline",
      clientId: "client_id",
      customFields: "custom_fields",
      fileUrls: "file_urls",
      signingOptions: "signing_options",
      testMode: "test_mode",
      populateAutoFillFields: "populate_auto_fill_fields",
      expiresAt: "expires_at",
    },
  });
