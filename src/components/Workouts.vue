<template>
  <div>
    <workouts-tiles :workouts="workouts"></workouts-tiles>
  </div>
</template>

<script>
import { get } from '@/util/http'
import WorkoutsTiles from '@/components/WorkoutsTiles'

export default {
  name: 'workouts',
  components: { WorkoutsTiles },
  mounted: function () {
    this.getWorkouts()
  },
  data: () => ({
    workouts: [],
    error: null
  }),
  methods: {
    getWorkouts: function () {
      const path = `${process.env.API_DOMAIN}/api/v1/workouts`
      get(path)
        .then(res => { this.workouts = res })
        .catch(error => { this.error = error })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.workouts-container {
}
</style>
