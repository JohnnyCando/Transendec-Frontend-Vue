<template>
  <sidebar-menu
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
    :menu="menu"
  />
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'sideBar',
  setup() {
    const router = useRouter()
    let menu = ref([
      {
        header: 'Transendec Administrador',
        hiddenOnCollapse: true,
      },
      {
        to: '/adminpanel/dashboard',
        title: 'Dashboard',
        icon: 'fa fa-th-large',
      },
      {
        title: 'Servicios',
        icon: 'fa fa-tasks',
        child: [
          {
            to: '/adminpanel/service/list',
            title: 'Lista de Servicios',
          },
          {
            to: '/adminpanel/service/new',
            title: 'Crear Servicio',
          },
        ],
      },
      {
        to: '/adminpanel/contact/list',
        title: 'Contact',
        icon: 'fa fa-user',
      },
      {
        title: 'Teléfonos',
        icon: 'fa fa-phone',
        child: [
          {
            to: '/adminpanel/phones/list',
            title: 'Listar Telefonos',
          },
          {
            to: '/adminpanel/phones/New',
            title: 'Crear Telefono',
          },
        ],
      },
      {
        title: 'Direcciones',
        icon: 'fa fa-map-marker',
        child: [
          {
            to: '/adminpanel/address/list',
            title: 'Listar Direcciones',
          },
          {
            to: '/adminpanel/address/new',
            title: 'Crear Dirección',
          },
        ],
      },
    ])
    const onItemClick = (event, item) => {
      if (event) {
        if (!item.child && item.to) {
          router.push(item.to)
        }
      }
    }
    router.push('/adminpanel/dashboard')
    return {
      menu,
      onItemClick,
    }
  },
}
</script>
<style>
.v-sidebar-menu {
  position: inherit;
  height: 100vh;
}
</style>
