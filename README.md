# node-gitlab-client

## Available operations
- [branches](https://plouc.github.io/node-gitlab-client/gitlab-api.module_branches.html)

   - [List repository branches](https://plouc.github.io/node-gitlab-client/gitlab-api.module_branches.html#.getProjectRepositoryBranches) `getProjectRepositoryBranches()`
   - [Get single repository branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_branches.html#.getProjectRepositoryBranch) `getProjectRepositoryBranch()`
   - [Protect repository branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_branches.html#.protectProjectRepositoryBranch) `protectProjectRepositoryBranch()`
   - [Unprotect repository branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_branches.html#.unprotectProjectRepositoryBranch) `unprotectProjectRepositoryBranch()`
   - [Create repository branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_branches.html#.addProjectRepositoryBranch) `addProjectRepositoryBranch()`
   - [Delete repository branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_branches.html#.deleteProjectRepositoryBranch) `deleteProjectRepositoryBranch()`

- [build_triggers](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_triggers.html)

   - [List project triggers](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_triggers.html#.getProjectTriggers) `getProjectTriggers()`
   - [Get trigger details](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_triggers.html#.getProjectTrigger) `getProjectTrigger()`
   - [Create a project trigger](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_triggers.html#.addProjectTrigger) `addProjectTrigger()`
   - [Remove a project trigger](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_triggers.html#.deleteProjectTrigger) `deleteProjectTrigger()`

- [build_variables](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_variables.html)

   - [List project variables](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_variables.html#.getProjectVariables) `getProjectVariables()`
   - [Show variable details](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_variables.html#.getProjectVariable) `getProjectVariable()`
   - [Create variable](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_variables.html#.addProjectVariable) `addProjectVariable()`
   - [Update variable](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_variables.html#.updateProjectVariable) `updateProjectVariable()`
   - [Remove variable](https://plouc.github.io/node-gitlab-client/gitlab-api.module_build_variables.html#.deleteProjectVariable) `deleteProjectVariable()`

- [builds](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html)

   - [List project builds](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html#.getProjectBuilds) `getProjectBuilds()`
   - [List commit builds](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html#.getProjectRepositoryCommitBuilds) `getProjectRepositoryCommitBuilds()`
   - [Get a single build](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html#.getProjectBuild) `getProjectBuild()`
   - [Get build artifacts](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html#.getProjectBuildArtifacts) `getProjectBuildArtifacts()`
   - [Cancel a build](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html#.cancelProjectBuild) `cancelProjectBuild()`
   - [Retry a build](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html#.retryProjectBuild) `retryProjectBuild()`
   - [Erase a build](https://plouc.github.io/node-gitlab-client/gitlab-api.module_builds.html#.deleteProjectBuild) `deleteProjectBuild()`

- [commits](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html)

   - [List repository commits](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html#.getProjectRepositoryCommits) `getProjectRepositoryCommits()`
   - [Get a single commit](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html#.getProjectRepositoryCommit) `getProjectRepositoryCommit()`
   - [Get the diff of a commit](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html#.getProjectRepositoryCommitDiff) `getProjectRepositoryCommitDiff()`
   - [Get the comments of a commit](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html#.getProjectRepositoryCommitComments) `getProjectRepositoryCommitComments()`
   - [](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html#.commentProjectRepositoryCommit) `commentProjectRepositoryCommit()`
   - [Get the status of a commit](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html#.getProjectRepositoryCommitStatuses) `getProjectRepositoryCommitStatuses()`
   - [Post the build status to a commit](https://plouc.github.io/node-gitlab-client/gitlab-api.module_commits.html#.addProjectStatuse) `addProjectStatuse()`

- [deploy_keys](https://plouc.github.io/node-gitlab-client/gitlab-api.module_deploy_keys.html)

   - [List deploy keys](https://plouc.github.io/node-gitlab-client/gitlab-api.module_deploy_keys.html#.getProjectKeys) `getProjectKeys()`
   - [Single deploy key](https://plouc.github.io/node-gitlab-client/gitlab-api.module_deploy_keys.html#.getProjectKey) `getProjectKey()`
   - [Add deploy key](https://plouc.github.io/node-gitlab-client/gitlab-api.module_deploy_keys.html#.addProjectKey) `addProjectKey()`
   - [Delete deploy key](https://plouc.github.io/node-gitlab-client/gitlab-api.module_deploy_keys.html#.deleteProjectKey) `deleteProjectKey()`

- [groups](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html)

   - [List groups](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.getGroups) `getGroups()`
   - [List a group&#39;s projects](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.getGroupProjects) `getGroupProjects()`
   - [Details of a group](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.getGroup) `getGroup()`
   - [New group](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.addGroup) `addGroup()`
   - [Remove group](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.deleteGroup) `deleteGroup()`
   - [Search for group](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.getGroups) `getGroups()`
   - [List group members](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.getGroupMembers) `getGroupMembers()`
   - [Add group member](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.addGroupMember) `addGroupMember()`
   - [Edit group team member](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.updateGroupMember) `updateGroupMember()`
   - [Remove user team member](https://plouc.github.io/node-gitlab-client/gitlab-api.module_groups.html#.deleteGroupMember) `deleteGroupMember()`

- [issues](https://plouc.github.io/node-gitlab-client/gitlab-api.module_issues.html)

   - [List issues](https://plouc.github.io/node-gitlab-client/gitlab-api.module_issues.html#.getIssues) `getIssues()`
   - [List project issues](https://plouc.github.io/node-gitlab-client/gitlab-api.module_issues.html#.getProjectIssues) `getProjectIssues()`
   - [Single issue](https://plouc.github.io/node-gitlab-client/gitlab-api.module_issues.html#.getProjectIssue) `getProjectIssue()`
   - [New issue](https://plouc.github.io/node-gitlab-client/gitlab-api.module_issues.html#.addProjectIssue) `addProjectIssue()`
   - [Edit issue](https://plouc.github.io/node-gitlab-client/gitlab-api.module_issues.html#.updateProjectIssue) `updateProjectIssue()`
   - [Delete an issue](https://plouc.github.io/node-gitlab-client/gitlab-api.module_issues.html#.deleteProjectIssue) `deleteProjectIssue()`

- [keys](https://plouc.github.io/node-gitlab-client/gitlab-api.module_keys.html)

   - [Get SSH key with user by ID of an SSH key](https://plouc.github.io/node-gitlab-client/gitlab-api.module_keys.html#.getKey) `getKey()`

- [labels](https://plouc.github.io/node-gitlab-client/gitlab-api.module_labels.html)

   - [List labels](https://plouc.github.io/node-gitlab-client/gitlab-api.module_labels.html#.getProjectLabels) `getProjectLabels()`
   - [Create a new label](https://plouc.github.io/node-gitlab-client/gitlab-api.module_labels.html#.addProjectLabel) `addProjectLabel()`
   - [Delete a label](https://plouc.github.io/node-gitlab-client/gitlab-api.module_labels.html#.deleteProjectLabels) `deleteProjectLabels()`
   - [Edit an existing label](https://plouc.github.io/node-gitlab-client/gitlab-api.module_labels.html#.updateProjectLabels) `updateProjectLabels()`

- [merge_requests](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html)

   - [List merge requests](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.getProjectMerge_requests) `getProjectMerge_requests()`
   - [Get single MR](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.getProjectMerge_request) `getProjectMerge_request()`
   - [Get single MR commits](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.getProjectMerge_requestCommits) `getProjectMerge_requestCommits()`
   - [Get single MR changes](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.getProjectMerge_requestChanges) `getProjectMerge_requestChanges()`
   - [Update MR](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.updateProjectMerge_request) `updateProjectMerge_request()`
   - [Delete a merge request](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.deleteProjectMerge_request) `deleteProjectMerge_request()`
   - [](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.acceptProjectMergeRequest) `acceptProjectMergeRequest()`
   - [List issues that will close on merge](https://plouc.github.io/node-gitlab-client/gitlab-api.module_merge_requests.html#.getProjectMerge_requestCloses_issues) `getProjectMerge_requestCloses_issues()`

- [milestones](https://plouc.github.io/node-gitlab-client/gitlab-api.module_milestones.html)

   - [List project milestones](https://plouc.github.io/node-gitlab-client/gitlab-api.module_milestones.html#.getProjectMilestones) `getProjectMilestones()`
   - [Get single milestone](https://plouc.github.io/node-gitlab-client/gitlab-api.module_milestones.html#.getProjectMilestone) `getProjectMilestone()`
   - [Create new milestone](https://plouc.github.io/node-gitlab-client/gitlab-api.module_milestones.html#.addProjectMilestone) `addProjectMilestone()`
   - [Edit milestone](https://plouc.github.io/node-gitlab-client/gitlab-api.module_milestones.html#.updateProjectMilestone) `updateProjectMilestone()`
   - [Get all issues assigned to a single milestone](https://plouc.github.io/node-gitlab-client/gitlab-api.module_milestones.html#.getProjectMilestoneIssues) `getProjectMilestoneIssues()`

- [namespaces](https://plouc.github.io/node-gitlab-client/gitlab-api.module_namespaces.html)

   - [List namespaces](https://plouc.github.io/node-gitlab-client/gitlab-api.module_namespaces.html#.getNamespaces) `getNamespaces()`
   - [Search for namespace](https://plouc.github.io/node-gitlab-client/gitlab-api.module_namespaces.html#.getNamespaces) `getNamespaces()`

- [notes](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html)

   - [List project issue notes](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.getProjectIssueNotes) `getProjectIssueNotes()`
   - [Get single issue note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.getProjectIssueNote) `getProjectIssueNote()`
   - [Create new issue note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.addProjectIssueNote) `addProjectIssueNote()`
   - [Modify existing issue note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.updateProjectIssueNote) `updateProjectIssueNote()`
   - [List all snippet notes](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.getProjectSnippetNotes) `getProjectSnippetNotes()`
   - [Get single snippet note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.getProjectSnippetNote) `getProjectSnippetNote()`
   - [Create new snippet note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.addProjectSnippetNote) `addProjectSnippetNote()`
   - [Modify existing snippet note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.updateProjectSnippetNote) `updateProjectSnippetNote()`
   - [List all merge request notes](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.getProjectMerge_requestNotes) `getProjectMerge_requestNotes()`
   - [Get single merge request note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.getProjectMerge_requestNote) `getProjectMerge_requestNote()`
   - [Create new merge request note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.addProjectMerge_requestNote) `addProjectMerge_requestNote()`
   - [Modify existing merge request note](https://plouc.github.io/node-gitlab-client/gitlab-api.module_notes.html#.updateProjectMerge_requestNote) `updateProjectMerge_requestNote()`

- [project_snippets](https://plouc.github.io/node-gitlab-client/gitlab-api.module_project_snippets.html)

   - [List snippets](https://plouc.github.io/node-gitlab-client/gitlab-api.module_project_snippets.html#.getProjectSnippets) `getProjectSnippets()`
   - [Single snippet](https://plouc.github.io/node-gitlab-client/gitlab-api.module_project_snippets.html#.getProjectSnippet) `getProjectSnippet()`
   - [Create new snippet](https://plouc.github.io/node-gitlab-client/gitlab-api.module_project_snippets.html#.addProjectSnippet) `addProjectSnippet()`
   - [Update snippet](https://plouc.github.io/node-gitlab-client/gitlab-api.module_project_snippets.html#.updateProjectSnippet) `updateProjectSnippet()`
   - [Delete snippet](https://plouc.github.io/node-gitlab-client/gitlab-api.module_project_snippets.html#.deleteProjectSnippet) `deleteProjectSnippet()`
   - [Snippet content](https://plouc.github.io/node-gitlab-client/gitlab-api.module_project_snippets.html#.getRawProjectSnippet) `getRawProjectSnippet()`

- [projects](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html)

   - [List projects](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjects) `getProjects()`
   - [List owned projects](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getOwnedProjects) `getOwnedProjects()`
   - [List starred projects](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getStarredProjects) `getStarredProjects()`
   - [List ALL projects](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getAllProjects) `getAllProjects()`
   - [Get single project](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProject) `getProject()`
   - [Get project events](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjectEvents) `getProjectEvents()`
   - [Create project](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.addProject) `addProject()`
   - [Create project for user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.addProjectsUser) `addProjectsUser()`
   - [Edit project](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.updateProject) `updateProject()`
   - [Fork project](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.forkProject) `forkProject()`
   - [Remove project](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.deleteProject) `deleteProject()`
   - [Upload a file](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.uploadFileToProject) `uploadFileToProject()`
   - [List project team members](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjectMembers) `getProjectMembers()`
   - [Get project team member](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjectMember) `getProjectMember()`
   - [Add project team member](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.addProjectMember) `addProjectMember()`
   - [Edit project team member](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.updateProjectMember) `updateProjectMember()`
   - [Remove project team member](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.deleteProjectMember) `deleteProjectMember()`
   - [Share project with group](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.shareProject) `shareProject()`
   - [List project hooks](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjectHooks) `getProjectHooks()`
   - [Get project hook](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjectHook) `getProjectHook()`
   - [Add project hook](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.addProjectHook) `addProjectHook()`
   - [Edit project hook](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.updateProjectHook) `updateProjectHook()`
   - [Delete project hook](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.deleteProjectHook) `deleteProjectHook()`
   - [List branches](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjectRepositoryBranches) `getProjectRepositoryBranches()`
   - [List single branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.getProjectRepositoryBranch) `getProjectRepositoryBranch()`
   - [Protect single branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.protectProjectRepositoryBranch) `protectProjectRepositoryBranch()`
   - [Unprotect single branch](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.unprotectProjectRepositoryBranch) `unprotectProjectRepositoryBranch()`
   - [Create a forked from/to relation between existing projects.](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.addForkRelationship) `addForkRelationship()`
   - [Delete an existing forked from relationship](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.deleteForkRelationship) `deleteForkRelationship()`
   - [Search for projects by name](https://plouc.github.io/node-gitlab-client/gitlab-api.module_projects.html#.searchProjects) `searchProjects()`

- [repositories](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html)

   - [List repository tree](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html#.getProjectRepositoryTree) `getProjectRepositoryTree()`
   - [Raw file content](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html#.getProjectRepositoryBlob) `getProjectRepositoryBlob()`
   - [Raw blob content](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html#.getProjectRepositoryRaw_blob) `getProjectRepositoryRaw_blob()`
   - [Get file archive](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html#.getProjectRepositoryArchive) `getProjectRepositoryArchive()`
   - [Compare branches, tags or commits](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html#.getProjectRepositoryCompare) `getProjectRepositoryCompare()`
   - [](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html#.getProjectRepositoryCompare) `getProjectRepositoryCompare()`
   - [Contributors](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repositories.html#.getProjectRepositoryContributors) `getProjectRepositoryContributors()`

- [repository_files](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repository_files.html)

   - [Get file from repository](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repository_files.html#.getProjectRepositoryFiles) `getProjectRepositoryFiles()`
   - [Create new file in repository](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repository_files.html#.addProjectRepositoryFile) `addProjectRepositoryFile()`
   - [Update existing file in repository](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repository_files.html#.updateProjectRepositoryFiles) `updateProjectRepositoryFiles()`
   - [Delete existing file in repository](https://plouc.github.io/node-gitlab-client/gitlab-api.module_repository_files.html#.deleteProjectRepositoryFiles) `deleteProjectRepositoryFiles()`

- [runners](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html)

   - [List owned runners](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.getRunners) `getRunners()`
   - [List all runners](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.getAllRunners) `getAllRunners()`
   - [Get runner&#39;s details](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.getRunner) `getRunner()`
   - [Update runner&#39;s details](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.updateRunner) `updateRunner()`
   - [Remove a runner](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.deleteRunner) `deleteRunner()`
   - [List project&#39;s runners](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.getProjectRunners) `getProjectRunners()`
   - [Enable a runner in project](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.addProjectRunner) `addProjectRunner()`
   - [Disable a runner from project](https://plouc.github.io/node-gitlab-client/gitlab-api.module_runners.html#.deleteProjectRunner) `deleteProjectRunner()`

- [services](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html)

   - [Create/Edit Asana service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateAsanaProjectService) `updateAsanaProjectService()`
   - [Delete Asana service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteAsanaProjectService) `deleteAsanaProjectService()`
   - [Get Asana service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getAsanaProjectService) `getAsanaProjectService()`
   - [Create/Edit Assembla service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateAssemblaProjectService) `updateAssemblaProjectService()`
   - [Delete Assembla service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteAssemblaProjectService) `deleteAssemblaProjectService()`
   - [Get Assembla service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getAssemblaProjectService) `getAssemblaProjectService()`
   - [Create/Edit Atlassian Bamboo CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateBambooProjectService) `updateBambooProjectService()`
   - [Delete Atlassian Bamboo CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteBambooProjectService) `deleteBambooProjectService()`
   - [Get Atlassian Bamboo CI service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getBambooProjectService) `getBambooProjectService()`
   - [Create/Edit Buildkite service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateBuildkiteProjectService) `updateBuildkiteProjectService()`
   - [Delete Buildkite service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteBuildkiteProjectService) `deleteBuildkiteProjectService()`
   - [Get Buildkite service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getBuildkiteProjectService) `getBuildkiteProjectService()`
   - [Create/Edit Campfire service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateCampfireProjectService) `updateCampfireProjectService()`
   - [Delete Campfire service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteCampfireProjectService) `deleteCampfireProjectService()`
   - [Get Campfire service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getCampfireProjectService) `getCampfireProjectService()`
   - [Create/Edit Custom Issue Tracker service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateCustom-issue-trackerProjectService) `updateCustom-issue-trackerProjectService()`
   - [Delete Custom Issue Tracker service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteCustom-issue-trackerProjectService) `deleteCustom-issue-trackerProjectService()`
   - [Get Custom Issue Tracker service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getCustom-issue-trackerProjectService) `getCustom-issue-trackerProjectService()`
   - [Create/Edit Drone CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateDrone-ciProjectService) `updateDrone-ciProjectService()`
   - [Delete Drone CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteDrone-ciProjectService) `deleteDrone-ciProjectService()`
   - [Get Drone CI service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getDrone-ciProjectService) `getDrone-ciProjectService()`
   - [Create/Edit Emails on push service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateEmails-on-pushProjectService) `updateEmails-on-pushProjectService()`
   - [Delete Emails on push service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteEmails-on-pushProjectService) `deleteEmails-on-pushProjectService()`
   - [Get Emails on push service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getEmails-on-pushProjectService) `getEmails-on-pushProjectService()`
   - [Create/Edit External Wiki service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateExternal-wikiProjectService) `updateExternal-wikiProjectService()`
   - [Delete External Wiki service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteExternal-wikiProjectService) `deleteExternal-wikiProjectService()`
   - [Get External Wiki service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getExternal-wikiProjectService) `getExternal-wikiProjectService()`
   - [Create/Edit Flowdock service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateFlowdockProjectService) `updateFlowdockProjectService()`
   - [Delete Flowdock service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteFlowdockProjectService) `deleteFlowdockProjectService()`
   - [Get Flowdock service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getFlowdockProjectService) `getFlowdockProjectService()`
   - [Create/Edit Gemnasium service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateGemnasiumProjectService) `updateGemnasiumProjectService()`
   - [Delete Gemnasium service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteGemnasiumProjectService) `deleteGemnasiumProjectService()`
   - [Get Gemnasium service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getGemnasiumProjectService) `getGemnasiumProjectService()`
   - [Create/Edit GitLab CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateGitlab-ciProjectService) `updateGitlab-ciProjectService()`
   - [Delete GitLab CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteGitlab-ciProjectService) `deleteGitlab-ciProjectService()`
   - [Get GitLab CI service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getGitlab-ciProjectService) `getGitlab-ciProjectService()`
   - [Create/Edit HipChat service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateHipchatProjectService) `updateHipchatProjectService()`
   - [Delete HipChat service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteHipchatProjectService) `deleteHipchatProjectService()`
   - [Get HipChat service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getHipchatProjectService) `getHipchatProjectService()`
   - [Create/Edit Irker (IRC gateway) service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateIrkerProjectService) `updateIrkerProjectService()`
   - [Delete Irker (IRC gateway) service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteIrkerProjectService) `deleteIrkerProjectService()`
   - [Get Irker (IRC gateway) service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getIrkerProjectService) `getIrkerProjectService()`
   - [Create/Edit JIRA service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateJiraProjectService) `updateJiraProjectService()`
   - [Delete JIRA service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteJiraProjectService) `deleteJiraProjectService()`
   - [Get JIRA service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getJiraProjectService) `getJiraProjectService()`
   - [Create/Edit PivotalTracker service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updatePivotaltrackerProjectService) `updatePivotaltrackerProjectService()`
   - [Delete PivotalTracker service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deletePivotaltrackerProjectService) `deletePivotaltrackerProjectService()`
   - [Get PivotalTracker service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getPivotaltrackerProjectService) `getPivotaltrackerProjectService()`
   - [Create/Edit Pushover service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updatePushoverProjectService) `updatePushoverProjectService()`
   - [Delete Pushover service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deletePushoverProjectService) `deletePushoverProjectService()`
   - [Get Pushover service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getPushoverProjectService) `getPushoverProjectService()`
   - [Create/Edit Redmine service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateRedmineProjectService) `updateRedmineProjectService()`
   - [Delete Redmine service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteRedmineProjectService) `deleteRedmineProjectService()`
   - [Get Redmine service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getRedmineProjectService) `getRedmineProjectService()`
   - [Create/Edit Slack service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateSlackProjectService) `updateSlackProjectService()`
   - [Delete Slack service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteSlackProjectService) `deleteSlackProjectService()`
   - [Get Slack service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getSlackProjectService) `getSlackProjectService()`
   - [Create/Edit JetBrains TeamCity CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.updateTeamcityProjectService) `updateTeamcityProjectService()`
   - [Delete JetBrains TeamCity CI service](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.deleteTeamcityProjectService) `deleteTeamcityProjectService()`
   - [Get JetBrains TeamCity CI service settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_services.html#.getTeamcityProjectService) `getTeamcityProjectService()`

- [session](https://plouc.github.io/node-gitlab-client/gitlab-api.module_session.html)

   - [Session](https://plouc.github.io/node-gitlab-client/gitlab-api.module_session.html#.addSession) `addSession()`

- [settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_settings.html)

   - [Get current application settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_settings.html#.getApplicationSettings) `getApplicationSettings()`
   - [Change application settings](https://plouc.github.io/node-gitlab-client/gitlab-api.module_settings.html#.updateApplicationSettings) `updateApplicationSettings()`

- [system_hooks](https://plouc.github.io/node-gitlab-client/gitlab-api.module_system_hooks.html)

   - [List system hooks](https://plouc.github.io/node-gitlab-client/gitlab-api.module_system_hooks.html#.getHooks) `getHooks()`
   - [Add new system hook](https://plouc.github.io/node-gitlab-client/gitlab-api.module_system_hooks.html#.addHook) `addHook()`
   - [Test system hook](https://plouc.github.io/node-gitlab-client/gitlab-api.module_system_hooks.html#.getHook) `getHook()`
   - [](https://plouc.github.io/node-gitlab-client/gitlab-api.module_system_hooks.html#.deleteHook) `deleteHook()`

- [tags](https://plouc.github.io/node-gitlab-client/gitlab-api.module_tags.html)

   - [List project repository tags](https://plouc.github.io/node-gitlab-client/gitlab-api.module_tags.html#.getProjectRepositoryTags) `getProjectRepositoryTags()`
   - [Create a new tag](https://plouc.github.io/node-gitlab-client/gitlab-api.module_tags.html#.addProjectRepositoryTag) `addProjectRepositoryTag()`
   - [Delete a tag](https://plouc.github.io/node-gitlab-client/gitlab-api.module_tags.html#.deleteProjectRepositoryTag) `deleteProjectRepositoryTag()`
   - [Create a new release](https://plouc.github.io/node-gitlab-client/gitlab-api.module_tags.html#.addProjectRepositoryReleaseTag) `addProjectRepositoryReleaseTag()`
   - [Update a release](https://plouc.github.io/node-gitlab-client/gitlab-api.module_tags.html#.updateProjectRepositoryTagRelease) `updateProjectRepositoryTagRelease()`

- [users](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html)

   - [For normal users](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUsers) `getUsers()`
   - [For admins](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUsers) `getUsers()`
   - [](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUsers) `getUsers()`
   - [](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUsers) `getUsers()`
   - [For user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUser) `getUser()`
   - [For admin](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUser) `getUser()`
   - [User creation](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.addUser) `addUser()`
   - [User modification](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.updateUser) `updateUser()`
   - [User deletion](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.deleteUser) `deleteUser()`
   - [Current user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUser) `getUser()`
   - [List SSH keys](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUserKeys) `getUserKeys()`
   - [List SSH keys for user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUserKeys) `getUserKeys()`
   - [Single SSH key](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUserKey) `getUserKey()`
   - [Add SSH key](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.addUserKey) `addUserKey()`
   - [Add SSH key for user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.addUserKey) `addUserKey()`
   - [Delete SSH key for current user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.deleteUserKey) `deleteUserKey()`
   - [Delete SSH key for given user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.deleteUserKey) `deleteUserKey()`
   - [List emails](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUserEmails) `getUserEmails()`
   - [List emails for user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUserEmails) `getUserEmails()`
   - [Single email](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.getUserEmail) `getUserEmail()`
   - [Add email](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.addUserEmail) `addUserEmail()`
   - [Add email for user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.addUserEmail) `addUserEmail()`
   - [Delete email for current user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.deleteUserEmail) `deleteUserEmail()`
   - [Delete email for given user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.deleteUserEmail) `deleteUserEmail()`
   - [Block user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.blockUser) `blockUser()`
   - [Unblock user](https://plouc.github.io/node-gitlab-client/gitlab-api.module_users.html#.unblockUser) `unblockUser()`


## Usage

### es6

```javascript
import gitlabApi from 'gitlab-client';

// init api client
const gitlab = gitlabApi({
    apiBaseUrl: 'https://gitlab.example.com/api/v3',
    token:      'my_secret_token'
});

// fetch project 123 labels
gitlab.labels.getProjectLabels(123)
    .then(function (res) {
        console.log(res.body);
    })
    .catch(console.error)
;
```