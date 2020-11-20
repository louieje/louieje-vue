<template>
  <div>
    <img src="../../assets/yohann.jpg">
    <h2>{{ userData.fullName }}</h2>
    <div class="jTitle">{{ userData.position }}</div>
    <div class="left-divider"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      userData: state => state.main.userData,
    }),
  }
}
</script>