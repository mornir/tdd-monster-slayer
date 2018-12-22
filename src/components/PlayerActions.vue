<template>
  <div>
    <button data-cy="attack"
            @click="attack">Attack</button>
  </div>
</template>

<script>
export default {
  methods: {
    attack() {
      this.$emit('attack', 5)
    },
  },
}
</script>

<style>
</style>
