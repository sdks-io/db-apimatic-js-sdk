import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Scope = {
  RequestSignature: "request_signature",
  BasicAccountInfo: "basic_account_info",
  AccountAccess: "account_access",
  SignatureRequestAccess: "signature_request_access",
  TemplateAccess: "template_access",
  TeamAccess: "team_access",
  ApiAppAccess: "api_app_access",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
