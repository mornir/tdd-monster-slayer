export const getMonsterLifeBar = () =>
  cy.get('[data-cy="monster"]').find('[data-cy="lifebar"]')

export const getPlayerLifeBar = () =>
  cy.get('[data-cy="player"]').find('[data-cy="lifebar"]')
