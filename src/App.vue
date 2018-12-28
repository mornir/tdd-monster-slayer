<template>
  <div id="app">
    <main class="flex flex-col justify-center items-center h-screen">
      <section class="mb-4">
        <h1 class="text-4xl tracking-wide uppercase">Monster Slayer</h1>
      </section>

      <section class="flex">

        <Fighter name="You"
                 class="mr-8"
                 :life="playerLife"
                 img="warrior_tiny.png" />

        <Fighter name="Hydra"
                 :life="monsterLife"
                 img="hydra.jpg" />

      </section>

      <section>

        <PlayerActions @attack="attack"
                       @specialAttack="specialAttack"
                       @heal="heal" />

      </section>
    </main>
  </div>
</template>

<script>
import Fighter from '@/components/Fighter'

import PlayerActions from '@/components/PlayerActions'

export default {
  name: 'app',
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
    }
  },
  methods: {
    attack(dmg) {
      this.monsterLife = this.monsterLife - dmg
      this.monsterAttack()
    },
    specialAttack(dmg) {
      this.monsterLife = this.monsterLife - dmg
      this.monsterAttack()
    },
    heal() {
      const diff = 100 - this.playerLife

      if (diff >= 10) {
        this.playerLife = this.playerLife + 10
      } else {
        this.playerLife = this.playerLife + diff
      }
      this.monsterAttack()
    },
    monsterAttack() {
      const dmg = Math.floor(Math.random() * 6) + 5
      this.playerLife = this.playerLife - dmg
    },
  },
  components: {
    Fighter,
    PlayerActions,
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
