<template>
  <div class="container">
    <img
      class="container__image container__image--drawing"
      src="@/assets/images/tekenen.png"
    />
    <img
      class="container__image container__image--stars"
      src="@/assets/images/golfmetster.png"
    />
    <img
      class="container__image container__image--wave"
      src="@/assets/images/rozegolf2.png"
    />
    <img
      class="container__image container__image--lightning"
      src="@/assets/images/bliksem2.png"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 40rem;
  overflow: hidden;

  &__image {
    height: auto;
    width: 90%;
    object-fit: cover;

    &--drawing {
      position: relative;
      left: 2rem;
    }

    &--stars {
      position: absolute;
      bottom: 9rem;
      right: 2rem;
      transform: scale(1.25);
    }

    &--wave {
      position: absolute;
      bottom: -3.5rem;
      left: -1rem;
      transform: scale(1.6);
    }

    &--lightning {
      position: absolute;
      bottom: 2.5rem;
      left: 0;
      transform: scale(1.2);
    }
  }
}
</style>
