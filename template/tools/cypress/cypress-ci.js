const cypress = require('cypress');

const cliEnvType = process.argv[2] || 'dev'; // local/dev/stage

const baseUrl = cliEnvType === 'local' ? 'http://localhost:3000' : `https://${cliEnvType}.ru`;

cypress.run({
  config: {
    baseUrl,
  },
}).then(results => {
  if (results.failures) {
    console.log();
    console.log('Cypress failed because:');
    console.error(results.message)
    console.log();

    process.exit(results.failures)
  }
  if (results.totalFailed > 0) {
    process.exitCode = 1;
  }
}).catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
