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
      <img
        class="container__image container__image--sparkles js-sparkles"
        src="@/assets/images/sparkles.png"
        alt="Image of sparkles"
      />
      <img
        class="container__image container__image--border"
        src="@/assets/images/illustratie-39.svg"
        alt="Image of border"
      />
      <img
        class="container__image container__image--boom js-boom"
        src="@/assets/images/boom.png"
        alt="Image of BOOM!"
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
      const sparkles = this.$el.querySelector('.js-sparkles')
      const boom = this.$el.querySelector('.js-boom')

      gsap.from(greeting, {
        autoAlpha: 0,
        rotation: -125,
        ease: 'power1.inOut',
        duration: 0.8,
        delay: 1.2,
      })

      gsap.from(sparkles, {
        y: '10px',
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        duration: 0.6,
      })

      gsap.from(boom, {
        autoAlpha: 0,
        ease: 'power1.inOut',
        duration: 0.8,
        scrollTrigger: {
          trigger: boom,
          start: '0% 50%',
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100%;
  z-index: 5;
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
    @include ctaButtonStyles;
  }

  &__gallery {
    width: 100vw;
    height: 30rem;
    position: relative;
    z-index: 5;
  }

  &__image {
    max-width: 100vw;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 6;

    &--neanke {
      position: absolute;
      bottom: 0;
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

    &--sparkles {
      width: 25vw;
      height: auto;
      position: absolute;
      left: 20vw;
      top: 15rem;
    }

    &--border {
      position: absolute;
      top: 14rem;
      left: 0;
      width: 100vw;
      height: auto;
      transform: scale(2) translateX(-20vw) translateY(2.5vh);
    }

    &--boom {
      position: absolute;
      bottom: 1.65rem;
      left: 8vw;
      width: 9rem;
    }
  }
}
</style>
