<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuth — operations

Accessor: `client.oAuth` · Source: `src/resources/oauth.ts` · 2 operations · Request and error types: namespace `OAuth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### oauthTokenGenerate

- **Signature**: `oauthTokenGenerate(request: OAuth.OauthTokenGenerateRequest, options?: RequestOptions): ApiPromise<OAuthTokenResponse, OAuth.OauthTokenGenerateError>`
- **Wire**: `POST /oauth/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthTokenResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `OAuth.OauthTokenGenerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuth.OauthTokenGenerateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OAuthTokenGenerateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthTokenGenerateRequest` | `oAuthTokenGenerateRequestSchema` | `src/models/oauth-token-generate-request.ts` |
| `OAuthTokenResponse` | `oAuthTokenResponseSchema` | `src/models/oauth-token-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### oauthTokenRefresh

- **Signature**: `oauthTokenRefresh(request: OAuth.OauthTokenRefreshRequest, options?: RequestOptions): ApiPromise<OAuthTokenResponse, OAuth.OauthTokenRefreshError>`
- **Wire**: `POST /oauth/token?refresh`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthTokenResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `OAuth.OauthTokenRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OAuth.OauthTokenRefreshRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OAuthTokenRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthTokenRefreshRequest` | `oAuthTokenRefreshRequestSchema` | `src/models/oauth-token-refresh-request.ts` |
| `OAuthTokenResponse` | `oAuthTokenResponseSchema` | `src/models/oauth-token-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

