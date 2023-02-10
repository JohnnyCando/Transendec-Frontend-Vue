<template>
  <navBar />
  <breadCumb :bdtitle="title" bdsub="servicios"></breadCumb>
  <transportAir :data="myService"></transportAir>
  <newSletter></newSletter>
  <footerMain></footerMain>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navbar/Navbar'
import breadCumb from '@/components/breadcumb/BreadCumb'
import transportAir from '@/components/transportAir/TransportAir'
import footerMain from '@/components/footer/Footer'
import newSletter from '@/components/newSletter/NewSletter'
import { useRoute } from 'vue-router'
import service from '@/mixins/service.js'
import { ref, watch } from 'vue'

export default {
  name: 'HomeView',
  mixins: [service],
  components: {
    navBar,
    breadCumb,
    transportAir,
    footerMain,
    newSletter,
  },
  setup() {
    let title = ref('')
    let myService = ref({})
    const route = useRoute()
    watch(
      () => route.params.id,
      () => {
        getService(route.params.id)
      },
    )
    const getService = async (id) => {
      const data = {
        url: `/services/${id}`,
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }
      const resp = await service.methods.callService(data)
      if (resp.id) {
        title.value = resp.name
        myService.value = resp
      }
      return resp
    }
    if (route.params.id) {
      getService(route.params.id)
    }
    return {
      myService,
      title,
    }
  },
}
</script>
