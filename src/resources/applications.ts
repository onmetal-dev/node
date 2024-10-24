// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ApplicationsAPI from './applications';

export class Applications extends APIResource {
  create(
    applicationId: string,
    body: ApplicationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Application> {
    return this._client.put(`/applications/${applicationId}`, { body, ...options });
  }

  retrieve(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<Application> {
    return this._client.get(`/applications/${applicationId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ApplicationListResponse> {
    return this._client.get('/applications', options);
  }

  delete(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/applications/${applicationId}`, options);
  }
}

export interface Application {
  id: string;

  createdAt: string;

  creatorId: string;

  name: string;

  teamId: string;

  updatedAt: string;
}

export type ApplicationListResponse = Array<Application>;

export type ApplicationDeleteResponse = unknown;

export interface ApplicationCreateParams {
  creatorId: string;

  name: string;

  teamId: string;

  id?: string;
}

export namespace Applications {
  export import Application = ApplicationsAPI.Application;
  export import ApplicationListResponse = ApplicationsAPI.ApplicationListResponse;
  export import ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export import ApplicationCreateParams = ApplicationsAPI.ApplicationCreateParams;
}
