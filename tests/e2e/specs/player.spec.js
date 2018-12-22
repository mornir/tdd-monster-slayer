// https://docs.cypress.io/api/introduction/api.html

describe('Player', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('launches an normal attack causing 5-10 dmg to the monster', () => {
    cy.get('[data-cy="attack"]').click()

    cy.get('[data-cy="Monster-lifebar"]').should(
      'not.have.css',
      'width',
      '100px'
    )
  })

  it('launches an special attack causing either 20 or 0 dmg to the monster', () => {
    cy.get('[data-cy="special-attack"]').click()

    cy.get('[data-cy="Monster-lifebar"]').then($lifebar => {
      if ($lifebar[0].style.width === '80px') {
        cy.get('[data-cy="Monster-lifebar"]').should(
          'have.css',
          'width',
          '80px'
        )
      } else {
        cy.get('[data-cy="Monster-lifebar"]').should(
          'have.css',
          'width',
          '100px'
        )
      }
    })
  })
})
