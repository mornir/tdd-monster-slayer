import mountVue from 'cypress-vue-unit-test'
import MainApp from '../../../src/App.vue'

const data = {
  playerLife: 70,
  monsterLife: 80,
}

describe('MainApp', () => {
  beforeEach(mountVue(MainApp, { data }))
  it('deals 5 dmg to monster', () => {
    const dmg = 5
    const rest = data.monsterLife - dmg

    Cypress.vue.attack(dmg)

    expect(Cypress.vue.monsterLife).to.equal(rest)
    cy.get('[data-cy="Monster-lifebar"]').should(
      'have.css',
      'width',
      `${rest}px`
    )
  })

  it('heals the player', () => {
    let actions = Cypress.vue.$children.find(
      comp => comp.$options.name === 'PlayerActions'
    )
    actions.$emit('heal')

    expect(Cypress.vue.playerLife).to.equal(80)
    cy.get('[data-cy="You-lifebar"]').should('have.css', 'width', '80px')
  })
})
