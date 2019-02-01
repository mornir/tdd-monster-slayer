describe('Log', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('displays an attack log', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0)
    })

    cy.get('[data-cy="attack"]').click()

    cy.get('[data-cy="actions-log"] li').should('have.length', 2)

    cy.get('[data-cy="actions-log"]')
      .find('li')
      .last()
      .contains('You dealt 5 dmg to the Hydra!')
      .should('have.class', 'bg-green-lighter')

    cy.get('[data-cy="actions-log"]')
      .find('li')
      .first()
      .contains('The Hydra dealt 5 dmg to you!')
      .should('have.class', 'bg-red-lighter')
  })
})
