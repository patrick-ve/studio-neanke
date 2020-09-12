<template>
  <article class="portfolio-item">
    <img
      class="portfolio-item__image js-image"
      loading="lazy"
      :src="require(`@/assets/images/${data}`)"
    />
  </article>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: ['data'],

  mounted() {
    this.animationHandler()
  },

  methods: {
    animationHandler() {
      const image = this.$el.querySelector('.js-image')

      gsap.from(image, {
        autoAlpha: 0,
        yPercent: 20,
        ease: 'power1.inOut',
        duration: 0.8,
        scrollTrigger: {
          trigger: image,
          start: '50% 80%',
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  height: 100vw;
  width: 100vw;

  &__image {
    width: 80vw;
    height: 80vw;
    object-fit: cover;
    border-radius: 50%;
    padding: 10vw;
  }
}
</style>
