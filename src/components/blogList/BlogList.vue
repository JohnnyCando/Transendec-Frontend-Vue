<template>
  <div class="blog-page-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12 col-12">
          <div class="blog-left-bar">
            <div class="blog-item">
              <div class="blog-img">
                <div class="blog-s2">
                  <img src="@/assets/images/blog-page/1.jpg" alt="" />
                </div>
                <ul class="post-meta">
                  <li><img src="@/assets/images/blog-page/6.jpg" alt="" /></li>
                  <li>
                    <router-link to="/blog-single">By Aliza anne</router-link>
                  </li>
                  <li class="clr">logisTics</li>
                  <li>Oct 12,2018</li>
                </ul>
              </div>
              <div class="blog-content-2">
                <h2>The modern world make life easier.</h2>
                <p>
                  I will give you a complete account of the system, and expound
                  the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.
                </p>
                <router-link to="/blog-single">read more..</router-link>
              </div>
            </div>
            <div class="blog-item">
              <div class="blog-img">
                <div class="blog-s2">
                  <img src="@/assets/images/blog-page/2.jpg" alt="" />
                </div>
                <ul class="post-meta">
                  <li><img src="@/assets/images/blog-page/6.jpg" alt="" /></li>
                  <li>
                    <router-link to="/blog-single">By Aliza anne</router-link>
                  </li>
                  <li class="clr">logisTics</li>
                  <li>Oct 12,2018</li>
                </ul>
              </div>
              <div class="blog-content-2">
                <h2>what can do for you</h2>
                <p>
                  I will give you a complete account of the system, and expound
                  the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.
                </p>
                <router-link to="/blog-single">read more..</router-link>
              </div>
            </div>
            <div class="blog-item">
              <div class="blog-img">
                <div class="blog-s2 video-holder">
                  <img src="@/assets/images/blog-page/3.jpg" alt="" />
                  <div class="video-btn"></div>
                </div>
                <ul class="post-meta">
                  <li><img src="@/assets/images/blog-page/6.jpg" alt="" /></li>
                  <li>
                    <router-link to="/blog-single">By Aliza anne</router-link>
                  </li>
                  <li class="clr">logisTics</li>
                  <li>Oct 12,2018</li>
                </ul>
              </div>
              <div class="blog-content-2">
                <h2>what can do for you</h2>
                <p>
                  I will give you a complete account of the system, and expound
                  the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.
                </p>
                <router-link to="/blog-single">read more..</router-link>
              </div>
            </div>
            <div class="blog-item blog-item-2">
              <div class="blog-img blog-img-2">
                <div class="blog-s2">
                  <div class="blog-content-3">
                    <ul class="post-meta">
                      <li>
                        <img src="@/assets/images/blog-page/6.jpg" alt="" />
                      </li>
                      <li>
                        <router-link to="/blog-single">
                          By Aliza anne
                        </router-link>
                      </li>
                      <li class="clr">logisTics</li>
                      <li>Oct 12,2018</li>
                    </ul>
                    <h2>The things only for you</h2>
                    <p>
                      I will give you a complete account of the system, and
                      expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness. No one
                      rejects, dislikes, or avoids pleasure itself, because it
                      is pleasure,
                    </p>
                    <router-link to="/blog-single">read more..</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-item">
              <div class="blog-img">
                <div class="blog-s2">
                  <img src="@/assets/images/blog-page/4.jpg" alt="" />
                </div>
                <ul class="post-meta">
                  <li><img src="@/assets/images/blog-page/6.jpg" alt="" /></li>
                  <li>
                    <router-link to="/blog-single">By Aliza anne</router-link>
                  </li>
                  <li class="clr">logisTics</li>
                  <li>Oct 12,2018</li>
                </ul>
              </div>
              <div class="blog-content-2">
                <h2>what can do for you</h2>
                <p>
                  I will give you a complete account of the system, and expound
                  the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.
                </p>
                <router-link to="/blog-single">read more..</router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="pagination-wrapper pagination-wrapper-2">
                  <ul>
                    <li><span>1</span></li>
                    <li>
                      <router-link to="/blog-single">2</router-link>
                    </li>
                    <li>
                      <router-link to="/blog-single">3</router-link>
                    </li>
                    <li>
                      <router-link class="next" to="/blog-single">
                        Next Page
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogSidebar from '@/components/blogSidebar/BlogSidebar'
export default {
  name: 'BlogList',
  components: { BlogSidebar },
  setup() {},
}
</script>
<style>
.blog-gd-area .blog-item {
  margin-bottom: 30px;
}
.blog-gd-area {
  padding-bottom: 70px;
}
.blog-page-area .blog-item {
  padding-bottom: 60px;
}

