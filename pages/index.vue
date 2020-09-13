<template>
  <div class="container">
    <Header />
    <Hero />
    <ShowCase />
    <CallToAction />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}
</style>

<script>
import CallToAction from '@/components/Home/CallToAction'

export default {
  components: {
    CallToAction,
  },
}
</script>
