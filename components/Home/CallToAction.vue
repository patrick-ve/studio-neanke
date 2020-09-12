<template>
  <section class="container">
    <h2 class="container__heading">Designs for you</h2>
    <p class="container__content">
      Studio Neanke is an independent design company. I create visual designs,
      with special skills in digital illustrations. My work comprises graphic
      design, branding and digital design which come to life in websites,
      applications and data visualizations. <br /><br />
      Studio Neanke can be described as: creative, unique, funky, modern and
      stylish. <br /><br />My goal is to always deliver your design with
      passion, excellence and commitment.
    </p>
    <nuxt-link class="container__link" to="/contact">Get in touch</nuxt-link>
    <img
      class="container__visual container__visual--lips"
      src="@/assets/images/lips.png"
    />
    <img
      class="container__visual container__visual--yeah"
      src="@/assets/images/ohyeah.png"
    />
    <img
      class="container__visual container__visual--hand js-hand"
      src="@/assets/images/illustratie-54.svg"
    />
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
      const hand = this.$el.querySelector('.js-hand')

      gsap.from(hand, {
        autoAlpha: 0,
        yPercent: 100,
        ease: 'power1.inOut',
        duration: 0.8,
        scrollTrigger: {
          trigger: hand,
          start: '0% 95%',
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  max-width: 100vw !important;
  height: 100%;
  overflow: hidden;

  &__heading {
    color: $color-navy;
    font-family: $font-black;
    font-size: $font-size-large;
    padding: 0 10vw;
  }

  &__content {
    color: $color-navy;
    font-family: $font-regular;
    font-size: $font-size-small;
    line-height: 1.2;
    padding: 10vw;
    margin-top: -5vw;
  }

  &__link {
    @include ctaButtonStyles;
  }

  &__visual {
    width: 100vw;
    height: auto;
    position: relative;

    &--lips {
      padding-top: 2.5rem;
      width: 80vw;
    }

    &--yeah {
      position: absolute;
      top: 23.5rem;
      right: 1rem;
      width: 50vw;
    }

    &--hand {
      width: 100vw;
      display: block;
      margin: 0 auto -0.5rem auto;
    }
  }
}
</style>
