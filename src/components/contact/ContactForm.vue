<template>
  <div class="contact-page-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-12">
          <div class="contact-page-item">
            <h2>Nuestros Contactos</h2>
            <div class="adress">
              <h3>Direcciones</h3>
              <span :key="address" v-for="address in addresses">
                {{ address.name }}
              </span>
            </div>
            <div class="phone">
              <h3>Teléfonos</h3>
              <h5>Celulares</h5>
              <a
                :key="phone"
                v-for="phone in phones"
                target="_blank"
                :href="`https://api.whatsapp.com/send?phone=${phone.phone}`"
              >
                <span>+ {{ phone.phone }}</span>
              </a>
              <h4>Fíjo</h4>
            </div>
            <div class="email">
              <h3>Email</h3>
              <span>transendec@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12">
          <div class="contact-area contact-area-2 contact-area-3">
            <h2>Formulario</h2>
            <contactFormValuesMain />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-xs-12">
          <div class="contact-map">
            <iframe
              title="db"
              src="https://goo.gl/maps/G76xnQ85cFDBEg6X9"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactFormValuesMain from '@/components/contact/ContactFormValues'
import { ref } from 'vue'
export default {
  name: 'contactFormMain',
  components: {
    contactFormValuesMain,
  },
  props: {
    msg: String,
  },
  setup() {
    const getPhones = () => {
      const phonesArray = [
        {
          phone: '593996603920',
          id: 1,
        },
        {
          phone: '593998356467',
          id: 2,
        },
      ]
      return phonesArray
    }
    const getAddresses = () => {
      const aaddressesArray = [
        {
          name: 'Av. Universitaria y Manuel Aguirre',
          id: 1,
        },
      ]
      return aaddressesArray
    }
    let phones = ref([])
    let addresses = ref([])
    phones = getPhones()
    addresses = getAddresses()
    return {
      phones,
      addresses,
    }
  },
}
</script>
<style scoped>
.contact-page-area .contact-map {
  height: 450px;
  margin-top: 100px;
  cursor: pointer;
}

.contact-page-area .contact-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
}

.contact-page-item h2 {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
}

.contact-page-item h3 {
  font-size: 24px;
  color: #666;
  margin-bottom: 10px;
}

.contact-page-item span {
  color: #666;
  display: block;
  padding-bottom: 10px;
}

.contact-page-item .adress {
  margin-bottom: 20px;
}

.contact-page-item .phone {
  margin-bottom: 20px;
}

.contact-area.contact-area-2.contact-area-3 {
  padding-top: 0px;
  padding-bottom: 0;
}

.contact-area.contact-area-2.contact-area-3 h2 {
  margin-bottom: 40px;
  font-size: 30px;
}

.contact-area form,
.contact-area-s2 form {
  overflow: hidden;
  margin: 0 -15px;
}

.contact-area form .half-col,
.contact-area-s2 form .half-col {
  width: 50%;
  float: left;
}

@media (max-width: 600px) {
  .contact-area form .half-col,
  .contact-area-s2 form .half-col {
    width: 100%;
    float: left;
  }
}

.contact-area form div,
.contact-area-s2 form div {
  padding: 0 15px 15px;
}

.contact-area form .submit-btn-wrapper,
.contact-area-s2 form .submit-btn-wrapper {
  padding-bottom: 0;
}

.contact-area form input,
.contact-area-s2 form input,
.contact-area form textarea,
.contact-area-s2 form textarea,
.contact-area-s2 form select {
  background: #f5f5f5;
  height: 50px;
  padding: 6px 15px;
  color: #fff;
  border: 2px solid #ddd;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid rgba(192, 181, 150, 0.5);
  width: 100%;
}

.contact-area form input:focus,
.contact-area-s2 form input:focus,
.contact-area form textarea:focus,
.contact-area-s2 form textarea:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #ccc;
  outline: none;
}

.contact-area form textarea,
.contact-area-s2 form textarea {
  height: 150px;
  padding: 15px;
}

.contact-form p {
  color: red;
}

.theme-btn {
  background: #34ccff;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  padding: 9px 25px;
  border: 1px solid #34ccff;
  text-transform: capitalize;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
}

.contact-form ::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #999;
  font-size: 14px;
}

.contact-form ::-moz-placeholder {
  /* Firefox 19+ */

  color: #999;
  font-size: 14px;
}

.contact-form :-ms-input-placeholder {
  /* IE 10+ */
  color: #999;
  font-size: 14px;
}

.contact-form :-moz-placeholder {
  /* Firefox 18- */

  color: #999;
  font-size: 14px;
}
</style>
