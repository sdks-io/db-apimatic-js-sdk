import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  templateResponseDocumentStaticFieldCheckboxSchema,
  type TemplateResponseDocumentStaticFieldCheckbox,
} from "../template-response-document-static-field-checkbox.js";
import {
  templateResponseDocumentStaticFieldDateSignedSchema,
  type TemplateResponseDocumentStaticFieldDateSigned,
} from "../template-response-document-static-field-date-signed.js";
import {
  templateResponseDocumentStaticFieldDropdownSchema,
  type TemplateResponseDocumentStaticFieldDropdown,
} from "../template-response-document-static-field-dropdown.js";
import {
  templateResponseDocumentStaticFieldHyperlinkSchema,
  type TemplateResponseDocumentStaticFieldHyperlink,
} from "../template-response-document-static-field-hyperlink.js";
import {
  templateResponseDocumentStaticFieldInitialsSchema,
  type TemplateResponseDocumentStaticFieldInitials,
} from "../template-response-document-static-field-initials.js";
import {
  templateResponseDocumentStaticFieldRadioSchema,
  type TemplateResponseDocumentStaticFieldRadio,
} from "../template-response-document-static-field-radio.js";
import {
  templateResponseDocumentStaticFieldSignatureSchema,
  type TemplateResponseDocumentStaticFieldSignature,
} from "../template-response-document-static-field-signature.js";
import {
  templateResponseDocumentStaticFieldTextSchema,
  type TemplateResponseDocumentStaticFieldText,
} from "../template-response-document-static-field-text.js";

/**
 * An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.
 */
export type TemplateResponseDocumentStaticFieldBase =
  | (TemplateResponseDocumentStaticFieldCheckbox & { type: "checkbox" })
  | (TemplateResponseDocumentStaticFieldDateSigned & { type: "date_signed" })
  | (TemplateResponseDocumentStaticFieldDropdown & { type: "dropdown" })
  | (TemplateResponseDocumentStaticFieldHyperlink & { type: "hyperlink" })
  | (TemplateResponseDocumentStaticFieldInitials & { type: "initials" })
  | (TemplateResponseDocumentStaticFieldRadio & { type: "radio" })
  | (TemplateResponseDocumentStaticFieldSignature & { type: "signature" })
  | (TemplateResponseDocumentStaticFieldText & { type: "text" });

export const templateResponseDocumentStaticFieldBaseSchema: Schema<TemplateResponseDocumentStaticFieldBase> =
  s.discriminatedUnion<TemplateResponseDocumentStaticFieldBase>("type", {
    checkbox: templateResponseDocumentStaticFieldCheckboxSchema,
    date_signed: templateResponseDocumentStaticFieldDateSignedSchema,
    dropdown: templateResponseDocumentStaticFieldDropdownSchema,
    hyperlink: templateResponseDocumentStaticFieldHyperlinkSchema,
    initials: templateResponseDocumentStaticFieldInitialsSchema,
    radio: templateResponseDocumentStaticFieldRadioSchema,
    signature: templateResponseDocumentStaticFieldSignatureSchema,
    text: templateResponseDocumentStaticFieldTextSchema,
  });
