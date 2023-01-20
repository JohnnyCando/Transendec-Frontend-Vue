<template>
  <div :className="className">
    <headerMain></headerMain>
  </div>
</template>

<script>
// @ is an alias to /src
import headerMain from '@/components/header/Header'
import { ref } from 'vue'

export default {
  name: 'navBar',
  components: {
    headerMain,
  },
  setup() {
    let className = ref('')
    const handleScroll = () => {
      let scroll = Math.round(document.documentElement.scrollTop)
      className.value =
        scroll > 80 ? 'fixed-navbar animated fadeInDown active' : 'fixed-navbar'
    }
    window.addEventListener('scroll', handleScroll)
    return { className }
  },
}
</script>
