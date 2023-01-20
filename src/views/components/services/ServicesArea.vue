<template>
  <div class="wpo-service-area">
    <div class="container">
      <div class="col-l2">
        <div class="wpo-section-title text-center">
          <span>Proporcionamos lo mejor de</span>
          <h2>Nuestros Servicios</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="wpo-service-item">
            <div class="wpo-service-single">
              <div class="service-img">
                <img :src="imageTransport" alt="" />
              </div>
              <div class="service-content">
                <h3>Transporte</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="wpo-service-item">
            <div class="wpo-service-single">
              <div class="service-img">
                <img :src="imageMontacargas" alt="" />
              </div>
              <div class="service-content4">
                <h3>Montacargas</h3>
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
import sv4 from '@/assets/images/service/4.jpg'
import sv1 from '@/assets/images/service/1.jpg'
import { ref } from 'vue'

export default {
  name: 'servicesAreaMain',
  setup() {
    let imageTransport = ref(sv1)
    let imageMontacargas = ref(sv4)
    return {
      imageTransport,
      imageMontacargas,
    }
  },
}
</script>
