<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiApp — operations

Accessor: `client.apiApp` · Source: `src/resources/api-app.ts` · 5 operations · Request and error types: namespace `ApiApp`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apiAppCreate

- **Signature**: `apiAppCreate(request: ApiApp.ApiAppCreateRequestParams, options?: RequestOptions): ApiPromise<ApiAppGetResponse, ApiApp.ApiAppCreateError>`
- **Wire**: `POST /api_app`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `custom_logo_file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiAppGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `ApiApp.ApiAppCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiApp.ApiAppCreateRequestParams` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domains` | `form` | — | `string[]` | yes |
| `name` | `form` | — | `string` | yes |
| `callbackUrl` | `form` | `callback_url` | `string` | no |
| `customLogoFile` | `form` | `custom_logo_file` | `FileInput` | no |
| `oauth` | `form` | — | `SubOAuth` | no |
| `options` | `form` | — | `SubOptions` | no |
| `whiteLabelingOptions` | `form` | `white_labeling_options` | `SubWhiteLabelingOptions` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubOAuth` | `subOAuthSchema` | `src/models/sub-oauth.ts` |
| `SubOptions` | `subOptionsSchema` | `src/models/sub-options.ts` |
| `SubWhiteLabelingOptions` | `subWhiteLabelingOptionsSchema` | `src/models/sub-white-labeling-options.ts` |
| `ApiAppGetResponse` | `apiAppGetResponseSchema` | `src/models/api-app-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### apiAppDelete

- **Signature**: `apiAppDelete(request: ApiApp.ApiAppDeleteRequest, options?: RequestOptions): ApiPromise<undefined, ApiApp.ApiAppDeleteError>`
- **Wire**: `DELETE /api_app/{client_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `ApiApp.ApiAppDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiApp.ApiAppDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `path` | `client_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### apiAppGet

- **Signature**: `apiAppGet(request: ApiApp.ApiAppGetRequest, options?: RequestOptions): ApiPromise<ApiAppGetResponse, ApiApp.ApiAppGetError>`
- **Wire**: `GET /api_app/{client_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiAppGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `ApiApp.ApiAppGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiApp.ApiAppGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `path` | `client_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiAppGetResponse` | `apiAppGetResponseSchema` | `src/models/api-app-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### apiAppList

- **Signature**: `apiAppList(request: ApiApp.ApiAppListRequest, options?: RequestOptions): ApiPromise<ApiAppListResponse, ApiApp.ApiAppListError>`
- **Wire**: `GET /api_app/list`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiAppListResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `ApiApp.ApiAppListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiApp.ApiAppListRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiAppListResponse` | `apiAppListResponseSchema` | `src/models/api-app-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### apiAppUpdate

- **Signature**: `apiAppUpdate(request: ApiApp.ApiAppUpdateRequestParams, options?: RequestOptions): ApiPromise<ApiAppGetResponse, ApiApp.ApiAppUpdateError>`
- **Wire**: `PUT /api_app/{client_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `custom_logo_file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiAppGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `ApiApp.ApiAppUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiApp.ApiAppUpdateRequestParams` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `path` | `client_id` | `string` | yes |
| `callbackUrl` | `form` | `callback_url` | `string` | no |
| `customLogoFile` | `form` | `custom_logo_file` | `FileInput` | no |
| `domains` | `form` | — | `string[]` | no |
| `name` | `form` | — | `string` | no |
| `oauth` | `form` | — | `SubOAuth` | no |
| `options` | `form` | — | `SubOptions` | no |
| `whiteLabelingOptions` | `form` | `white_labeling_options` | `SubWhiteLabelingOptions` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubOAuth` | `subOAuthSchema` | `src/models/sub-oauth.ts` |
| `SubOptions` | `subOptionsSchema` | `src/models/sub-options.ts` |
| `SubWhiteLabelingOptions` | `subWhiteLabelingOptionsSchema` | `src/models/sub-white-labeling-options.ts` |
| `ApiAppGetResponse` | `apiAppGetResponseSchema` | `src/models/api-app-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

