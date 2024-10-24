// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TeamsAPI from './teams';

export class Teams extends APIResource {
  retrieve(teamId: string, options?: Core.RequestOptions): Core.APIPromise<Team> {
    return this._client.get(`/teams/${teamId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<TeamListResponse> {
    return this._client.get('/teams', options);
  }
}

export interface Team {
  id: string;

  clerkId: string;

  createdAt: string;

  creatorId: string;

  name: string;

  updatedAt: string;
}

export type TeamListResponse = Array<Team>;

export namespace Teams {
  export import Team = TeamsAPI.Team;
  export import TeamListResponse = TeamsAPI.TeamListResponse;
}
