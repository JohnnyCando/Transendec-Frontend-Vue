<template>
  <div class="wpo-footer-area">
    <div class="wpo-footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 footer-t">
            <div class="wpo-footer-logo">
              <img src="@/assets/images/logo/logo-3.png" alt="" />
            </div>
            <p>
              There are many variations of Lorem passages of Lorem Ipsum
              available, but the majority
            </p>
            <p>By injected humour, or randomised words</p>
            <div class="social">
              <ul class="d-flex">
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
                    <i class="fa fa-router-linkedin" aria-hidden="true"></i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 footer-t">
            <div class="footer-router-link">
              <h3>Quick router-link</h3>
              <ul>
                <li><router-link to="/">About Us</router-link></li>
                <li><router-link to="/">Service</router-link></li>
                <li><router-link to="/">Location</router-link></li>
                <li><router-link to="/">Testimonial</router-link></li>
                <li><router-link to="/">Contact</router-link></li>
                <li><router-link to="/">Blog</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 footer-b">
            <div class="Recent-News-area">
              <h3>Recent News</h3>
              <div class="resent-sub">
                <p>There are many variations of passages of Lorem</p>
                <span>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  Octobor 10, 2018
                </span>
              </div>
              <p>There are many variations of passages of Lorem</p>
              <span>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                Octobor 10, 2018
              </span>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="footer-widget instagram">
              <h3>Instagram</h3>
              <ul class="d-flex">
                <li>
                  <router-link to="/">
                    <img src="@/assets/images/instragram/1.jpg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <img src="@/assets/images/instragram/2.jpg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <img src="@/assets/images/instragram/3.jpg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <img src="@/assets/images/instragram/4.jpg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <img src="@/assets/images/instragram/5.jpg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <img src="@/assets/images/instragram/6.jpg" alt="" />
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wpo-footer-bottom">
      <div class="container">
        <div class="wpo-footer-bottom-content">
          <div class="row">
            <div class="col-12">
              <span>© Copyrights 2020. All Rights Reserved.</span>
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
  name: 'FooterMain',
  components: {},
  setup() {},
}
</script>

<style scoped>
.wpo-footer-area {
  background: #142440;
}
.wpo-footer-top {
  padding: 60px 0;
}
.wpo-footer-logo {
  margin-bottom: 30px;
}
.social li a {
  display: block;
  height: 45px;
  width: 45px;
  background: #fff;
  color: #333;
  line-height: 45px;
  border-radius: 50%;
  text-align: center;
  margin-right: 10px;
  transition: all 0.3s;
  margin-top: 5px;
}
.social li a:hover {
  background: #34ccff;
  color: #fff;
}
.wpo-footer-top p {
  color: #fff;
  margin-bottom: 30px;
}
.wpo-footer-top a {
  color: #fff;
}
.Recent-News-area p {
  margin-bottom: 10px;
}
.Recent-News-area span {
  color: #bbb;
}
.Recent-News-area span i {
  padding-right: 10px;
  color: #34ccff;
}
.resent-sub {
  margin-bottom: 35px;
}
.instagram ul {
  flex-wrap: wrap;
  margin: 0px -3px;
}

.instagram ul li {
  -ms-flex: 0 0 33.33%;
  flex: 0 0 33.33%;
  max-width: 33.33%;
  margin-bottom: 5px;
  padding: 0px 3px;
}

.instagram ul li img {
  width: 100%;
}
.footer-widget.instagram {
  margin-top: 0;
}
.footer-widget.instagram h3 {
  font-size: 25px;
  margin-bottom: 30px;
}
.footer-router-link ul li a {
  padding-top: 10px;
  display: block;
}
.wpo-footer-top h3 {
  font-size: 25px;
  color: #fff;
  margin-bottom: 20px;
}

.wpo-footer-bottom {
  background: #101e35;
  padding: 30px 0;
}
.wpo-footer-bottom-content {
  text-align: center;
}
.wpo-footer-bottom-content span {
  color: #fff;
  font-size: 16px;
  text-align: center;
}
</style>
