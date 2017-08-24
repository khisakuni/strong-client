<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child" v-for="workouts in workoutsByTiles">
          <div class="tile">
            <workout-tile :key="workout.id" class="tile" v-for="workout in workouts" :workout="workout"></workout-tile>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import WorkoutTile from '@/components/WorkoutTile'

const WORKOUTS_PER_PARENT_TILE = 3

export default {
  name: 'workouts-tiles',
  props: ['workouts'],
  components: { WorkoutTile },
  computed: {
    workoutsByTiles: function () {
      return _.chunk(this.workouts, WORKOUTS_PER_PARENT_TILE)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.workouts-container {
}
</style>

