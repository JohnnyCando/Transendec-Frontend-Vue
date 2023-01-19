<template>
  <div>
    <navBar />
    <breadCumbMain :bdtitle="bdtitle" :bdsub="bdsub" />
    <features2Main />
    <aboutMain />
  </div>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navbar/Navbar'
import features2Main from '@/components/features2/Features2'
import breadCumbMain from '@/components/breadcumb/BreadCumb'
import aboutMain from '@/components/about/About'
import { ref } from 'vue'
export default {
  name: 'HomeView',
  components: {
    navBar,
    features2Main,
    aboutMain,
    breadCumbMain,
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
