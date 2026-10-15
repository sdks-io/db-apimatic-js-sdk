import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { teamAddMemberRequestSchema, type TeamAddMemberRequest } from "../models/team-add-member-request.js";
import { teamCreateRequestSchema, type TeamCreateRequest } from "../models/team-create-request.js";
import { teamGetInfoResponseSchema, type TeamGetInfoResponse } from "../models/team-get-info-response.js";
import { teamGetResponseSchema, type TeamGetResponse } from "../models/team-get-response.js";
import { teamInvitesResponseSchema, type TeamInvitesResponse } from "../models/team-invites-response.js";
import { teamMembersResponseSchema, type TeamMembersResponse } from "../models/team-members-response.js";
import {
  teamRemoveMemberRequestSchema,
  type TeamRemoveMemberRequest,
} from "../models/team-remove-member-request.js";
import { teamSubTeamsResponseSchema, type TeamSubTeamsResponse } from "../models/team-sub-teams-response.js";
import { teamUpdateRequestSchema, type TeamUpdateRequest } from "../models/team-update-request.js";
import type { Servers } from "../servers.js";

export class Team {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add User to Team
   *
   * @remarks
   * Invites a user (specified using the `email_address` parameter) to your Team. If the user does
   * not currently have a Dropbox Sign Account, a new one will be created for them. If a user is
   * already a part of another Team, a `team_invite_failed` error will be returned.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamAddMemberError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamAddMember(
    request: Team.TeamAddMemberRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TeamGetResponse, Team.TeamAddMemberError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/team/add_member"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [{ name: "team_id", value: request.teamId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamAddMemberRequestSchema },
      },
      {
        success: { kind: "json", schema: teamGetResponseSchema },
        errorFactory: Team.TeamAddMemberError,
      },
      options,
    );
  }

  /**
   * Create Team
   *
   * @remarks
   * Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamCreate(
    request: Team.TeamCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TeamGetResponse, Team.TeamCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/team/create"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: teamGetResponseSchema },
        errorFactory: Team.TeamCreateError,
      },
      options,
    );
  }

  /**
   * Delete Team
   *
   * @remarks
   * Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamDelete(options?: RequestOptions): ApiPromise<undefined, Team.TeamDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/team/destroy"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Team.TeamDeleteError,
      },
      options,
    );
  }

  /**
   * Get Team
   *
   * @remarks
   * Returns information about your Team as well as a list of its members. If you do not belong to a
   * Team, a 404 error with an error_name of "not_found" will be returned.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamGet(options?: RequestOptions): ApiPromise<TeamGetResponse, Team.TeamGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamGetResponseSchema },
        errorFactory: Team.TeamGetError,
      },
      options,
    );
  }

  /**
   * Get Team Info
   *
   * @remarks
   * Provides information about a team.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamInfo(
    request: Team.TeamInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGetInfoResponse, Team.TeamInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team/info"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [{ name: "team_id", value: request.teamId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamGetInfoResponseSchema },
        errorFactory: Team.TeamInfoError,
      },
      options,
    );
  }

  /**
   * List Team Invites
   *
   * @remarks
   * Provides a list of team invites (and their roles).
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamInvitesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamInvites(
    request: Team.TeamInvitesRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamInvitesResponse, Team.TeamInvitesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team/invites"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [{ name: "email_address", value: request.emailAddress, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamInvitesResponseSchema },
        errorFactory: Team.TeamInvitesError,
      },
      options,
    );
  }

  /**
   * List Team Members
   *
   * @remarks
   * Provides a paginated list of members (and their roles) that belong to a given team.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamMembersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamMembers(
    request: Team.TeamMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamMembersResponse, Team.TeamMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team/members/{team_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "team_id", value: request.teamId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamMembersResponseSchema },
        errorFactory: Team.TeamMembersError,
      },
      options,
    );
  }

  /**
   * Remove User from Team
   *
   * @remarks
   * Removes the provided user Account from your Team. If the Account had an outstanding invitation
   * to your Team, the invitation will be expired. If you choose to transfer documents from the
   * removed Account to an Account provided in the `new_owner_email_address` parameter (available
   * only for Enterprise plans), the response status code will be 201, which indicates that your
   * request has been queued but not fully executed.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamRemoveMemberError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamRemoveMember(
    request: Team.TeamRemoveMemberRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TeamGetResponse, Team.TeamRemoveMemberError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/team/remove_member"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamRemoveMemberRequestSchema },
      },
      {
        success: { kind: "json", schema: teamGetResponseSchema },
        errorFactory: Team.TeamRemoveMemberError,
      },
      options,
    );
  }

  /**
   * List Sub Teams
   *
   * @remarks
   * Provides a paginated list of sub teams that belong to a given team.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamSubTeamsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamSubTeams(
    request: Team.TeamSubTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSubTeamsResponse, Team.TeamSubTeamsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team/sub_teams/{team_id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [{ name: "team_id", value: request.teamId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamSubTeamsResponseSchema },
        errorFactory: Team.TeamSubTeamsError,
      },
      options,
    );
  }

  /**
   * Update Team
   *
   * @remarks
   * Updates the name of your Team.
   *
   * @returns successful operation
   *
   * @throws {@link Team.TeamUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DropboxSignApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamUpdate(
    request: Team.TeamUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TeamGetResponse, Team.TeamUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/team"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: teamGetResponseSchema },
        errorFactory: Team.TeamUpdateError,
      },
      options,
    );
  }
}

export namespace Team {
  export type TeamAddMemberRequestParams = {
    /** The id of the team. */
    teamId?: string;
    body: TeamAddMemberRequest;
  };

  export class TeamAddMemberError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamAddMemberError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TeamCreateRequestParams = {
    body: TeamCreateRequest;
  };

  export class TeamCreateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamCreateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class TeamDeleteError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamDeleteError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class TeamGetError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamGetError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TeamInfoRequest = {
    /** The id of the team. */
    teamId?: string;
  };

  export class TeamInfoError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamInfoError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TeamInvitesRequest = {
    /** The email address for which to display the team invites. */
    emailAddress?: string;
  };

  export class TeamInvitesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamInvitesError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TeamMembersRequest = {
    /** The id of the team that a member list is being requested from. */
    teamId: string;
    /** Which page number of the team member list to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export class TeamMembersError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamMembersError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TeamRemoveMemberRequestParams = {
    body: TeamRemoveMemberRequest;
  };

  export class TeamRemoveMemberError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamRemoveMemberError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TeamSubTeamsRequest = {
    /** The id of the parent Team. */
    teamId: string;
    /** Which page number of the SubTeam List to return. Defaults to `1`. @default 1 */
    page?: number;
    /**
     * Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export class TeamSubTeamsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamSubTeamsError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TeamUpdateRequestParams = {
    body: TeamUpdateRequest;
  };

  export class TeamUpdateError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<TeamUpdateError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
