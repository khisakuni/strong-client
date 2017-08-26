<template>
  <div>
    <div class="hero-container">
      <div class="columns">
        <div class="column is-one-third">
        </div>
        <div class="column is-one-third has-centered-text">
          <router-link to="/">
            <h1 class="hero-text">Strong</h1>
          </router-link>
        </div>
        <div class="column is-one-third action-container">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  data: () => ({
    modalIsOpen: false
  })
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.hero-text {
  color: $dark-grey;
  display: inline-block;
  padding: 20px 60px;
  border: 1px solid $dark-grey;
}

.hero-container {
  padding-top: 20px;
}

.action-container {
  padding-top: 30px;
}

</style>
