<template>
  <div class="rpc-body">
    <div class="rpcb-left">
      <p>{{ item.year }}</p>
    </div>
    <div class="rpcb-right">
      <div class="rpcb-title">{{ isExperience ? item.posTitle : item.degree }}</div>
      <div class="rpcb-desc">{{ isExperience ? item.desTitle : item.school }}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: [ 'item', 'isExperience' ],
}
</script>