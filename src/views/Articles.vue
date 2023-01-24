<template>
  <navBar />
  <breadCumb bdtitle="Air Freight" bdsub="Air Freight"></breadCumb>
  <BlogList></BlogList>
  <footerMain></footerMain>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navbar/Navbar'
import breadCumb from '@/components/breadcumb/BreadCumb'
import footerMain from '@/components/footer/Footer'
import BlogList from '@/components/blogList/BlogList'

export default {
  name: 'HomeView',
  components: {
    navBar,
    breadCumb,
    BlogList,
    footerMain,
  },
}
</script>
