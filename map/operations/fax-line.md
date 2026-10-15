<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaxLine — operations

Accessor: `client.faxLine` · Source: `src/resources/fax-line.ts` · 7 operations · Request and error types: namespace `FaxLine`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### faxLineAddUser

- **Signature**: `faxLineAddUser(request: FaxLine.FaxLineAddUserRequestParams, options?: RequestOptions): ApiPromise<FaxLineResponse, FaxLine.FaxLineAddUserError>`
- **Wire**: `PUT /fax_line/add_user`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FaxLineResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `FaxLine.FaxLineAddUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaxLine.FaxLineAddUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FaxLineAddUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxLineAddUserRequest` | `faxLineAddUserRequestSchema` | `src/models/fax-line-add-user-request.ts` |
| `FaxLineResponse` | `faxLineResponseSchema` | `src/models/fax-line-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxLineAreaCodeGet

- **Signature**: `faxLineAreaCodeGet(request: FaxLine.FaxLineAreaCodeGetRequest, options?: RequestOptions): ApiPromise<FaxLineAreaCodeGetResponse, FaxLine.FaxLineAreaCodeGetError>`
- **Wire**: `GET /fax_line/area_codes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FaxLineAreaCodeGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `FaxLine.FaxLineAreaCodeGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaxLine.FaxLineAreaCodeGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `FaxLineAreaCodeGetCountryEnum` | yes |
| `state` | `query` | `FaxLineAreaCodeGetStateEnum` | no |
| `province` | `query` | `FaxLineAreaCodeGetProvinceEnum` | no |
| `city` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxLineAreaCodeGetCountryEnum` | `faxLineAreaCodeGetCountryEnumSchema` | `src/models/fax-line-area-code-get-country-enum.ts` |
| `FaxLineAreaCodeGetStateEnum` | `faxLineAreaCodeGetStateEnumSchema` | `src/models/fax-line-area-code-get-state-enum.ts` |
| `FaxLineAreaCodeGetProvinceEnum` | `faxLineAreaCodeGetProvinceEnumSchema` | `src/models/fax-line-area-code-get-province-enum.ts` |
| `FaxLineAreaCodeGetResponse` | `faxLineAreaCodeGetResponseSchema` | `src/models/fax-line-area-code-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxLineCreate

- **Signature**: `faxLineCreate(request: FaxLine.FaxLineCreateRequestParams, options?: RequestOptions): ApiPromise<FaxLineResponse, FaxLine.FaxLineCreateError>`
- **Wire**: `POST /fax_line/create`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FaxLineResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `FaxLine.FaxLineCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaxLine.FaxLineCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FaxLineCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxLineCreateRequest` | `faxLineCreateRequestSchema` | `src/models/fax-line-create-request.ts` |
| `FaxLineResponse` | `faxLineResponseSchema` | `src/models/fax-line-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxLineDelete

- **Signature**: `faxLineDelete(request: FaxLine.FaxLineDeleteRequestParams, options?: RequestOptions): ApiPromise<undefined, FaxLine.FaxLineDeleteError>`
- **Wire**: `DELETE /fax_line`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `FaxLine.FaxLineDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaxLine.FaxLineDeleteRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FaxLineDeleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxLineDeleteRequest` | `faxLineDeleteRequestSchema` | `src/models/fax-line-delete-request.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxLineGet

- **Signature**: `faxLineGet(request: FaxLine.FaxLineGetRequest, options?: RequestOptions): ApiPromise<FaxLineResponse, FaxLine.FaxLineGetError>`
- **Wire**: `GET /fax_line`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FaxLineResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `FaxLine.FaxLineGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaxLine.FaxLineGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `number` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxLineResponse` | `faxLineResponseSchema` | `src/models/fax-line-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxLineList

- **Signature**: `faxLineList(request: FaxLine.FaxLineListRequest, options?: RequestOptions): ApiPromise<FaxLineListResponse, FaxLine.FaxLineListError>`
- **Wire**: `GET /fax_line/list`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FaxLineListResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `FaxLine.FaxLineListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaxLine.FaxLineListRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountId` | `query` | `account_id` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `showTeamLines` | `query` | `show_team_lines` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxLineListResponse` | `faxLineListResponseSchema` | `src/models/fax-line-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxLineRemoveUser

- **Signature**: `faxLineRemoveUser(request: FaxLine.FaxLineRemoveUserRequestParams, options?: RequestOptions): ApiPromise<FaxLineResponse, FaxLine.FaxLineRemoveUserError>`
- **Wire**: `PUT /fax_line/remove_user`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FaxLineResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `FaxLine.FaxLineRemoveUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaxLine.FaxLineRemoveUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FaxLineRemoveUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxLineRemoveUserRequest` | `faxLineRemoveUserRequestSchema` | `src/models/fax-line-remove-user-request.ts` |
| `FaxLineResponse` | `faxLineResponseSchema` | `src/models/fax-line-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

