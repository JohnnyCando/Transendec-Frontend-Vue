<template>
  <div class="section-padding">
    <h2>Listado de Direcciones</h2>
    <tableMain :header="header" :list="list"></tableMain>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import tableMain from '@/components/admin/address/table/Table'
import service from '@/mixins/service.js'

export default {
  name: 'listView',
  components: {
    tableMain,
  },
  mixins: [service],
  setup() {
    const header = ref(['Dirección', 'Tipo', 'Usuario'])
    let list = ref([])
    const getListContact = async () => {
      const data = {
        url: '/address',
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }
      const resp = await service.methods.callService(data)
      if (resp.length > 0) list.value = resp
    }
    getListContact()
    return { header, list }
  },
}
</script>
<style>
h2 {
  margin-bottom: 4rem;
}

.section-padding {
  margin: 0 2rem;
}
</style>
