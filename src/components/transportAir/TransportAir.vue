<template>
  <div class="Freight-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <div class="row">
            <div class="col-lg-12 col-md-6">
              <div class="contact-us-area">
                <h3>Contuct Us</h3>
                <div class="contact-s">
                  <span>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    Call Us
                  </span>
                  <p>Tel: +555 965 325</p>
                </div>
                <div class="contact-s">
                  <span>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    Email Us
                  </span>
                  <p>youremail@gmail.com</p>
                </div>
                <div class="contact-s">
                  <span>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Our Location
                  </span>
                  <p>123 Banena Street, London</p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-6">
              <div class="catagory-item">
                <div class="widget-title">
                  <h3 class="text-left">Nuestros servicios</h3>
                </div>
                <div class="category-section">
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
        <div class="col-lg-9">
          <div class="Freight-item">
            <h3>{{ data.name }}</h3>
            <p>{{ data.description }}.</p>
            <img :src="`/uploads/${data.imageBlog1}`" alt="" />
            <div v-if="data.useListDataAndImage2" class="Freight-s">
              <div class="Freight-img">
                <img :src="`/uploads/${data.imageBlog2}`" alt="" />
              </div>
              <div id="listCharacteristics" class="f-s">
                {{ data.listCharacteristics }}
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
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TransportAir',
  props: {
    bdtitle: String,
    bdsub: String,
    data: Object,
  },
  setup(props) {
    const store = useStore()
    const servicesArray = computed(() => store.state.services.services)
    onMounted(() => {
      document.getElementById('listCharacteristics').innerHTML =
        props.data.listCharacteristics
    })
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
