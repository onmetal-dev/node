# Whoami

Types:

- <code><a href="./src/resources/whoami.ts">WhoAmI</a></code>

Methods:

- <code title="get /whoami">client.whoami.<a href="./src/resources/whoami.ts">retrieve</a>() -> WhoAmI</code>

# HetznerProjects

Types:

- <code><a href="./src/resources/hetzner-projects.ts">HetznerProject</a></code>
- <code><a href="./src/resources/hetzner-projects.ts">HetznerProjectListResponse</a></code>
- <code><a href="./src/resources/hetzner-projects.ts">HetznerProjectDeleteResponse</a></code>

Methods:

- <code title="put /hetzner/projects/{projectId}">client.hetznerProjects.<a href="./src/resources/hetzner-projects.ts">create</a>(projectId, { ...params }) -> HetznerProject</code>
- <code title="get /hetzner/projects/{projectId}">client.hetznerProjects.<a href="./src/resources/hetzner-projects.ts">retrieve</a>(projectId) -> HetznerProject</code>
- <code title="get /hetzner/projects">client.hetznerProjects.<a href="./src/resources/hetzner-projects.ts">list</a>() -> HetznerProjectListResponse</code>
- <code title="delete /hetzner/projects/{projectId}">client.hetznerProjects.<a href="./src/resources/hetzner-projects.ts">delete</a>(projectId) -> unknown</code>

# HetznerClusters

Types:

- <code><a href="./src/resources/hetzner-clusters.ts">HetznerCluster</a></code>
- <code><a href="./src/resources/hetzner-clusters.ts">HetznerClusterListResponse</a></code>
- <code><a href="./src/resources/hetzner-clusters.ts">HetznerClusterDeleteResponse</a></code>

Methods:

- <code title="put /hetzner/clusters/{clusterId}">client.hetznerClusters.<a href="./src/resources/hetzner-clusters.ts">create</a>(clusterId, { ...params }) -> HetznerCluster</code>
- <code title="get /hetzner/clusters/{clusterId}">client.hetznerClusters.<a href="./src/resources/hetzner-clusters.ts">retrieve</a>(clusterId) -> HetznerCluster</code>
- <code title="get /hetzner/clusters">client.hetznerClusters.<a href="./src/resources/hetzner-clusters.ts">list</a>() -> HetznerClusterListResponse</code>
- <code title="delete /hetzner/clusters/{clusterId}">client.hetznerClusters.<a href="./src/resources/hetzner-clusters.ts">delete</a>(clusterId) -> unknown</code>

# Applications

Types:

- <code><a href="./src/resources/applications.ts">Application</a></code>
- <code><a href="./src/resources/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/applications.ts">ApplicationDeleteResponse</a></code>

Methods:

- <code title="put /applications/{applicationId}">client.applications.<a href="./src/resources/applications.ts">create</a>(applicationId, { ...params }) -> Application</code>
- <code title="get /applications/{applicationId}">client.applications.<a href="./src/resources/applications.ts">retrieve</a>(applicationId) -> Application</code>
- <code title="get /applications">client.applications.<a href="./src/resources/applications.ts">list</a>() -> ApplicationListResponse</code>
- <code title="delete /applications/{applicationId}">client.applications.<a href="./src/resources/applications.ts">delete</a>(applicationId) -> unknown</code>
