import program    from 'commander';
import prettyjson from 'prettyjson';
import client     from './client';


program
    .command('getProjectRepositoryBranches [id]')
    .description('List repository branches')
    .action((id) => {
        client.branches.getProjectRepositoryBranches(id)
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
    .description('Get single repository branch')
    .action((id, branch) => {
        client.branches.getProjectRepositoryBranch(id, branch)
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
    .description('Protect repository branch')
    .action((id, branch) => {
        client.branches.protectProjectRepositoryBranch(id, branch)
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
    .description('Unprotect repository branch')
    .action((id, branch) => {
        client.branches.unprotectProjectRepositoryBranch(id, branch)
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
    .command('addProjectRepositoryBranch [id]')
    .description('Create repository branch')
    .action((id) => {
        client.branches.addProjectRepositoryBranch(id)
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
    .command('deleteProjectRepositoryBranch [id] [branch]')
    .description('Delete repository branch')
    .action((id, branch) => {
        client.branches.deleteProjectRepositoryBranch(id, branch)
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