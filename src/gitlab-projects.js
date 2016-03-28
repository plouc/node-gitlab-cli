import program    from 'commander';
import prettyjson from 'prettyjson';
import client     from './client';


program
    .command('list')
    .description('List projects')
    .action(() => {
        client.projects.getProjects()
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('owned')
    .description('List owned projects')
    .action(() => {
        client.projects.getOwnedProjects()
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('starred')
    .description('List starred projects')
    .action(() => {
        client.projects.getStarredProjects()
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('all')
    .description('List ALL projects')
    .action(() => {
        client.projects.getAllProjects()
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('get [id]')
    .description('Get single project')
    .action((id) => {
        client.projects.getProject(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('events [id]')
    .description('Get project events')
    .action((id) => {
        client.projects.getProjectEvents(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('add')
    .description('Create project')
    .action(() => {
        client.projects.addProject()
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('addProjectsUser [user_id]')
    .description('Create project for user')
    .action((user_id) => {
        client.projects.addProjectsUser(user_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('update [id]')
    .description('Edit project')
    .action((id) => {
        client.projects.updateProject(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('fork [id]')
    .description('Fork project')
    .action((id) => {
        client.projects.forkProject(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('deleteProject [id]')
    .description('Remove project')
    .action((id) => {
        client.projects.deleteProject(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('uploadFileToProject [id]')
    .description('Upload a file')
    .action((id) => {
        client.projects.uploadFileToProject(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('getProjectMembers [id]')
    .description('List project team members')
    .action((id) => {
        client.projects.getProjectMembers(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('getProjectMember [id] [user_id]')
    .description('Get project team member')
    .action((id, user_id) => {
        client.projects.getProjectMember(id, user_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('addProjectMember [id]')
    .description('Add project team member')
    .action((id) => {
        client.projects.addProjectMember(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('updateProjectMember [id] [user_id]')
    .description('Edit project team member')
    .action((id, user_id) => {
        client.projects.updateProjectMember(id, user_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('deleteProjectMember [id] [user_id]')
    .description('Remove project team member')
    .action((id, user_id) => {
        client.projects.deleteProjectMember(id, user_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('shareProject [id]')
    .description('Share project with group')
    .action((id) => {
        client.projects.shareProject(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('getProjectHooks [id]')
    .description('List project hooks')
    .action((id) => {
        client.projects.getProjectHooks(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('getProjectHook [id] [hook_id]')
    .description('Get project hook')
    .action((id, hook_id) => {
        client.projects.getProjectHook(id, hook_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('addProjectHook [id]')
    .description('Add project hook')
    .action((id) => {
        client.projects.addProjectHook(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('updateProjectHook [id] [hook_id]')
    .description('Edit project hook')
    .action((id, hook_id) => {
        client.projects.updateProjectHook(id, hook_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('deleteProjectHook [id] [hook_id]')
    .description('Delete project hook')
    .action((id, hook_id) => {
        client.projects.deleteProjectHook(id, hook_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('getProjectRepositoryBranches [id]')
    .description('List branches')
    .action((id) => {
        client.projects.getProjectRepositoryBranches(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('getProjectRepositoryBranch [id] [branch]')
    .description('List single branch')
    .action((id, branch) => {
        client.projects.getProjectRepositoryBranch(id, branch)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('protectProjectRepositoryBranch [id] [branch]')
    .description('Protect single branch')
    .action((id, branch) => {
        client.projects.protectProjectRepositoryBranch(id, branch)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('unprotectProjectRepositoryBranch [id] [branch]')
    .description('Unprotect single branch')
    .action((id, branch) => {
        client.projects.unprotectProjectRepositoryBranch(id, branch)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('addForkRelationship [id] [forked_from_id]')
    .description('Create a forked from/to relation between existing projects.')
    .action((id, forked_from_id) => {
        client.projects.addForkRelationship(id, forked_from_id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('deleteForkRelationship [id]')
    .description('Delete an existing forked from relationship')
    .action((id) => {
        client.projects.deleteForkRelationship(id)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;

program
    .command('searchProjects [query]')
    .description('Search for projects by name')
    .action((query) => {
        client.projects.searchProjects(query)
            .then(res => {
                console.log(prettyjson.render(res.body, { indent: 4 }));
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            })
        ;
    })
;


program.parse(process.argv);