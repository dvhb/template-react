describe('Base', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be opened', () => {
    cy.dataCy('react-link').should('contain', 'Learn React');
  });
});
