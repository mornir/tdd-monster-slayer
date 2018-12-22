<template>
  <div>
    <img src="https://via.placeholder.com/150"
         alt="place_holder">
    <div>🐉</div>
    <h2 class="text-red">{{ name }}</h2>
    <LifeBar :name="name"
             :totalHealth="life" />
  </div>
</template>

<script>
import LifeBar from '@/components/LifeBar'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    life: {
      type: Number,
      required: true,
    },
  },
  components: {
    LifeBar,
  },
}
</script>

<style>
</style>
