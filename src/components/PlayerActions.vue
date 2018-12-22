<template>
  <div>
    <button data-cy="attack"
            @click="attack">Attack</button>
    <button data-cy="special-attack"
            @click="specialAttack">Special Attack</button>

  </div>
</template>

<script>
import random from 'lodash.random'

export default {
  methods: {
    attack() {
      const dmg = random(5, 10)
      this.$emit('attack', dmg)
    },
    specialAttack() {
      const rnd = random(0, 1)
      let dmg
      if (rnd === 1) {
        dmg = 20
      } else {
        dmg = 0
      }
      this.$emit('specialAttack', dmg)
    },
  },
}
</script>

<style>
</style>
