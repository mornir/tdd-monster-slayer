describe('Playthrough', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('launches an normal attack dealing 5-10 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0)
    })

    cy.get('[data-cy="attack"]').click()
    cy.get('[data-cy="Monster-lifebar"]').should('have.css', 'width', '95px')
  })

  it('launches an special attack dealing 20 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0.9)
      cy.get('[data-cy="special-attack"]').click()
      cy.get('[data-cy="Monster-lifebar"]').should('have.css', 'width', '80px')
    })
  })

  it('launches an special attack dealing 0 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0)
      cy.get('[data-cy="special-attack"]').click()
      cy.get('[data-cy="Monster-lifebar"]').should('have.css', 'width', '100px')
    })
  })

  /*  it.only('heals the player', () => {
    cy.get('[data-cy="heal"]').click()

    cy.get('[data-cy="Monster-lifebar"]').should(
      'not.have.css',
      'width',
      '100px'
    )
  }) */
})
