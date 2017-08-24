<template>
  <div>
    <section class="hero" v-bind:style="{ 'background-image': 'url(' + imageUrl + ')' }">
      <div class="hero-overlay">
        <h1>{{workout.name}}</h1>
      </div>
    </section>
    <article>
      <pre>{{workout.description}}</pre>
    </article>
  </div>
</template>

<script>
import { get } from '@/util/http'

export default {
  props: ['id'],
  mounted: function () {
    this.getWorkout()
  },
  data: () => ({
    workout: {},
    error: null
  }),
  methods: {
    getWorkout: function () {
      const path = `${process.env.API_DOMAIN}/api/v1/workouts/${this.id}`
      get(path)
        .then(res => { this.workout = res })
        .catch(err => { this.error = err })
    }
  },
  computed: {
    imageUrl: function () {
      return `https://instagram.com/p/${this.workout.instagramId}/media?size=l`
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
</style>
