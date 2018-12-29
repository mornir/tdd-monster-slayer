<template>
  <ul data-cy="actions-log">
    <li v-for="log in logs"
        :class="{ 'bg-green-lighter': log.fighter === 'player', 'bg-red-lighter': log.fighter === 'monster'}"
        :key="log.id">{{ log.msg }}</li>

  </ul>
</template>

<script>
export default {
  props: {
    logs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
