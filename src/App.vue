<template>
  <div id="app">
    <main class="flex flex-col justify-center items-center h-screen">
      <section class="mb-4">
        <h1 class="text-4xl tracking-wide uppercase">Monster Slayer</h1>
      </section>

      <section class="flex">

        <Fighter name="You"
                 data-cy="player"
                 class="mr-8"
                 :life="playerLife"
                 img="warrior_tiny.png" />

        <Fighter name="Hydra"
                 data-cy="monster"
                 :life="monsterLife"
                 img="hydra.jpg" />

      </section>

      <section>

        <PlayerActions @attack="attack"
                       @specialAttack="specialAttack"
                       @heal="heal" />

      </section>
      <section>
        <ActionsLog :logs="logs" />
      </section>

    </main>
    <modal name="endGameModal">
      {{ msg }}
    </modal>
  </div>
</template>

<script>
import Fighter from '@/components/Fighter'
import PlayerActions from '@/components/PlayerActions'
import ActionsLog from '@/components/ActionsLog'

import { player } from '@/stats'

export default {
  name: 'app',
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
      msg: '',
      logs: [],
    }
  },
  methods: {
    attack(dmg) {
      this.monsterLife = this.monsterLife - dmg

      this.createLog('player', `You dealt ${dmg} dmg to the Hydra!`)

      this.monsterAttack()
    },
    specialAttack(dmg) {
      this.monsterLife = this.monsterLife - dmg
      this.monsterAttack()
    },
    heal() {
      const diff = 100 - this.playerLife

      if (diff >= 10) {
        this.playerLife = this.playerLife + player.heal.amount
      } else {
        this.playerLife = this.playerLife + diff
      }
      this.monsterAttack()
    },
    monsterAttack() {
      const dmg = Math.floor(Math.random() * 6) + 5

      if (this.playerLife > dmg) {
        this.playerLife = this.playerLife - dmg
        this.createLog('monster', `The Hydra dealt ${dmg} dmg to you!`)
      } else {
        this.playerLife = 0
        this.msg = 'Game Over!'
        this.$modal.show('endGameModal')
      }
    },
    createLog(fighter, msg) {
      this.logs.unshift({
        fighter,
        msg,
        id: new Date().getTime(),
      })
    },
    resetGame() {},
  },
  watch: {
    monsterLife(newVal) {
      if (newVal <= 0) {
        this.monsterLife = 0
        this.msg = 'You have slain the monster!'
        this.$modal.show('endGameModal')
      }
    },
  },
  components: {
    Fighter,
    PlayerActions,
    ActionsLog,
  },
}
</script>

<style>
@import './assets/tailwind.css';

@import url('https://fonts.googleapis.com/css?family=Pangolin');

h1,
.figher-name {
  font-family: 'Pangolin', cursive;
}
</style>
