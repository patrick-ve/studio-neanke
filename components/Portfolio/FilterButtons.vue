<template>
  <section class="container">
    <button
      v-for="filter in filters"
      :key="filter.id"
      class="container__button"
    >
      {{ filter.name }}
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          name: 'Branding',
          type: 'branding',
        },
        {
          name: 'Digital Design',
          type: 'digitalDesign',
        },
        {
          name: 'Graphic Design',
          type: 'graphicDesign',
        },
        {
          name: 'Illustrations',
          type: 'illustrations',
        },
        {
          name: 'Information Design',
          type: 'informationDesign',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
  height: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: start;
  padding-left: 10vw;

  &__button {
    @include resetButtonStyles;

    @include ctaButtonStyles;

    background-color: $color-pink;
    width: auto;
    font-size: $font-size-xsmall;
    padding: 3vw 5vw;
    margin: 0.5rem auto;
  }
}
</style>
