<template>
  <div class="service-style-1">
    <div class="container">
      <div class="col-l2">
        <div class="wpo-section-title text-center">
          <span>Nosotros proporcionamos lo mejor</span>
          <h2>Nuestra Misión</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="wpo-service-item">
            <div class="wpo-service-single">
              <div class="service-img">
                <img :src="missionSafatyEnsure" alt="" />
              </div>
              <div class="service-content">
                <h3>Seguridad Garantizada</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="wpo-service-item">
            <div class="wpo-service-single">
              <div class="service-img">
                <img :src="missionBUiltComunity" alt="" />
              </div>
              <div class="service-content2">
                <h3>Construir una Comunidad de Confianza</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="wpo-service-item">
            <div class="wpo-service-single">
              <div class="service-img">
                <img :src="missionDelivery" alt="" />
              </div>
              <div class="service-content3">
                <h3>Entrega a tiempo</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import simg1 from '@/assets/images/about/tiempo.jpg'
import simg2 from '@/assets/images/about/comunidad.jpg'
import simg3 from '@/assets/images/about/seguridad.png'
import { ref } from 'vue'
export default {
  name: 'missionMain',
  setup() {
    let missionSafatyEnsure = ref(simg3)
    let missionBUiltComunity = ref(simg2)
    let missionDelivery = ref(simg1)
    return {
      missionSafatyEnsure,
      missionBUiltComunity,
      missionDelivery,
    }
  },
}
</script>
<style>
.service-style-1 .service-content,
.service-style-1 .service-content2,
.service-style-1 .service-content3 {
  top: 76%;
}

.service-style-1 .wpo-service-single:hover .wpo-service-content,
.service-style-1 .wpo-service-single:hover .wpo-service-content2,
.service-style-1 .wpo-service-single:hover .wpo-service-content3 {
  top: 0;
}

.service-style-1 {
  background: #fff;
  padding: 100px 0 70px;
}
</style>
