<template>
  <div className="wpo-about-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="wpo-about-img">
            <img src="@/assets/images//about/about.svg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 sec-p">
          <div className="wpo-about-content">
            <div className="wpo-about-icon">
              <i className="fi flaticon-travel"></i>
            </div>
            <h2>¿Quienes somos?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less
            </p>
            <span>Long established fact that a reader</span>
            <span>We making it look like readable English.</span>
            <span>Long established fact that a reader</span>
          </div>
          <div className="signature-section">
            <div className="si-text">
              <p>Ketty Raigott</p>
              <span>Chairman & Chief Executive Officer</span>
            </div>
            <img src="@/assets/images//about/1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About2Main',
  components: {},
  setup() {},
}
</script>

<style>
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
</style>
