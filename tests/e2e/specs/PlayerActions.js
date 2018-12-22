import mountVue from 'cypress-vue-unit-test'
import PlayerActions from '../../../src/components/PlayerActions.vue'

describe('PlayerActions', () => {
  beforeEach(mountVue(PlayerActions))

  it('emits an attack', () => {
    const spy = cy.spy()

    Cypress.vue.$on('attack', spy)

    cy.get('button')
      .click()
      .then(() => {
        expect(spy).to.be.calledOnce
        expect(spy).to.be.calledWith(5)
      })
  })
})
