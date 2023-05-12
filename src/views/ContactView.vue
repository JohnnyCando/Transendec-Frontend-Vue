<template>
  <div>
    <navBar />
    <breadCumbMain :bdtitle="bdtitle" :bdsub="bdsub" />
    <contactFormMain />
    <footerMain />
  </div>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navbar/Navbar'
import breadCumbMain from '@/components/breadcumb/BreadCumb'
import contactFormMain from '@/components/contact/ContactForm'
import footerMain from '@/components/footer/Footer'
import { ref } from 'vue'
export default {
  name: 'AboutView',
  components: {
    navBar,
    breadCumbMain,
    contactFormMain,
    footerMain,
  },
  setup() {
    let bdtitle = ref('Contact Us')
    let bdsub = ref('Contact')
    const topPage = () => {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0
    }
    topPage()
    return {
      bdtitle,
      bdsub,
    }
  },
}
</script>
