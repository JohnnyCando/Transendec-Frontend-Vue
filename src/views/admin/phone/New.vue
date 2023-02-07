<template>
  <createPhone />
</template>

<script>
import createPhone from '@/components/admin/phone/form/createPhone'
export default {
  name: 'serviceNew',
  components: {
    createPhone,
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
