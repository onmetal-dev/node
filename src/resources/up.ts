// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@onmetal/node/core';
import { APIResource } from '@onmetal/node/resource';
import * as UpAPI from '@onmetal/node/resources/up';
import { multipartFormRequestOptions } from '@onmetal/node/core';

export class Up extends APIResource {
  create(body: UpCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(
      '/up',
      multipartFormRequestOptions({
        body,
        ...options,
        headers: { Accept: 'text/plain', ...options?.headers },
      }),
    );
  }
}

export type UpCreateResponse = string;

export interface UpCreateParams {
  appName: string;

  archive: unknown;

  envName: string;

  teamId: string;
}

export namespace Up {
  export import UpCreateResponse = UpAPI.UpCreateResponse;
  export import UpCreateParams = UpAPI.UpCreateParams;
}
