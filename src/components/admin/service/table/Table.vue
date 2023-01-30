<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" v-for="item in header" :key="item">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in list" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.description }}</td>
        <td>
          <button type="button" class="btn btn-success">
            <i class="fa fa-edit"></i>
          </button>
          <button type="button" class="btn btn-danger">
            <i class="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <modal title="Contactado por" :contact="objModal" id="modalContacto"></modal>
</template>

<script>
import modal from '@/components/modal/Modal'
import { ref } from 'vue'
export default {
  name: 'serviceEdit',
  components: { modal },
  props: {
    header: Array,
    list: Array,
  },
  setup() {
    let objModal = ref({})
    const openModal = (item) => {
      objModal.value = item
      console.log(item)
    }
    return { objModal, openModal }
  },
}
</script>
<style lang="scss">
.parentPage {
  display: flex;
}
.viewConfig {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
}

.table {
  .btn {
    margin-left: 1rem;
  }
}
</style>
