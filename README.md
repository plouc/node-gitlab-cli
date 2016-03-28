# node-gitlab-cli

- [builds](https://github.com/plouc/node-gitlab-cli#builds)
- [labels](https://github.com/plouc/node-gitlab-cli#labels)
- [projects](https://github.com/plouc/node-gitlab-cli#projects)


## Available commands


### builds

List builds commands

```bash
gitlab builds -h
```

#### List project builds

```
gitlab builds getProjectBuilds
```

#### List commit builds

```
gitlab builds getProjectRepositoryCommitBuilds
```

#### Get a single build

```
gitlab builds getProjectBuild
```

#### Get build artifacts

```
gitlab builds getProjectBuildArtifacts
```

#### Cancel a build

```
gitlab builds cancelProjectBuild
```

#### Retry a build

```
gitlab builds retryProjectBuild
```

#### Erase a build

```
gitlab builds deleteProjectBuild
```

### labels

List labels commands

```bash
gitlab labels -h
```

#### List labels

```
gitlab labels getProjectLabels
```

#### Create a new label

```
gitlab labels addProjectLabel
```

#### Delete a label

```
gitlab labels deleteProjectLabels
```

#### Edit an existing label

```
gitlab labels updateProjectLabels
```

### projects

List projects commands

```bash
gitlab projects -h
```

#### List projects

```
gitlab projects getProjects
```

#### List owned projects

```
gitlab projects getOwnedProjects
```

#### List starred projects

```
gitlab projects getStarredProjects
```

#### List ALL projects

```
gitlab projects getAllProjects
```

#### Get single project

```
gitlab projects getProject
```

#### Get project events

```
gitlab projects getProjectEvents
```

#### Create project

```
gitlab projects addProject
```

#### Create project for user

```
gitlab projects addProjectsUser
```

#### Edit project

```
gitlab projects updateProject
```

#### Fork project

```
gitlab projects forkProject
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

