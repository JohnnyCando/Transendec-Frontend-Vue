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

export default {
  name: 'sideBar',
  setup() {
    let menu = ref([
      {
        header: 'Transendec Administrador',
        hiddenOnCollapse: true,
      },
      {
        href: '/adminpanel',
        title: 'Dashboard',
        icon: 'fa fa-user',
      },
      {
        href: '/adminpanel',
        title: 'Servicios',
        icon: 'fa fa-chart-area',
        child: [
          {
            href: '/adminpanel',
            title: 'Crear Servicio',
          },
        ],
      },
      {
        href: '/adminpanel',
        title: 'Teléfono y Direcciones',
        icon: 'fa fa-phone',
        child: [
          {
            href: '/adminpanel',
            title: 'Crear Telefono',
          },
        ],
      },
    ])
    return {
      menu,
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
