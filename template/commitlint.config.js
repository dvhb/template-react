module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerCorrespondence: ['type', 'scope', 'subject', 'references'],
      issuePrefixes: ['<JIRA_PROJECT_CODE>-'],
    },
  },
};
