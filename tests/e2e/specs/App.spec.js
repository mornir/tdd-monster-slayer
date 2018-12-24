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

    // Here we called the attack method directly
    Cypress.vue.attack(dmg)

    let actions = Cypress.vue.$children.find(
      comp => comp.$options.name === 'PlayerActions'
    )

    // This approach is better: we emit our custom event from the PlayerActions component
    actions.$emit('heal')

    expect(Cypress.vue.monsterLife).to.equal(rest)
    cy.get('[data-cy="Monster-lifebar"]').should(
      'have.css',
      'width',
      `${rest}px`
    )
  })

  it('heals the player', () => {
    Cypress.vue.playerLife = 70

    function doNothing() {
      console.log('Monster do not fight back')
    }

    cy.stub(Cypress.vue, 'monsterAttack', doNothing)

    let actions = Cypress.vue.$children.find(
      comp => comp.$options.name === 'PlayerActions'
    )

    // This approach is better: we emit our custom event from the PlayerActions component
    actions.$emit('heal')

    expect(Cypress.vue.playerLife).to.equal(80)
    cy.get('[data-cy="You-lifebar"]').should('have.css', 'width', '80px')
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
    function doNothing() {
      console.log('Monster do not fight back')
    }

    cy.stub(Cypress.vue, 'monsterAttack', doNothing)
    Cypress.vue.playerLife = 95
    Cypress.vue.heal()
    expect(Cypress.vue.playerLife).to.equal(100)
  })
})
