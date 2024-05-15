// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@onmetal/node/core';
import { APIResource } from '@onmetal/node/resource';
import * as HetznerProjectsAPI from '@onmetal/node/resources/hetzner-projects';

export class HetznerProjects extends APIResource {
  create(
    projectId: string,
    body: HetznerProjectCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HetznerProject> {
    return this._client.put(`/hetzner/projects/${projectId}`, { body, ...options });
  }

  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<HetznerProject> {
    return this._client.get(`/hetzner/projects/${projectId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<HetznerProjectListResponse> {
    return this._client.get('/hetzner/projects', options);
  }

  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/hetzner/projects/${projectId}`, options);
  }
}

export interface HetznerProject {
  id: string;

  createdAt: string;

  creatorId: string;

  hetznerApiToken: string;

  hetznerName: string;

  hetznerWebservicePassword: string | null;

  hetznerWebserviceUsername: string | null;

  privateSshKeyData: string | null;

  publicSshKeyData: string | null;

  sshKeyName: string | null;

  teamId: string;

  updatedAt: string;
}

export type HetznerProjectListResponse = Array<HetznerProject>;

export type HetznerProjectDeleteResponse = unknown;

export interface HetznerProjectCreateParams {
  creatorId: string;

  hetznerApiToken: string;

  hetznerName: string;

  teamId: string;

  id?: string;

  hetznerWebservicePassword?: string | null;

  hetznerWebserviceUsername?: string | null;

  privateSshKeyData?: string | null;

  publicSshKeyData?: string | null;

  sshKeyName?: string | null;
}

export namespace HetznerProjects {
  export import HetznerProject = HetznerProjectsAPI.HetznerProject;
  export import HetznerProjectListResponse = HetznerProjectsAPI.HetznerProjectListResponse;
  export import HetznerProjectDeleteResponse = HetznerProjectsAPI.HetznerProjectDeleteResponse;
  export import HetznerProjectCreateParams = HetznerProjectsAPI.HetznerProjectCreateParams;
}
