// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@onmetal/node/core';
import { APIResource } from '@onmetal/node/resource';
import * as TeamsAPI from '@onmetal/node/resources/teams';

export class Teams extends APIResource {
  retrieve(teamId: string, options?: Core.RequestOptions): Core.APIPromise<TeamRetrieveResponse> {
    return this._client.get(`/teams/${teamId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<TeamListResponse> {
    return this._client.get('/teams', options);
  }
}

export interface TeamRetrieveResponse {
  id: string;

  clerkId: string;

  createdAt: string;

  creatorId: string;

  name: string;

  updatedAt: string;
}

export type TeamListResponse = Array<TeamListResponse.TeamListResponseItem>;

export namespace TeamListResponse {
  export interface TeamListResponseItem {
    id: string;

    clerkId: string;

    createdAt: string;

    creatorId: string;

    name: string;

    updatedAt: string;
  }
}

export namespace Teams {
  export import TeamRetrieveResponse = TeamsAPI.TeamRetrieveResponse;
  export import TeamListResponse = TeamsAPI.TeamListResponse;
}
