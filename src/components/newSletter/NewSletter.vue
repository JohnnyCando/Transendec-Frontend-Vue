<template>
  <section className="wpo-newsletter-section-2">
    <div id="contactPageTest" className="container">
      <div className="row">
        <div className="col-lg-4">
          <h2>Subscribe Our newsletter</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="col-lg-8">
          <div className="newsletter">
            <div className="wpo-newsletter-form">
              <form onSubmit="">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <button type="submit">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewSletter',
  components: {},
  setup() {},
}
</script>

<style scoped>
.wpo-newsletter-section,
.wpo-newsletter-section-2 {
  background: #f5f5f5;
}

.wpo-newsletter-section h2,
.wpo-newsletter-section-2 h2 {
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.wpo-newsletter-section,
.wpo-newsletter-section-2 {
  background: #fff;
  padding: 70px 0;
}
.newsletter {
  padding-top: 33px;
}

.wpo-newsletter-section .newsletter form,
.wpo-newsletter-section-2 .newsletter form {
  display: inline-block;
  width: 105%;
}
.wpo-newsletter-section .newsletter button,
.wpo-newsletter-section-2 .newsletter button {
  background: #34ccff;
  color: #fff;
  border: 0;
  outline: 0;
  left: 0;
  top: 0;
  height: 50px;
  padding: 0px 35px;
  transition: all 0.3s;
}
.wpo-newsletter-section .newsletter button:hover,
.wpo-newsletter-section-2 .newsletter button:hover {
  background: #31b5e1;
}

.wpo-newsletter-section .newsletter input,
.wpo-newsletter-section-2 .newsletter input {
  background: #fff;
  height: 50px;
  font-size: 17px;
  color: #333;
  border: 1px solid #ddd;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.col-r {
  max-width: 275px;
}
.form-control {
  border-radius: 1px;
}

.wpo-newsletter-section-2 {
  background: #f5f5f5;
}

@media (max-width: 991px) {
  .wpo-newsletter-section .newsletter form,
  .wpo-newsletter-section-2 .newsletter form {
    width: 100%;
  }
}

.wpo-newsletter-section {
  background: #fff;
}
</style>
