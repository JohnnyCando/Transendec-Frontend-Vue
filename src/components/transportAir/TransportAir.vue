<template>
  <div className="Freight-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="contact-us-area">
                <h3>Contuct Us</h3>
                <div className="contact-s">
                  <span>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    Call Us
                  </span>
                  <p>Tel: +555 965 325</p>
                </div>
                <div className="contact-s">
                  <span>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    Email Us
                  </span>
                  <p>youremail@gmail.com</p>
                </div>
                <div className="contact-s">
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Our Location
                  </span>
                  <p>123 Banena Street, London</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="catagory-item">
                <div className="widget-title">
                  <h3 className="text-left">Our Services</h3>
                </div>
                <div className="category-section">
                  <ul>
                    <li :key="service" v-for="service in servicesArray">
                      <router-link
                        :to="`/service/${service.id}`"
                        @click="topPage"
                      >
                        {{ service.name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="Freight-item">
            <h3>{{ data.name }}</h3>
            <p>{{ p1 }}.</p>
            <img src="@/assets/images/air/1.jpg" alt="" />
            <p>{{ p2 }}</p>
            <div className="Freight-s">
              <div className="Freight-img">
                <img src="@/assets/images/air/2.jpg" alt="" />
              </div>
              <div className="f-s">
                <span>
                  Ipsum is that it has a more-or-less normal distribution
                </span>
                <span>
                  The point of using Lorem Ipsum is that it has any probl
                </span>
                <span>We Provide you the best service in the world.</span>
                <span>
                  It is a long established fact that a reader will do this
                </span>
                <span>Normal distribution of letters, as opposed</span>
                <span>We can ensure your delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TransportAir',
  props: {
    bdtitle: String,
    bdsub: String,
    data: Object,
  },
  setup() {
    const store = useStore()
    const servicesArray = computed(() => store.state.services.services)
    const topPage = () => {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0
    }
    const p1 = ref(`We Provide you the best service in the world.
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`)
    const p2 = ref(`We Provide you the best service in the world.
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`)
    return { p1, p2, servicesArray, topPage }
  },
}
</script>
<style>
.Freight-area {
  padding: 100px 0;
}

.contact-us-area {
  background-image: url('@/assets/images/air/air-fraight.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
  z-index: 1;
  padding: 30px 30px 20px;
}

.contact-us-area:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 36, 64, 0.8);
  z-index: -1;
}

.contact-us-area h3 {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  padding-bottom: 15px;
  position: relative;
}

.contact-us-area h3:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 5px;
  background: #34ccff;
}

.contact-s span {
  color: #fff;
  font-size: 15px;
}

.contact-s span i {
  padding-right: 5px;
  color: #34ccff;
}

.contact-s p {
  color: #fff;
  font-weight: 18px;
}

.Freight-item h3 {
  font-size: 30px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 40px;
}

.Freight-item p {
  line-height: 30px;
  margin-bottom: 20px;
}

.Freight-item img {
  margin-bottom: 20px;
}

.Freight-s img {
  float: left;
  padding-right: 30px;
}

.Freight-s {
  overflow: hidden;
}

.Freight-s .f-s {
  overflow: hidden;
}

.Freight-s .f-s span {
  font-size: 16px;
  display: block;
  padding-bottom: 10px;
  padding-left: 25px;
  position: relative;
}

.Freight-s .f-s span:before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 10px;
  height: 10px;
  background: #34ccff;
  border-radius: 50%;
}

.catagory-item {
  background: #f5f5f5;
  margin-top: 60px;
}

.catagory-item .widget-title {
  background: #ddd;
  padding: 10px 20px;
  position: relative;
}

.catagory-item .widget-title:before {
  content: '';
  position: absolute;
  left: 30px;
  top: 100%;
  border: 15px solid transparent;
  border-top-width: 13px;
  border-top-color: rgba(0, 0, 0, 0.1);
}

.catagory-item .widget-title h3 {
  font-size: 24px;
  text-align: center;
}

.category-section {
  padding: 10px 0px 10px;
}

.category-section ul li {
  border-bottom: 1px solid #ddd;
}

.category-section ul li:last-child {
  border-bottom: none;
}

.category-section ul li a {
  font-size: 16px;
  color: #333;
  display: block;
  padding: 15px 20px 10px;
  transition: all 0.3s;
}

.price-sec .wpo-pricing-area {
  padding-top: 100px;
}
</style>
