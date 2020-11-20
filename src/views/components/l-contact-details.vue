<template>
  <div class="contact-details">
    <div class="cdTitle">Contact Details</div>
    <div class="cd-item">
      <i class="fa fa-mobile fa-pull-right"></i>
      <a>{{ contactDetails.mobile }}</a>
    </div>
    <div class="cd-item">
      <i class="fa fa-envelope"></i>
      <a href="mailto:louie.je@gmail.com">louie.je@gmail.com</a>
    </div>
    <div class="cd-item">
      <i class="fa fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/louiejedecatoria/">louiejedecatoria</a>
    </div>
    <div class="cd-item">
      <i class="fa fa-address-card-o"></i>
      <a>B58 L45, Las Palmas Subd., Caysio, Sta. Maria, Bulacan</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      contactDetails: state => state.main.userData.contactDetails,
    }),
  }
}
</script>