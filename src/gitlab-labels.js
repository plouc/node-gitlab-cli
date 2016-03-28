import program    from 'commander';
import prettyjson from 'prettyjson';
import client     from './client';


program
    .command('getProjectLabels [id]')
    .description('List labels')
    .action((id) => {
        client.labels.getProjectLabels(id)
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
    .command('addProjectLabel [id]')
    .description('Create a new label')
    .action((id) => {
        client.labels.addProjectLabel(id)
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
    .command('deleteProjectLabels [id]')
    .description('Delete a label')
    .action((id) => {
        client.labels.deleteProjectLabels(id)
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
    .command('updateProjectLabels [id]')
    .description('Edit an existing label')
    .action((id) => {
        client.labels.updateProjectLabels(id)
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