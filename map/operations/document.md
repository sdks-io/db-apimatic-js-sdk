<!-- Generated file — do not edit; regenerated with the SDK. -->

# Document — operations

Accessor: `client.document` · Source: `src/resources/document.ts` · 1 operation · Request and error types: namespace `Document`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### documentDetectFields

- **Signature**: `documentDetectFields(request: Document.DocumentDetectFieldsRequest, options?: RequestOptions): ApiPromise<DocumentFieldDetectionResponse, Document.DocumentDetectFieldsError>`
- **Wire**: `POST /document/detect_fields`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocumentFieldDetectionResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Document.DocumentDetectFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Document.DocumentDetectFieldsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `detectionMode` | `form` | `detection_mode` | `DetectionMode` | yes |
| `file` | `form` | — | `FileInput` | no |
| `fileUrl` | `form` | `file_url` | `string` | no |
| `pageRange` | `form` | `page_range` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DetectionMode` | `detectionModeSchema` | `src/models/unions/detection-mode.ts` |
| `DocumentFieldDetectionResponse` | `documentFieldDetectionResponseSchema` | `src/models/document-field-detection-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

