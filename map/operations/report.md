<!-- Generated file — do not edit; regenerated with the SDK. -->

# Report — operations

Accessor: `client.report` · Source: `src/resources/report.ts` · 1 operation · Request and error types: namespace `Report`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### reportCreate

- **Signature**: `reportCreate(request: Report.ReportCreateRequestParams, options?: RequestOptions): ApiPromise<ReportCreateResponse, Report.ReportCreateError>`
- **Wire**: `POST /report/create`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReportCreateResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Report.ReportCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Report.ReportCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ReportCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportCreateRequest` | `reportCreateRequestSchema` | `src/models/report-create-request.ts` |
| `ReportCreateResponse` | `reportCreateResponseSchema` | `src/models/report-create-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

