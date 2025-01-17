Cypress.Commands.add('InserirUrlAndBody', (url, body, metodo, bool = true) => {
  cy.request({
    method: metodo,
    url: url,
    body: body,
    failOnStatusCode: bool
  });
});

Cypress.Commands.add('getById', (metodo, url, bool = true) => {
  cy.request({
    method: metodo,
    url: url,
    failOnStatusCode: bool
  });
});

