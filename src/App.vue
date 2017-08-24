<template>
  <div id="app">
    <div class="container app-body">
      <hero></hero>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hero from './components/hero'

export default {
  name: 'app',
  components: { Hero }
}
</script>

<style scoped lang="scss">
@import './assets/styles/colors.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}

.app-body {
  background-color: $white;
  height: 100%;
}
</style>
