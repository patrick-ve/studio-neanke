<template>
  <header class="header">
    <Logo class="header__logo" />
    <button class="header__button button"></button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 10vh;
  width: 80vw;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  // TODO: Fix box shadow for header
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.14), 0 8px 8px rgba(0, 0, 0, 0.18);

  &__logo {
    z-index: 6;
  }

  &__button {
    @include resetButtonStyles;

    position: relative;
    width: 1.5rem;
    height: 0.75rem;
    z-index: 6;
    border-top: 3px solid $color-navy;
    border-bottom: 5px solid $color-navy;

    // TODO: Remove focus outline on button
  }
}
</style>
