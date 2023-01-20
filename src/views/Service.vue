<template>
  <navBar />
  <breadCumb bdtitle="Air Freight" bdsub="Air Freight"></breadCumb>
  <transportAir></transportAir>
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

export default {
  name: 'HomeView',
  components: {
    navBar,
    breadCumb,
    transportAir,
    footerMain,
    newSletter,
  },
}
</script>
