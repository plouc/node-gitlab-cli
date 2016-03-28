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

```
gitlab builds list
```

#### List commit builds

```
gitlab builds commit
```

#### Get a single build

```
gitlab builds get
```

#### Get build artifacts

```
gitlab builds artifacts
```

#### Cancel a build

```
gitlab builds cancel
```

#### Retry a build

```
gitlab builds retry
```

#### Erase a build

```
gitlab builds rm
```

### labels

List labels commands

```bash
gitlab labels -h
```

#### List labels

```
gitlab labels list
```

#### Create a new label

```
gitlab labels add
```

#### Delete a label

```
gitlab labels rm
```

#### Edit an existing label

```
gitlab labels update
```

### merge_requests

List merge_requests commands

```bash
gitlab merge_requests -h
```

#### List merge requests

```
gitlab merge_requests list
```

#### Get single MR

```
gitlab merge_requests get
```

#### Get single MR commits

```
gitlab merge_requests commits
```

#### Get single MR changes

```
gitlab merge_requests changes
```

#### Update MR

```
gitlab merge_requests update
```

#### Delete a merge request

```
gitlab merge_requests rm
```

#### 

```
gitlab merge_requests accept
```

#### List issues that will close on merge

```
gitlab merge_requests closes
```

### projects

List projects commands

```bash
gitlab projects -h
```

#### List projects

```
gitlab projects list
```

#### List owned projects

```
gitlab projects owned
```

#### List starred projects

```
gitlab projects starred
```

#### List ALL projects

```
gitlab projects all
```

#### Get single project

```
gitlab projects get
```

#### Get project events

```
gitlab projects events
```

#### Create project

```
gitlab projects add
```

#### Create project for user

```
gitlab projects addProjectsUser
```

#### Edit project

```
gitlab projects update
```

#### Fork project

```
gitlab projects fork
```

#### Remove project

```
gitlab projects deleteProject
```

#### Upload a file

```
gitlab projects uploadFileToProject
```

#### List project team members

```
gitlab projects getProjectMembers
```

#### Get project team member

```
gitlab projects getProjectMember
```

#### Add project team member

```
gitlab projects addProjectMember
```

#### Edit project team member

```
gitlab projects updateProjectMember
```

#### Remove project team member

```
gitlab projects deleteProjectMember
```

#### Share project with group

```
gitlab projects shareProject
```

#### List project hooks

```
gitlab projects getProjectHooks
```

#### Get project hook

```
gitlab projects getProjectHook
```

#### Add project hook

```
gitlab projects addProjectHook
```

#### Edit project hook

```
gitlab projects updateProjectHook
```

#### Delete project hook

```
gitlab projects deleteProjectHook
```

#### List branches

```
gitlab projects getProjectRepositoryBranches
```

#### List single branch

```
gitlab projects getProjectRepositoryBranch
```

#### Protect single branch

```
gitlab projects protectProjectRepositoryBranch
```

#### Unprotect single branch

```
gitlab projects unprotectProjectRepositoryBranch
```

#### Create a forked from/to relation between existing projects.

```
gitlab projects addForkRelationship
```

#### Delete an existing forked from relationship

```
gitlab projects deleteForkRelationship
```

#### Search for projects by name

```
gitlab projects searchProjects
```

