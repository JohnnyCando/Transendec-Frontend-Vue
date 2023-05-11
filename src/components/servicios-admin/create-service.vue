<template>
  <form
    onsubmit="return false"
    id="service-create"
    enctype="multipart/form-data"
  >
    <div class="row">
      <div class="col-md-7">
        <div class="contact-form form-style row" style="padding: 10%">
          <div class="col-md-6 col-lg-6 col-sm-6">
            <label>Nombre</label>
            <input
              type="text"
              v-model="serviceForm.name"
              placeholder="Nombre del servicio*"
              id="fname"
              name="name"
            />
            <!--<p>{error.name ? error.name : ''}</p> -->
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <label>Precio</label>
            <input
              type="number"
              v-model="serviceForm.price"
              placeholder="Precio"
              id="price"
              name="price"
              min="0"
            />
            <!--<p>{error.name ? error.name : ''}</p> -->
          </div>

          <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="wrap-toggle">
              <label>Añadir Imagen y listado de atributos ?</label>
              <input
                v-model="serviceForm.useListDataAndImage2"
                type="checkbox"
                id="toggle"
                class="offscreen"
              />
              <label for="toggle" class="switch"></label>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-6"></div>
          <div class="col-md-6 col-lg-6 col-sm-6">
            <label>Subir Banner</label>
            <input
              type="file"
              id="imageBlog1File"
              name="imageBlog1File"
              ref="=imageBlog1File"
              @change="cargarImagenes($event, 'B')"
            />
            <!--<p>{error.name ? error.name : ''}</p> -->
          </div>
          <div
            class="col-md-6 col-lg-6 col-sm-6"
            v-if="serviceForm.useListDataAndImage2"
          >
            <label>Subir Imagen Secundaria</label>
            <input
              type="file"
              id="imageBlog1File"
              name="imageBlog1File"
              ref="=imageBlog1File"
              @change="cargarImagenes($event, 'S')"
            />
            <!--<p>{error.name ? error.name : ''}</p> -->
          </div>
          <div
            class="col-md-12 col-lg-12 col-sm-12"
            v-if="serviceForm.useListDataAndImage2"
          >
            <label>Lista de Caracteristicas</label>
            <textarea
              v-model="serviceForm.listCharacteristics"
              class="contact-textarea"
              placeholder="Caracteristicas"
              name="listCharacteristics"
            ></textarea>
            <!--<p>{error.name ? error.name : ''}</p> -->
          </div>
          <div class="col-md-12 col-lg-12 col-sm-12">
            <label>Descripción</label>
            <textarea
              v-model="serviceForm.description"
              class="contact-textarea"
              placeholder="Descripción"
              name="description"
            ></textarea>
            <!--<p>{error.name ? error.name : ''}</p> -->
          </div>

          <div class="col-12">
            <button @click="sendContactForm" class="btn btn-primary">
              Crear Servicio
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <img
          :src="serviceForm.imagePreviewUrl"
          style="height: 385px; width: 400px; padding: 10%"
        />
        <div class="col-12 col-md-12 col-sm-12 col-lg-12">
          <center>
            <label for="ffile" class="subir btn btn-primary">
              <i class="fa fa-upload" aria-hidden="true"></i>
              Subir Foto
            </label>
          </center>
          <input
            type="file"
            id="ffile"
            name="file"
            ref="=file"
            @change="buscarArchivo"
            style="display: none"
          />
          <div class="alert alert-danger" ref="message" hidden>
            <p>Only files or images are allowed.</p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import service from '@/mixins/service.js'
import imagePreview from '@/assets/images/imagePreview.png'
export default {
  name: 'createServiceForm',
  mixins: [service],
  props: {
    msg: String,
  },
  setup() {
    let serviceForm = ref({
      name: '',
      price: '',
      description: '',
      nameIamge: '',
      file: '',
      useListDataAndImage2: true,
      imagePreviewUrl: imagePreview,
      listCharacteristics: '',
      imageBlog1File: '',
      imageBlog2File: '',
      imageBlog1: '',
      imageBlog2: '',
    })
    const buscarArchivo = async (event) => {
      console.log(event.target.files[0])
      let file = event.target.files[0]
      const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
      if (allowedTypes.includes(file.type)) {
        serviceForm.value.file = file
        serviceForm.value.nameIamge = file.name
        serviceForm.value.imagePreviewUrl = URL.createObjectURL(file)
      } else {
        console.log('extension incorrecta')
      }
    }
    const cargarImagenes = async (event, imageType) => {
      console.log(event.target.files[0])
      let file = event.target.files[0]
      const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
      if (allowedTypes.includes(file.type)) {
        if (imageType == 'B') {
          serviceForm.value.imageBlog1File = file
          serviceForm.value.imageBlog1 = file.name
        } else if (imageType == 'S') {
          serviceForm.value.imageBlog2File = file
          serviceForm.value.imageBlog2 = file.name
        }
        console.log(serviceForm.value)
      } else {
        console.log('extension incorrecta')
      }
    }
    const createContactForm = async () => {
      const data = {
        url: '/services',
        data: serviceForm,
        method: 'POST',
      }
      const resp = await service.methods.callServiceFormDataServices(data)
      if (resp.name) {
        alert('Servicio creado correcatmente')
        document.getElementById('service-create').reset()
      }
    }
    const sendContactForm = () => {
      createContactForm()
    }
    return {
      serviceForm,
      sendContactForm,
      createContactForm,
      buscarArchivo,
      cargarImagenes,
    }
  },
}
</script>
<style>
:root {
  --bg: #f9f7fc;
  --purple: #4a4950;
  --green: #1c30e2;
  --font: 'Roboto Mono', sans-serif;
}

.wrap-toggle {
  padding: 5rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: var(--purple);
  border-radius: 40px;
  transition: all 0.3s;
  cursor: pointer;
}

.switch:after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 30px;
  background-color: white;
  top: 2px;
  left: 1px;
  transition: all 0.3s;
}

input[type='checkbox']:checked + .switch:after {
  transform: translateX(22px);
  background-color: var(--bg);
}

input[type='checkbox']:checked + .switch {
  background-color: var(--green);
}

.offscreen {
  position: absolute;
  left: -9999px;
}
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
  color: #212529;
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
