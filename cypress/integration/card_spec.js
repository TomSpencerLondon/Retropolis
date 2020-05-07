
describe('Card', () => { 
  it('adds text', () => { 
    cy.visit('http://localhost:3000/')
    cy.get('.add-card').click()
    cy.get('textarea').type("Text")
    cy.get('.add-message').click()
    cy.get('.text').contains("Text")
  }) 
})