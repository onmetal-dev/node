// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as EnvironmentsAPI from './environments';

export class Environments extends APIResource {
  create(
    environmentId: string,
    body: EnvironmentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Environment> {
    return this._client.put(`/environments/${environmentId}`, { body, ...options });
  }

  retrieve(environmentId: string, options?: Core.RequestOptions): Core.APIPromise<Environment> {
    return this._client.get(`/environments/${environmentId}`, options);
  }

  list(
    query?: EnvironmentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnvironmentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EnvironmentListResponse>;
  list(
    query: EnvironmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnvironmentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/environments', { query, ...options });
  }
}

export interface Environment {
  id: string;

  createdAt: string;

  name: string;

  teamId: string;

  updatedAt: string;
}

export type EnvironmentListResponse = Array<Environment>;

export interface EnvironmentCreateParams {
  name: string;

  teamId: string;

  id?: string;
}

export interface EnvironmentListParams {
  /**
   * The ID of the team to get the environments for
   */
  teamId?: string | null;
}

export namespace Environments {
  export import Environment = EnvironmentsAPI.Environment;
  export import EnvironmentListResponse = EnvironmentsAPI.EnvironmentListResponse;
  export import EnvironmentCreateParams = EnvironmentsAPI.EnvironmentCreateParams;
  export import EnvironmentListParams = EnvironmentsAPI.EnvironmentListParams;
}
