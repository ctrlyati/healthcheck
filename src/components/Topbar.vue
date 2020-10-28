<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <router-link to="/" class="navbar-brand">Health Check</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" v-if="count > 0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { store as userStore } from '../store/user-store'

export default {
  name: 'Topbar',
  props: {
    msg: String
  },
  computed: {
    count () {
      return userStore.state.count
    }
  },
}
</script>

<style lang="scss" scoped>

.navbar {
  background-color: $color-primary-dark;
}

</style>
