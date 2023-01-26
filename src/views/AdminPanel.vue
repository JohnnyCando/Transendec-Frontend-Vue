<template>
  <div class="parentPage">
    <sideBar />
    <div class="viewConfig"><createServiceFormMain /></div>
  </div>
</template>

<script>
import createServiceFormMain from '@/components/servicios-admin/create-service-parent'
import sideBar from '@/components/sidebaradmin/Sidebar'
export default {
  name: 'AdminPanelView',
  components: {
    createServiceFormMain,
    sideBar,
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
