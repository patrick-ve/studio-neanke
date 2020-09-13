<template>
  <div>
    <Header />
    <section class="container">
      <h1 class="container__heading">Portfolio</h1>
      <FilterButtons />
      <PortfolioItem
        v-for="portfolioItem in portfolioItems"
        :key="portfolioItem.id"
        :data="portfolioItem.imagePath"
      />
    </section>
  </div>
</template>

<script>
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
</style>
