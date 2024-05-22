// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from '@onmetal/node/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['METAL_API_KEY'].
   */
  metalAPIKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['METAL_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Metal API. */
export class Metal extends Core.APIClient {
  metalAPIKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Metal API.
   *
   * @param {string | undefined} [opts.metalAPIKey=process.env['METAL_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['METAL_BASE_URL'] ?? https://www.onmetal.dev/api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('METAL_BASE_URL'),
    metalAPIKey = Core.readEnv('METAL_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (metalAPIKey === undefined) {
      throw new Errors.MetalError(
        "The METAL_API_KEY environment variable is missing or empty; either provide it, or instantiate the Metal client with an metalAPIKey option, like new Metal({ metalAPIKey: 'My Metal API Key' }).",
      );
    }

    const options: ClientOptions = {
      metalAPIKey,
      ...opts,
      baseURL: baseURL || `https://www.onmetal.dev/api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.metalAPIKey = metalAPIKey;
  }

  whoami: API.Whoami = new API.Whoami(this);
  hetznerProjects: API.HetznerProjects = new API.HetznerProjects(this);
  hetznerClusters: API.HetznerClusters = new API.HetznerClusters(this);
  applications: API.Applications = new API.Applications(this);
  teams: API.Teams = new API.Teams(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.metalAPIKey}` };
  }

  static Metal = this;

  static MetalError = Errors.MetalError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  MetalError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Metal {
  export import RequestOptions = Core.RequestOptions;

  export import Whoami = API.Whoami;
  export import WhoAmI = API.WhoAmI;

  export import HetznerProjects = API.HetznerProjects;
  export import HetznerProject = API.HetznerProject;
  export import HetznerProjectListResponse = API.HetznerProjectListResponse;
  export import HetznerProjectDeleteResponse = API.HetznerProjectDeleteResponse;
  export import HetznerProjectCreateParams = API.HetznerProjectCreateParams;

  export import HetznerClusters = API.HetznerClusters;
  export import HetznerCluster = API.HetznerCluster;
  export import HetznerClusterListResponse = API.HetznerClusterListResponse;
  export import HetznerClusterDeleteResponse = API.HetznerClusterDeleteResponse;
  export import HetznerClusterCreateParams = API.HetznerClusterCreateParams;

  export import Applications = API.Applications;
  export import Application = API.Application;
  export import ApplicationListResponse = API.ApplicationListResponse;
  export import ApplicationDeleteResponse = API.ApplicationDeleteResponse;
  export import ApplicationCreateParams = API.ApplicationCreateParams;

  export import Teams = API.Teams;
  export import TeamRetrieveResponse = API.TeamRetrieveResponse;
  export import TeamListResponse = API.TeamListResponse;
}

export default Metal;
