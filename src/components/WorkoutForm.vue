<template>
  <div class="columns">
    <div class="column">
      <b-field label="Name">
        <b-input v-model="name" placeholder="Name of workout..."></b-input>
      </b-field>

      <b-field label="Description">
        <b-input v-model="description" type="textarea" placeholder="Description of workout..."></b-input>
      </b-field>

      <div class="field">
        <div class="columns">
          <div class="column">
            <label class="label">Instagram Short Code (Optional)</label>
          </div>
          <div class="column info-link">
            <a v-if="!showInfo" @click="toggleShowInfo">What's this?</a>
            <a v-if="showInfo" @click="toggleShowInfo">hide</a>
          </div>
        </div>

        <div class="info-paragraphs" v-if="showInfo">
          <p>
            You can optionally add any image from Instagram to your workout! 
            Simply add the <b>short code</b> of the Instagram post. 
            You can find the <b>short code</b> by looking at the URL of the post. 
            (https://www.instagram.com/p/<b>BYILzeXArrP</b>)
          </p>
        </div>

        <div class="control">
          <input v-model="instagramId" class="input" type="text" placeholder="">
        </div>
      </div>

      <button class="button" @click="createWorkout">Create</button>
    </div>
  </div>
</template>

<script>
import { post } from '@/util/http'

export default {
  name: 'workout-form',
  props: ['afterSubmit'],
  data: () => ({
    showInfo: false,
    name: '',
    description: '',
    instagramId: ''
  }),
  methods: {
    toggleShowInfo: function () {
      this.showInfo = !this.showInfo
    },
    createWorkout: function () {
      const path = `${process.env.API_DOMAIN}/api/v1/workouts`
      post(path, { body: this.workoutJSON })
        .then(this.afterSubmit)
        .catch(console.warn)
    }
  },
  computed: {
    workoutJSON: function () {
      return {
        name: this.name,
        description: this.description,
        instagramId: this.instagramId
      }
    }
  }
}
</script>

<style scoped lang="scss">
label {
  text-align: left;
}

.info-link {
  text-align: right;
  text-decoration: underline;
}

.info-paragraphs {
  text-align: left;
}

</style>
