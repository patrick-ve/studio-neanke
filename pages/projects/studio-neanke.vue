<template>
  <section class="container">
    <Header />
    <h1 class="container__heading">Studio Neanke</h1>
    <img class="container__image js-image" src="@/assets/images/nea-89.png" />
    <div class="container__description">
      <h2 class="container__subheading">Studio Neanke</h2>
      <p class="container__about">
        This segment introduces the brand of Studio Neanke. Choosing the right
        colour swatches, fonts and illustrations, and a consistent use of those
        styles, make for a unique and elegant brand. Below you can find among
        other things, my styleguide, web design, business card, and Instagram
        Design.<br /><br />
        <strong>Date: </strong>September, 2020
        <br />
        <strong>Software: </strong>Adobe Illustrator, Adobe InDesign, Adobe
        Photoshop
        <br />
        <strong>Commissioned for: </strong>Studio Neanke
      </p>
    </div>
    <img class="container__image" src="@/assets/images/nea-109.png" />
    <img class="container__image" src="@/assets/images/nea-111.png" />
    <img class="container__image" src="@/assets/images/nea-112.png" />
    <img class="container__image" src="@/assets/images/nea-110.png" />
    <img class="container__image" src="@/assets/images/nea-113-111.jpg" />
    <CallToAction />
    <Footer />
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
      const images = this.$el.querySelectorAll(
        '.container__image:not(:first-of-type)'
      )
      const firstImage = this.$el.querySelector('.js-image')
      const heading = this.$el.querySelector('h1')
      const subheading = this.$el.querySelector('h2')
      const content = this.$el.querySelector('.container__about')

      images.forEach((image) => {
        gsap.from(image, {
          autoAlpha: 0,
          yPercent: 20,
          duration: 0.8,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: image,
            start: '0% 70%',
          },
        })
      })

      gsap.from([heading, firstImage, subheading, content], {
        autoAlpha: 0,
        ease: 'power1.inOut',
        duration: 0.8,
        stagger: 0.4,
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
    font-size: $font-size-xlarge;
    text-transform: uppercase;
    padding: 10vw;
    line-height: 2.5rem;
  }

  &__subheading {
    color: $color-navy;
    font-family: $font-black;
    font-size: $font-size-large;
    padding: 2.5vw 10vw;
    line-height: 2.5rem;
  }

  &__about {
    color: $color-navy;
    font-family: $font-regular;
    font-size: $font-size-small;
    padding: 2.5vw 10vw 10vw 10vw;
    line-height: 1.2;

    & strong {
      font-family: $font-black;
    }
  }

  &__image {
    width: 100vw;
    height: auto;
    margin-bottom: 2rem;
  }
}
</style>
