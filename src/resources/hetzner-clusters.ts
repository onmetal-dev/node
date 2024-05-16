// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@onmetal/node/core';
import { APIResource } from '@onmetal/node/resource';
import * as HetznerClustersAPI from '@onmetal/node/resources/hetzner-clusters';

export class HetznerClusters extends APIResource {
  create(
    clusterId: string,
    body: HetznerClusterCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HetznerCluster> {
    return this._client.put(`/hetzner/clusters/${clusterId}`, { body, ...options });
  }

  retrieve(clusterId: string, options?: Core.RequestOptions): Core.APIPromise<HetznerCluster> {
    return this._client.get(`/hetzner/clusters/${clusterId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<HetznerClusterListResponse> {
    return this._client.get('/hetzner/clusters', options);
  }

  delete(clusterId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/hetzner/clusters/${clusterId}`, options);
  }
}

export interface HetznerCluster {
  id: string;

  clusterctlTemplate: string | null;

  clusterctlVersion: string | null;

  createdAt: string;

  creatorId: string;

  hetznerProjectId: string;

  k8sVersion: string;

  kubeconfig: string | null;

  location: 'fsn1' | 'nbg1' | 'hel1' | 'ash' | 'hil';

  name: string;

  networkZone: 'eu-central' | 'us-east' | 'us-west';

  nodeGroups: Array<HetznerCluster.NodeGroup>;

  status: 'creating' | 'initializing' | 'running' | 'updating' | 'destroying' | 'destroyed' | 'error';

  teamId: string;

  updatedAt: string;
}

export namespace HetznerCluster {
  export interface NodeGroup {
    id: string;

    clusterId: string;

    createdAt: string;

    instanceType: 'cax11' | 'cax21' | 'cax31' | 'cax41';

    maxNodes: number;

    minNodes: number;

    type: 'all';

    updatedAt: string;
  }
}

export type HetznerClusterListResponse = Array<HetznerCluster>;

export type HetznerClusterDeleteResponse = unknown;

export interface HetznerClusterCreateParams {
  location: 'fsn1' | 'nbg1' | 'hel1' | 'ash' | 'hil';

  nodeGroups: Array<HetznerClusterCreateParams.NodeGroup>;

  teamId: string;

  id?: string;
}

export namespace HetznerClusterCreateParams {
  export interface NodeGroup {
    instanceType: 'cax11' | 'cax21' | 'cax31' | 'cax41';

    maxNodes: number;

    minNodes: number;

    type: 'all';

    id?: string;
  }
}

export namespace HetznerClusters {
  export import HetznerCluster = HetznerClustersAPI.HetznerCluster;
  export import HetznerClusterListResponse = HetznerClustersAPI.HetznerClusterListResponse;
  export import HetznerClusterDeleteResponse = HetznerClustersAPI.HetznerClusterDeleteResponse;
  export import HetznerClusterCreateParams = HetznerClustersAPI.HetznerClusterCreateParams;
}
