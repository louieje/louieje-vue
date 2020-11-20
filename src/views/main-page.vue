<template>
  <div class="main-page">
    <div class="left-pane">
      <HeaderDetails />
      <ContactDetails />
      <div class="left-divider"></div>
      <div class="reference">
        <div class="cdTitle">References</div>
      </div>
    </div>
    <div class="right-pane">
      <div class="rp-component-h">
        {{ userData.profSummary }}
      </div>
      <RightContent :isExperience="true" :userData="userData"/>
      <RightContent :isExperience="false" :userData="userData"/>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import HeaderDetails from './components/l-header-details'
import ContactDetails from './components/l-contact-details'
import RightContent from './components/r-content'

export default {
  components: {
    HeaderDetails,
    ContactDetails,
    RightContent,
  },

  computed: {
    ...mapState({
      userData: state => state.main.userData,
    }),
  },

  beforeMount () {
    this.$store.dispatch('getUserData')
  },
}
</script>