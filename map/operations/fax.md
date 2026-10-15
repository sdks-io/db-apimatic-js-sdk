<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fax — operations

Accessor: `client.fax` · Source: `src/resources/fax.ts` · 5 operations · Request and error types: namespace `Fax`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### faxDelete

- **Signature**: `faxDelete(request: Fax.FaxDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Fax.FaxDeleteError>`
- **Wire**: `DELETE /fax/{fax_id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Fax.FaxDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fax.FaxDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `faxId` | `path` | `fax_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxFiles

- **Signature**: `faxFiles(request: Fax.FaxFilesRequest, options?: RequestOptions): ApiPromise<undefined, Fax.FaxFilesError>`
- **Wire**: `GET /fax/files/{fax_id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Fax.FaxFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fax.FaxFilesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `faxId` | `path` | `fax_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxGet

- **Signature**: `faxGet(request: Fax.FaxGetRequest, options?: RequestOptions): ApiPromise<FaxGetResponse, Fax.FaxGetError>`
- **Wire**: `GET /fax/{fax_id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FaxGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Fax.FaxGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fax.FaxGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `faxId` | `path` | `fax_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxGetResponse` | `faxGetResponseSchema` | `src/models/fax-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxList

- **Signature**: `faxList(request: Fax.FaxListRequest, options?: RequestOptions): ApiPromise<FaxListResponse, Fax.FaxListError>`
- **Wire**: `GET /fax/list`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FaxListResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Fax.FaxListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fax.FaxListRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxListResponse` | `faxListResponseSchema` | `src/models/fax-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### faxSend

- **Signature**: `faxSend(request: Fax.FaxSendRequestParams, options?: RequestOptions): ApiPromise<FaxGetResponse, Fax.FaxSendError>`
- **Wire**: `POST /fax/send`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FaxGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Fax.FaxSendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fax.FaxSendRequestParams` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `recipient` | `form` | — | `string` | yes | — |
| `sender` | `form` | — | `string` | no | — |
| `files` | `form` | — | `FileInput` | no | — |
| `fileUrls` | `form` | `file_urls` | `string[]` | no | — |
| `testMode` | `form` | `test_mode` | `boolean` | no | `false` |
| `coverPageTo` | `form` | `cover_page_to` | `string` | no | — |
| `coverPageFrom` | `form` | `cover_page_from` | `string` | no | — |
| `coverPageMessage` | `form` | `cover_page_message` | `string` | no | — |
| `title` | `form` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `FaxGetResponse` | `faxGetResponseSchema` | `src/models/fax-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

