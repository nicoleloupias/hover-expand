<template>
  <div
    class="Box"
    :style="boxHeight"
    @click="expandToggler"
  >
    <div class="Header">
      <img
        class="img"
        :src="img"
      >
      <h2>{{ title }}</h2>
    </div>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
  computed: {
    boxHeight() {
      return {
        height: this.clicked ? 'auto' : '100px',
      };
    },
  },
  methods: {
    expandToggler() {
      this.clicked = !this.clicked;
    },
  },
};
</script>
<style scoped lang="scss">
.Box {
  overflow: hidden;

  .Header {
    display: flex;
    align-items: center;

    .img {
      width: 130px;
    }
  }
}
</style>
