<template>
  <!-- <hello-world /> -->
  <h1>Build with</h1>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',

  setup(_, context) {
    console.log('%c 🍨 context: ', 'font-size:12px;background-color: #7F2B82;color:#fff;', context);
  }
  // components: { HelloWorld }
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
