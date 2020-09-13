<template>
  <div>
    <Header />
    <section class="container">
      <div class="container__heading">
        <h1>Portfolio</h1>
      </div>
      <FilterButtons />
      <PortfolioItem
        v-for="portfolioItem in portfolioItems"
        :key="portfolioItem.id"
        :data="portfolioItem.imagePath"
      />
      <button class="button" @click="scrollHandler()">Upwards</button>
      <Footer />
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
      portfolioItems: [
        {
          imagePath: 'nea-83.png',
          type: null,
        },
        {
          imagePath: 'nea-91.png',
          type: null,
        },
        {
          imagePath: 'nea-97.png',
          type: null,
        },
        {
          imagePath: 'nea-84.png',
          type: null,
        },
        {
          imagePath: 'nea-87.png',
          type: null,
        },
        {
          imagePath: 'nea-92.png',
          type: null,
        },
        {
          imagePath: 'nea-95.png',
          type: null,
        },
        {
          imagePath: 'nea-96.png',
          type: null,
        },
        {
          imagePath: 'nea-100.png',
          type: null,
        },
        {
          imagePath: 'nea-89.png',
          type: null,
        },
        {
          imagePath: 'nea-94.png',
          type: null,
        },
        {
          imagePath: 'nea-98.png',
          type: null,
        },
        {
          imagePath: 'nea-90.png',
          type: null,
        },
        {
          imagePath: 'nea-93.png',
          type: null,
        },
        {
          imagePath: 'nea-88.png',
          type: null,
        },
        {
          imagePath: 'nea-85.png',
          type: null,
        },
      ],
    }
  },

  mounted() {
    this.animationHandler()
  },

  methods: {
    animationHandler() {
      const images = this.$el.querySelectorAll('article:not(:first-of-type)')
      const buttons = this.$el.querySelectorAll('button')
      const heading = this.$el.querySelector('h1')

      images.forEach((image) => {
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
      })

      gsap.from(buttons, {
        yPercent: -30,
        autoAlpha: 0,
        ease: 'power1.inOut',
        stagger: 0.3,
        delay: 0.4,
      })

      gsap.from(heading, {
        autoAlpha: 0,
        ease: 'power1.inOut',
        duration: 1.2,
      })
    },

    scrollHandler() {
      if (process.client)
        gsap.to(window, {
          scrollTo: { x: 0, y: 0 },
          duration: 0.8,
          ease: 'power1.inOut',
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100%;

  &__heading {
    color: $color-navy;
    font-family: $font-black;
    font-size: $font-size-large;
    padding: 10vw 10vw 5vw 10vw;
    text-transform: uppercase;
  }
}

.button {
  @include resetButtonStyles;

  @include ctaButtonStyles;

  display: block;
  margin: 0 auto 2rem auto;
  background-color: $color-pink;
  text-transform: uppercase;
}
</style>
