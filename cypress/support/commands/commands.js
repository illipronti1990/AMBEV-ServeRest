Cypress.Commands.add('gettitle', (title) => {
  cy.get('h1').should('have.text', title);
});

Cypress.Commands.add('getbyDataTest', (nomecampo) => {
  cy.get(`[data-testid="${nomecampo}"]`);
});

Cypress.Commands.add('getbyClass', (nomecampo) => {
  cy.get(`.${nomecampo}`);
});
