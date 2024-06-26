// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@onmetal/node/core';
import { APIResource } from '@onmetal/node/resource';
import * as WhoamiAPI from '@onmetal/node/resources/whoami';

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
    id: string;

    clerkId: string;

    createdAt: string;

    creatorId: string;

    name: string;

    updatedAt: string;
  }

  export interface User {
    id: string;

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
