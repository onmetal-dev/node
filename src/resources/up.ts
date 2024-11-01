// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Up extends APIResource {
  create(body: UpCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(
      '/up',
      Core.multipartFormRequestOptions({
        body,
        ...options,
        headers: { Accept: 'text/plain', ...options?.headers },
      }),
    );
  }
}

export type UpCreateResponse = string;

export interface UpCreateParams {
  appId: string;

  archive: Core.Uploadable;

  envId: string;

  teamId: string;
}

export declare namespace Up {
  export { type UpCreateResponse as UpCreateResponse, type UpCreateParams as UpCreateParams };
}
