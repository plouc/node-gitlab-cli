import program    from 'commander';
import prettyjson from 'prettyjson';
import client     from './client';


program
    .command('getKey [id]')
    .description('Get SSH key with user by ID of an SSH key')
    .action((id) => {
        client.keys.getKey(id)
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