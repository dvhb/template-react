Cypress.Commands.add('dataCy', testId => {
  return cy.get(`[data-cy='${testId}']`);
});
