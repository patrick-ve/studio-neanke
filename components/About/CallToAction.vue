<template>
  <section class="container">
    <img src="@/assets/images/sparkles.png" class="container__image" />
    <div class="container__cta">
      <nuxt-link to="/portfolio" class="container__link">Portfolio</nuxt-link>
      <nuxt-link to="/portfolio" class="container__link container__link--pink"
        >Next project</nuxt-link
      >
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    this.animationHandler()
  },

  methods: {
    animationHandler() {
      const sparkles = this.$el.querySelector('.container__image')

      gsap.from(sparkles, {
        yPercent: -10,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        duration: 0.8,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100%;
  display: flex;
  padding-bottom: 10vw;

  &__image {
    width: 40vw;
    height: auto;
    flex: 3;
  }

  &__cta {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
  }

  &__link {
    @include ctaButtonStyles;

    width: 80%;
    padding: 3vw;
    margin: 0;
    font-size: $font-size-small;
    text-align: center;

    &--pink {
      background-color: $color-pink;
      margin-top: 5vw;
    }
  }
}
</style>
