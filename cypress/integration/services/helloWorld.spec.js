describe('API Testing with Cypress', () => {
  beforeEach(() => {
    cy.request('/').as('helloWorld');
  });

  it('Validate the status code', () => {
    cy.get('@helloWorld')
      .its('status')
      .should('equal', 200);
  });

  it('Validate the response', () => {
    cy.get('@helloWorld')
      .its('body')
      .should('include', 'Hello World');
  });
});
