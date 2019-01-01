<template>
  <div class="my-6">
    <button data-cy="attack"
            class="btn bg-orange-light"
            @click="attack">Attack</button>
    <button data-cy="special-attack"
            class="btn bg-yellow-light mx-4"
            @click="specialAttack">Special Attack</button>
    <button data-cy="heal"
            class="btn bg-green-light"
            @click="heal">Heal</button>

  </div>
</template>

<script>
import { rand } from '@/utils'
import { player } from '@/stats'

export default {
  name: 'PlayerActions',
  methods: {
    attack() {
      const dmg = rand(player.attack.min, player.attack.max)
      this.$emit('attack', dmg)
    },
    specialAttack() {
      const rnd = rand(0, 1)
      let dmg
      if (rnd === 1) {
        dmg = player.specialAttack.max
      } else {
        dmg = player.specialAttack.min
      }
      this.$emit('specialAttack', dmg)
    },
    heal() {
      this.$emit('heal')
    },
  },
}
</script>

<style>
</style>
