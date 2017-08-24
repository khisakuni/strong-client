<template>
  <div class="tile-container" v-bind:style="{ 'background-image': 'url(' + imageUrl + ')' }">
    <h3>{{workout.name}}</h3>
    <div class="tile-overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'workout-tile',
  props: ['workout'],
  computed: {
    imageUrl: function () {
      return `https://instagram.com/p/${this.workout.instagramId}/media`
    }
  }
}
</script>

<style scoped lang="scss">
.tile-container {
  margin: 10px;
  min-height: 368px;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
}

.tile-overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
}
</style>
