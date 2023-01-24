<template>
  <div
    className="blog-right-bar practice-details-area case-stadies-details-area"
  >
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="widget search-widget">
          <form>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Post.."
              />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-12 col-md-6">
        <div className="catagory-item">
          <div className="widget-title">
            <h3 className="text-left">Our Services</h3>
          </div>
          <div className="category-section">
            <ul>
              <li><router-link to="/">Ocean Freight</router-link></li>
              <li><router-link to="/">Land Freight</router-link></li>
              <li><router-link to="/">Air Freight</router-link></li>
              <li>
                <router-link to="/">Packeging & Transpotation</router-link>
              </li>
              <li><router-link to="/">Cargo Transpotation</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-6">
        <div className="practice-section resent-section practice-catagory-item">
          <h3 className="text-left">Recent Case</h3>
          <div className="posts">
            <div className="post post2">
              <div className="img-holder">
                <img src="@/assets/images/case-studies-details/1.jpg" alt="" />
              </div>
              <div className="details">
                <p>Actual teachings of the great explorer of the truth,</p>
              </div>
            </div>
            <div className="post">
              <div className="img-holder">
                <img src="@/assets/images/case-studies-details/2.jpg" alt="" />
              </div>
              <div className="details">
                <p>The truth, the master-builder of human happiness</p>
              </div>
            </div>
            <div className="post post3">
              <div className="img-holder">
                <img src="@/assets/images/case-studies-details/3.jpg" alt="" />
              </div>
              <div className="details">
                <p>
                  Explorer of the truth, the master-builder of human happiness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-6 col-12 col-g">
        <div className="widget tag-widget">
          <h3>Tags</h3>
          <ul>
            <li><router-link to="/blog-single">Ocean</router-link></li>
            <li><router-link to="/blog-single">Land</router-link></li>
            <li><router-link to="/blog-single">Freight</router-link></li>
            <li><router-link to="/blog-single">Transport</router-link></li>
            <li><router-link to="/blog-single">Air</router-link></li>
            <li><router-link to="/blog-single">Car</router-link></li>
            <li><router-link to="/blog-single">Bus</router-link></li>
            <li><router-link to="/blog-single">Logistics</router-link></li>
            <li><router-link to="/blog-single">Packeging</router-link></li>
            <li><router-link to="/blog-single">Business</router-link></li>
            <li><router-link to="/blog-single">Corporate</router-link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12 col-md-6 col-12">
        <div className="widget instagram">
          <h3>Instagram</h3>
          <ul className="d-flex">
            <li>
              <router-link to="/blog-single">
                <img src="@/assets/images/instragram/1.jpg" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/blog-single">
                <img src="@/assets/images/instragram/2.jpg" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/blog-single">
                <img src="@/assets/images/instragram/3.jpg" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/blog-single">
                <img src="@/assets/images/instragram/4.jpg" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/blog-single">
                <img src="@/assets/images/instragram/5.jpg" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/blog-single">
                <img src="@/assets/images/instragram/6.jpg" alt="" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'BlogSidebar',
  components: {},
  setup() {},
}
</script>
<style>
.blog-right-bar .tag-widget {
  margin-top: 60px;
}

.blog-right-bar .tag-widget h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.blog-right-bar .tag-widget ul {
  overflow: hidden;
}

.blog-right-bar .tag-widget ul li {
  float: left;
  margin: 0 8px 8px 0;
}

.blog-right-bar .tag-widget ul li a {
  background: #f5f5f5;
  font-size: 14px;
  display: inline-block;
  padding: 9px 25px 10px;
  color: #333;
  transition: all 0.3s;
}

.blog-right-bar .tag-widget ul li a:hover {
  background: #34ccff;
  color: #fff;
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

.instagram {
  margin-top: 60px;
}

.instagram h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.blog-right-bar {
  padding-left: 30px;
}

.col-g {
  padding-right: 0;
}

.search-widget input {
  height: 50px;
  font-size: 17px;
  padding: 6px 50px 6px 20px;
  border: 0;
  box-shadow: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid rgba(208, 161, 94, 0.28);
  color: #333;
  border-radius: 0;
}
.search-widget input:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid rgba(208, 161, 94, 0.28);
}
.search-widget form button {
  background: #34ccff;
  font-size: 20px;
  color: #fff;
  border: 0;
  outline: 0;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 10px 15px;
  cursor: pointer;
}

.case-stadies-details-area .practice-section,
.practice-details-area .practice-section {
  padding: 10px 30px 40px;
}
.practice-catagory-item {
  background: #f5f5f5;
  margin-top: 60px;
}

.practice-details-area.case-stadies-details-area .img-holder {
  float: left;
  padding-right: 20px;
  margin-top: 10px;
}

.practice-section.resent-section h3 {
  margin-bottom: 30px;
  margin-top: 20px;
}
.practice-section.resent-section p {
  margin-top: -2px;
}
</style>
