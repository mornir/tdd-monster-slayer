// https://docs.cypress.io/api/introduction/api.html

describe('Player', () => {
  it('launches an normal attack causing 5 dmg to the monster', () => {
    cy.visit('/')

    cy.get('[data-cy="attack"]').click() // 5 damage

    cy.get('[data-cy="Monster-lifebar"]').should('have.css', 'width', '95px')
  })
})
