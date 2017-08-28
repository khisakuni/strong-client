<template>
  <div>
    <hero>
      <h1 slot="action" class="add-action" @click="toggleModal">+</h1>
    </hero>
    <h1 v-if="loading">Loading...</h1>
    <div class="modal" v-bind:class="{ 'is-active': modalIsOpen }">
      <div class="modal-background" @click="toggleModal"></div>
      <div class="modal-content">
        <div class="card">
          <div class="card-content">
            <header>
              <h3 class="card-header-title">Create New Workout</h3>
            </header>
            <workout-form :after-submit="afterSubmitNewWorkout"></workout-form>
          </div>
        </div>
      </div>
    </div>
    <workouts-tiles :workouts="workouts"></workouts-tiles>
  </div>
</template>

<script>
import { get } from '@/util/http'
import WorkoutsTiles from '@/components/WorkoutsTiles'
import Hero from '@/components/hero'
import WorkoutForm from './WorkoutForm'

export default {
  name: 'workouts',
  components: { WorkoutsTiles, Hero, WorkoutForm },
  mounted: function () {
    this.getWorkouts()
  },
  data: () => ({
    workouts: [],
    error: null,
    modalIsOpen: false,
    loading: false
  }),
  methods: {
    getWorkouts: function () {
      this.loading = true
      const path = `${process.env.API_DOMAIN}/api/v1/workouts`
      get(path)
        .then(res => {
          this.workouts = res
          this.loading = false
        })
        .catch(error => {
          this.error = error
          this.loading = false
        })
    },
    toggleModal: function () {
      this.modalIsOpen = !this.modalIsOpen
    },
    afterSubmitNewWorkout: function () {
      this.getWorkouts()
      this.toggleModal()
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.add-action {
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 30px;
  border: 1px solid $dark-grey;
  display: inline-block;
  cursor: pointer;

  transition: background-color 0.3s ease;
  transition: color 0.3s ease;

  &:hover {
    background-color: $dark-grey;
    color: $white;
  }
}

</style>
