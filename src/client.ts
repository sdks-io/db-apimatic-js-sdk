import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { ApiApp } from "./resources/api-app.js";
import { BulkSendJob } from "./resources/bulk-send-job.js";
import { Document } from "./resources/document.js";
import { Embedded } from "./resources/embedded.js";
import { FaxLine } from "./resources/fax-line.js";
import { Fax } from "./resources/fax.js";
import { OAuth } from "./resources/oauth.js";
import { Report } from "./resources/report.js";
import { SignatureRequest } from "./resources/signature-request.js";
import { Team } from "./resources/team.js";
import { Template } from "./resources/template.js";
import { UnclaimedDraft } from "./resources/unclaimed-draft.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Dropbox Sign v3 API
 */
export class DropboxSignApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #signatureRequest?: SignatureRequest;
  #template?: Template;
  #bulkSendJob?: BulkSendJob;
  #report?: Report;
  #team?: Team;
  #unclaimedDraft?: UnclaimedDraft;
  #embedded?: Embedded;
  #apiApp?: ApiApp;
  #oAuth?: OAuth;
  #faxLine?: FaxLine;
  #document?: Document;
  #fax?: Fax;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DROPBOX_SIGN_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DropboxSignApiClient/3.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  get signatureRequest(): SignatureRequest {
    return (this.#signatureRequest ??= new SignatureRequest(this.#rawClient, this.#servers, this.#auth));
  }

  get template(): Template {
    return (this.#template ??= new Template(this.#rawClient, this.#servers, this.#auth));
  }

  get bulkSendJob(): BulkSendJob {
    return (this.#bulkSendJob ??= new BulkSendJob(this.#rawClient, this.#servers, this.#auth));
  }

  get report(): Report {
    return (this.#report ??= new Report(this.#rawClient, this.#servers, this.#auth));
  }

  get team(): Team {
    return (this.#team ??= new Team(this.#rawClient, this.#servers, this.#auth));
  }

  get unclaimedDraft(): UnclaimedDraft {
    return (this.#unclaimedDraft ??= new UnclaimedDraft(this.#rawClient, this.#servers, this.#auth));
  }

  get embedded(): Embedded {
    return (this.#embedded ??= new Embedded(this.#rawClient, this.#servers, this.#auth));
  }

  get apiApp(): ApiApp {
    return (this.#apiApp ??= new ApiApp(this.#rawClient, this.#servers, this.#auth));
  }

  get oAuth(): OAuth {
    return (this.#oAuth ??= new OAuth(this.#rawClient, this.#servers));
  }

  get faxLine(): FaxLine {
    return (this.#faxLine ??= new FaxLine(this.#rawClient, this.#servers, this.#auth));
  }

  get document(): Document {
    return (this.#document ??= new Document(this.#rawClient, this.#servers, this.#auth));
  }

  get fax(): Fax {
    return (this.#fax ??= new Fax(this.#rawClient, this.#servers, this.#auth));
  }
}
