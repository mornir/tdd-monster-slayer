<template>
  <div class="text-center border-4 p-4 rounded-lg">
    <img :src="avatar"
         :alt="img"
         class="h-64 w-48 mb-3">
    <h2 class="figher-name mb-3">{{ name }}</h2>
    <LifeBar :name="name"
             :totalHealth="life" />
  </div>
</template>

<script>
import LifeBar from '@/components/LifeBar'
export default {
  name: 'Fighter',
  props: {
    name: {
      type: String,
      required: true,
    },
    life: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
      default: 'placeholder.png',
    },
  },
  computed: {
    avatar() {
      return require(`@/assets/${this.img}`)
    },
  },
  components: {
    LifeBar,
  },
}
</script>

<style>
</style>
