<template>
  <navBar />
  <sliderMain />
  <features2Main />
  <aboutMain />
  <servicesAreaMain />
  <truckAreaMain />
  <wpoFeaturesMain />
  <CounterSection subclass="counter-style-2"></CounterSection>
  <TeamMain></TeamMain>
  <BlogSection2></BlogSection2>
  <newSletter></newSletter>
  <footerMain></footerMain>
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
import footerMain from '@/components/footer/Footer'
import newSletter from '@/components/newSletter/NewSletter'
import BlogSection2 from '@/components/blogSection2/BlogSection2'
import TeamMain from '@/components/team/Team'
import CounterSection from '@/components/counterSection/CounterSection'

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
    footerMain,
    newSletter,
    BlogSection2,
    TeamMain,
    CounterSection,
  },
}
</script>
