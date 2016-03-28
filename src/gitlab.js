import program from 'commander';


program
    .version('0.0.1')
    .command('builds', 'interact with gitlab builds')
    .command('labels', 'interact with gitlab labels')
    .command('projects', 'interact with gitlab projects')
;


program.parse(process.argv);