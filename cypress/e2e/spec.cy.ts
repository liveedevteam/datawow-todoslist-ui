describe('Todos List Index (Filter)', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport('iphone-8');
  });

  it('Select Filter to Done', () => {

    cy.get('h1').contains("Progress")
    cy.contains("All").click()
    cy.contains("Done").click()
    cy.get('#5fe3f4ca-193c-4170-83c1-cb5a19908601')
      .should('not.be.visible')
      .check({ force: true })
      .should('be.checked')
    cy.contains("Done").click()
    cy.contains("Undone").click()
    cy.get('#f619466c-a016-4281-b584-7db2795d103d')
      .should('not.be.visible')
      .uncheck({ force: true })
  })
  it('Checkbox and Un Check Box Done', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains("Progress")
    cy.get('p').contains("1 completed")
    cy.get('#f619466c-a016-4281-b584-7db2795d103d')
      .should('not.be.visible')
      .uncheck({ force: true })
    cy.get('#f619466c-a016-4281-b584-7db2795d103d')
      .should('not.be.visible')
      .click({ force: true })
    cy.get('#f619466c-a016-4281-b584-7db2795d103d')
      .should('not.be.visible')
      .check({ force: true })
    cy.get('p').contains("2 completed")
    cy.get('#f619466c-a016-4281-b584-7db2795d103d')
      .should('not.be.visible')
      .click({ force: true })
    cy.get('#f619466c-a016-4281-b584-7db2795d103d')
      .should('not.be.visible')
      .uncheck({ force: true })
  })
})