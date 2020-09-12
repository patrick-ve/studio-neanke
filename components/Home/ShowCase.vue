<template>
  <div>
    <section class="container">
      <img
        class="container__image container__image--wave"
        src="@/assets/images/rozegolf.png"
        alt="Image decoration in the shape of a pink wave"
      />
      <img
        class="container__image container__image--stars"
        src="@/assets/images/sterren.png"
        alt="Image of stars"
      />
      <img
        class="container__image container__image--lightning"
        src="@/assets/images/bliksem.png"
        alt="Image of lightning"
      />
      <img
        class="container__image container__image--plant"
        src="@/assets/images/blaadje.png"
        alt="Image of plant"
      />
      <img
        class="container__image container__image--mill"
        src="@/assets/images/polaroid.png"
        alt="Image decoration in the shape of a polaroid photo"
      />
      <img
        class="container__image container__image--wings js-mill"
        src="@/assets/images/molen.png"
        alt="Image decoration in the shape of a windmill"
      />
    </section>
    <section class="container">
      <img
        class="container__image container__image--bush js-bush"
        src="@/assets/images/illustratie-47.svg"
        alt="Image decoration in the shape of a plant"
      />
      <img
        class="container__image container__image--blob"
        src="@/assets/images/illustratie-48.svg"
        alt="Image decoration in the shape of a blob"
      />
      <img
        class="container__image container__image--tiger"
        src="@/assets/images/illustratie-49.svg"
        alt="Image decoration in the shape of a tiger"
      />
      <img
        class="container__image container__image--glasses js-glasses"
        src="@/assets/images/illustratie-46.svg"
        alt="Image decoration in the shape of a pair of glasses"
      />
      <img
        class="container__image container__image--sparkles js-sparkles"
        src="@/assets/images/sparkles.png"
        alt="Image of sparkles"
      />
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    this.animationHandler()
  },

  methods: {
    animationHandler() {
      const mill = this.$el.querySelector('.js-mill')
      const bush = this.$el.querySelector('.js-bush')
      const glasses = this.$el.querySelector('.js-glasses')
      const sparkles = this.$el.querySelector('.js-sparkles')

      gsap.to(mill, {
        rotation: 720,
        ease: 'power1.inOut',
        duration: 2.4,
        scrollTrigger: {
          trigger: mill,
          start: '0% 90%',
          end: '200% 0%',
          scrub: true,
        },
      })

      gsap.to(bush, {
        rotation: 5,
        transformOrigin: 'center left',
        ease: 'power1.inOut',
        duration: 2,
        yoyo: true,
        repeat: -1,
      })

      gsap.from([glasses, sparkles], {
        autoAlpha: 0,
        ease: 'power1.inOut',
        duration: 0.8,
        scrollTrigger: {
          trigger: glasses,
          start: '0% 40%',
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
  z-index: 10;
  overflow-y: visible;

  &__image {
    max-width: 100vw;
    width: 100%;
    height: auto;
    object-fit: cover;

    &--stars {
      position: absolute;
      top: -8rem;
    }

    &--lightning {
      position: absolute;
      left: -8.5vw;
      top: -3.5rem;
      z-index: 11;
      transform: skewX(-10deg);
    }

    &--wave {
      position: absolute;
      top: -7rem;
      transform: scale(1.25) translateX(-20vw) scaleY(1.3);
    }

    &--mill {
      position: absolute;
      top: 8rem;
      right: -1rem;
      width: 15rem;
      z-index: 10;
    }

    &--wings {
      position: absolute;
      top: 8rem;
      right: 0.15rem;
      z-index: 12;
      width: 12rem;
    }

    &--plant {
      position: absolute;
      width: 8rem;
      top: 16.5rem;
      right: 0;
      z-index: 13;
    }

    &--bush {
      position: relative;
      top: 12.5rem;
      left: -34.5vw;
      z-index: 15;
    }

    &--blob {
      position: relative;
      z-index: 10;
    }

    &--tiger {
      position: absolute;
      top: 28.5rem;
      left: 4rem;
      width: 75vw;
      z-index: 20;
    }

    &--glasses {
      width: 90vw;
      display: block;
      margin: -3rem auto 0 auto;
    }

    &--sparkles {
      position: absolute;
      width: 30vw;
      bottom: 1rem;
      left: 25vw;
    }
  }
}
</style>
