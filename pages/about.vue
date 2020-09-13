<template>
  <section class="container">
    <Header />
    <h1 class="container__heading">About</h1>
    <img
      class="container__image container__image--nejankie"
      src="@/assets/images/nejankie.png"
    />
    <div class="container__description">
      <h2 class="container__subheading">Nice to meet you</h2>
      <p class="container__about">
        Hello, I am Neanke Veenstra, the owner, visual designer and illustrator
        of Studio Neanke. I live in Amsterdam, where I can find a lot of
        inspiration like museums, street art and the free spirit of people.
        <br /><br />
        Ever since I was a child, drawing was already one of my greatest
        hobbies. This passion for creating art made it possible to create
        beautiful designs and illustrations, which are now being used in books,
        websites and menus. The illustrations give a unique twist, who wouldn't
        want that?
        <br /><br />
        My ambition is to create designs you are wishing for. As a visual
        designer I can do work for digital and graphic projects.
        <br /><br />
        So enough about me, I have one question for you. Are you interested yet?
      </p>
    </div>
    <img
      class="container__image container__image--glasses"
      src="@/assets/images/bril.png"
    />
    <div class="container__grid">
      <div
        v-for="uniqueSellingPoint in uniqueSellingPoints"
        :key="uniqueSellingPoint.id"
        class="grid"
      >
        <img
          src="@/assets/images/bliksem.png"
          alt="Visual image of lightning"
          class="grid__image"
        />
        <div class="grid__container">
          <h3 class="grid__heading">{{ uniqueSellingPoint.heading }}</h3>
          <p class="grid__description">{{ uniqueSellingPoint.description }}</p>
        </div>
      </div>
    </div>
    <nuxt-link class="link" to="/contact">Get in touch</nuxt-link>
    <Footer />
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
      uniqueSellingPoints: [
        {
          heading: 'Studio Neanke',
          description:
            'Creative, unique, modern and funky with a stylish end result. Creating illustrations, graphic and digital designs.',
        },
        {
          heading: 'Why Studio Neanke?',
          description:
            'My skill is to be creative, I think outside-the-box, which can lead to a unique design. This way, your products will always stand out.',
        },
        {
          heading: 'Mission',
          description:
            'My mission statement is to provide you with a product of outstanding quality that represents the brand in a unique and professional way.',
        },
        {
          heading: 'Vision',
          description:
            'In the future I want to develop myself in following trends and learning new features in the Adobe Creative Cloud programs to create trendy and beautiful designs.',
        },
      ],
    }
  },

  mounted() {
    // this.animationHandler()
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
    position: relative;
    width: 100vw;
    height: auto;
    margin-bottom: 2rem;

    &--nejankie {
      display: block;
      position: relative;
      z-index: 2;

      &::before {
        content: '';
        position: absolute;
        width: 9999px;
        height: 9999px;
        background-color: red;
        top: -2px;
        left: -10px;
        z-index: 1;
      }
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 13.5rem;

  &__image {
    width: auto;
    height: 65%;
    object-fit: cover;
  }

  &__heading {
    color: $color-navy;
    font-family: $font-black;
    font-size: $font-size-medium;
    padding: 0 5vw;
    margin-bottom: 5vw;
  }

  &__description {
    color: $color-navy;
    font-family: $font-regular;
    font-size: $font-size-small;
    padding: 0 5vw;
    line-height: 1.2;
  }
}

.link {
  @include ctaButtonStyles;

  width: 10rem;
  display: block;
  margin: 10vw;
  text-align: center;
}
</style>
