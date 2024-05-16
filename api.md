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
