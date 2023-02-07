<template>
  <createServiceFormMain />
</template>

<script>
import createServiceFormMain from '@/components/admin/address/form/createAddress.vue'
export default {
  name: 'serviceNew',
  components: {
    createServiceFormMain,
  },
}
</script>
<style>
.parentPage {
  display: flex;
}
.viewConfig {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
}
</style>
