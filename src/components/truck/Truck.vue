<template>
  <section class="wpo-track-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="track">
            <h3>Enter Your Email and Track Your Cargo</h3>
            <div class="wpo-tracking-form">
              <form :onSubmit="submitHandler">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Tracking Number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <button type="submit">Track Your Cargo</button>
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
// @ is an alias to /src
export default {
  name: 'truckAreaMain',
}
</script>
<style>
.track h3 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
}

.wpo-track-section {
  padding: 60px 0 70px;
  background: url('@/assets/images/news/bg.jpg') no-repeat center center / cover;
}

.wpo-track-section .track form {
  position: relative;
}
.wpo-track-section .track button {
  background: #34ccff;
  color: #fff;
  border: 0;
  outline: 0;
  position: absolute;
  left: 15px;
  top: 0;
  width: 200px;
  height: 50px;
  transition: all 0.3s;
}
.wpo-track-section .track button:hover {
  background: #31b5e1;
}
.wpo-track-section .track input {
  background: #fff;
  height: 50px;
  font-size: 17px;
  color: #333;
  padding: 6px 80px 6px 30px;
  border: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-control {
  border-radius: 0px;
}
</style>
