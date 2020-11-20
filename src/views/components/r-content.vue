<template>
  <div class="rp-component">
    <div class="rpc-title">{{ isExperience ? 'Experience': 'Education'}}</div>
    <div class="rpc-divider"></div>
    <Item v-for="(itemData, index) in isExperience ? userData.experience : userData.education" :item="itemData" :key='index' :isExperience="isExperience"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Item from './r-content-item'

export default {
  props: [ 'isExperience', 'userData' ],
  components: {
    Item,
  },
}
</script>