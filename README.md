# node-gitlab-cli

## scopes

- [builds](https://github.com/plouc/node-gitlab-cli#builds)
- [keys](https://github.com/plouc/node-gitlab-cli#keys)
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
gitlab builds list
```

##### **curl** alternative

```bash
curl -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/builds"
```

#### List commit builds

```bash
gitlab builds commit
```

##### **curl** alternative

```bash
curl -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/repository/commits/0ff3ae198f8601a285adcf5c0fff204ee6fba5fd/builds"
```

#### Get a single build

```bash
gitlab builds get
```

##### **curl** alternative

```bash
curl -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/builds/8"
```

#### Get build artifacts

```bash
gitlab builds artifacts
```

##### **curl** alternative

```bash
curl -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/builds/8/artifacts"
```

#### Cancel a build

```bash
gitlab builds cancel
```

##### **curl** alternative

```bash
curl -X POST -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/builds/1/cancel"
```

#### Retry a build

```bash
gitlab builds retry
```

##### **curl** alternative

```bash
curl -X POST -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/builds/1/retry"
```

#### Erase a build

```bash
gitlab builds rm
```

### keys

List keys commands

```bash
gitlab keys -h
```

#### Get SSH key with user by ID of an SSH key

```bash
gitlab keys getKey
```

### labels

List labels commands

```bash
gitlab labels -h
```

#### List labels

```bash
gitlab labels list
```

##### **curl** alternative

```bash
curl -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" https://gitlab.example.com/api/v3/projects/1/labels
```

#### Create a new label

```bash
gitlab labels add
```

##### **curl** alternative

```bash
curl --data "name=feature&color=#5843AD" -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/labels"
```

#### Delete a label

```bash
gitlab labels rm
```

##### **curl** alternative

```bash
curl -X DELETE -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/labels?name=bug"
```

#### Edit an existing label

```bash
gitlab labels update
```

##### **curl** alternative

```bash
curl -X PUT --data "name=documentation&new_name=docs&color=#8E44AD" -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/labels"
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
gitlab merge_requests rm
```

##### **curl** alternative

```bash
curl -X DELETE -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" https://gitlab.example.com/api/v3/projects/4/merge_request/85
```

#### 

```bash
gitlab merge_requests accept
```

#### List issues that will close on merge

```bash
gitlab merge_requests closes
```

##### **curl** alternative

```bash
curl -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" https://gitlab.example.com/api/v3/projects/76/merge_requests/1/closes_issues
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

