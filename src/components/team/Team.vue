<template>
  <div class="wpo-team-area-2">
    <div class="container">
      <div class="col-l2">
        <div class="wpo-section-title text-center">
          <span>We Are With You</span>
          <h2>Our Team Members</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="wpo-team-single">
            <div class="wpo-team-img">
              <img src="@/assets/images/team/1.jpg" alt="" />
              <div class="social-1st">
                <ul>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="wpo-team-content">
              <h4>Elizabeth Bannet</h4>
              <span>Logistic Maneger</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="wpo-team-single">
            <div class="wpo-team-img">
              <img src="@/assets/images/team/2.jpg" alt="" />
              <div class="social-1st">
                <ul>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="wpo-team-content">
              <h4>Johnthan Rok</h4>
              <span>Packeging Maneger</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="wpo-team-single">
            <div class="wpo-team-img">
              <img src="@/assets/images/team/3.jpg" alt="" />
              <div class="social-1st">
                <ul>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="wpo-team-content">
              <h4>Simon D’soza</h4>
              <span>Logistic Maneger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
  name: 'TeamMain',
  components: {},
  setup() {},
}
</script>

<style>
.wpo-team-area,
.wpo-team-area-2 {
  padding: 100px 0 70px;
  background: #fff;
}
.wpo-team-img {
  position: relative;
  overflow: hidden;
}

.wpo-team-img:before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #34ccff;
  opacity: 0;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
}
.wpo-team-single {
  margin-bottom: 30px;
}

.wpo-team-single:hover .wpo-team-img:before {
  opacity: 0.5;
}

.wpo-team-img img {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
}

.wpo-team-single:hover .wpo-team-img img {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
}

.social-1st {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  opacity: 0;
}

.wpo-team-single:hover .thumb-content span {
  opacity: 1;
}

.wpo-team-single:hover .social-1st {
  opacity: 1;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
}

.wpo-team-single:hover .social-1st li:nth-child(2) a {
  margin-top: 50px;
}

.wpo-team-single:hover .social-1st li:nth-child(3) a {
  margin-top: 100px;
}

.social-1st ul {
  text-align: center;
  justify-content: center;
  display: flex;
}

.social-1st li a {
  display: block;
  height: 45px;
  width: 45px;
  background: #fff;
  color: #333;
  line-height: 45px;
  border-radius: 50%;
}
.social-1st li a:hover {
  background: #34ccff;
  color: #fff;
}

.social-1st li:nth-child(2) a {
  margin-top: 0px;
  transition: all 0.3s;
}

.social-1st li:nth-child(3) a {
  margin-top: 0px;
  transition: all 0.3s;
}

.wpo-team-img {
  position: relative;
}

.team-wrap {
  margin-bottom: 30px;
}
.wpo-team-content {
  text-align: center;
  padding: 30px 0;
  background: #f5f5f5;
}
.wpo-team-content h4 {
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}
.wpo-team-content h4:hover {
  color: #34ccff;
}
.wpo-team-content span {
  font-size: 14px;
  font-weight: 400;
  color: #666;
}

.wpo-team-area-2 {
  background: #f5f5f5;
}
.wpo-team-area-2 .wpo-team-content {
  background: #fff;
}

/* Service Area  */

.wpo-service-area,
.wpo-service-s2,
.service-style-3 {
  padding: 100px 0 70px;
  background: #f5f5f5;
}
.wpo-section-title span {
  font-size: 16px;
  color: #34ccff;
}
.wpo-section-title h2 {
  font-size: 36px;
  font-weight: 700;
  color: #333;
  padding-bottom: 20px;
  margin-bottom: 60px;
  position: relative;
}
.wpo-section-title h2:before {
  content: '';
  position: absolute;
  left: 47%;
  bottom: 0;
  width: 60px;
  height: 3px;
  background: #34ccff;
}
.wpo-service-single {
  overflow: hidden;
}
.wpo-service-single {
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  margin-bottom: 30px;
}

.service-content,
.service-content2,
.service-content3,
.service-content4,
.service-content5,
.service-content6 {
  padding: 29px 40px 20px;
  position: absolute;
  left: 0;
  top: 68%;
  width: 100%;
  height: 100%;
  padding-left: 100px;
  background: #142440;
  transition: all 0.3s;
  opacity: 0.8;
}

.wpo-service-single:hover .service-content,
.wpo-service-single:hover .service-content2,
.wpo-service-single:hover .service-content3,
.wpo-service-single:hover .service-content4,
.wpo-service-single:hover .service-content5,
.wpo-service-single:hover .service-content6 {
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.wpo-service-single:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 36, 64, 0.2);
}
.service-content h3,
.service-content2 h3,
.service-content3 h3,
.service-content4 h3,
.service-content5 h3,
.service-content6 h3 {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  position: relative;
  color: #fff;
}
.service-content h3:before,
.service-content2 h3:before,
.service-content3 h3:before,
.service-content4 h3:before,
.service-content5 h3:before,
.service-content6 h3:before {
  content: '\f106';
  position: absolute;
  left: -78px;
  top: -15px;
  font-family: Flaticon;
  font-size: 42px;
  color: #34ccff;
}
.service-content2 h3:before {
  content: '\f107';
  margin-top: 5px;
}
.service-content3 h3:before {
  content: '\f100';
  transform: rotate(45deg);
}
.service-content4 h3:before {
  content: '\f108';
}
.service-content5 h3:before {
  content: '\f10a';
}
.service-content6 h3:before {
  content: '\f10b';
}
.service-content p,
.service-content2 p,
.service-content3 p,
.service-content4 p,
.service-content5 p,
.service-content6 p {
  padding: 15px 0 0px;
  color: #fff;
  line-height: 30px;
}
.service-content a,
.service-content2 a,
.service-content3 a,
.service-content4 a,
.service-content5 a,
.service-content6 a {
  color: #34ccff;
}

.wpo-service-area .wpo-service-item .wpo-service-single:before {
  content: none;
}
.wpo-service-s2 .wpo-service-item .wpo-service-single .wpo-service-icon {
  background-color: rgba(52, 203, 255, 0.2);
  width: 90px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  border-radius: 50%;
  position: relative;
  margin: auto;
  margin-bottom: 25px;
}
.wpo-service-s2 .wpo-service-item .wpo-service-single .wpo-service-icon:before {
  content: '';
  background-color: rgba(52, 203, 255, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  left: -5px;
  top: -5px;
  border-radius: 50%;
}
.wpo-service-s2 .wpo-service-item .wpo-service-single .wpo-service-icon i,
.service-style-3 .wpo-service-item .wpo-service-single .wpo-service-icon i {
  color: #142440;
}
.wpo-service-s2 .wpo-service-item .wpo-service-single h2,
.service-style-3 .wpo-service-item .wpo-service-single h2 {
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
}
.wpo-service-s2 .wpo-service-item .wpo-service-single p,
.service-style-3 .wpo-service-item .wpo-service-single p {
  line-height: 30px;
  color: #5d5b5b;
  margin-bottom: 0;
}

.wpo-service-s2 .wpo-service-item .wpo-service-single {
  background: #fff;
  text-align: center;
  padding: 40px 33px;
}
.wpo-service-s2 .wpo-service-single:before {
  display: none;
}
</style>
