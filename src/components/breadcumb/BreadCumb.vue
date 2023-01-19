<template>
  <div class="breadcumb-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcumb-wrap text-center">
            <h2>{{ bdtitle }}</h2>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <span>{{ bdsub }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'breadCumbMain',
  props: {
    bdtitle: String,
    bdsub: String,
  },
}
</script>
<style>
.breadcumb-area {
  background: url('@/assets/images/breadcumb/bg.jpg') no-repeat center top /
    cover;
  min-height: 550px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.breadcumb-area:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.8;
}

.breadcumb-wrap h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 13px;
  color: #fff;
  position: relative;
  margin-top: 0;
  line-height: 35px;
}

.breadcumb-wrap ul li {
  display: inline-block;
  padding: 0px 5px;
  color: #fff;
  position: relative;
}

.breadcumb-wrap ul li a {
  color: #fff;
  font-size: 18px;
  transition: all 0.3s;
  position: relative;
}

.breadcumb-wrap ul li a:hover {
  color: #34ccff;
}

.breadcumb-wrap ul li:last-child {
  color: #34ccff;
}

.breadcumb-wrap ul li:after {
  content: '/';
  position: relative;
  left: 7px;
}

.breadcumb-wrap ul li:last-child:after {
  display: none;
}

.about-layout .testimonial-area {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
}

.features-b {
  border-bottom: none;
}

.breadcumb-wrap {
  padding-top: 95px;
}
</style>
