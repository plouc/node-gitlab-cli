import program    from 'commander';
import prettyjson from 'prettyjson';
import client     from './client';


program
    .command('list [id]')
    .description('List merge requests')
    .action((id) => {
        client.merge_requests.getProjectMerge_requests(id)
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
    .command('get [id] [merge_request_id]')
    .description('Get single MR')
    .action((id, merge_request_id) => {
        client.merge_requests.getProjectMerge_request(id, merge_request_id)
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
    .command('commits [id] [merge_request_id]')
    .description('Get single MR commits')
    .action((id, merge_request_id) => {
        client.merge_requests.getProjectMerge_requestCommits(id, merge_request_id)
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
    .command('changes [id] [merge_request_id]')
    .description('Get single MR changes')
    .action((id, merge_request_id) => {
        client.merge_requests.getProjectMerge_requestChanges(id, merge_request_id)
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
    .command('update [id] [merge_request_id]')
    .description('Update MR')
    .action((id, merge_request_id) => {
        client.merge_requests.updateProjectMerge_request(id, merge_request_id)
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
    .command('rm [id] [merge_request_id]')
    .description('Delete a merge request')
    .action((id, merge_request_id) => {
        client.merge_requests.deleteProjectMerge_request(id, merge_request_id)
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
    .command('accept [id] [merge_request_id]')
    .description('')
    .action((id, merge_request_id) => {
        client.merge_requests.acceptProjectMergeRequest(id, merge_request_id)
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
    .command('closes [id] [merge_request_id]')
    .description('List issues that will close on merge')
    .action((id, merge_request_id) => {
        client.merge_requests.getProjectMerge_requestCloses_issues(id, merge_request_id)
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