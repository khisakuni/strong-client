<template>
  <div>
    <hero>
      <div slot="action">
        <b-dropdown v-if="!isEditMode">
          <div slot="trigger" class="action-button">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </div>

          <b-dropdown-item @click="toggleEditMode">Edit</b-dropdown-item>
          <b-dropdown-item @click="deleteWorkout">Delete</b-dropdown-item>
        </b-dropdown>

        <div v-if="isEditMode" class="action-button" @click="saveWorkout">
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
      </div>
    </hero>
    <section class="hero" v-bind:style="{ 'background-image': 'url(' + imageUrl + ')' }">
      <div class="hero-overlay">
        <div class="image-edit-button" v-if="isEditMode">
          <p class="insta-link">https://instagram.com/p/<input type="text" v-model="instagramId" /></p>
        </div>
        <h1 v-if="!isEditMode">{{workout.name}}</h1>
        <input v-if="isEditMode" type="text" v-model="name" class="name-input" />
      </div>
    </section>
    <article>
      <pre v-if="!isEditMode">{{workout.description}}</pre>
      <textarea v-if="isEditMode" rows="4" cols="50" class="description-input" v-model="description">
      </textarea>
    </article>
  </div>
</template>

<script>
import { get, put, destroy } from '@/util/http'
import Hero from '@/components/hero'

export default {
  props: ['id'],
  components: { Hero },
  mounted: function () {
    this.getWorkout()
  },
  data: () => ({
    workout: {},
    error: null,
    isEditMode: false,
    name: '',
    description: '',
    instagramId: ''
  }),
  methods: {
    getWorkout: function () {
      get(this.apiURL)
        .then(this.handleSuccess)
        .catch(err => { this.error = err })
    },
    toggleEditMode: function () {
      this.isEditMode = !this.isEditMode
    },
    saveWorkout: function () {
      put(this.apiURL, { body: this.workoutJSON })
        .then(res => {
          this.toggleEditMode()
          this.handleSuccess(res)
        })
        .catch(err => { this.error = err })
    },
    handleSuccess: function (response) {
      this.workout = response
      this.name = this.workout.name
      this.description = this.workout.description
      this.instagramId = this.workout.instagramId
    },
    deleteWorkout: function () {
      if (window.confirm(`Are you sure you want to delete the workout: ${this.workout.name}?`)) {
        destroy(this.apiURL).then(() => { this.$router.push('/') })
      }
    }
  },
  computed: {
    imageUrl: function () {
      return `https://instagram.com/p/${this.workout.instagramId}/media?size=l`
    },
    workoutJSON: function () {
      return {
        name: this.name,
        description: this.description,
        instagramId: this.instagramId
      }
    },
    apiURL: function () {
      return `${process.env.API_DOMAIN}/api/v1/workouts/${this.id}`
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

section {
  &.hero {
    min-height: 300px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center -280px;
    margin-top: 20px;
    position: relative;

  }

  h1 {
    display: inline-block;
    text-transform: uppercase;
    color: $white;
    padding: 20px 80px;
    border: 3px solid $white;
    font-weight: bold;
  }
}
.hero-overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);

  height: 100%;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
}

pre {
  padding-top: 20px;
  text-align: left;
}

.action-button {
  border-radius: 50%;
  border: 1px solid $dark-grey;
  color: $dark-grey;
  padding: 10px 13px;
  cursor: pointer;
  display: inline-block;
}

.name-input {
  background: unset;
  color: $white;
  padding: 20px 80px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 30px;
  border: 3px solid $white;
}

.description-input {
  text-align: left;
  width: 100%;
  margin-top: 20px;
  font-family: 'Varela', sans-serif;
}

.image-edit-button {
  position: absolute;
  top: 0;
  right: 0;
}

.insta-link {
  background: $white;
}
</style>
