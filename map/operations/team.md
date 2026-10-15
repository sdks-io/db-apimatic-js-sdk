<!-- Generated file — do not edit; regenerated with the SDK. -->

# Team — operations

Accessor: `client.team` · Source: `src/resources/team.ts` · 10 operations · Request and error types: namespace `Team`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `db-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### teamAddMember

- **Signature**: `teamAddMember(request: Team.TeamAddMemberRequestParams, options?: RequestOptions): ApiPromise<TeamGetResponse, Team.TeamAddMemberError>`
- **Wire**: `PUT /team/add_member`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamAddMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamAddMemberRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `team_id` | `string` | no |
| `body` | `body` | — | `TeamAddMemberRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamAddMemberRequest` | `teamAddMemberRequestSchema` | `src/models/team-add-member-request.ts` |
| `TeamGetResponse` | `teamGetResponseSchema` | `src/models/team-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamCreate

- **Signature**: `teamCreate(request: Team.TeamCreateRequestParams, options?: RequestOptions): ApiPromise<TeamGetResponse, Team.TeamCreateError>`
- **Wire**: `POST /team/create`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamCreateRequest` | `teamCreateRequestSchema` | `src/models/team-create-request.ts` |
| `TeamGetResponse` | `teamGetResponseSchema` | `src/models/team-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamDelete

- **Signature**: `teamDelete(options?: RequestOptions): ApiPromise<undefined, Team.TeamDeleteError>`
- **Wire**: `DELETE /team/destroy`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamGet

- **Signature**: `teamGet(options?: RequestOptions): ApiPromise<TeamGetResponse, Team.TeamGetError>`
- **Wire**: `GET /team`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamGetResponse` | `teamGetResponseSchema` | `src/models/team-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamInfo

- **Signature**: `teamInfo(request: Team.TeamInfoRequest, options?: RequestOptions): ApiPromise<TeamGetInfoResponse, Team.TeamInfoError>`
- **Wire**: `GET /team/info`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGetInfoResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamInfoRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamGetInfoResponse` | `teamGetInfoResponseSchema` | `src/models/team-get-info-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamInvites

- **Signature**: `teamInvites(request: Team.TeamInvitesRequest, options?: RequestOptions): ApiPromise<TeamInvitesResponse, Team.TeamInvitesError>`
- **Wire**: `GET /team/invites`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamInvitesResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamInvitesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamInvitesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `emailAddress` | `query` | `email_address` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamInvitesResponse` | `teamInvitesResponseSchema` | `src/models/team-invites-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamMembers

- **Signature**: `teamMembers(request: Team.TeamMembersRequest, options?: RequestOptions): ApiPromise<TeamMembersResponse, Team.TeamMembersError>`
- **Wire**: `GET /team/members/{team_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamMembersResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamMembersRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `teamId` | `path` | `team_id` | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamMembersResponse` | `teamMembersResponseSchema` | `src/models/team-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamRemoveMember

- **Signature**: `teamRemoveMember(request: Team.TeamRemoveMemberRequestParams, options?: RequestOptions): ApiPromise<TeamGetResponse, Team.TeamRemoveMemberError>`
- **Wire**: `POST /team/remove_member`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamRemoveMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamRemoveMemberRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamRemoveMemberRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamRemoveMemberRequest` | `teamRemoveMemberRequestSchema` | `src/models/team-remove-member-request.ts` |
| `TeamGetResponse` | `teamGetResponseSchema` | `src/models/team-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamSubTeams

- **Signature**: `teamSubTeams(request: Team.TeamSubTeamsRequest, options?: RequestOptions): ApiPromise<TeamSubTeamsResponse, Team.TeamSubTeamsError>`
- **Wire**: `GET /team/sub_teams/{team_id}`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSubTeamsResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamSubTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamSubTeamsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `teamId` | `path` | `team_id` | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamSubTeamsResponse` | `teamSubTeamsResponseSchema` | `src/models/team-sub-teams-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### teamUpdate

- **Signature**: `teamUpdate(request: Team.TeamUpdateRequestParams, options?: RequestOptions): ApiPromise<TeamGetResponse, Team.TeamUpdateError>`
- **Wire**: `PUT /team`
- **Auth**: any of `apiKey`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamGetResponse`
- **Error**: `DropboxSignApiError` with `kind: "api"`, an instance of `Team.TeamUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Team.TeamUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamUpdateRequest` | `teamUpdateRequestSchema` | `src/models/team-update-request.ts` |
| `TeamGetResponse` | `teamGetResponseSchema` | `src/models/team-get-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

