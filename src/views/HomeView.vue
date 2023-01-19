<template>
  <navBar />
  <sliderMain />
  <features2Main />
  <aboutMain />
  <servicesAreaMain />
  <truckAreaMain />
  <wpoFeaturesMain />
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navbar/Navbar'
import sliderMain from '@/components/hero/Slider'
import features2Main from '@/components/features2/Features2'
import aboutMain from '@/components/about/About'
import servicesAreaMain from '@/components/services/ServicesArea'
import truckAreaMain from '@/components/truck/Truck'
import wpoFeaturesMain from '@/components/wpofeatures/WpoFeatures'
export default {
  name: 'HomeView',
  components: {
    navBar,
    sliderMain,
    features2Main,
    aboutMain,
    servicesAreaMain,
    truckAreaMain,
    wpoFeaturesMain,
  },
}
</script>
