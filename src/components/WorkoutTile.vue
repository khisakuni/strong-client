<template>
  <div class="tile-container" v-bind:style="{ 'background-image': 'url(' + imageUrl + ')' }">
    <router-link :to="showPagePath">
      <div class="tile-overlay">
        <div class="tile-body">
          <h3 class="tile-title">{{workout.name}}</h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'workout-tile',
  props: ['workout'],
  computed: {
    imageUrl: function () {
      return `https://instagram.com/p/${this.workout.instagramId}/media?size=m`
    },
    showPagePath: function () {
      return `/workouts/${this.workout.id}`
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

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
  cursor: pointer;
}

.tile-overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, .8);
  }
}

.tile-body {
  height: 90%;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
}

.tile-title {
  text-transform: uppercase;
  color: $white;
  border: 1px solid $white;
  padding: 20px 60px;
}
</style>