.blog-page-area .blog-item .post-meta {
  padding-top: 20px;
}

.blog-page-area .blog-item .post-meta li {
  color: #666;
  font-size: 16px;
  display: inline-block;
  position: relative;
  padding: 0 15px;
}

.blog-page-area .blog-item .post-meta .clr {
  color: #34ccff;
}

.blog-page-area .blog-item .post-meta > li:first-child {
  padding: 0;
}

.blog-page-area .blog-item .post-meta > li a {
  color: #666;
}

.blog-page-area .blog-item .post-meta > li + li + li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 2px;
  height: 15px;
  background: #ccc;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.blog-img .post-meta li img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: -2px;
}

.blog-content-2 h2 {
  font-size: 36px;
  font-weight: 600;
  margin: 20px 0;
}

.blog-content-2 p {
  line-height: 30px;
}

.blog-content-2 a {
  font-size: 16px;
  text-transform: uppercase;
  color: #34ccff;
  font-weight: 600;
}

.blog-s2 img {
  width: 100%;
}

.blog-item .blog-img .video-holder {
  position: relative;
  text-align: center;
}

.blog-item .blog-img .video-holder .wrap {
  background-color: rgba(158, 112, 68, 0.85);
  width: 88px;
  height: 88px;
  line-height: 88px;
  border: 3px solid #fff;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 40px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.blog-img.blog-img-2 {
  position: relative;
}

.blog-item .blog-img .video-holder .fa {
  padding-left: 8px;
}

.blog-content-3 {
  background: url('@/assets/images/blog-page/5.jpg') no-repeat center center /
    cover;
  padding: 40px 50px 60px;
  position: relative;
  z-index: 11;
}

.blog-content-3:before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: -1;
}

.blog-content-3 p {
  color: #eee;
  margin-top: 20px;
  line-height: 30px;
}

.blog-content-3 .post-meta li img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: -2px;
}

.blog-content-3 a {
  color: #34ccff;
  text-transform: uppercase;
}

.blog-page-area .blog-content-3 .post-meta li a {
  color: #eee;
  text-transform: capitalize;
}

.blog-content-3:after {
  content: '\f10e';
  position: absolute;
  left: 86%;
  top: 32px;
  font-family: 'FontAwesome';
  color: #34ccff;
  font-size: 66px;
  opacity: 0.3;
}
.quote-icon:before {
  content: '\f10e';
  font-family: 'FontAwesome';
}

.blog-content-3 h2 {
  color: #fff;
  margin-top: 20px;
}

.blog-page-area .blog-content-3 .post-meta li {
  color: #eee;
}

.blog-page-area .blog-content-3 .post-meta .clr {
  color: #34ccff;
}

.pagination-wrapper {
  margin-top: 20px;
}

.pagination-wrapper ul {
  text-align: center;
}

.pagination-wrapper ul li {
  display: inline-block;
  margin-right: 5px;
}

.pagination-wrapper ul li a,
.pagination-wrapper ul li span {
  display: block;
  height: 40px;
  width: 40px;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 40px;
  color: #223;
}

.pagination-wrapper ul li span,
.pagination-wrapper ul li a:hover,
.pagination-wrapper ul li span:hover {
  background-color: #34ccff;
  color: #fff;
}

.pagination-wrapper .next {
  display: block;
  height: 40px;
  width: 129px;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 40px;
  color: #223;
}

@media (max-width: 590px) {
  .blog-content-3 {
    padding: 40px 18px 60px;
  }
  .blog-content-3 h2 {
    font-size: 20px;
  }
  .blog-content-3:after {
    left: 74%;
  }
  .blog-page-area .blog-item .post-meta li {
    font-size: 13px;
    padding: 0 8px;
  }
  .blog-content-2 h2 {
    font-size: 26px;
  }
  .section-padding {
    padding: 70px 0;
  }
  .wpo-newsletter-form .form-control {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
