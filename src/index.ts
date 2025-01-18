// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Application,
  ApplicationCreateParams,
  ApplicationDeleteResponse,
  ApplicationListResponse,
  Applications,
} from './resources/applications';
import {
  Environment,
  EnvironmentCreateParams,
  EnvironmentListParams,
  EnvironmentListResponse,
  Environments,
} from './resources/environments';
import {
  HetznerCluster,
  HetznerClusterCreateParams,
  HetznerClusterDeleteResponse,
  HetznerClusterListResponse,
  HetznerClusters,
} from './resources/hetzner-clusters';
import {
  HetznerProject,
  HetznerProjectCreateParams,
  HetznerProjectDeleteResponse,
  HetznerProjectListResponse,
  HetznerProjects,
} from './resources/hetzner-projects';
import { Team, TeamListResponse, Teams } from './resources/teams';
import { Up, UpCreateParams, UpCreateResponse } from './resources/up';
import { WhoAmI, Whoami } from './resources/whoami';

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
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Metal API.
 */
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
  environments: API.Environments = new API.Environments(this);
  teams: API.Teams = new API.Teams(this);
  up: API.Up = new API.Up(this);

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
  static DEFAULT_TIMEOUT = 60000; // 1 minute

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

Metal.Whoami = Whoami;
Metal.HetznerProjects = HetznerProjects;
Metal.HetznerClusters = HetznerClusters;
Metal.Applications = Applications;
Metal.Environments = Environments;
Metal.Teams = Teams;
Metal.Up = Up;
export declare namespace Metal {
  export type RequestOptions = Core.RequestOptions;

  export { Whoami as Whoami, type WhoAmI as WhoAmI };

  export {
    HetznerProjects as HetznerProjects,
    type HetznerProject as HetznerProject,
    type HetznerProjectListResponse as HetznerProjectListResponse,
    type HetznerProjectDeleteResponse as HetznerProjectDeleteResponse,
    type HetznerProjectCreateParams as HetznerProjectCreateParams,
  };

  export {
    HetznerClusters as HetznerClusters,
    type HetznerCluster as HetznerCluster,
    type HetznerClusterListResponse as HetznerClusterListResponse,
    type HetznerClusterDeleteResponse as HetznerClusterDeleteResponse,
    type HetznerClusterCreateParams as HetznerClusterCreateParams,
  };

  export {
    Applications as Applications,
    type Application as Application,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
  };

  export {
    Environments as Environments,
    type Environment as Environment,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentListParams as EnvironmentListParams,
  };

  export { Teams as Teams, type Team as Team, type TeamListResponse as TeamListResponse };

  export { Up as Up, type UpCreateResponse as UpCreateResponse, type UpCreateParams as UpCreateParams };
}

export { toFile, fileFromPath } from './uploads';
export {
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
} from './error';

export default Metal;
