<template>
  <header>
    <div class="header-top-1">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-12 col-12">
            <ul class="d-flex account_login-area">
              <li>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                Lunes - Domingo : 6.00 am - 10.00 pm
              </li>
              <li>
                <i class="fa fa-map-marker"></i>
                Quito, Tumbaco/ Av. Universitaria E9-235 y Manuel Aguirre
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="btn-style">
              <router-link to="/contact">Contactanos</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-style-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
            <div class="logo">
              <router-link to="/" v-if="false">
                <img src="@/assets/images/logo/logo-3.png" alt="" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-8 d-none d-lg-block col-m">
            <div class="main-menu">
              <nav class="nav_mobile_menu">
                <ul>
                  <li class="active">
                    <router-link to="/">Inicio</router-link>
                  </li>
                  <li><router-link to="/about">Nosotros</router-link></li>
                  <li>
                    <router-link to="/service">Servicios</router-link>
                    <ul class="submenu">
                      <li :key="service" v-for="service in services">
                        <router-link :to="`/service/${service.id}`">
                          {{ service.name }}
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/">Articulos</router-link>
                    <ul class="submenu">
                      <li>
                        <router-link to="/blog">Blog with sidebar</router-link>
                      </li>
                      <li>
                        <router-link to="/blog-fullwidth">
                          Blog full width
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/blog-single">
                          Blog single sidebar
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/blog-single-fullwidth">
                          Blog single fullwidth
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/">Paginas</router-link>
                    <ul class="submenu">
                      <li>
                        <router-link to="/pricing">pricing table</router-link>
                      </li>
                      <li><router-link to="/team">Team</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/contact">Contactanos</router-link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-2 search">
            <ul>
              <li>
                <router-link to="/"><i class="fa fa-search"></i></router-link>
                <ul>
                  <li>
                    <form onSubmit="{SubmitHandler}">
                      <input type="text" placeholder="search here.." />
                      <button type="btn"><i class="fa fa-search"></i></button>
                    </form>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-md-1 col-sm-1 col-2">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HeaderMain',
  props: {
    msg: String,
  },
  setup() {
    const getServices = () => {
      let servicesArray = [
        {
          name: 'Montacargas',
          id: 1,
        },
        {
          name: 'Transporte',
          id: 2,
        },
      ]
      return servicesArray
    }
    let services = ref([])
    services = getServices()
    return {
      services,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header-top,
.header-top-1 {
  background: #142440;
  padding: 5px 0px;
}

.header-top ul.header-contact,
.header-top-1 ul.header-contact {
  text-align: right;
}
.header-top li,
.header-top-1 li {
  display: inline-block;
  padding: 5px;
  color: #fff;
}
.header-top li i,
.header-top-1 li i {
  color: #fff;
}

.header-style-2 {
  position: relative;
  z-index: 999;
  background: #231b0e;
}
.header-top-1 .container .row {
  padding: 10px 0;
}
.header-top-1 {
  padding: 0;
}
.header-style-1 {
  width: 100%;
  position: absolute;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.header-style-1 .main-menu,
.header-style-2 .main-menu,
.header-style-3 .main-menu {
  text-align: right;
}
.header-top ul.header-social,
.header-top-1 ul.header-social {
  position: relative;
  justify-content: flex-end;
}
.header-top ul.header-social li:last-child,
.header-top-1 ul.header-social li:last-child {
  padding-right: 0;
}

.header-middle {
  padding: 20px 0;
}
.account_login-area {
  margin-top: 8px !important;
}
.account_login-area li:first-child {
  padding-left: 0;
  padding-right: 30px;
}
.account_login-area li i {
  color: #fff;
  margin-right: 10px;
}

.header-top-1 .btn-style {
  text-align: right;
}
.logo {
  margin-top: 10px;
}
.main-menu .submenu li a {
  padding: 10px 15px 10px 0px;
  color: #333;
  font-size: 14px;
}

.main-menu .submenu li {
  border-bottom: 1px solid #f1f1f1;
}
.main-menu .submenu li:last-child {
  border-bottom: none;
}
.main-menu nav ul li {
  display: inline-block;
  position: relative;
}
.main-menu nav ul li a:last-child {
  padding-right: 0;
}
.main-menu nav ul li {
  padding: 13px 18px;
}
.main-menu nav ul li:first-child {
  padding-left: 0;
}
.main-menu nav ul li > ul li:first-child {
  padding-left: 15px;
}
.main-menu nav ul li a {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0;
  text-transform: uppercase;
  position: relative;
}
.main-menu nav ul li a:before {
  position: absolute;
  content: '';
  left: -20px;
  bottom: -13px;
  width: 100%;
  height: 5px;
  background: #eee;
  opacity: 0;
  transition: all 0.5s;
}

.main-menu nav ul li a:hover:before {
  opacity: 1;
  left: 0px;
}
.main-menu nav ul li.active :before {
  opacity: 1;
  left: 0px;
}

.main-menu nav ul li > ul li a {
  color: #333;
}
.main-menu nav ul li > ul li a:hover {
  color: #34ccff;
}

.main-menu .submenu {
  position: absolute;
  left: 0;
  top: 140%;
  z-index: 999;
  width: 235px;
  padding: 0;
  background: #fff;
  text-align: left;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  opacity: 0;
  visibility: hidden;
}

.main-menu nav > ul > li:hover > .submenu {
  top: 100%;
  opacity: 1;
  visibility: visible;
}
.header-style-1 .main-menu nav ul li a:before,
.header-style-2 .main-menu nav ul li a:before,
.header-style-3 .main-menu nav ul li a:before {
  display: none;
}
.header-style-1 .main-menu nav ul li,
.header-style-2 .main-menu nav ul li,
.header-style-3 .main-menu nav ul li {
  padding: 35px 18px;
}
.header-style-1 .main-menu nav ul li:last-child,
.header-style-2 .main-menu nav ul li:last-child,
.header-style-3 .main-menu nav ul li:last-child {
  padding-right: 0;
}
.header-style-1 .logo,
.header-style-2 .logo,
.header-style-3 .logo {
  margin-top: 25px;
}
.col-t {
  padding-left: 0;
}
.main-menu .submenu li {
  display: block;
}
.main-menu .submenu li a:before {
  display: none;
}
.main-menu .submenu li {
  padding: 2px 15px;
}
.main-menu .submenu-2 {
  left: 0;
}

.header-style-1 .main-menu .submenu li,
.header-style-2 .main-menu .submenu li,
.header-style-3 .main-menu .submenu li {
  padding: 2px 15px;
}

.sticky {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 1200;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  animation: 600ms ease-in-out 0s normal none 1 running fadeInDown;
}
.header-style-2.sticky {
  background: #231b0e;
}
.header-style-2 .main-menu nav ul li a {
  color: #fff;
}
.header-style-2 .logo {
  margin-top: 15px;
}

.btn-style2 {
  text-align: right;
}
.btn-style a {
  background-color: #34ccff;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  padding: 10px 28px;
  border: 2px solid transparent;
  text-transform: capitalize;
  display: inline-block;
  margin-top: 3px;
}

.btn-style a:hover {
  background: #31b5e1;
  color: #fff;
}
.header-middle .btn-style a {
  font-size: 13px;
}
.slide-caption .btn-style2 {
  text-align: right;
}
.slide-caption .btn-style a {
  color: #fff;
}
.search {
  text-align: right;
}
.header-style-1 .search,
.header-style-2 .search,
.header-style-3 .search {
  text-align: right;
  padding-right: 15px;
}
.search ul li a {
  text-align: right;
  color: #333;
}
.search ul li a i {
  margin-top: 17px;
  padding-bottom: 15px;
  color: #fff;
}
.search ul li > ul {
  position: absolute;
  right: 0;
  top: 150%;
  width: 263px;
  background: #fff;
  z-index: 99;
  padding: 15px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  text-align: center;
}
.search ul li:hover > ul {
  visibility: visible;
  opacity: 1;
  top: 100%;
}
.header-style-1 .search ul li > ul,
.header-style-2 .search ul li > ul,
.header-style-3 .search ul li > ul {
  right: -11px;
}
.search ul li > ul form {
  position: relative;
}
.search ul li > ul input {
  background: #fff;
  width: 100%;
  height: 40px;
  padding: 0 40px 0 10px;
}
.search ul li > ul input:focus {
  outline: none;
  border: 1px solid #ccc;
}
.search ul li > ul button {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background: #34ccff;
  color: #fff;
  border: none;
  cursor: pointer;
}
.search ul li > ul button:hover {
  background: #31b5e1;
}
.search ul li:last-child a {
  padding-right: 0;
}

.header-style-2 .search ul li a i {
  color: #fff;
}
.header-style-1 .search ul li a i,
.header-style-2 .search ul li a i,
.header-style-3 .search ul li a i {
  margin-top: 40px;
  padding-bottom: 36px;
  color: #fff;
}
@media (max-width: 991px) {
  .header-style-1 .search ul li a i,
  .header-style-2 .search ul li a i,
  .header-style-3 .search ul li a i {
    margin-top: 22px;
  }
}
.header-style-2 .search ul li a i {
  color: #fff;
}
.header-style-2 .main-menu nav ul li > ul li a {
  color: #333;
}
.main-menu nav ul li a:hover {
  color: #34ccff;
}
.header-style-2 .main-menu nav ul li > ul li a:hover {
  color: #34ccff;
}

.header-style-3 {
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
}
.header-style-3 .logo {
  margin-top: 16px;
}
.header-style-3 .search ul li a i {
  color: #fff;
}
.header-style-3 .search ul li a i {
  color: #fff;
}
.header-style-3 .main-menu nav ul li a {
  color: #fff;
}
.header-style-3 .main-menu nav ul li > ul li a {
  color: #333;
}
.header-style-3 .main-menu nav ul li > ul li a:hover {
  color: #34ccff;
}
</style>
