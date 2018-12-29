import mountVue from 'cypress-vue-unit-test'
import MainApp from '../../../src/App.vue'
import VModal from 'vue-js-modal'

import { getMonsterLifeBar, getPlayerLifeBar } from '../support/utils'

const data = {
  playerLife: 70,
  monsterLife: 80,
}

function doNothing() {
  cy.log('The monster does not fight back.')
}

describe('MainApp', () => {
  beforeEach(mountVue(MainApp, { data }))

  it('deals 5 dmg to monster', () => {
    const dmg = 5
    const rest = data.monsterLife - dmg

    // Here we call the attack method directly
    Cypress.vue.attack(dmg)

    // Another (better?) approach is to emit an event from the child compoment

    /* 
    let actions = Cypress.vue.$children.find(
      comp => comp.$options.name === 'PlayerActions'
    )    
    
    actions.$emit('heal')
    */

    expect(Cypress.vue.monsterLife).to.equal(rest)
    getMonsterLifeBar().contains(rest)
  })

  it('heals the player', () => {
    // TODO: open issue about data not resettingGame Over
    Cypress.vue.playerLife = 70

    cy.stub(Cypress.vue, 'monsterAttack', doNothing)

    let actions = Cypress.vue.$children.find(
      comp => comp.$options.name === 'PlayerActions'
    )

    actions.$emit('heal')

    expect(Cypress.vue.playerLife).to.equal(80)
    getPlayerLifeBar().contains(80)
  })

  it('Monster always fight back', () => {
    const spy = cy.spy(Cypress.vue, 'monsterAttack')

    cy.get('button')
      .click({ multiple: true })
      .then(() => {
        expect(spy).to.be.calledThrice
      })
  })

  it('cannot heal more than 100 life', () => {
    cy.log(Cypress.vue)
    cy.stub(Cypress.vue, 'monsterAttack', doNothing)
    Cypress.vue.playerLife = 95
    Cypress.vue.heal()
    expect(Cypress.vue.playerLife).to.equal(100)
  })
})
