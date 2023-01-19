<template>
  <div class="wpo-section-style-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 col-d">
          <div class="wpo-section-item-2">
            <div class="wpo-section-icon">
              <i class="fi flaticon-truck"></i>
            </div>
            <div class="wpo-section-content">
              <p>
                <Link to="/ocean">Montacargas</Link>
              </p>
              <span>Calidad 100% Garantizada en el servicio.</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-d"></div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-d">
          <div class="wpo-section-item-2">
            <div class="wpo-section-icon">
              <i class="fi flaticon-truck"></i>
            </div>
            <div class="wpo-section-content">
              <p>
                <Link to="/road">Transporte</Link>
              </p>
              <span>Calidad 100% Garantizada en el servicio.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'features2Main',
}
</script>
<style>
.wpo-section-style-2,
.wpo-section-style-3 {
  background: #fff;
}

.wpo-section-style-2 .wpo-section-item,
.wpo-section-style-3 .wpo-section-item {
  overflow: hidden;
}

.wpo-section-style-2 .wpo-section-icon,
.wpo-section-style-3 .wpo-section-icon {
  margin-top: 0;
  float: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.wpo-section-style-2 .wpo-section-content p a:hover,
.wpo-section-style-3 .wpo-section-content p a:hover {
  color: #34ccff;
}

.wpo-section-style-2 .wpo-section-content,
.wpo-section-style-3 .wpo-section-content {
  text-align: left;
  overflow: hidden;
  padding-right: 60px;
}

.wpo-section-style-2 .wpo-section-content span,
.wpo-section-style-3 .wpo-section-content span {
  font-size: 16px;
  color: #777;
}

.wpo-section-style-2 .wpo-section-icon i.fi,
.wpo-section-style-3 .wpo-section-icon i.fi {
  padding: 0;
  width: 90px;
  height: 90px;
  background: #34ccff;
  border-radius: 50%;
  line-height: 75px;
  text-align: center;
  margin-top: 35px;
  margin-right: 20px;
  color: #fff;
  border: 6px solid #d4f1fa;
}

.wpo-section-style-2 .wpo-section-content,
.wpo-section-style-3 .wpo-section-content {
  padding-right: 24px;
}
</style>
