import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  templateResponseDocumentFormFieldCheckboxSchema,
  type TemplateResponseDocumentFormFieldCheckbox,
} from "../template-response-document-form-field-checkbox.js";
import {
  templateResponseDocumentFormFieldDateSignedSchema,
  type TemplateResponseDocumentFormFieldDateSigned,
} from "../template-response-document-form-field-date-signed.js";
import {
  templateResponseDocumentFormFieldDropdownSchema,
  type TemplateResponseDocumentFormFieldDropdown,
} from "../template-response-document-form-field-dropdown.js";
import {
  templateResponseDocumentFormFieldHyperlinkSchema,
  type TemplateResponseDocumentFormFieldHyperlink,
} from "../template-response-document-form-field-hyperlink.js";
import {
  templateResponseDocumentFormFieldInitialsSchema,
  type TemplateResponseDocumentFormFieldInitials,
} from "../template-response-document-form-field-initials.js";
import {
  templateResponseDocumentFormFieldRadioSchema,
  type TemplateResponseDocumentFormFieldRadio,
} from "../template-response-document-form-field-radio.js";
import {
  templateResponseDocumentFormFieldSignatureSchema,
  type TemplateResponseDocumentFormFieldSignature,
} from "../template-response-document-form-field-signature.js";
import {
  templateResponseDocumentFormFieldTextSchema,
  type TemplateResponseDocumentFormFieldText,
} from "../template-response-document-form-field-text.js";

/** An array of Form Field objects containing the name and type of each named field. */
export type TemplateResponseDocumentFormFieldBase =
  | (TemplateResponseDocumentFormFieldCheckbox & { type: "checkbox" })
  | (TemplateResponseDocumentFormFieldDateSigned & { type: "date_signed" })
  | (TemplateResponseDocumentFormFieldDropdown & { type: "dropdown" })
  | (TemplateResponseDocumentFormFieldHyperlink & { type: "hyperlink" })
  | (TemplateResponseDocumentFormFieldInitials & { type: "initials" })
  | (TemplateResponseDocumentFormFieldRadio & { type: "radio" })
  | (TemplateResponseDocumentFormFieldSignature & { type: "signature" })
  | (TemplateResponseDocumentFormFieldText & { type: "text" });

export const templateResponseDocumentFormFieldBaseSchema: Schema<TemplateResponseDocumentFormFieldBase> =
  s.discriminatedUnion<TemplateResponseDocumentFormFieldBase>("type", {
    checkbox: templateResponseDocumentFormFieldCheckboxSchema,
    date_signed: templateResponseDocumentFormFieldDateSignedSchema,
    dropdown: templateResponseDocumentFormFieldDropdownSchema,
    hyperlink: templateResponseDocumentFormFieldHyperlinkSchema,
    initials: templateResponseDocumentFormFieldInitialsSchema,
    radio: templateResponseDocumentFormFieldRadioSchema,
    signature: templateResponseDocumentFormFieldSignatureSchema,
    text: templateResponseDocumentFormFieldTextSchema,
  });
