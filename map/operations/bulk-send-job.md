<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSendJob — operations

Accessor: `client.bulkSendJob` · Source: `src/resources/bulk-send-job.ts` · 2 operations · Request and error types: namespace `BulkSendJob`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkSendJobGet

- **Signature**: `bulkSendJobGet(request: BulkSendJob.BulkSendJobGetRequest, options?: RequestOptions): ApiPromise<BulkSendJobGetResponse, BulkSendJob.BulkSendJobGetError>`
- **Wire**: `GET /bulk_send_job/{bulk_send_job_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkSendJobGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `BulkSendJob.BulkSendJobGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSendJob.BulkSendJobGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bulkSendJobId` | `path` | `bulk_send_job_id` | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkSendJobGetResponse` | `bulkSendJobGetResponseSchema` | `src/models/bulk-send-job-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### bulkSendJobList

- **Signature**: `bulkSendJobList(request: BulkSendJob.BulkSendJobListRequest, options?: RequestOptions): ApiPromise<BulkSendJobListResponse, BulkSendJob.BulkSendJobListError>`
- **Wire**: `GET /bulk_send_job/list`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkSendJobListResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `BulkSendJob.BulkSendJobListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSendJob.BulkSendJobListRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkSendJobListResponse` | `bulkSendJobListResponseSchema` | `src/models/bulk-send-job-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

