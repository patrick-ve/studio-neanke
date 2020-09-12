<template>
  <main class="container">
    <h1 class="container__title">
      Visual Designer & <em>Illustrator Artist</em>
    </h1>
    <nuxt-link class="container__link" to="/portfolio">Portfolio</nuxt-link>
    <div class="container__gallery">
      <img
        class="container__image container__image--neanke"
        src="@/assets/images/neanke.png"
        alt="Neanke Veenstra visual image"
      />
      <img
        class="container__image container__image--greeting js-greeting"
        src="@/assets/images/text.png"
        alt="Hello, my name is Neanke!"
      />
    </div>
  </main>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    this.heroAnimation()
  },

  methods: {
    heroAnimation() {
      const greeting = this.$el.querySelector('.js-greeting')
      const tl = gsap.timeline()
      tl.from(greeting, {
        autoAlpha: 0,
        rotation: -125,
        // rotate: 190,
        ease: 'power1.inOut',
        duration: 0.8,
        delay: 1.2,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100%;
  overflow: hidden;

  &__title {
    color: $color-navy;
    font-family: $font-black;
    font-size: $font-size-xlarge;
    text-transform: uppercase;
    padding: 10vw;
    line-height: 2.5rem;

    & em {
      color: $color-pink;
    }
  }

  &__link {
    color: white;
    text-transform: uppercase;
    font-size: $font-size-small;
    font-family: $font-regular;
    background-color: $color-navy;
    width: 55vw;
    padding: 4.5vw 10vw;
    border-radius: 1.5rem;
    margin-left: 10vw;
    letter-spacing: 2px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  }

  &__gallery {
    width: 100vw;
    height: 30rem;
    position: relative;
    z-index: 5;
  }

  &__image {
    max-width: 100vw;
    height: auto;
    z-index: 6;

    &--neanke {
      position: relative;
      top: 10vh;
      left: 20vw;
      z-index: 8;
    }

    &--greeting {
      width: 60%;
      position: absolute;
      top: 5%;
      left: -2.5vw;
      transform: rotate(0);
      transform-origin: center right;
      z-index: 7;
    }
  }
}
</style>
