<template>
  <div class="wpo-features-area">
    <div class="container">
      <div class="wpo-section-title text-center">
        <span>Nosotros proporcionamos lo mejor</span>
        <h2>Nuestras increíbles características</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="wpo-features-item-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="wpo-feature-wrap">
                <div class="feature-icon3">
                  <i class="fi flaticon-truck"></i>
                </div>
                <div class="wpo-features-text">
                  <h3>Puntualidad</h3>
                  <p>
                    La puntualidad en la entrega es el valor agregado al
                    servicio que la empresa brinda, en ella se refleja el
                    compromiso.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="wpo-features-item-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="wpo-feature-wrap">
                <div class="feature-icon3">
                  <i class="fi flaticon-trolley"></i>
                </div>
                <div class="wpo-features-text">
                  <h3>Actitud de servicio</h3>
                  <p>
                    Cumplir y satisfacer los requerimientos de nuestros clientes
                    con eficiencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="wpo-features-item">
            <div class="wpo-feature-img">
              <img :src="imgfe" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="wpo-features-item">
            <div class="col-lg-12 col-md-6 col-sm-12">
              <div class="wpo-feature-wrap">
                <div class="wpo-features-icon">
                  <i class="fi flaticon-truck-1"></i>
                </div>
                <div class="wpo-features-text">
                  <h3>Confiabilidad</h3>
                  <p>
                    Brindar el servicio de forma correcta desde el primer
                    momento en nuestros procesos con formalidad y exactitud.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="wpo-features-item">
            <div class="col-lg-12 col-md-6 col-sm-12">
              <div class="wpo-feature-wrap">
                <div class="wpo-features-icon">
                  <i class="fi flaticon-truck-1"></i>
                </div>
                <div class="wpo-features-text">
                  <h3>Experiencia</h3>
                  <p>
                    Prestigio y experiencia en el manejo y transporte de carga
                    pesada.
                  </p>
                </div>
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
import { ref } from 'vue'
import feimg from '@/assets/images/features/1.png'

export default {
  name: 'wpoFeaturesMain',
  setup() {
    let imgfe = ref(feimg)
    return {
      imgfe,
    }
  },
}
</script>
<style>
.wpo-features-area {
  position: relative;
  padding: 100px 0 70px;
}

.fetures-img {
  position: absolute;
  left: 8%;
  top: 14%;
}

.fetures-img img {
  max-width: 100%;
}

.wpo-features-icon {
  margin-bottom: 18px;
}

.feature-icon3 {
  margin-bottom: 10px;
}

.wpo-section-title2 h2:before {
  left: 0;
}

.wpo-section-title2 h2 {
  margin-bottom: 30px;
}

.wpo-features-text p {
  padding-top: 10px;
}

.wpo-features-text h3 {
  font-size: 25px;
}

.wpo-features-item .fi {
  color: #34ccff;
}

.wpo-features-icon2 {
  transform: rotate(45deg);
  display: inline-block;
}

.wpo-feature-wrap {
  margin-bottom: 35px;
}

.wpo-features-area {
  position: relative;
}

.wpo-features-area:before {
  content: '';
  position: absolute;
  left: 22%;
  top: 27%;
  width: 53%;
  height: 64%;
  background: url('@/assets/images/features/2.png') no-repeat center
    center/cover;
  z-index: -2;
}

.wpo-features-item-2 {
  text-align: right;
}

.wpo-features-area .wpo-features-icon,
.wpo-features-area .wpo-features-icon2,
.wpo-features-area .feature-icon3 {
  width: 90px;
  height: 90px;
  background: #34ccff;
  border-radius: 50%;
  line-height: 75px;
  text-align: center;
  color: #fff;
  border: 6px solid #d4f1fa;
}

.wpo-features-area .wpo-features-item .fi {
  color: #fff;
}

.wpo-features-area .feature-icon3 {
  margin-bottom: 10px;
  display: inline-block;
}

.wpo-features-area .wpo-feature-img {
  text-align: center;
}
</style>
