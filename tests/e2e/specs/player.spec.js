describe('Playthrough', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deals 5 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0)
    })

    cy.get('[data-cy="attack"]').click()
    cy.get('[data-cy="Monster-lifebar"]').should('have.css', 'width', '95px')
  })

  it('deals 20 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0.9)
    })

    cy.get('[data-cy="special-attack"]').click()
    cy.get('[data-cy="Monster-lifebar"]').should('have.css', 'width', '80px')
  })

  it('deals 0 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0)
    })

    cy.get('[data-cy="special-attack"]').click()
    cy.get('[data-cy="Monster-lifebar"]').should('have.css', 'width', '100px')
  })
})
