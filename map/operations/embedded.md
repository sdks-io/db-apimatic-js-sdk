<!-- Generated file — do not edit; regenerated with the SDK. -->

# Embedded — operations

Accessor: `client.embedded` · Source: `src/resources/embedded.ts` · 2 operations · Request and error types: namespace `Embedded`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### embeddedEditUrl

- **Signature**: `embeddedEditUrl(request: Embedded.EmbeddedEditUrlRequestParams, options?: RequestOptions): ApiPromise<EmbeddedEditUrlResponse, Embedded.EmbeddedEditUrlError>`
- **Wire**: `POST /embedded/edit_url/{template_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EmbeddedEditUrlResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Embedded.EmbeddedEditUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Embedded.EmbeddedEditUrlRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |
| `body` | `body` | — | `EmbeddedEditUrlRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmbeddedEditUrlRequest` | `embeddedEditUrlRequestSchema` | `src/models/embedded-edit-url-request.ts` |
| `EmbeddedEditUrlResponse` | `embeddedEditUrlResponseSchema` | `src/models/embedded-edit-url-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### embeddedSignUrl

- **Signature**: `embeddedSignUrl(request: Embedded.EmbeddedSignUrlRequest, options?: RequestOptions): ApiPromise<EmbeddedSignUrlResponse, Embedded.EmbeddedSignUrlError>`
- **Wire**: `GET /embedded/sign_url/{signature_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EmbeddedSignUrlResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Embedded.EmbeddedSignUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Embedded.EmbeddedSignUrlRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureId` | `path` | `signature_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmbeddedSignUrlResponse` | `embeddedSignUrlResponseSchema` | `src/models/embedded-sign-url-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

