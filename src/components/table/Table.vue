<template>
  <table class="table">
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
        <td>{{ item.email }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.createdAt }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import createServiceFormMain from '@/components/contact/admin-panel/create-service-parent'
export default {
  name: 'serviceEdit',
  components: {},
  props: {
    header: Array,
    list: Array,
  },
}
</script>
<style>
.parentPage {
  display: flex;
}
.viewConfig {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
}
</style>
