import program from 'commander';


program
    .version('0.0.1')
    .command('builds', 'interact with gitlab builds')
    .command('keys', 'interact with gitlab keys')
    .command('labels', 'interact with gitlab labels')
    .command('merge_requests', 'interact with gitlab merge_requests')
    .command('projects', 'interact with gitlab projects')
;


program.parse(process.argv);