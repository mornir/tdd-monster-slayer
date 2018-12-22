import mountVue from 'cypress-vue-unit-test'
import PlayerActions from '../../../src/components/PlayerActions.vue'

describe('PlayerActions', () => {
  beforeEach(mountVue(PlayerActions))

  it('emits a normal attack', () => {
    const spy = cy.spy()

    Cypress.vue.$on('attack', spy)

    cy.get('[data-cy="attack"]')
      .click()
      .then(() => {
        expect(spy).to.be.calledOnce
      })
  })

  it('emits a special attack', () => {
    const spy = cy.spy()

    Cypress.vue.$on('specialAttack', spy)

    cy.get('[data-cy="special-attack"]')
      .click()
      .then(() => {
        expect(spy).to.be.calledOnce
      })
  })
})
