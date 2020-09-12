<template>
  <footer class="footer">
    <div class="footer__container">
      <InstagramLogo />
      <LinkedInLogo />
      <DribbleLogo />
    </div>
    <p class="footer__disclaimer">All content copyright Neanke Veenstra</p>
  </footer>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: 10rem;
  background-color: $color-peach;

  &__container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  &__disclaimer {
    color: $color-navy;
    font-family: $font-regular;
    text-align: center;
  }
}
</style>
