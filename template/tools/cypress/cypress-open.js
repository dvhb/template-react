const cypress = require('cypress');

const cliEnvType = process.argv[2] || 'dev'; // local/dev/stage

const baseUrl = cliEnvType === 'local' ? 'http://localhost:3000' : `https://${cliEnvType}.ru`;

cypress.open({
  config: {
    baseUrl,
  },
});
