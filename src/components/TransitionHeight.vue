<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot/>
  </transition>
</template>

<script>
export default {
  name: 'TransitionHeight',
   methods: {
    enter(element) {
        const { width } = getComputedStyle(element);
        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const { height } = getComputedStyle(element);

        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;
        getComputedStyle(element).height;

        requestAnimationFrame(() => {
        element.style.height = height;
        });
    },
   }
};
</script>
<style scoped lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition: height 1s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
