<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 4 operations · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accountCreate

- **Signature**: `accountCreate(request: Account.AccountCreateRequestParams, options?: RequestOptions): ApiPromise<AccountCreateResponse, Account.AccountCreateError>`
- **Wire**: `POST /account/create`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountCreateResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Account.AccountCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.AccountCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountCreateRequest` | `accountCreateRequestSchema` | `src/models/account-create-request.ts` |
| `AccountCreateResponse` | `accountCreateResponseSchema` | `src/models/account-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### accountGet

- **Signature**: `accountGet(request: Account.AccountGetRequest, options?: RequestOptions): ApiPromise<AccountGetResponse, Account.AccountGetError>`
- **Wire**: `GET /account`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Account.AccountGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.AccountGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `query` | `account_id` | `string` | no |
| `emailAddress` | `query` | `email_address` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountGetResponse` | `accountGetResponseSchema` | `src/models/account-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### accountUpdate

- **Signature**: `accountUpdate(request: Account.AccountUpdateRequestParams, options?: RequestOptions): ApiPromise<AccountGetResponse, Account.AccountUpdateError>`
- **Wire**: `PUT /account`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Account.AccountUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.AccountUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountUpdateRequest` | `accountUpdateRequestSchema` | `src/models/account-update-request.ts` |
| `AccountGetResponse` | `accountGetResponseSchema` | `src/models/account-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### accountVerify

- **Signature**: `accountVerify(request: Account.AccountVerifyRequestParams, options?: RequestOptions): ApiPromise<AccountVerifyResponse, Account.AccountVerifyError>`
- **Wire**: `POST /account/verify`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountVerifyResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Account.AccountVerifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.AccountVerifyRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountVerifyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountVerifyRequest` | `accountVerifyRequestSchema` | `src/models/account-verify-request.ts` |
| `AccountVerifyResponse` | `accountVerifyResponseSchema` | `src/models/account-verify-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

