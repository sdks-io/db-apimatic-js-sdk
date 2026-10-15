# Reference

> Source: [DropboxSignApiClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>accountCreate(request: Account.AccountCreateRequestParams, options?: RequestOptions): ApiPromise&lt;AccountCreateResponse, Account.AccountCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Dropbox Sign Account that is associated with the specified `email_address`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.accountCreate({ body: { emailAddress: "user@example.com" } });
  // TODO: Handle 'response' of type AccountCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.AccountCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.accountCreate({
  body: { emailAddress: "user@example.com" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountCreateRequest](src/models/account-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.accountCreate(request)`

- **OnSuccess**: <code>[AccountCreateResponse](src/models/account-create-response.ts)</code>
- **OnError**: throws <code>[Account.AccountCreateError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.accountCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountCreateResponse, Account.AccountCreateError&gt;</code>, with `result.value` of type <code>[AccountCreateResponse](src/models/account-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>accountGet(request: Account.AccountGetRequest, options?: RequestOptions): ApiPromise&lt;AccountGetResponse, Account.AccountGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the properties and settings of your Account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.accountGet();
  // TODO: Handle 'response' of type AccountGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.AccountGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.accountGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountId?</code> | <code>string</code> | `account_id` or `email_address` is required. If both are provided, the account id prevails.<br><br>The ID of the Account. |
| <code>emailAddress?</code> | <code>string</code> | `account_id` or `email_address` is required, If both are provided, the account id prevails.<br><br>The email address of the Account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.accountGet(request)`

- **OnSuccess**: <code>[AccountGetResponse](src/models/account-get-response.ts)</code>
- **OnError**: throws <code>[Account.AccountGetError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.accountGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountGetResponse, Account.AccountGetError&gt;</code>, with `result.value` of type <code>[AccountGetResponse](src/models/account-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>accountUpdate(request: Account.AccountUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;AccountGetResponse, Account.AccountUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.accountUpdate({ body: {} });
  // TODO: Handle 'response' of type AccountGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.AccountUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.accountUpdate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountUpdateRequest](src/models/account-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.accountUpdate(request)`

- **OnSuccess**: <code>[AccountGetResponse](src/models/account-get-response.ts)</code>
- **OnError**: throws <code>[Account.AccountUpdateError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.accountUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountGetResponse, Account.AccountUpdateError&gt;</code>, with `result.value` of type <code>[AccountGetResponse](src/models/account-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>accountVerify(request: Account.AccountVerifyRequestParams, options?: RequestOptions): ApiPromise&lt;AccountVerifyResponse, Account.AccountVerifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies whether an Dropbox Sign Account exists for the given email address.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.accountVerify({ body: { emailAddress: "user@example.com" } });
  // TODO: Handle 'response' of type AccountVerifyResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.AccountVerifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.accountVerify({
  body: { emailAddress: "user@example.com" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountVerifyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountVerifyRequest](src/models/account-verify-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.accountVerify(request)`

- **OnSuccess**: <code>[AccountVerifyResponse](src/models/account-verify-response.ts)</code>
- **OnError**: throws <code>[Account.AccountVerifyError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.accountVerify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountVerifyResponse, Account.AccountVerifyError&gt;</code>, with `result.value` of type <code>[AccountVerifyResponse](src/models/account-verify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignatureRequest

> Source: [SignatureRequest](src/resources/signature-request.ts)

<details>
<summary><code>signatureRequestBulkCreateEmbeddedWithTemplate(request: SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;BulkSendJobSendResponse, SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Only available for Standard plan and higher.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestBulkCreateEmbeddedWithTemplate({
    templateIds: ["some example string"],
    clientId: "some example string",
  });
  // TODO: Handle 'response' of type BulkSendJobSendResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestBulkCreateEmbeddedWithTemplate({
  templateIds: ["some example string"],
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSendJobSendResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateIds</code> | <code>string[]</code> | Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used. |
| <code>clientId</code> | <code>string</code> | Client id of the app you're using to create this embedded signature request. Used for security purposes. |
| <code>signerFile?</code> | <code>FileInput</code> | `signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:<br><br>- `name`: the name of the signer filling the role of RoleName<br>- `email_address`: email address of the signer filling the role of RoleName<br>- `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)<br>- `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)<br><br>    By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>    **NOTE:** Not available in test mode and requires a Standard plan or higher.<br>- `*_field`: any column with a _field" suffix will be treated as a custom field (optional)<br><br>    You may only specify field values here, any other options should be set in the custom_fields request parameter.<br><br>Example CSV:<br><br>```<br>name, email_address, pin, company_field<br>George, george@example.com, d79a3td, ABC Corp<br>Mary, mary@example.com, gd9as5b, 123 LLC<br>``` |
| <code>signerList?</code> | <code>[SubBulkSignerList](src/models/sub-bulk-signer-list.ts)[]</code> | `signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>ccs?</code> | <code>[SubCc](src/models/sub-cc.ts)[]</code> | Add CC email recipients. Required when a CC role exists for the Template. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestBulkCreateEmbeddedWithTemplate(request)`

- **OnSuccess**: <code>[BulkSendJobSendResponse](src/models/bulk-send-job-send-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestBulkCreateEmbeddedWithTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSendJobSendResponse, SignatureRequest.SignatureRequestBulkCreateEmbeddedWithTemplateError&gt;</code>, with `result.value` of type <code>[BulkSendJobSendResponse](src/models/bulk-send-job-send-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestBulkSendWithTemplate(request: SignatureRequest.SignatureRequestBulkSendWithTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;BulkSendJobSendResponse, SignatureRequest.SignatureRequestBulkSendWithTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.

**NOTE:** Only available for Standard plan and higher.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestBulkSendWithTemplate({
    templateIds: ["some example string"],
  });
  // TODO: Handle 'response' of type BulkSendJobSendResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestBulkSendWithTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestBulkSendWithTemplate({
  templateIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSendJobSendResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateIds</code> | <code>string[]</code> | Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used. |
| <code>signerFile?</code> | <code>FileInput</code> | `signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:<br><br>- `name`: the name of the signer filling the role of RoleName<br>- `email_address`: email address of the signer filling the role of RoleName<br>- `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)<br>- `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)<br><br>    By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>    **NOTE:** Not available in test mode and requires a Standard plan or higher.<br>- `*_field`: any column with a _field" suffix will be treated as a custom field (optional)<br><br>    You may only specify field values here, any other options should be set in the custom_fields request parameter.<br><br>Example CSV:<br><br>```<br>name, email_address, pin, company_field<br>George, george@example.com, d79a3td, ABC Corp<br>Mary, mary@example.com, gd9as5b, 123 LLC<br>``` |
| <code>signerList?</code> | <code>[SubBulkSignerList](src/models/sub-bulk-signer-list.ts)[]</code> | `signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>ccs?</code> | <code>[SubCc](src/models/sub-cc.ts)[]</code> | Add CC email recipients. Required when a CC role exists for the Template. |
| <code>clientId?</code> | <code>string</code> | The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestBulkSendWithTemplate(request)`

- **OnSuccess**: <code>[BulkSendJobSendResponse](src/models/bulk-send-job-send-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestBulkSendWithTemplateError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestBulkSendWithTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSendJobSendResponse, SignatureRequest.SignatureRequestBulkSendWithTemplateError&gt;</code>, with `result.value` of type <code>[BulkSendJobSendResponse](src/models/bulk-send-job-send-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestCancel(request: SignatureRequest.SignatureRequestCancelRequest, options?: RequestOptions): ApiPromise&lt;undefined, SignatureRequest.SignatureRequestCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an incomplete signature request. This action is **not reversible**.

The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.

This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.

To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.

**NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signatureRequest.signatureRequestCancel({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestCancel({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the incomplete SignatureRequest to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestCancel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestCancelError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SignatureRequest.SignatureRequestCancelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestCreateEmbedded(request: SignatureRequest.SignatureRequestCreateEmbeddedRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestCreateEmbeddedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestCreateEmbedded({
    clientId: "some example string",
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestCreateEmbeddedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestCreateEmbedded({
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | Client id of the app you're using to create this embedded signature request. Used for security purposes. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>signers?</code> | <code>[SubSignatureRequestSigner](src/models/sub-signature-request-signer.ts)[]</code> | Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>groupedSigners?</code> | <code>[SubSignatureRequestGroupedSigners](src/models/sub-signature-request-grouped-signers.ts)[]</code> | Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccEmailAddresses?</code> | <code>string[]</code> | The email addresses that should be CCed. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>formFieldsPerDocument?</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>hideTextTags?</code> | <code>boolean</code> | Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>useTextTags?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |
| <code>populateAutoFillFields?</code> | <code>boolean</code> | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.<br>**Default**: false |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestCreateEmbedded(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestCreateEmbeddedError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestCreateEmbedded(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestCreateEmbeddedError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestCreateEmbeddedWithTemplate(request: SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestCreateEmbeddedWithTemplate({
    templateIds: ["some example string"],
    clientId: "some example string",
    signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestCreateEmbeddedWithTemplate({
  templateIds: ["some example string"],
  clientId: "some example string",
  signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateIds</code> | <code>string[]</code> | Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used. |
| <code>clientId</code> | <code>string</code> | Client id of the app you're using to create this embedded signature request. Used for security purposes. |
| <code>signers</code> | <code>[SubSignatureRequestTemplateSigner](src/models/sub-signature-request-template-signer.ts)[]</code> | Add Signers to your Templated-based Signature Request. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>ccs?</code> | <code>[SubCc](src/models/sub-cc.ts)[]</code> | Add CC email recipients. Required when a CC role exists for the Template. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | An array defining values and options for custom fields. Required when a custom field exists in the Template. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>populateAutoFillFields?</code> | <code>boolean</code> | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.<br>**Default**: false |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestCreateEmbeddedWithTemplate(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestCreateEmbeddedWithTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestCreateEmbeddedWithTemplateError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestEdit(request: SignatureRequest.SignatureRequestEditRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

**NOTE:** Edit and resend *will* deduct your signature request quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestEdit({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestEditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestEdit({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to edit. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>signers?</code> | <code>[SubSignatureRequestSigner](src/models/sub-signature-request-signer.ts)[]</code> | Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>groupedSigners?</code> | <code>[SubSignatureRequestGroupedSigners](src/models/sub-signature-request-grouped-signers.ts)[]</code> | Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccEmailAddresses?</code> | <code>string[]</code> | The email addresses that should be CCed. |
| <code>clientId?</code> | <code>string</code> | The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>formFieldsPerDocument?</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>hideTextTags?</code> | <code>boolean</code> | Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.<br>**Default**: false |
| <code>isEid?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://www.hellosign.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>useTextTags?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestEdit(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestEditError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestEdit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestEditEmbedded(request: SignatureRequest.SignatureRequestEditEmbeddedRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Edit and resend *will* deduct your signature request quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestEditEmbedded({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    clientId: "some example string",
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestEditEmbeddedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestEditEmbedded({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to edit. |
| <code>clientId</code> | <code>string</code> | Client id of the app you're using to create this embedded signature request. Used for security purposes. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>signers?</code> | <code>[SubSignatureRequestSigner](src/models/sub-signature-request-signer.ts)[]</code> | Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>groupedSigners?</code> | <code>[SubSignatureRequestGroupedSigners](src/models/sub-signature-request-grouped-signers.ts)[]</code> | Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccEmailAddresses?</code> | <code>string[]</code> | The email addresses that should be CCed. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>formFieldsPerDocument?</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>hideTextTags?</code> | <code>boolean</code> | Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>useTextTags?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |
| <code>populateAutoFillFields?</code> | <code>boolean</code> | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.<br>**Default**: false |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestEditEmbedded(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestEditEmbeddedError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestEditEmbedded(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestEditEmbeddedWithTemplate(request: SignatureRequest.SignatureRequestEditEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Edit and resend *will* deduct your signature request quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestEditEmbeddedWithTemplate({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    templateIds: ["some example string"],
    clientId: "some example string",
    signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestEditEmbeddedWithTemplate({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  templateIds: ["some example string"],
  clientId: "some example string",
  signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to edit. |
| <code>templateIds</code> | <code>string[]</code> | Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used. |
| <code>clientId</code> | <code>string</code> | Client id of the app you're using to create this embedded signature request. Used for security purposes. |
| <code>signers</code> | <code>[SubSignatureRequestTemplateSigner](src/models/sub-signature-request-template-signer.ts)[]</code> | Add Signers to your Templated-based Signature Request. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>ccs?</code> | <code>[SubCc](src/models/sub-cc.ts)[]</code> | Add CC email recipients. Required when a CC role exists for the Template. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | An array defining values and options for custom fields. Required when a custom field exists in the Template. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>populateAutoFillFields?</code> | <code>boolean</code> | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestEditEmbeddedWithTemplate(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestEditEmbeddedWithTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditEmbeddedWithTemplateError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestEditWithTemplate(request: SignatureRequest.SignatureRequestEditWithTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditWithTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.

**NOTE:** Edit and resend *will* deduct your signature request quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestEditWithTemplate({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    templateIds: ["some example string"],
    signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestEditWithTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestEditWithTemplate({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  templateIds: ["some example string"],
  signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to edit. |
| <code>templateIds</code> | <code>string[]</code> | Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used. |
| <code>signers</code> | <code>[SubSignatureRequestTemplateSigner](src/models/sub-signature-request-template-signer.ts)[]</code> | Add Signers to your Templated-based Signature Request. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>ccs?</code> | <code>[SubCc](src/models/sub-cc.ts)[]</code> | Add CC email recipients. Required when a CC role exists for the Template. |
| <code>clientId?</code> | <code>string</code> | Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | An array defining values and options for custom fields. Required when a custom field exists in the Template. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>isEid?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://www.hellosign.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestEditWithTemplate(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestEditWithTemplateError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestEditWithTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestEditWithTemplateError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestFiles(request: SignatureRequest.SignatureRequestFilesRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, SignatureRequest.SignatureRequestFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.

If the files are currently being prepared, a status code of `409` will be returned instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestFiles({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestFiles({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to retrieve. |
| <code>fileType?</code> | <code>[FileType](src/models/file-type.ts)</code> | Set to `pdf` for a single merged document or `zip` for a collection of individual documents.<br>**Default**: "pdf" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestFiles(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestFilesError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, SignatureRequest.SignatureRequestFilesError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestFilesAsDataUri(request: SignatureRequest.SignatureRequestFilesAsDataUriRequest, options?: RequestOptions): ApiPromise&lt;FileResponseDataUri, SignatureRequest.SignatureRequestFilesAsDataUriError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestFilesAsDataUri({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
  // TODO: Handle 'response' of type FileResponseDataUri
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestFilesAsDataUriError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestFilesAsDataUri({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileResponseDataUri
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestFilesAsDataUri(request)`

- **OnSuccess**: <code>[FileResponseDataUri](src/models/file-response-data-uri.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestFilesAsDataUriError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestFilesAsDataUri(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileResponseDataUri, SignatureRequest.SignatureRequestFilesAsDataUriError&gt;</code>, with `result.value` of type <code>[FileResponseDataUri](src/models/file-response-data-uri.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestFilesAsFileUrl(request: SignatureRequest.SignatureRequestFilesAsFileUrlRequest, options?: RequestOptions): ApiPromise&lt;FileResponse, SignatureRequest.SignatureRequestFilesAsFileUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestFilesAsFileUrl({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
  // TODO: Handle 'response' of type FileResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestFilesAsFileUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestFilesAsFileUrl({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to retrieve. |
| <code>forceDownload?</code> | <code>number</code> | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestFilesAsFileUrl(request)`

- **OnSuccess**: <code>[FileResponse](src/models/file-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestFilesAsFileUrlError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestFilesAsFileUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileResponse, SignatureRequest.SignatureRequestFilesAsFileUrlError&gt;</code>, with `result.value` of type <code>[FileResponse](src/models/file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestGet(request: SignatureRequest.SignatureRequestGetRequest, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestGet({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestGet({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestGet(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestGetError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestGetError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestList(request: SignatureRequest.SignatureRequestListRequest, options?: RequestOptions): ApiPromise&lt;SignatureRequestListResponse, SignatureRequest.SignatureRequestListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.

Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestList({ page: 1 });
  // TODO: Handle 'response' of type SignatureRequestListResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestList({ page: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountId?</code> | <code>string</code> | Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. |
| <code>page?</code> | <code>number</code> | Which page number of the SignatureRequest List to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.<br>**Default**: 20 |
| <code>query?</code> | <code>string</code> | String that includes search terms and/or fields to be used to filter the SignatureRequest objects. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestList(request)`

- **OnSuccess**: <code>[SignatureRequestListResponse](src/models/signature-request-list-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestListError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestListResponse, SignatureRequest.SignatureRequestListError&gt;</code>, with `result.value` of type <code>[SignatureRequestListResponse](src/models/signature-request-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestReleaseHold(request: SignatureRequest.SignatureRequestReleaseHoldRequest, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestReleaseHoldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestReleaseHold({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestReleaseHoldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestReleaseHold({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to release. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestReleaseHold(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestReleaseHoldError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestReleaseHold(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestReleaseHoldError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestRemind(request: SignatureRequest.SignatureRequestRemindRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestRemindError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.

**NOTE:** This action can **not** be used with embedded signature requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestRemind({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    body: { emailAddress: "user@example.com" },
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestRemindError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestRemind({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  body: { emailAddress: "user@example.com" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to send a reminder for. |
| <code>body</code> | <code>[SignatureRequestRemindRequest](src/models/signature-request-remind-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestRemind(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestRemindError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestRemind(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestRemindError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestRemove(request: SignatureRequest.SignatureRequestRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, SignatureRequest.SignatureRequestRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes your access to a completed signature request. This action is **not reversible**.

The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).

Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.signatureRequest.signatureRequestRemove({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  });
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestRemove({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to remove. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestRemoveError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SignatureRequest.SignatureRequestRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestSend(request: SignatureRequest.SignatureRequestSendRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestSend();
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestSendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestSend().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>signers?</code> | <code>[SubSignatureRequestSigner](src/models/sub-signature-request-signer.ts)[]</code> | Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>groupedSigners?</code> | <code>[SubSignatureRequestGroupedSigners](src/models/sub-signature-request-grouped-signers.ts)[]</code> | Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccEmailAddresses?</code> | <code>string[]</code> | The email addresses that should be CCed. |
| <code>clientId?</code> | <code>string</code> | The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>formFieldsPerDocument?</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>hideTextTags?</code> | <code>boolean</code> | Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.<br>**Default**: false |
| <code>isEid?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://www.hellosign.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>useTextTags?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestSend(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestSendError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestSend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestSendWithTemplate(request: SignatureRequest.SignatureRequestSendWithTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendWithTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestSendWithTemplate({
    templateIds: ["some example string"],
    signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestSendWithTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestSendWithTemplate({
  templateIds: ["some example string"],
  signers: [{ role: "some example string", name: "some example string", emailAddress: "user@example.com" }],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateIds</code> | <code>string[]</code> | Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used. |
| <code>signers</code> | <code>[SubSignatureRequestTemplateSigner](src/models/sub-signature-request-template-signer.ts)[]</code> | Add Signers to your Templated-based Signature Request. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>ccs?</code> | <code>[SubCc](src/models/sub-cc.ts)[]</code> | Add CC email recipients. Required when a CC role exists for the Template. |
| <code>clientId?</code> | <code>string</code> | Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | An array defining values and options for custom fields. Required when a custom field exists in the Template. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>isEid?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://www.hellosign.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestSendWithTemplate(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestSendWithTemplateError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestSendWithTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestSendWithTemplateError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signatureRequestUpdate(request: SignatureRequest.SignatureRequestUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.

Updating the email address of a signer will generate a new `signature_id` value.

**NOTE:** This action cannot be performed on a signature request with an appended signature page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signatureRequest.signatureRequestUpdate({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    body: { signatureId: "some example string" },
  });
  // TODO: Handle 'response' of type SignatureRequestGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SignatureRequest.SignatureRequestUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signatureRequest.signatureRequestUpdate({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  body: { signatureId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignatureRequestGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The id of the SignatureRequest to update. |
| <code>body</code> | <code>[SignatureRequestUpdateRequest](src/models/signature-request-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signatureRequest.signatureRequestUpdate(request)`

- **OnSuccess**: <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: throws <code>[SignatureRequest.SignatureRequestUpdateError](src/resources/signature-request.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signatureRequest.signatureRequestUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignatureRequestGetResponse, SignatureRequest.SignatureRequestUpdateError&gt;</code>, with `result.value` of type <code>[SignatureRequestGetResponse](src/models/signature-request-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Template

> Source: [Template](src/resources/template.ts)

<details>
<summary><code>templateAddUser(request: Template.TemplateAddUserRequestParams, options?: RequestOptions): ApiPromise&lt;TemplateGetResponse, Template.TemplateAddUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateAddUser({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
    body: {},
  });
  // TODO: Handle 'response' of type TemplateGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateAddUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateAddUser({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplateGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the Template to give the Account access to. |
| <code>body</code> | <code>[TemplateAddUserRequest](src/models/template-add-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateAddUser(request)`

- **OnSuccess**: <code>[TemplateGetResponse](src/models/template-get-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateAddUserError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateAddUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplateGetResponse, Template.TemplateAddUserError&gt;</code>, with `result.value` of type <code>[TemplateGetResponse](src/models/template-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateCreate(request: Template.TemplateCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TemplateCreateResponse, Template.TemplateCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a template that can be used in future signature requests.

If `client_id` is provided, the template will be created as an embedded template. Embedded templates can be used for embedded signature requests and can be edited later by generating a new `edit_url` with [/embedded/edit_url/{template_id}](/api/reference/operation/embeddedEditUrl/).

Template creation may complete asynchronously after the initial request is accepted. It is recommended that a callback be implemented to listen for the callback event. A `template_created` event indicates the template is ready to use, while a `template_error` event indicates there was a problem while creating the template. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateCreate({
    formFieldsPerDocument: [
      {
        documentIndex: 1,
        apiId: "some example string",
        height: 1,
        required: true,
        signer: "some example string",
        type: "checkbox",
        width: 1,
        x: 1,
        y: 1,
        isChecked: true,
      },
    ],
    signerRoles: [{}],
  });
  // TODO: Handle 'response' of type TemplateCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateCreate({
  formFieldsPerDocument: [
    {
      documentIndex: 1,
      apiId: "some example string",
      height: 1,
      required: true,
      signer: "some example string",
      type: "checkbox",
      width: 1,
      x: 1,
      y: 1,
      isChecked: true,
    },
  ],
  signerRoles: [{}],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplateCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>formFieldsPerDocument</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>signerRoles</code> | <code>[SubTemplateRole](src/models/sub-template-role.ts)[]</code> | An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccRoles?</code> | <code>string[]</code> | The CC roles that must be assigned when using the template to send a signature request |
| <code>clientId?</code> | <code>string</code> | Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app. |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>mergeFields?</code> | <code>[SubMergeField](src/models/sub-merge-field.ts)[]</code> | Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.<br>If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document. |
| <code>message?</code> | <code>string</code> | The default template email message. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>subject?</code> | <code>string</code> | The template title (alias). |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>usePreexistingFields?</code> | <code>boolean</code> | Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateCreate(request)`

- **OnSuccess**: <code>[TemplateCreateResponse](src/models/template-create-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateCreateError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplateCreateResponse, Template.TemplateCreateError&gt;</code>, with `result.value` of type <code>[TemplateCreateResponse](src/models/template-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateCreateEmbeddedDraft(request: Template.TemplateCreateEmbeddedDraftRequestParams, options?: RequestOptions): ApiPromise&lt;TemplateCreateEmbeddedDraftResponse, Template.TemplateCreateEmbeddedDraftError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template 'edit' stage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateCreateEmbeddedDraft({ clientId: "some example string" });
  // TODO: Handle 'response' of type TemplateCreateEmbeddedDraftResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateCreateEmbeddedDraftError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateCreateEmbeddedDraft({
  clientId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplateCreateEmbeddedDraftResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>allowCcs?</code> | <code>boolean</code> | This allows the requester to specify whether the user is allowed to provide email addresses to CC when creating a template.<br>**Default**: true |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccRoles?</code> | <code>string[]</code> | The CC roles that must be assigned when using the template to send a signature request |
| <code>editorOptions?</code> | <code>[SubEditorOptions](src/models/sub-editor-options.ts)</code> | This allows the requester to specify editor options when a preparing a document |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>forceSignerRoles?</code> | <code>boolean</code> | Provide users the ability to review/edit the template signer roles.<br>**Default**: false |
| <code>forceSubjectMessage?</code> | <code>boolean</code> | Provide users the ability to review/edit the template subject and message.<br>**Default**: false |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>formFieldsPerDocument?</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>mergeFields?</code> | <code>[SubMergeField](src/models/sub-merge-field.ts)[]</code> | Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.<br>If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document. |
| <code>message?</code> | <code>string</code> | The default template email message. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>showPreview?</code> | <code>boolean</code> | This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.<br>**Default**: false |
| <code>showProgressStepper?</code> | <code>boolean</code> | When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.<br>**Default**: true |
| <code>signerRoles?</code> | <code>[SubTemplateRole](src/models/sub-template-role.ts)[]</code> | An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template. |
| <code>skipMeNow?</code> | <code>boolean</code> | Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.<br>**Default**: false |
| <code>subject?</code> | <code>string</code> | The template title (alias). |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>usePreexistingFields?</code> | <code>boolean</code> | Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateCreateEmbeddedDraft(request)`

- **OnSuccess**: <code>[TemplateCreateEmbeddedDraftResponse](src/models/template-create-embedded-draft-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateCreateEmbeddedDraftError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateCreateEmbeddedDraft(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplateCreateEmbeddedDraftResponse, Template.TemplateCreateEmbeddedDraftError&gt;</code>, with `result.value` of type <code>[TemplateCreateEmbeddedDraftResponse](src/models/template-create-embedded-draft-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateDelete(request: Template.TemplateDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Template.TemplateDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completely deletes the template specified from the account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.template.templateDelete({ templateId: "f57db65d3f933b5316d398057a36176831451a35" });
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateDelete({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the Template to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Template.TemplateDeleteError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Template.TemplateDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateFiles(request: Template.TemplateFilesRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Template.TemplateFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateFiles({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateFiles({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the template files to retrieve. |
| <code>fileType?</code> | <code>[FileType](src/models/file-type.ts)</code> | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateFiles(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Template.TemplateFilesError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Template.TemplateFilesError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateFilesAsDataUri(request: Template.TemplateFilesAsDataUriRequest, options?: RequestOptions): ApiPromise&lt;FileResponseDataUri, Template.TemplateFilesAsDataUriError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateFilesAsDataUri({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
  });
  // TODO: Handle 'response' of type FileResponseDataUri
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateFilesAsDataUriError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateFilesAsDataUri({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileResponseDataUri
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the template files to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateFilesAsDataUri(request)`

- **OnSuccess**: <code>[FileResponseDataUri](src/models/file-response-data-uri.ts)</code>
- **OnError**: throws <code>[Template.TemplateFilesAsDataUriError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateFilesAsDataUri(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileResponseDataUri, Template.TemplateFilesAsDataUriError&gt;</code>, with `result.value` of type <code>[FileResponseDataUri](src/models/file-response-data-uri.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateFilesAsFileUrl(request: Template.TemplateFilesAsFileUrlRequest, options?: RequestOptions): ApiPromise&lt;FileResponse, Template.TemplateFilesAsFileUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateFilesAsFileUrl({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
  });
  // TODO: Handle 'response' of type FileResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateFilesAsFileUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateFilesAsFileUrl({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the template files to retrieve. |
| <code>forceDownload?</code> | <code>number</code> | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.<br>**Default**: 1 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateFilesAsFileUrl(request)`

- **OnSuccess**: <code>[FileResponse](src/models/file-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateFilesAsFileUrlError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateFilesAsFileUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileResponse, Template.TemplateFilesAsFileUrlError&gt;</code>, with `result.value` of type <code>[FileResponse](src/models/file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateGet(request: Template.TemplateGetRequest, options?: RequestOptions): ApiPromise&lt;TemplateGetResponse, Template.TemplateGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Template specified by the `template_id` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateGet({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
  });
  // TODO: Handle 'response' of type TemplateGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateGet({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplateGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the Template to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateGet(request)`

- **OnSuccess**: <code>[TemplateGetResponse](src/models/template-get-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateGetError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplateGetResponse, Template.TemplateGetError&gt;</code>, with `result.value` of type <code>[TemplateGetResponse](src/models/template-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateList(request: Template.TemplateListRequest, options?: RequestOptions): ApiPromise&lt;TemplateListResponse, Template.TemplateListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the Templates that are accessible by you.

Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateList();
  // TODO: Handle 'response' of type TemplateListResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplateListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountId?</code> | <code>string</code> | Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. |
| <code>page?</code> | <code>number</code> | Which page number of the Template List to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.<br>**Default**: 20 |
| <code>query?</code> | <code>string</code> | String that includes search terms and/or fields to be used to filter the Template objects. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateList(request)`

- **OnSuccess**: <code>[TemplateListResponse](src/models/template-list-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateListError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplateListResponse, Template.TemplateListError&gt;</code>, with `result.value` of type <code>[TemplateListResponse](src/models/template-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateRemoveUser(request: Template.TemplateRemoveUserRequestParams, options?: RequestOptions): ApiPromise&lt;TemplateGetResponse, Template.TemplateRemoveUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified Account's access to the specified Template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateRemoveUser({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
    body: {},
  });
  // TODO: Handle 'response' of type TemplateGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateRemoveUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateRemoveUser({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplateGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the Template to remove the Account's access to. |
| <code>body</code> | <code>[TemplateRemoveUserRequest](src/models/template-remove-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateRemoveUser(request)`

- **OnSuccess**: <code>[TemplateGetResponse](src/models/template-get-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateRemoveUserError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateRemoveUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplateGetResponse, Template.TemplateRemoveUserError&gt;</code>, with `result.value` of type <code>[TemplateGetResponse](src/models/template-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>templateUpdateFiles(request: Template.TemplateUpdateFilesRequestParams, options?: RequestOptions): ApiPromise&lt;TemplateUpdateFilesResponse, Template.TemplateUpdateFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Overlays a new file with the overlay of an existing template. The new file(s) must:

1. have the same or higher page count
2. the same orientation as the file(s) being replaced.

This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.

Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.

It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.

If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.template.templateUpdateFiles({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
  });
  // TODO: Handle 'response' of type TemplateUpdateFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type Template.TemplateUpdateFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.template.templateUpdateFiles({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TemplateUpdateFilesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The ID of the template whose files to update. |
| <code>clientId?</code> | <code>string</code> | Client id of the app you're using to update this template. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>message?</code> | <code>string</code> | The new default template email message. |
| <code>subject?</code> | <code>string</code> | The new default template email subject. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.template.templateUpdateFiles(request)`

- **OnSuccess**: <code>[TemplateUpdateFilesResponse](src/models/template-update-files-response.ts)</code>
- **OnError**: throws <code>[Template.TemplateUpdateFilesError](src/resources/template.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.template.templateUpdateFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TemplateUpdateFilesResponse, Template.TemplateUpdateFilesError&gt;</code>, with `result.value` of type <code>[TemplateUpdateFilesResponse](src/models/template-update-files-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSendJob

> Source: [BulkSendJob](src/resources/bulk-send-job.ts)

<details>
<summary><code>bulkSendJobGet(request: BulkSendJob.BulkSendJobGetRequest, options?: RequestOptions): ApiPromise&lt;BulkSendJobGetResponse, BulkSendJob.BulkSendJobGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSendJob.bulkSendJobGet({
    bulkSendJobId: "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
  });
  // TODO: Handle 'response' of type BulkSendJobGetResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkSendJob.BulkSendJobGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSendJob.bulkSendJobGet({
  bulkSendJobId: "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSendJobGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bulkSendJobId</code> | <code>string</code> | The id of the BulkSendJob to retrieve. |
| <code>page?</code> | <code>number</code> | Which page number of the BulkSendJob list to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSendJob.bulkSendJobGet(request)`

- **OnSuccess**: <code>[BulkSendJobGetResponse](src/models/bulk-send-job-get-response.ts)</code>
- **OnError**: throws <code>[BulkSendJob.BulkSendJobGetError](src/resources/bulk-send-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSendJob.bulkSendJobGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSendJobGetResponse, BulkSendJob.BulkSendJobGetError&gt;</code>, with `result.value` of type <code>[BulkSendJobGetResponse](src/models/bulk-send-job-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkSendJobList(request: BulkSendJob.BulkSendJobListRequest, options?: RequestOptions): ApiPromise&lt;BulkSendJobListResponse, BulkSendJob.BulkSendJobListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of BulkSendJob that you can access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSendJob.bulkSendJobList();
  // TODO: Handle 'response' of type BulkSendJobListResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkSendJob.BulkSendJobListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSendJob.bulkSendJobList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSendJobListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Which page number of the BulkSendJob List to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSendJob.bulkSendJobList(request)`

- **OnSuccess**: <code>[BulkSendJobListResponse](src/models/bulk-send-job-list-response.ts)</code>
- **OnError**: throws <code>[BulkSendJob.BulkSendJobListError](src/resources/bulk-send-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSendJob.bulkSendJobList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSendJobListResponse, BulkSendJob.BulkSendJobListError&gt;</code>, with `result.value` of type <code>[BulkSendJobListResponse](src/models/bulk-send-job-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Report

> Source: [Report](src/resources/report.ts)

<details>
<summary><code>reportCreate(request: Report.ReportCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ReportCreateResponse, Report.ReportCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request the creation of one or more report(s).

When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.report.reportCreate({
    body: {
      endDate: "some example string",
      reportType: [ReportType.UserActivity],
      startDate: "some example string",
    },
  });
  // TODO: Handle 'response' of type ReportCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Report.ReportCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.report.reportCreate({
  body: {
    endDate: "some example string",
    reportType: [ReportType.UserActivity],
    startDate: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ReportCreateRequest](src/models/report-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.report.reportCreate(request)`

- **OnSuccess**: <code>[ReportCreateResponse](src/models/report-create-response.ts)</code>
- **OnError**: throws <code>[Report.ReportCreateError](src/resources/report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.report.reportCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportCreateResponse, Report.ReportCreateError&gt;</code>, with `result.value` of type <code>[ReportCreateResponse](src/models/report-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Team

> Source: [Team](src/resources/team.ts)

<details>
<summary><code>teamAddMember(request: Team.TeamAddMemberRequestParams, options?: RequestOptions): ApiPromise&lt;TeamGetResponse, Team.TeamAddMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invites a user (specified using the `email_address` parameter) to your Team. If the user does not currently have a Dropbox Sign Account, a new one will be created for them. If a user is already a part of another Team, a `team_invite_failed` error will be returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamAddMember({
    teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
    body: {},
  });
  // TODO: Handle 'response' of type TeamGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamAddMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamAddMember({
  teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | The id of the team. |
| <code>body</code> | <code>[TeamAddMemberRequest](src/models/team-add-member-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamAddMember(request)`

- **OnSuccess**: <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: throws <code>[Team.TeamAddMemberError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamAddMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamGetResponse, Team.TeamAddMemberError&gt;</code>, with `result.value` of type <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamCreate(request: Team.TeamCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TeamGetResponse, Team.TeamCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamCreate({ body: {} });
  // TODO: Handle 'response' of type TeamGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamCreateRequest](src/models/team-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamCreate(request)`

- **OnSuccess**: <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: throws <code>[Team.TeamCreateError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamGetResponse, Team.TeamCreateError&gt;</code>, with `result.value` of type <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamDelete(options?: RequestOptions): ApiPromise&lt;undefined, Team.TeamDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.team.teamDelete();
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamDelete().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamDelete()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Team.TeamDeleteError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamDelete().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Team.TeamDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamGet(options?: RequestOptions): ApiPromise&lt;TeamGetResponse, Team.TeamGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of "not_found" will be returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamGet();
  // TODO: Handle 'response' of type TeamGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamGet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamGet()`

- **OnSuccess**: <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: throws <code>[Team.TeamGetError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamGet().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamGetResponse, Team.TeamGetError&gt;</code>, with `result.value` of type <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamInfo(request: Team.TeamInfoRequest, options?: RequestOptions): ApiPromise&lt;TeamGetInfoResponse, Team.TeamInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamInfo({ teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c" });
  // TODO: Handle 'response' of type TeamGetInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamInfo({
  teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamGetInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | The id of the team. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamInfo(request)`

- **OnSuccess**: <code>[TeamGetInfoResponse](src/models/team-get-info-response.ts)</code>
- **OnError**: throws <code>[Team.TeamInfoError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamGetInfoResponse, Team.TeamInfoError&gt;</code>, with `result.value` of type <code>[TeamGetInfoResponse](src/models/team-get-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamInvites(request: Team.TeamInvitesRequest, options?: RequestOptions): ApiPromise&lt;TeamInvitesResponse, Team.TeamInvitesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of team invites (and their roles).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamInvites();
  // TODO: Handle 'response' of type TeamInvitesResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamInvitesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamInvites().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamInvitesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>emailAddress?</code> | <code>string</code> | The email address for which to display the team invites. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamInvites(request)`

- **OnSuccess**: <code>[TeamInvitesResponse](src/models/team-invites-response.ts)</code>
- **OnError**: throws <code>[Team.TeamInvitesError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamInvites(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamInvitesResponse, Team.TeamInvitesError&gt;</code>, with `result.value` of type <code>[TeamInvitesResponse](src/models/team-invites-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamMembers(request: Team.TeamMembersRequest, options?: RequestOptions): ApiPromise&lt;TeamMembersResponse, Team.TeamMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a paginated list of members (and their roles) that belong to a given team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamMembers({ teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c" });
  // TODO: Handle 'response' of type TeamMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamMembers({
  teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamMembersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId</code> | <code>string</code> | The id of the team that a member list is being requested from. |
| <code>page?</code> | <code>number</code> | Which page number of the team member list to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamMembers(request)`

- **OnSuccess**: <code>[TeamMembersResponse](src/models/team-members-response.ts)</code>
- **OnError**: throws <code>[Team.TeamMembersError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamMembersResponse, Team.TeamMembersError&gt;</code>, with `result.value` of type <code>[TeamMembersResponse](src/models/team-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamRemoveMember(request: Team.TeamRemoveMemberRequestParams, options?: RequestOptions): ApiPromise&lt;TeamGetResponse, Team.TeamRemoveMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the `new_owner_email_address` parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamRemoveMember({ body: {} });
  // TODO: Handle 'response' of type TeamGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamRemoveMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamRemoveMember({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamRemoveMemberRequest](src/models/team-remove-member-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamRemoveMember(request)`

- **OnSuccess**: <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: throws <code>[Team.TeamRemoveMemberError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamRemoveMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamGetResponse, Team.TeamRemoveMemberError&gt;</code>, with `result.value` of type <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamSubTeams(request: Team.TeamSubTeamsRequest, options?: RequestOptions): ApiPromise&lt;TeamSubTeamsResponse, Team.TeamSubTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a paginated list of sub teams that belong to a given team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamSubTeams({ teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c" });
  // TODO: Handle 'response' of type TeamSubTeamsResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamSubTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamSubTeams({
  teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamSubTeamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId</code> | <code>string</code> | The id of the parent Team. |
| <code>page?</code> | <code>number</code> | Which page number of the SubTeam List to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamSubTeams(request)`

- **OnSuccess**: <code>[TeamSubTeamsResponse](src/models/team-sub-teams-response.ts)</code>
- **OnError**: throws <code>[Team.TeamSubTeamsError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamSubTeams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamSubTeamsResponse, Team.TeamSubTeamsError&gt;</code>, with `result.value` of type <code>[TeamSubTeamsResponse](src/models/team-sub-teams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamUpdate(request: Team.TeamUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;TeamGetResponse, Team.TeamUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name of your Team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.teamUpdate({ body: {} });
  // TODO: Handle 'response' of type TeamGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Team.TeamUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.teamUpdate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamUpdateRequest](src/models/team-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.teamUpdate(request)`

- **OnSuccess**: <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: throws <code>[Team.TeamUpdateError](src/resources/team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.team.teamUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamGetResponse, Team.TeamUpdateError&gt;</code>, with `result.value` of type <code>[TeamGetResponse](src/models/team-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UnclaimedDraft

> Source: [UnclaimedDraft](src/resources/unclaimed-draft.ts)

<details>
<summary><code>unclaimedDraftCreate(request: UnclaimedDraft.UnclaimedDraftCreateRequestParams, options?: RequestOptions): ApiPromise&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the "Sign and send" or the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.unclaimedDraft.unclaimedDraftCreate({ type: Type2.SendDocument });
  // TODO: Handle 'response' of type UnclaimedDraftCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type UnclaimedDraft.UnclaimedDraftCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unclaimedDraft.unclaimedDraftCreate({ type: Type2.SendDocument }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UnclaimedDraftCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type2](src/models/type2.ts)</code> | The type of unclaimed draft to create. Use `send_document` to create a claimable file, and `request_signature` for a claimable signature request. If the type is `request_signature` then signers name and email_address are not optional. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccEmailAddresses?</code> | <code>string[]</code> | The email addresses that should be CCed. |
| <code>clientId?</code> | <code>string</code> | Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>formFieldsPerDocument?</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>hideTextTags?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>showProgressStepper?</code> | <code>boolean</code> | When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.<br>**Default**: true |
| <code>signers?</code> | <code>[SubUnclaimedDraftSigner](src/models/sub-unclaimed-draft-signer.ts)[]</code> | Add Signers to your Unclaimed Draft Signature Request. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>usePreexistingFields?</code> | <code>boolean</code> | Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.<br>**Default**: false |
| <code>useTextTags?</code> | <code>boolean</code> | Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.<br><br>**NOTE:** This does not correspond to the **expires_at** returned in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unclaimedDraft.unclaimedDraftCreate(request)`

- **OnSuccess**: <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: throws <code>[UnclaimedDraft.UnclaimedDraftCreateError](src/resources/unclaimed-draft.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unclaimedDraft.unclaimedDraftCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateError&gt;</code>, with `result.value` of type <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unclaimedDraftCreateEmbedded(request: UnclaimedDraft.UnclaimedDraftCreateEmbeddedRequestParams, options?: RequestOptions): ApiPromise&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.unclaimedDraft.unclaimedDraftCreateEmbedded({
    clientId: "some example string",
    requesterEmailAddress: "user@example.com",
  });
  // TODO: Handle 'response' of type UnclaimedDraftCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type UnclaimedDraft.UnclaimedDraftCreateEmbeddedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unclaimedDraft.unclaimedDraftCreateEmbedded({
  clientId: "some example string",
  requesterEmailAddress: "user@example.com",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UnclaimedDraftCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. |
| <code>requesterEmailAddress</code> | <code>string</code> | The email address of the user that should be designated as the requester of this draft, if the draft type is `request_signature`. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>allowCcs?</code> | <code>boolean</code> | This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.<br>**Default**: true |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.<br>**Default**: false |
| <code>attachments?</code> | <code>[SubAttachment](src/models/sub-attachment.ts)[]</code> | A list describing the attachments |
| <code>ccEmailAddresses?</code> | <code>string[]</code> | The email addresses that should be CCed. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template. |
| <code>editorOptions?</code> | <code>[SubEditorOptions](src/models/sub-editor-options.ts)</code> | This allows the requester to specify editor options when a preparing a document |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>forceSignerPage?</code> | <code>boolean</code> | Provide users the ability to review/edit the signers.<br>**Default**: false |
| <code>forceSubjectMessage?</code> | <code>boolean</code> | Provide users the ability to review/edit the subject and message.<br>**Default**: false |
| <code>formFieldGroups?</code> | <code>[SubFormFieldGroup](src/models/sub-form-field-group.ts)[]</code> | Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`. |
| <code>formFieldRules?</code> | <code>[SubFormFieldRule](src/models/sub-form-field-rule.ts)[]</code> | Conditional Logic rules for fields defined in `form_fields_per_document`. |
| <code>formFieldsPerDocument?</code> | <code>[SubFormFieldsPerDocumentBase](src/models/unions/sub-form-fields-per-document-base.ts)[]</code> | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge` |
| <code>hideTextTags?</code> | <code>boolean</code> | Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.<br>**Default**: false |
| <code>holdRequest?</code> | <code>boolean</code> | The request from this draft will not automatically send to signers post-claim if set to `true`. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.<br>**Default**: false |
| <code>isForEmbeddedSigning?</code> | <code>boolean</code> | The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>requestingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully request a signature. |
| <code>showPreview?</code> | <code>boolean</code> | This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience. |
| <code>showProgressStepper?</code> | <code>boolean</code> | When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.<br>**Default**: true |
| <code>signers?</code> | <code>[SubUnclaimedDraftSigner](src/models/sub-unclaimed-draft-signer.ts)[]</code> | Add Signers to your Unclaimed Draft Signature Request. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>skipMeNow?</code> | <code>boolean</code> | Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.<br>**Default**: false |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>type?</code> | <code>[Type3](src/models/type3.ts)</code> | The type of the draft. By default this is `request_signature`, but you can set it to `send_document` if you want to self sign a document and download it.<br>**Default**: "request_signature" |
| <code>usePreexistingFields?</code> | <code>boolean</code> | Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.<br>**Default**: false |
| <code>useTextTags?</code> | <code>boolean</code> | Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.<br>**Default**: false |
| <code>ignoreTextTagsExtractionErrors?</code> | <code>boolean</code> | Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.<br>**Default**: false |
| <code>populateAutoFillFields?</code> | <code>boolean</code> | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.<br>**Default**: false |
| <code>expiresAt?</code> | <code>number</code> | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.<br><br>**NOTE:** This does not correspond to the **expires_at** returned in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unclaimedDraft.unclaimedDraftCreateEmbedded(request)`

- **OnSuccess**: <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: throws <code>[UnclaimedDraft.UnclaimedDraftCreateEmbeddedError](src/resources/unclaimed-draft.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unclaimedDraft.unclaimedDraftCreateEmbedded(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedError&gt;</code>, with `result.value` of type <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unclaimedDraftCreateEmbeddedWithTemplate(request: UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.unclaimedDraft.unclaimedDraftCreateEmbeddedWithTemplate({
    clientId: "some example string",
    requesterEmailAddress: "user@example.com",
    templateIds: ["some example string"],
  });
  // TODO: Handle 'response' of type UnclaimedDraftCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unclaimedDraft.unclaimedDraftCreateEmbeddedWithTemplate({
  clientId: "some example string",
  requesterEmailAddress: "user@example.com",
  templateIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UnclaimedDraftCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. |
| <code>requesterEmailAddress</code> | <code>string</code> | The email address of the user that should be designated as the requester of this draft. |
| <code>templateIds</code> | <code>string[]</code> | Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the templates will be used. |
| <code>allowDecline?</code> | <code>boolean</code> | Allows signers to decline to sign a document if `true`. Defaults to `false`.<br>**Default**: false |
| <code>allowReassign?</code> | <code>boolean</code> | Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.<br>**Default**: false |
| <code>ccs?</code> | <code>[SubCc](src/models/sub-cc.ts)[]</code> | Add CC email recipients. Required when a CC role exists for the Template. |
| <code>customFields?</code> | <code>[SubCustomField](src/models/sub-custom-field.ts)[]</code> | An array defining values and options for custom fields. Required when a custom field exists in the Template. |
| <code>editorOptions?</code> | <code>[SubEditorOptions](src/models/sub-editor-options.ts)</code> | This allows the requester to specify editor options when a preparing a document |
| <code>fieldOptions?</code> | <code>[SubFieldOptions](src/models/sub-field-options.ts)</code> | This allows the requester to specify field options for a signature request. |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to append additional files to the signature request being created from the template. Dropbox Sign will parse the files for [text tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature request. Text tags for signers not on the template(s) will be ignored.<br><br>**files** or **file_urls[]** is required, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use file_urls[] to append additional files to the signature request being created from the template. Dropbox Sign will download the file, then parse it for [text tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request. Text tags for signers not on the template(s) will be ignored.<br><br>**files** or **file_urls[]** is required, but not both. |
| <code>forceSignerRoles?</code> | <code>boolean</code> | Provide users the ability to review/edit the template signer roles.<br>**Default**: false |
| <code>forceSubjectMessage?</code> | <code>boolean</code> | Provide users the ability to review/edit the template subject and message.<br>**Default**: false |
| <code>holdRequest?</code> | <code>boolean</code> | The request from this draft will not automatically send to signers post-claim if set to 1. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.<br>**Default**: false |
| <code>isForEmbeddedSigning?</code> | <code>boolean</code> | The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>message?</code> | <code>string</code> | The custom message in the email that will be sent to the signers. |
| <code>metadata?</code> | <code>Record&lt;string, unknown&gt;</code> | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. |
| <code>previewOnly?</code> | <code>boolean</code> | This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).<br><br>- `preview_only=true`: Allows requesters to enable the preview only experience.<br>- `preview_only=false`: Allows requesters to disable the preview only experience.<br><br>**NOTE:** This parameter overwrites `show_preview=1` (if set).<br>**Default**: false |
| <code>requestingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully request a signature. |
| <code>showPreview?</code> | <code>boolean</code> | This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.<br>**Default**: false |
| <code>showProgressStepper?</code> | <code>boolean</code> | When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.<br>**Default**: true |
| <code>signers?</code> | <code>[SubUnclaimedDraftTemplateSigner](src/models/sub-unclaimed-draft-template-signer.ts)[]</code> | Add Signers to your Templated-based Signature Request. |
| <code>signingOptions?</code> | <code>[SubSigningOptions](src/models/sub-signing-options.ts)</code> | This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too. |
| <code>signingRedirectUrl?</code> | <code>string</code> | The URL you want signers redirected to after they successfully sign. |
| <code>skipMeNow?</code> | <code>boolean</code> | Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.<br>**Default**: false |
| <code>subject?</code> | <code>string</code> | The subject in the email that will be sent to the signers. |
| <code>testMode?</code> | <code>boolean</code> | Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.<br>**Default**: false |
| <code>title?</code> | <code>string</code> | The title you want to assign to the SignatureRequest. |
| <code>populateAutoFillFields?</code> | <code>boolean</code> | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.<br>**Default**: false |
| <code>allowCcs?</code> | <code>boolean</code> | This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unclaimedDraft.unclaimedDraftCreateEmbeddedWithTemplate(request)`

- **OnSuccess**: <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: throws <code>[UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError](src/resources/unclaimed-draft.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unclaimedDraft.unclaimedDraftCreateEmbeddedWithTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftCreateEmbeddedWithTemplateError&gt;</code>, with `result.value` of type <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unclaimedDraftEditAndResend(request: UnclaimedDraft.UnclaimedDraftEditAndResendRequestParams, options?: RequestOptions): ApiPromise&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftEditAndResendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.unclaimedDraft.unclaimedDraftEditAndResend({
    signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    body: { clientId: "some example string" },
  });
  // TODO: Handle 'response' of type UnclaimedDraftCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type UnclaimedDraft.UnclaimedDraftEditAndResendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.unclaimedDraft.unclaimedDraftEditAndResend({
  signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
  body: { clientId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UnclaimedDraftCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureRequestId</code> | <code>string</code> | The ID of the signature request to edit and resend. |
| <code>body</code> | <code>[UnclaimedDraftEditAndResendRequest](src/models/unclaimed-draft-edit-and-resend-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unclaimedDraft.unclaimedDraftEditAndResend(request)`

- **OnSuccess**: <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: throws <code>[UnclaimedDraft.UnclaimedDraftEditAndResendError](src/resources/unclaimed-draft.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unclaimedDraft.unclaimedDraftEditAndResend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UnclaimedDraftCreateResponse, UnclaimedDraft.UnclaimedDraftEditAndResendError&gt;</code>, with `result.value` of type <code>[UnclaimedDraftCreateResponse](src/models/unclaimed-draft-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Embedded

> Source: [Embedded](src/resources/embedded.ts)

<details>
<summary><code>embeddedEditUrl(request: Embedded.EmbeddedEditUrlRequestParams, options?: RequestOptions): ApiPromise&lt;EmbeddedEditUrlResponse, Embedded.EmbeddedEditUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedded.embeddedEditUrl({
    templateId: "f57db65d3f933b5316d398057a36176831451a35",
    body: {},
  });
  // TODO: Handle 'response' of type EmbeddedEditUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type Embedded.EmbeddedEditUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.embedded.embeddedEditUrl({
  templateId: "f57db65d3f933b5316d398057a36176831451a35",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmbeddedEditUrlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>templateId</code> | <code>string</code> | The id of the template to edit. |
| <code>body</code> | <code>[EmbeddedEditUrlRequest](src/models/embedded-edit-url-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.embedded.embeddedEditUrl(request)`

- **OnSuccess**: <code>[EmbeddedEditUrlResponse](src/models/embedded-edit-url-response.ts)</code>
- **OnError**: throws <code>[Embedded.EmbeddedEditUrlError](src/resources/embedded.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.embedded.embeddedEditUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmbeddedEditUrlResponse, Embedded.EmbeddedEditUrlError&gt;</code>, with `result.value` of type <code>[EmbeddedEditUrlResponse](src/models/embedded-edit-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>embeddedSignUrl(request: Embedded.EmbeddedSignUrlRequest, options?: RequestOptions): ApiPromise&lt;EmbeddedSignUrlResponse, Embedded.EmbeddedSignUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.embedded.embeddedSignUrl({
    signatureId: "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b",
  });
  // TODO: Handle 'response' of type EmbeddedSignUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type Embedded.EmbeddedSignUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.embedded.embeddedSignUrl({
  signatureId: "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmbeddedSignUrlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signatureId</code> | <code>string</code> | The id of the signature to get a signature url for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.embedded.embeddedSignUrl(request)`

- **OnSuccess**: <code>[EmbeddedSignUrlResponse](src/models/embedded-sign-url-response.ts)</code>
- **OnError**: throws <code>[Embedded.EmbeddedSignUrlError](src/resources/embedded.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.embedded.embeddedSignUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmbeddedSignUrlResponse, Embedded.EmbeddedSignUrlError&gt;</code>, with `result.value` of type <code>[EmbeddedSignUrlResponse](src/models/embedded-sign-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ApiApp

> Source: [ApiApp](src/resources/api-app.ts)

<details>
<summary><code>apiAppCreate(request: ApiApp.ApiAppCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ApiAppGetResponse, ApiApp.ApiAppCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new API App.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiApp.apiAppCreate({
    domains: ["some example string"],
    name: "some example string",
  });
  // TODO: Handle 'response' of type ApiAppGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiApp.ApiAppCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiApp.apiAppCreate({
  domains: ["some example string"],
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiAppGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domains</code> | <code>string[]</code> | The domain names the ApiApp will be associated with. |
| <code>name</code> | <code>string</code> | The name you want to assign to the ApiApp. |
| <code>callbackUrl?</code> | <code>string</code> | The URL at which the ApiApp should receive event callbacks. |
| <code>customLogoFile?</code> | <code>FileInput</code> | An image file to use as a custom logo in embedded contexts. (Only applies to some API plans) |
| <code>oauth?</code> | <code>[SubOAuth](src/models/sub-oauth.ts)</code> | OAuth related parameters. |
| <code>options?</code> | <code>[SubOptions](src/models/sub-options.ts)</code> | Additional options supported by API App. |
| <code>whiteLabelingOptions?</code> | <code>[SubWhiteLabelingOptions](src/models/sub-white-labeling-options.ts)</code> | An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)<br><br>Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiApp.apiAppCreate(request)`

- **OnSuccess**: <code>[ApiAppGetResponse](src/models/api-app-get-response.ts)</code>
- **OnError**: throws <code>[ApiApp.ApiAppCreateError](src/resources/api-app.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiApp.apiAppCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiAppGetResponse, ApiApp.ApiAppCreateError&gt;</code>, with `result.value` of type <code>[ApiAppGetResponse](src/models/api-app-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apiAppDelete(request: ApiApp.ApiAppDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiApp.ApiAppDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API App. Can only be invoked for apps you own.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.apiApp.apiAppDelete({ clientId: "0dd3b823a682527788c4e40cb7b6f7e9" });
} catch (err) {
  // TODO: Handle 'err' of type ApiApp.ApiAppDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiApp.apiAppDelete({
  clientId: "0dd3b823a682527788c4e40cb7b6f7e9",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | The client id of the API App to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiApp.apiAppDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiApp.ApiAppDeleteError](src/resources/api-app.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiApp.apiAppDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiApp.ApiAppDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apiAppGet(request: ApiApp.ApiAppGetRequest, options?: RequestOptions): ApiPromise&lt;ApiAppGetResponse, ApiApp.ApiAppGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an object with information about an API App.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiApp.apiAppGet({ clientId: "0dd3b823a682527788c4e40cb7b6f7e9" });
  // TODO: Handle 'response' of type ApiAppGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiApp.ApiAppGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiApp.apiAppGet({ clientId: "0dd3b823a682527788c4e40cb7b6f7e9" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiAppGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | The client id of the API App to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiApp.apiAppGet(request)`

- **OnSuccess**: <code>[ApiAppGetResponse](src/models/api-app-get-response.ts)</code>
- **OnError**: throws <code>[ApiApp.ApiAppGetError](src/resources/api-app.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiApp.apiAppGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiAppGetResponse, ApiApp.ApiAppGetError&gt;</code>, with `result.value` of type <code>[ApiAppGetResponse](src/models/api-app-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apiAppList(request: ApiApp.ApiAppListRequest, options?: RequestOptions): ApiPromise&lt;ApiAppListResponse, ApiApp.ApiAppListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiApp.apiAppList();
  // TODO: Handle 'response' of type ApiAppListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiApp.ApiAppListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiApp.apiAppList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiAppListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Which page number of the API App List to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiApp.apiAppList(request)`

- **OnSuccess**: <code>[ApiAppListResponse](src/models/api-app-list-response.ts)</code>
- **OnError**: throws <code>[ApiApp.ApiAppListError](src/resources/api-app.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiApp.apiAppList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiAppListResponse, ApiApp.ApiAppListError&gt;</code>, with `result.value` of type <code>[ApiAppListResponse](src/models/api-app-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>apiAppUpdate(request: ApiApp.ApiAppUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;ApiAppGetResponse, ApiApp.ApiAppUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apiApp.apiAppUpdate({ clientId: "0dd3b823a682527788c4e40cb7b6f7e9" });
  // TODO: Handle 'response' of type ApiAppGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiApp.ApiAppUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apiApp.apiAppUpdate({
  clientId: "0dd3b823a682527788c4e40cb7b6f7e9",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiAppGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | The client id of the API App to update. |
| <code>callbackUrl?</code> | <code>string</code> | The URL at which the API App should receive event callbacks. |
| <code>customLogoFile?</code> | <code>FileInput</code> | An image file to use as a custom logo in embedded contexts. (Only applies to some API plans) |
| <code>domains?</code> | <code>string[]</code> | The domain names the ApiApp will be associated with. |
| <code>name?</code> | <code>string</code> | The name you want to assign to the ApiApp. |
| <code>oauth?</code> | <code>[SubOAuth](src/models/sub-oauth.ts)</code> | OAuth related parameters. |
| <code>options?</code> | <code>[SubOptions](src/models/sub-options.ts)</code> | Additional options supported by API App. |
| <code>whiteLabelingOptions?</code> | <code>[SubWhiteLabelingOptions](src/models/sub-white-labeling-options.ts)</code> | An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)<br><br>Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apiApp.apiAppUpdate(request)`

- **OnSuccess**: <code>[ApiAppGetResponse](src/models/api-app-get-response.ts)</code>
- **OnError**: throws <code>[ApiApp.ApiAppUpdateError](src/resources/api-app.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apiApp.apiAppUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiAppGetResponse, ApiApp.ApiAppUpdateError&gt;</code>, with `result.value` of type <code>[ApiAppGetResponse](src/models/api-app-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OAuth

> Source: [OAuth](src/resources/oauth.ts)

<details>
<summary><code>oauthTokenGenerate(request: OAuth.OauthTokenGenerateRequest, options?: RequestOptions): ApiPromise&lt;OAuthTokenResponse, OAuth.OauthTokenGenerateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuth.oauthTokenGenerate({
    body: {
      clientId: "some example string",
      clientSecret: "some example string",
      code: "some example string",
      grantType: "some example string",
      state: "some example string",
    },
  });
  // TODO: Handle 'response' of type OAuthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuth.OauthTokenGenerateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuth.oauthTokenGenerate({
  body: {
    clientId: "some example string",
    clientSecret: "some example string",
    code: "some example string",
    grantType: "some example string",
    state: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OAuthTokenGenerateRequest](src/models/oauth-token-generate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuth.oauthTokenGenerate(request)`

- **OnSuccess**: <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: throws <code>[OAuth.OauthTokenGenerateError](src/resources/oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuth.oauthTokenGenerate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthTokenResponse, OAuth.OauthTokenGenerateError&gt;</code>, with `result.value` of type <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthTokenRefresh(request: OAuth.OauthTokenRefreshRequest, options?: RequestOptions): ApiPromise&lt;OAuthTokenResponse, OAuth.OauthTokenRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuth.oauthTokenRefresh({
    body: { grantType: "some example string", refreshToken: "some example string" },
  });
  // TODO: Handle 'response' of type OAuthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type OAuth.OauthTokenRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuth.oauthTokenRefresh({
  body: { grantType: "some example string", refreshToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OAuthTokenRefreshRequest](src/models/oauth-token-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuth.oauthTokenRefresh(request)`

- **OnSuccess**: <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: throws <code>[OAuth.OauthTokenRefreshError](src/resources/oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oAuth.oauthTokenRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthTokenResponse, OAuth.OauthTokenRefreshError&gt;</code>, with `result.value` of type <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FaxLine

> Source: [FaxLine](src/resources/fax-line.ts)

<details>
<summary><code>faxLineAddUser(request: FaxLine.FaxLineAddUserRequestParams, options?: RequestOptions): ApiPromise&lt;FaxLineResponse, FaxLine.FaxLineAddUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Grants a user access to the specified Fax Line.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxLine.faxLineAddUser({ body: { number: "some example string" } });
  // TODO: Handle 'response' of type FaxLineResponse
} catch (err) {
  // TODO: Handle 'err' of type FaxLine.FaxLineAddUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxLine.faxLineAddUser({ body: { number: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxLineResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FaxLineAddUserRequest](src/models/fax-line-add-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxLine.faxLineAddUser(request)`

- **OnSuccess**: <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: throws <code>[FaxLine.FaxLineAddUserError](src/resources/fax-line.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxLine.faxLineAddUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxLineResponse, FaxLine.FaxLineAddUserError&gt;</code>, with `result.value` of type <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxLineAreaCodeGet(request: FaxLine.FaxLineAreaCodeGetRequest, options?: RequestOptions): ApiPromise&lt;FaxLineAreaCodeGetResponse, FaxLine.FaxLineAreaCodeGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of available area codes for a given state/province and city

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxLine.faxLineAreaCodeGet({ country: FaxLineAreaCodeGetCountryEnum.Us });
  // TODO: Handle 'response' of type FaxLineAreaCodeGetResponse
} catch (err) {
  // TODO: Handle 'err' of type FaxLine.FaxLineAreaCodeGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxLine.faxLineAreaCodeGet({
  country: FaxLineAreaCodeGetCountryEnum.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxLineAreaCodeGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>[FaxLineAreaCodeGetCountryEnum](src/models/fax-line-area-code-get-country-enum.ts)</code> | Filter area codes by country |
| <code>state?</code> | <code>[FaxLineAreaCodeGetStateEnum](src/models/fax-line-area-code-get-state-enum.ts)</code> | Filter area codes by state |
| <code>province?</code> | <code>[FaxLineAreaCodeGetProvinceEnum](src/models/fax-line-area-code-get-province-enum.ts)</code> | Filter area codes by province |
| <code>city?</code> | <code>string</code> | Filter area codes by city |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxLine.faxLineAreaCodeGet(request)`

- **OnSuccess**: <code>[FaxLineAreaCodeGetResponse](src/models/fax-line-area-code-get-response.ts)</code>
- **OnError**: throws <code>[FaxLine.FaxLineAreaCodeGetError](src/resources/fax-line.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxLine.faxLineAreaCodeGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxLineAreaCodeGetResponse, FaxLine.FaxLineAreaCodeGetError&gt;</code>, with `result.value` of type <code>[FaxLineAreaCodeGetResponse](src/models/fax-line-area-code-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxLineCreate(request: FaxLine.FaxLineCreateRequestParams, options?: RequestOptions): ApiPromise&lt;FaxLineResponse, FaxLine.FaxLineCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purchases a new Fax Line

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxLine.faxLineCreate({ body: { areaCode: 1, country: Country.Ca } });
  // TODO: Handle 'response' of type FaxLineResponse
} catch (err) {
  // TODO: Handle 'err' of type FaxLine.FaxLineCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxLine.faxLineCreate({
  body: { areaCode: 1, country: Country.Ca },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxLineResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FaxLineCreateRequest](src/models/fax-line-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxLine.faxLineCreate(request)`

- **OnSuccess**: <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: throws <code>[FaxLine.FaxLineCreateError](src/resources/fax-line.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxLine.faxLineCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxLineResponse, FaxLine.FaxLineCreateError&gt;</code>, with `result.value` of type <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxLineDelete(request: FaxLine.FaxLineDeleteRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaxLine.FaxLineDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified Fax Line from the subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faxLine.faxLineDelete({ body: { number: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type FaxLine.FaxLineDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxLine.faxLineDelete({ body: { number: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FaxLineDeleteRequest](src/models/fax-line-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxLine.faxLineDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaxLine.FaxLineDeleteError](src/resources/fax-line.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxLine.faxLineDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaxLine.FaxLineDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxLineGet(request: FaxLine.FaxLineGetRequest, options?: RequestOptions): ApiPromise&lt;FaxLineResponse, FaxLine.FaxLineGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the properties and settings of a Fax Line.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxLine.faxLineGet({ number: "123-123-1234" });
  // TODO: Handle 'response' of type FaxLineResponse
} catch (err) {
  // TODO: Handle 'err' of type FaxLine.FaxLineGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxLine.faxLineGet({ number: "123-123-1234" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxLineResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>number</code> | <code>string</code> | The Fax Line number |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxLine.faxLineGet(request)`

- **OnSuccess**: <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: throws <code>[FaxLine.FaxLineGetError](src/resources/fax-line.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxLine.faxLineGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxLineResponse, FaxLine.FaxLineGetError&gt;</code>, with `result.value` of type <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxLineList(request: FaxLine.FaxLineListRequest, options?: RequestOptions): ApiPromise&lt;FaxLineListResponse, FaxLine.FaxLineListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the properties and settings of multiple Fax Lines.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxLine.faxLineList({
    accountId: "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
    page: 1,
    pageSize: 20,
  });
  // TODO: Handle 'response' of type FaxLineListResponse
} catch (err) {
  // TODO: Handle 'err' of type FaxLine.FaxLineListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxLine.faxLineList({
  accountId: "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
  page: 1,
  pageSize: 20,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxLineListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountId?</code> | <code>string</code> | Account ID |
| <code>page?</code> | <code>number</code> | Which page number of the Fax Line List to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.<br>**Default**: 20 |
| <code>showTeamLines?</code> | <code>boolean</code> | Include Fax Lines belonging to team members in the list |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxLine.faxLineList(request)`

- **OnSuccess**: <code>[FaxLineListResponse](src/models/fax-line-list-response.ts)</code>
- **OnError**: throws <code>[FaxLine.FaxLineListError](src/resources/fax-line.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxLine.faxLineList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxLineListResponse, FaxLine.FaxLineListError&gt;</code>, with `result.value` of type <code>[FaxLineListResponse](src/models/fax-line-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxLineRemoveUser(request: FaxLine.FaxLineRemoveUserRequestParams, options?: RequestOptions): ApiPromise&lt;FaxLineResponse, FaxLine.FaxLineRemoveUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a user's access to the specified Fax Line

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxLine.faxLineRemoveUser({ body: { number: "some example string" } });
  // TODO: Handle 'response' of type FaxLineResponse
} catch (err) {
  // TODO: Handle 'err' of type FaxLine.FaxLineRemoveUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxLine.faxLineRemoveUser({
  body: { number: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxLineResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FaxLineRemoveUserRequest](src/models/fax-line-remove-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxLine.faxLineRemoveUser(request)`

- **OnSuccess**: <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: throws <code>[FaxLine.FaxLineRemoveUserError](src/resources/fax-line.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxLine.faxLineRemoveUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxLineResponse, FaxLine.FaxLineRemoveUserError&gt;</code>, with `result.value` of type <code>[FaxLineResponse](src/models/fax-line-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Document

> Source: [Document](src/resources/document.ts)

<details>
<summary><code>documentDetectFields(request: Document.DocumentDetectFieldsRequest, options?: RequestOptions): ApiPromise&lt;DocumentFieldDetectionResponse, Document.DocumentDetectFieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.document.documentDetectFields({
    detectionMode: "some example string",
    pageRange: "0-2,5,7-9",
  });
  // TODO: Handle 'response' of type DocumentFieldDetectionResponse
} catch (err) {
  // TODO: Handle 'err' of type Document.DocumentDetectFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.document.documentDetectFields({
  detectionMode: "some example string",
  pageRange: "0-2,5,7-9",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentFieldDetectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>detectionMode</code> | <code>[DetectionMode](src/models/unions/detection-mode.ts)</code> | The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags. |
| <code>file?</code> | <code>FileInput</code> | The PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both. |
| <code>fileUrl?</code> | <code>string</code> | The URL of the PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both. |
| <code>pageRange?</code> | <code>string</code> | The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.document.documentDetectFields(request)`

- **OnSuccess**: <code>[DocumentFieldDetectionResponse](src/models/document-field-detection-response.ts)</code>
- **OnError**: throws <code>[Document.DocumentDetectFieldsError](src/resources/document.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.document.documentDetectFields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentFieldDetectionResponse, Document.DocumentDetectFieldsError&gt;</code>, with `result.value` of type <code>[DocumentFieldDetectionResponse](src/models/document-field-detection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Fax

> Source: [Fax](src/resources/fax.ts)

<details>
<summary><code>faxDelete(request: Fax.FaxDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Fax.FaxDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified Fax from the system

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fax.faxDelete({ faxId: "fa5c8a0b0f492d768749333ad6fcc214c111e967" });
} catch (err) {
  // TODO: Handle 'err' of type Fax.FaxDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fax.faxDelete({
  faxId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>faxId</code> | <code>string</code> | Fax ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fax.faxDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Fax.FaxDeleteError](src/resources/fax.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fax.faxDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Fax.FaxDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxFiles(request: Fax.FaxFilesRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Fax.FaxFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads files associated with a Fax

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fax.faxFiles({ faxId: "fa5c8a0b0f492d768749333ad6fcc214c111e967" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Fax.FaxFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fax.faxFiles({ faxId: "fa5c8a0b0f492d768749333ad6fcc214c111e967" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>faxId</code> | <code>string</code> | Fax ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fax.faxFiles(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Fax.FaxFilesError](src/resources/fax.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fax.faxFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Fax.FaxFilesError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxGet(request: Fax.FaxGetRequest, options?: RequestOptions): ApiPromise&lt;FaxGetResponse, Fax.FaxGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a Fax

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fax.faxGet({ faxId: "fa5c8a0b0f492d768749333ad6fcc214c111e967" });
  // TODO: Handle 'response' of type FaxGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Fax.FaxGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fax.faxGet({ faxId: "fa5c8a0b0f492d768749333ad6fcc214c111e967" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>faxId</code> | <code>string</code> | Fax ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fax.faxGet(request)`

- **OnSuccess**: <code>[FaxGetResponse](src/models/fax-get-response.ts)</code>
- **OnError**: throws <code>[Fax.FaxGetError](src/resources/fax.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fax.faxGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxGetResponse, Fax.FaxGetError&gt;</code>, with `result.value` of type <code>[FaxGetResponse](src/models/fax-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxList(request: Fax.FaxListRequest, options?: RequestOptions): ApiPromise&lt;FaxListResponse, Fax.FaxListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns properties of multiple Faxes

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fax.faxList({ page: 1, pageSize: 20 });
  // TODO: Handle 'response' of type FaxListResponse
} catch (err) {
  // TODO: Handle 'err' of type Fax.FaxListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fax.faxList({ page: 1, pageSize: 20 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Which page number of the Fax List to return. Defaults to `1`.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fax.faxList(request)`

- **OnSuccess**: <code>[FaxListResponse](src/models/fax-list-response.ts)</code>
- **OnError**: throws <code>[Fax.FaxListError](src/resources/fax.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fax.faxList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxListResponse, Fax.FaxListError&gt;</code>, with `result.value` of type <code>[FaxListResponse](src/models/fax-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>faxSend(request: Fax.FaxSendRequestParams, options?: RequestOptions): ApiPromise&lt;FaxGetResponse, Fax.FaxSendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and sends a new Fax with the submitted file(s)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fax.faxSend({
    recipient: "recipient@example.com",
    sender: "sender@example.com",
    coverPageTo: "Recipient Name",
    coverPageFrom: "Sender Name",
    coverPageMessage: "Please find the attached documents.",
    title: "Fax Title",
  });
  // TODO: Handle 'response' of type FaxGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Fax.FaxSendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fax.faxSend({
  recipient: "recipient@example.com",
  sender: "sender@example.com",
  coverPageTo: "Recipient Name",
  coverPageFrom: "Sender Name",
  coverPageMessage: "Please find the attached documents.",
  title: "Fax Title",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FaxGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recipient</code> | <code>string</code> | Recipient of the fax <br>Can be a phone number in E.164 format or email address |
| <code>sender?</code> | <code>string</code> | Fax Send From Sender (used only with fax number) |
| <code>files?</code> | <code>FileInput</code> | Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>fileUrls?</code> | <code>string[]</code> | Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both. |
| <code>testMode?</code> | <code>boolean</code> | API Test Mode Setting<br>**Default**: false |
| <code>coverPageTo?</code> | <code>string</code> | Fax cover page recipient information |
| <code>coverPageFrom?</code> | <code>string</code> | Fax cover page sender information |
| <code>coverPageMessage?</code> | <code>string</code> | Fax Cover Page Message |
| <code>title?</code> | <code>string</code> | Fax Title |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fax.faxSend(request)`

- **OnSuccess**: <code>[FaxGetResponse](src/models/fax-get-response.ts)</code>
- **OnError**: throws <code>[Fax.FaxSendError](src/resources/fax.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fax.faxSend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FaxGetResponse, Fax.FaxSendError&gt;</code>, with `result.value` of type <code>[FaxGetResponse](src/models/fax-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DropboxSignApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

