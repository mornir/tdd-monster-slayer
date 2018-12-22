<template>
  <div>
    <div class="bg-green h-4"
         :style="health"
         :data-cy="`${name}-lifebar`">

    </div>
  </div>

</template>

<script>
export default {
  props: {
    totalHealth: {
      type: Number,
      default: 100,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    health() {
      return {
        width: this.totalHealth + 'px',
      }
    },
  },
}
</script>

<style>
</style>
