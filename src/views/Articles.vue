<template>
  <navBar />
  <breadCumb bdtitle="Air Freight" bdsub="Air Freight"></breadCumb>
  <footerMain></footerMain>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navbar/Navbar'
import breadCumb from '@/components/breadcumb/BreadCumb'
import footerMain from '@/components/footer/Footer'

export default {
  name: 'HomeView',
  components: {
    navBar,
    breadCumb,
    footerMain,
  },
}
</script>
