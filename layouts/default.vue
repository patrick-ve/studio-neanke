<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
body {
  position: relative;
  width: 100vw;
  max-width: 100vw !important;
  height: 100%;
  overflow-x: hidden !important;
  font-weight: normal;
  font-size: $font-size-medium;
  font-family: $font-regular;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@font-face {
  font-weight: normal;
  font-family: 'Avenir Book';
  font-style: normal;
  src: url('../assets/fonts/Metropolis-Regular.otf') format('opentype');
}

@font-face {
  font-weight: bold;
  font-family: 'Avenir Black';
  font-style: bold;
  src: url('../assets/fonts/Metropolis-SemiBold.otf') format('opentype');
}
</style>
