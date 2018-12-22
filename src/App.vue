<template>
  <main id="app"
        class="container mx-auto">

    <section class="flex">

      <Fighter name="You"
               :life="playerLife" />

      <Fighter name="Monster"
               :life="monsterLife" />

    </section>

    <section>

      <PlayerActions @attack="attack"
                     @specialAttack="specialAttack" />

    </section>

  </main>
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
    },
    specialAttack(dmg) {
      this.monsterLife = this.monsterLife - dmg
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
</style>
