# node-gitlab-cli

- [builds](https://github.com/plouc/node-gitlab-cli#builds)
- [labels](https://github.com/plouc/node-gitlab-cli#labels)
- [merge_requests](https://github.com/plouc/node-gitlab-cli#merge_requests)
- [projects](https://github.com/plouc/node-gitlab-cli#projects)


## Available commands


### builds

List builds commands

```bash
gitlab builds -h
```

#### List project builds

```bash
curl -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/builds&quot;
```

```bash
gitlab builds list
```

#### List commit builds

```bash
curl -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/repository/commits/0ff3ae198f8601a285adcf5c0fff204ee6fba5fd/builds&quot;
```

```bash
gitlab builds commit
```

#### Get a single build

```bash
curl -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/builds/8&quot;
```

```bash
gitlab builds get
```

#### Get build artifacts

```bash
curl -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/builds/8/artifacts&quot;
```

```bash
gitlab builds artifacts
```

#### Cancel a build

```bash
curl -X POST -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/builds/1/cancel&quot;
```

```bash
gitlab builds cancel
```

#### Retry a build

```bash
curl -X POST -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/builds/1/retry&quot;
```

```bash
gitlab builds retry
```

#### Erase a build

```bash
gitlab builds rm
```

### labels

List labels commands

```bash
gitlab labels -h
```

#### List labels

```bash
curl -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; https://gitlab.example.com/api/v3/projects/1/labels
```

```bash
gitlab labels list
```

#### Create a new label

```bash
curl --data &quot;name=feature&amp;color=#5843AD&quot; -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/labels&quot;
```

```bash
gitlab labels add
```

#### Delete a label

```bash
curl -X DELETE -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/labels?name=bug&quot;
```

```bash
gitlab labels rm
```

#### Edit an existing label

```bash
curl -X PUT --data &quot;name=documentation&amp;new_name=docs&amp;color=#8E44AD&quot; -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; &quot;https://gitlab.example.com/api/v3/projects/1/labels&quot;
```

```bash
gitlab labels update
```

### merge_requests

List merge_requests commands

```bash
gitlab merge_requests -h
```

#### List merge requests

```bash
gitlab merge_requests list
```

#### Get single MR

```bash
gitlab merge_requests get
```

#### Get single MR commits

```bash
gitlab merge_requests commits
```

#### Get single MR changes

```bash
gitlab merge_requests changes
```

#### Update MR

```bash
gitlab merge_requests update
```

#### Delete a merge request

```bash
curl -X DELETE -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; https://gitlab.example.com/api/v3/projects/4/merge_request/85
```

```bash
gitlab merge_requests rm
```

#### 

```bash
gitlab merge_requests accept
```

#### List issues that will close on merge

```bash
curl -H &quot;PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK&quot; https://gitlab.example.com/api/v3/projects/76/merge_requests/1/closes_issues
```

```bash
gitlab merge_requests closes
```

### projects

List projects commands

```bash
gitlab projects -h
```

#### List projects

```bash
gitlab projects list
```

#### List owned projects

```bash
gitlab projects owned
```

#### List starred projects

```bash
gitlab projects starred
```

#### List ALL projects

```bash
gitlab projects all
```

#### Get single project

```bash
gitlab projects get
```

#### Get project events

```bash
gitlab projects events
```

#### Create project

```bash
gitlab projects add
```

#### Create project for user

```bash
gitlab projects addProjectsUser
```

#### Edit project

```bash
gitlab projects update
```

#### Fork project

```bash
gitlab projects fork
```

#### Remove project

```bash
gitlab projects deleteProject
```

#### Upload a file

```bash
gitlab projects uploadFileToProject
```

#### List project team members

```bash
gitlab projects getProjectMembers
```

#### Get project team member

```bash
gitlab projects getProjectMember
```

#### Add project team member

```bash
gitlab projects addProjectMember
```

#### Edit project team member

```bash
gitlab projects updateProjectMember
```

#### Remove project team member

```bash
gitlab projects deleteProjectMember
```

#### Share project with group

```bash
gitlab projects shareProject
```

#### List project hooks

```bash
gitlab projects getProjectHooks
```

#### Get project hook

```bash
gitlab projects getProjectHook
```

#### Add project hook

```bash
gitlab projects addProjectHook
```

#### Edit project hook

```bash
gitlab projects updateProjectHook
```

#### Delete project hook

```bash
gitlab projects deleteProjectHook
```

#### List branches

```bash
gitlab projects getProjectRepositoryBranches
```

#### List single branch

```bash
gitlab projects getProjectRepositoryBranch
```

#### Protect single branch

```bash
gitlab projects protectProjectRepositoryBranch
```

#### Unprotect single branch

```bash
gitlab projects unprotectProjectRepositoryBranch
```

#### Create a forked from/to relation between existing projects.

```bash
gitlab projects addForkRelationship
```

#### Delete an existing forked from relationship

```bash
gitlab projects deleteForkRelationship
```

#### Search for projects by name

```bash
gitlab projects searchProjects
```

