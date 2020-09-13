<template>
  <article class="portfolio-item">
    <img
      class="portfolio-item__image js-image"
      loading="lazy"
      :src="require(`@/assets/images/${data}`)"
    />
  </article>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  height: 100vw;
  width: 100vw;

  &__image {
    width: 80vw;
    height: 80vw;
    object-fit: cover;
    border-radius: 50%;
    padding: 10vw;
  }
}
</style>
