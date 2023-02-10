<template>
  <section class="hero hero-slider-wrapper hero-style-1">
    <div class="hero-slider">
      <carousel
        :items-to-show="1"
        :autoplay="2500"
        :transition="2000"
        :wrap-around="true"
      >
        <slide class="slide1 slide">
          <div class="container">
            <div class="row">
              <div class="col col-lg-9 slide-caption">
                <h2>
                  <span>Brindamos la mejor solución</span>
                  <span>Para Su Transporte.</span>
                </h2>
                <div class="btns">
                  <div class="btn-style">
                    <router-link to="/">Contactanos</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="slide2 slide">
          <div class="container">
            <div class="row">
              <div class="col col-lg-9 slide-caption">
                <h2>
                  <span>Brindamos la mejor solución</span>
                  <span>Para Su Transporte.</span>
                </h2>
                <div class="btns">
                  <div class="btn-style">
                    <router-link to="/">Contactanos</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="slide3 slide">
          <div class="container">
            <div class="row">
              <div class="col col-lg-9 slide-caption">
                <h2>
                  <span>Brindamos la mejor solución</span>
                  <span>Para Su Transporte.</span>
                </h2>
                <div class="btns">
                  <div class="btn-style">
                    <router-link to="/">Contactanos</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: 'sliderMain',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hero {
  position: relative;
  height: 900px;
  overflow: hidden;
}

.slide {
  position: relative;
}

.slide:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.4;
}

.slide-caption {
  z-index: 19;
  padding-bottom: 30px;
}

.hero-style-1 .slide-caption {
  z-index: 19;
  padding-bottom: 20px;
  text-align: left;
}

.hero .slide {
  height: 900px;
  position: relative;
  background-repeat: no-repeat;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
}

.slide1 {
  background: url('@/assets/images/slider/4.jpg') center center/cover no-repeat
    local;
}

.slide2 {
  background: url('@/assets/images/slider/1.jpg') center center/cover no-repeat
    local;
}

.slide3 {
  background: url('@/assets/images/slider/3.jpg') center center/cover no-repeat
    local;
}

.hero .slide .slider-bg {
  display: none;
}

.hero .slide:focus {
  outline: none;
}

.hero .slide .container {
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.carousel__prev,
.carousel__next {
  width: 50px;
  height: 50px;
  z-index: 10;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #fff;
  border-radius: 50%;
}

.carousel__prev {
  left: 25px;
}

.carousel__prev:before {
  font-family: 'FontAwesome';
  content: '\f104';
  opacity: 1;
  color: #fff;
}

.carousel__next {
  right: 25px;
}
.carousel__icon {
  display: none;
}
.carousel__next:before {
  font-family: 'FontAwesome';
  content: '\f105';
  opacity: 1;
  color: #fff;
}

.carousel__prev:hover,
.carousel__next:hover {
  background: #34ccff;
  border: none;
}

.carousel__prev:hover:before,
.carousel__next:hover:before {
  color: #fff;
}

.hero .slick-dots {
  bottom: 35px;
  color: red;
}

.hero .slick-dots li {
  margin: 10px;
}

.slick-dots li.slick-active button:before {
  opacity: 1;
  color: #34ccff;
  border: 1px solid #34ccff;
  border-radius: 100%;
}

.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}

.slick-dots li button:before {
  font-size: 12px;
  line-height: 25px;
  width: 25px;
  height: 25px;
  color: #fff;
  opacity: 1;
}
/*================================
  0.4 hero style 1
================================*/
.hero-style-1 .slide-caption p,
.hero-style-2 .slide-caption p,
.hero-style-3 .slide-caption p {
  font-size: 16px;
  color: #fff;
  line-height: 30px;
  font-weight: 300;
  margin-bottom: 40px;
}

.hero-style-1 .slide-caption p span,
.hero-style-2 .slide-caption p span,
.hero-style-3 .slide-caption p span {
  color: #c1b696;
}

.hero-style-1 .slide-caption span,
.hero-style-2 .slide-caption span,
.hero-style-3 .slide-caption span {
  margin-bottom: 10px;
  display: inline-block;
  font-size: 30px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}

@media (max-width: 450px) {
  .hero-style-1 .slide-caption h2,
  .hero-style-2 .slide-caption h2,
  .hero-style-3 .slide-caption h2 {
    font-size: 30px;
  }
}

@media (max-width: 450px) {
  .hero-style-1 .slide-caption h2 span,
  .hero-style-2 .slide-caption h2 span,
  .hero-style-3 .slide-caption h2 span {
    padding: 4px 0;
  }
}

.hero-style-1 .slide-caption span,
.hero-style-2 .slide-caption span,
.hero-style-3 .slide-caption span {
  font-size: 50px;
  font-weight: 600;
  color: white;
  line-height: 75px;
  margin-bottom: 0;
}

.half-colt {
  width: 100%;
  padding-bottom: 30px;
}

.header-p {
  position: relative;
}

.hero-contact {
  width: 400px;
  height: 610px;
  position: absolute;
  bottom: -210px;
  right: 15px;
  z-index: 999;
  background-color: rgba(7, 47, 79, 0.76);
  padding: 50px 40px;
}

.hero-contact h2 {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
}

.hero-contact p {
  color: #fffefe;
  margin-bottom: 30px;
}

.hero-contact form input,
.hero-contact form textarea {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.38);
  height: 50px;
  background: rgba(255, 255, 255, 0.02);
}

.hero-contact form textarea {
  height: 130px;
}

.hero.hero-style-1 .slide-caption h2,
.hero.hero-style-2 .slide-caption h2,
.hero.hero-style-3 .slide-caption h2 {
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  line-height: 90px;
  margin: 33px 0;
}

.hero-style-3 {
  height: 100vh;
  min-height: 850px;
}

@media (max-width: 1200px) {
  .hero-style-1 .slide-caption span,
  .hero-style-2 .slide-caption span,
  .hero-style-3 .slide-caption span {
    font-size: 50px;
  }
}

@media (max-width: 991px) {
  .hero-style-1 .slide-caption span,
  .hero-style-2 .slide-caption span,
  .hero-style-3 .slide-caption span {
    font-size: 40px;
  }
}

@media (max-width: 767px) {
  .hero-style-1 .slide-caption span,
  .hero-style-2 .slide-caption span,
  .hero-style-3 .slide-caption span {
    font-size: 28px;
    line-height: 0;
  }

  .hero.hero-style-1 .slide-caption h2,
  .hero.hero-style-2 .slide-caption h2,
  .hero.hero-style-3 .slide-caption h2 {
    line-height: 48px;
  }
}
</style>
