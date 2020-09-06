<template>
  <div id="app">
    <div class="Container">
      <Box
        v-for="index in 4"
        :key="index"
        :img="require('@/assets/seo.svg')"
        title="SEO"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        rutrum porta malesuada.
        Etiam eu laoreet eros. Integer a augue neque. Proin ac fermentum lectus,
        sit amet gravida felis. Nulla imperdiet luctus pretium. Donec a sagittis lorem.
        Vivamus vitae bibendum velit. Duis vulputate sit amet augue sed viverra."
      />
    </div>

  </div>
</template>
<script>
import Box from '@/components/Box.vue';

export default {
  components: {
    Box,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.Container {
display: flex;
}
</style>
