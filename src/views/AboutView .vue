<template>
  <div>
    <navBar />
    <breadCumbMain :bdtitle="bdtitle" :bdsub="bdsub" />
    <features2Main />
    <aboutMain />
    <missionMain />
    <newSletter></newSletter>
  </div>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navbar/Navbar'
import features2Main from '@/components/features2/Features2'
import breadCumbMain from '@/components/breadcumb/BreadCumb'
import aboutMain from '@/components/about/About'
import newSletter from '@/components/newSletter/NewSletter'
import missionMain from '@/components/mission/Mission'
import { ref } from 'vue'
export default {
  name: 'AboutView',
  components: {
    navBar,
    features2Main,
    aboutMain,
    breadCumbMain,
    missionMain,
    newSletter,
  },
  setup() {
    let bdtitle = ref('About Us')
    let bdsub = ref('About')
    return {
      bdtitle,
      bdsub,
    }
  },
}
</script>
