<template>
  <div class="wpo-about-style-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-6 about-wrap">
          <div class="wpo-about-content">
            <div class="wpo-about-icon">
              <i class="fi flaticon-travel"></i>
            </div>
            <h2>¿Quienes somos?</h2>
            <p>
              Contamos con una moderna y amplia flota de vehículos de no más de
              5 años de antigüedad, equipados con tecnología GPS y herramientas
              tecnológicas manejadas por profesionales
            </p>
            <p>
              que garantizan un TRANSPORTE SEGURO y EFICIENTE de su mercancía
              hacia el Norte del país. Recojo - Reparto de Carga y Mercancías.
            </p>
            <span>
              Además atendemos vuestras URGENCIAS de transporte de carga
              paletizada.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'aboutMain',
}
</script>
<style>
.wpo-about-style-2 {
  background: url('@/assets/images/about/5c.jpg') no-repeat center top / cover;
}

.wpo-about-style-2 .about-wrap {
  background: rgba(20, 36, 64, 0.8);
  padding: 50px;
  float: left;
}

.wpo-about-area,
.wpo-about-style-2,
.wpo-about-style-3 {
  padding: 100px 0;
}

.wpo-about-content .wpo-about-icon i {
  color: #34ccff;
}

.wpo-about-content h2 {
  font-size: 30px;
  font-weight: 700;
  position: relative;
  padding-bottom: 8px;
  margin-bottom: 30px;
}

.wpo-about-content h2:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 5px;
  background: #34ccff;
}

.sec-p {
  padding-left: 30px;
}

.wpo-about-img img {
  padding-top: 50px;
}

.wpo-about-content p {
  margin-bottom: 30px;
}

.wpo-about-content span {
  display: block;
  padding-left: 30px;
  padding-bottom: 20px;
  position: relative;
}

.wpo-about-content span:before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 15px;
  height: 15px;
  background: #34ccff;
}

.wpo-about-content .wpo-about-icon i:before {
  font-size: 60px;
}

.signature-section {
  overflow: hidden;
}

.si-text {
  float: left;
  margin-top: 20px;
}

.si-text p {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.signature-section img {
  float: right;
}

/* ABOUT2*/

.wpo-about-style-2 .about-wrap {
  background: rgba(20, 36, 64, 0.8);
  padding: 50px;
  float: left;
}

.wpo-about-style-2 .content {
  padding: 50px;
}

.wpo-about-style-2 .wpo-about-content h2,
.wpo-about-style-3 .wpo-about-content h2 {
  color: #fff;
}

.wpo-about-style-2 .wpo-about-content p,
.wpo-about-style-3 .wpo-about-content p {
  color: #fff;
}

.wpo-about-style-2 .wpo-about-content span,
.wpo-about-style-3 .wpo-about-content span {
  color: #fff;
}

.wpo-about-style-2 .si-text p,
.wpo-about-style-3 .si-text p {
  color: #fff;
}

.wpo-about-style-2 .si-text span,
.wpo-about-style-3 .si-text span {
  color: #fff;
}

.wpo-section-item-2 {
  padding: 25px 0 50px;
}
</style>
