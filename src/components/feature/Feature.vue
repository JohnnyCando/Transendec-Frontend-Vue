<template>
  <div class="wpo-section-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-6 col-d">
          <div class="wpo-section-item">
            <div class="wpo-section-icon">
              <i class="fi flaticon-ship"></i>
            </div>
            <div class="wpo-section-content">
              <p><router-link to="/ocean">Oceane Freight</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-6 col-d">
          <div class="wpo-section-item">
            <div class="wpo-section-icon">
              <i class="fi flaticon-truck"></i>
            </div>
            <div class="wpo-section-content">
              <p><router-link to="/road">Road Freight</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-6 col-d">
          <div class="wpo-section-item">
            <div class="wpo-section-icon">
              <i class="fi flaticon-plane"></i>
            </div>
            <div class="wpo-section-content">
              <p><router-link to="/freight">Air Freight</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-6 col-d">
          <div class="wpo-section-item">
            <div class="wpo-section-icon">
              <i class="fi flaticon-delivery"></i>
            </div>
            <div class="wpo-section-content">
              <p><router-link to="#">Warehousing</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature2Main',
  components: {},
  setup() {},
}
</script>

<style scoped>
.wpo-section-area,
.wpo-section-style-2,
.wpo-section-area-3 {
  background: #f5f5f5;
}
.wpo-section-icon {
  text-align: center;
  margin-top: -60px;
}
.wpo-section-content {
  text-align: center;
  padding: 30px 0 10px;
  transition: all 0.5s;
}
.wpo-section-item:hover .wpo-section-content {
  background: #34ccff;
  color: #fff;
}
.wpo-section-item:hover .wpo-section-content p a {
  color: #fff;
}
.wpo-section-item:hover .wpo-section-icon i.fi {
  background: #34ccff;
  color: #fff;
}
.wpo-section-content p {
  font-size: 24px;
  font-weight: 400;
  transition: all 0.5s;
}
.wpo-section-content p a {
  color: #333;
  transition: all 0.5s;
}
.wpo-section-icon i.fi {
  background: #f5f5f5;
  padding: 47px 30px 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.5s;
}
.col-d {
  padding: 0;
}

.wpo-section-area-3 .wpo-section-content {
  padding: 35px 0;
  padding-bottom: 20px;
}
.wpo-section-area-3 .wpo-section-icon {
  text-align: center;
  margin-top: -35px;
}
.wpo-section-area-3 .wpo-section-content p a:hover {
  color: #34ccff;
}

.wpo-section-area-3 .wpo-section-icon .fi {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
}

.wpo-section-area-3 .wpo-section-content:hover {
  background: none;
}

.wpo-section-area-3 .wpo-section-content:hover p a {
  color: #333;
}
.wpo-section-area-3 .wpo-section-content p a:hover {
  color: #34ccff;
}
</style>
