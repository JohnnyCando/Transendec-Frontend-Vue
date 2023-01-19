<template>
  <div class="wpo-blog-area">
    <div class="container">
      <div class="col-l2">
        <div class="wpo-section-title wpo-section-title-3 text-center">
          <span>Stay With Our Blog</span>
          <h2>Our Latest News</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 blog-p">
          <div class="wpo-blog-item">
            <div class="wpo-blog-img">
              <img src="@/assets/images/blog/1.jpg" alt="" />
            </div>
            <div class="wpo-blog-content-sub">
              <ul>
                <li><router-link to="/blog-single">Business</router-link></li>
                <li>October 13, 2018</li>
              </ul>
            </div>
            <div class="wpo-blog-content">
              <h3>
                <router-link to="">
                  We can ensure you about the safe delevery
                </router-link>
              </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 blog-p">
          <div class="wpo-blog-item">
            <div class="wpo-blog-content">
              <h3>
                <router-link to="/blog-single">
                  We can ensure you about the safe delevery
                </router-link>
              </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
            <div class="wpo-blog-content-sub-2">
              <ul>
                <li><router-link to="/blog-single">Business</router-link></li>
                <li>October 13, 2018</li>
              </ul>
            </div>
            <div class="wpo-blog-img">
              <img src="@/assets/images/blog/2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 blog-p">
          <div class="wpo-blog-item">
            <div class="wpo-blog-img">
              <img src="@/assets/images/blog/3.jpg" alt="" />
            </div>
            <div class="wpo-blog-content-sub wpo-blog-content-sub">
              <ul>
                <li><router-link to="/blog-single">Business</router-link></li>
                <li>October 13, 2018</li>
              </ul>
            </div>
            <div class="wpo-blog-content">
              <h3>
                <router-link to="/blog-single">
                  We can ensure you about the safe delevery
                </router-link>
              </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
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
  name: 'BlogSection2',
  components: {},
  setup() {},
}
</script>

<style scoped>
.wpo-blog-area,
.wpo-blog-style-2 {
  background: #f1f1f1;
  padding: 100px 0 70px;
  position: relative;
}
.wpo-blog-area:before,
.wpo-blog-style-2:before {
  content: '';
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.wpo-section-title.wpo-section-title-3 h2 {
  color: #333;
}
.wpo-section-title.wpo-section-title-3 span {
  position: relative;
}
.blog-p {
  padding: 0;
}
.wpo-blog-content,
.wpo-blog-content2 {
  text-align: center;
  background: #fff;
  padding: 25px 45px 10px;
}
.wpo-blog-content p,
.wpo-blog-content2 p {
  line-height: 30px;
}
.wpo-blog-content h3,
.wpo-blog-content2 h3 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
}
.wpo-blog-content h3 a,
.wpo-blog-content2 h3 a {
  color: #333;
  transition: all 0.3s;
}
.wpo-blog-content h3 a:hover,
.wpo-blog-content2 h3 a:hover {
  color: #34ccff;
}
.wpo-blog-content-sub,
.wpo-blog-content-sub-2 {
  background: #fff;
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
.wpo-blog-content-sub ul li,
.wpo-blog-content-sub-2 ul li {
  display: inline-block;
  position: relative;
  padding: 10px;
}
.wpo-blog-content-sub ul li a,
.wpo-blog-content-sub-2 ul li a {
  color: #34ccff;
}
.wpo-blog-content-sub ul li:before,
.wpo-blog-content-sub-2 ul li:before {
  position: absolute;
  content: '';
  left: 0;
  top: 17px;
  z-index: 1;
  width: 1px;
  height: 13px;
  background: #cbbfbf;
}
.wpo-blog-content-sub ul li:first-child:before,
.wpo-blog-content-sub-2 ul li:first-child:before {
  display: none;
}
.wpo-blog-content-2.wpo-blog-content-sub {
  border-bottom: none;
  border-top: 1px solid #eee;
}
.wpo-blog-content-sub-2 {
  border-top: 1px solid #eee;
}
.wpo-blog-item {
  margin-bottom: 30px;
}
.wpo-blog-img img {
  -webkit-filter: grayscale(0);
  -moz-filter: grayscale(0);
  -o-filter: grayscale(0);
  -ms-filter: grayscale(0);
  filter: grayscale(0);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  width: 100%;
}

.wpo-blog-item:hover .wpo-blog-img img {
  -webkit-filter: grayscale(50%);
  -moz-filter: grayscale(50%);
  -o-filter: grayscale(50%);
  -ms-filter: grayscale(50%);
  filter: grayscale(50%);
}

.wpo-blog-style-2 {
  background: #fff;
}
.wpo-blog-style-2 .wpo-blog-img {
  position: relative;
}
.wpo-blog-style-2 .wpo-blog-img:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  content: '';
  z-index: 9;
}
.blog-s-text {
  position: absolute;
  left: 0;
  top: 56%;
  width: 100%;
  height: 50%;
  background: none;
  z-index: 99;
}
.blog-s-text .wpo-blog-content {
  background: none;
}
.blog-s-text .wpo-blog-content h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 15px;
}
.blog-s-text .wpo-blog-content-sub ul li a,
.blog-s-text .wpo-blog-content-sub-2 ul li a {
  color: #fff;
}
.blog-s-text .wpo-blog-content-sub ul li,
.blog-s-text .wpo-blog-content-sub-2 ul li {
  color: #fff;
}
.blog-s-text .wpo-blog-content-sub,
.blog-s-text .wpo-blog-content-sub-2 {
  background: none;
  border-bottom: none;
  border-top: none;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 17px;
}
.wpo-blog-item {
  position: relative;
  overflow: hidden;
}
.wpo-blog-text {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(200px);
  transition: all 0.3s;
  opacity: 0;
}

.wpo-blog-content2 {
  background: none;
}
.wpo-blog-item:hover .wpo-blog-text {
  transform: translateY(0px);
  opacity: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.wpo-blog-style-2 .wpo-blog-content {
  background: none;
}
.wpo-blog-item:hover .blog-s-text .wpo-blog-content {
  opacity: 0;
}
.wpo-blog-text .wpo-blog-content h3 a {
  color: #333;
}
.wpo-blog-text .wpo-blog-content h3 a:hover {
  color: #34ccff;
}
.wpo-blog-text .wpo-blog-content a {
  color: #34ccff;
}
.wpo-blog-text .wpo-blog-content-sub ul li a {
  color: #34ccff;
}
.wpo-blog-text .wpo-blog-content-sub,
.wpo-blog-text .wpo-blog-content-sub-2 {
  background: none;
  border-bottom: none;
  padding-top: 16px;
  border-top: 1px solid #ddd;
  margin-top: 5px;
}
.wpo-blog-text .wpo-blog-content {
  padding: 40px 45px 10px;
}
.wpo-blog-item:hover .blog-s-text .wpo-blog-content-sub {
  opacity: 0;
}
.wpo-newsletter-section-2 {
  background: #f5f5f5;
}
.blog-right-bar-2 {
  padding-left: 0;
  padding-right: 30px;
}
.blog-right-bar .img-holder {
  float: left;
  padding-right: 14px;
}
.wpo-blog-item:hover .blog-s-text {
  display: none;
}

.blog-p {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

@media (max-width: 991px) {
  .blog-p {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

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
