<template>
  <div>
    <button data-cy="attack"
            @click="attack">Attack</button>
    <button data-cy="special-attack"
            @click="specialAttack">Special Attack</button>
    <button data-cy="heal"
            @click="heal">Heal</button>

  </div>
</template>

<script>
export default {
  name: 'PlayerActions',
  methods: {
    attack() {
      const dmg = Math.floor(Math.random() * 6) + 5
      this.$emit('attack', dmg)
    },
    specialAttack() {
      const rnd = Math.floor(Math.random() * 2)
      let dmg
      if (rnd === 1) {
        dmg = 20
      } else {
        dmg = 0
      }
      this.$emit('specialAttack', dmg)
    },
    heal() {
      this.$emit('heal', 10)
    },
  },
}
</script>

<style>
</style>
