// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/metal/core';
import { APIResource } from '@stainless-temp/metal/resource';
import * as WhoamiAPI from '@stainless-temp/metal/resources/whoami';

export class Whoami extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<WhoAmI> {
    return this._client.get('/whoami', options);
  }
}

export interface WhoAmI {
  token: string;

  teams: Array<WhoAmI.Team>;

  user: WhoAmI.User;
}

export namespace WhoAmI {
  export interface Team {
    id: number;

    clerkId: string;

    createdAt: string;

    creatorId: number | null;

    name: string;

    updatedAt: string;
  }

  export interface User {
    id: number;

    clerkId: string;

    createdAt: string;

    email: string;

    emailVerified: boolean;

    firstName: string;

    githubId: string | null;

    lastName: string;

    updatedAt: string;
  }
}

export namespace Whoami {
  export import WhoAmI = WhoamiAPI.WhoAmI;
}
