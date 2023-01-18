describe('template spec', () => {
  it('Checks if Heading is available', () => {
    cy.visit('http://localhost:3000')
    
    cy.get("h1").contains("Heading")
  })
})