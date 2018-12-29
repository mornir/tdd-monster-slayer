import { getMonsterLifeBar } from '../support/utils'

describe('Playthrough', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deals 5 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0)
    })

    cy.get('[data-cy="attack"]').click()

    getMonsterLifeBar().contains(95)
  })

  it('deals 20 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0.9)
    })

    cy.get('[data-cy="special-attack"]').click()
    getMonsterLifeBar().contains(80)
  })

  it('deals 0 dmg to the monster', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0)
    })

    cy.get('[data-cy="special-attack"]').click()
    getMonsterLifeBar().contains(100)
  })

  it('ends game when monster dies', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0.9)
    })

    cy.contains('You have slain the monster!').should('not.be.visible')

    cy.get('[data-cy="special-attack"]')
      .click()
      .click()
      .click()
      .click()
      .click()

    getMonsterLifeBar().contains(0)
    cy.contains('You have slain the monster!')
  })

  it('ends game when the player dies', () => {
    cy.window().then(win => {
      cy.stub(win.Math, 'random').returns(0.4)
    })

    cy.contains('Game Over').should('not.be.visible')

    let i = 0
    while (i < 15) {
      cy.get('[data-cy="special-attack"]').click()
      i++
    }

    getMonsterLifeBar().contains(0)
    cy.contains('Game Over!')
  })
})
