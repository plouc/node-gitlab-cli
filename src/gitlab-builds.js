import program    from 'commander';
import prettyjson from 'prettyjson';
import client     from './client';


program
    .command('getProjectBuilds [id]')
    .description('List project builds')
    .action((id) => {
        client.builds.getProjectBuilds(id)
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
    .command('getProjectRepositoryCommitBuilds [id] [sha]')
    .description('List commit builds')
    .action((id, sha) => {
        client.builds.getProjectRepositoryCommitBuilds(id, sha)
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
    .command('getProjectBuild [id] [build_id]')
    .description('Get a single build')
    .action((id, build_id) => {
        client.builds.getProjectBuild(id, build_id)
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
    .command('getProjectBuildArtifacts [id] [build_id]')
    .description('Get build artifacts')
    .action((id, build_id) => {
        client.builds.getProjectBuildArtifacts(id, build_id)
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
    .command('cancelProjectBuild [id] [build_id]')
    .description('Cancel a build')
    .action((id, build_id) => {
        client.builds.cancelProjectBuild(id, build_id)
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
    .command('retryProjectBuild [id] [build_id]')
    .description('Retry a build')
    .action((id, build_id) => {
        client.builds.retryProjectBuild(id, build_id)
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
    .command('deleteProjectBuild [id] [build_id]')
    .description('Erase a build')
    .action((id, build_id) => {
        client.builds.deleteProjectBuild(id, build_id)
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