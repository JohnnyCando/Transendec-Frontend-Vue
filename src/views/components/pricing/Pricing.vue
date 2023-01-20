<template>
  <div className="wpo-pricing-area">
    <div className="container">
      <div className="wpo-section-title text-center">
        <span>We Give You The Best</span>
        <h2>Our Pricing Plan</h2>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-4 col-l2 col-md-6 col-12">
              <div className="wpo-price-item">
                <div className="wpo-pricing-header">
                  <h3>Free</h3>
                  <span>Per Mile</span>
                </div>
                <div className="wpo-pricing-table">
                  <div className="wpo-price-sub-header">
                    <h4>$120</h4>
                  </div>
                  <ul>
                    <li>3000 kg load</li>
                    <li>125 kg / pallet</li>
                    <li>24/7 support</li>
                    <li>Free Packaging</li>
                    <li>Warehousing</li>
                  </ul>
                  <div className="wpo-pricing-footer">
                    <div className="btns">
                      <div className="btn-style btn-style-4">
                        <Link to="/">Order Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-l2 col-md-6 col-12">
              <div className="wpo-price-item">
                <div className="wpo-pricing-header">
                  <h3>Basaic</h3>
                  <span>Per Mile</span>
                </div>
                <div className="wpo-pricing-table">
                  <div className="wpo-price-sub-header">
                    <h4>$250</h4>
                  </div>
                  <ul>
                    <li>3000 kg load</li>
                    <li>125 kg / pallet</li>
                    <li>24/7 support</li>
                    <li>Free Packaging</li>
                    <li>Warehousing</li>
                  </ul>
                  <div className="wpo-pricing-footer">
                    <div className="btns">
                      <div className="btn-style btn-style-4">
                        <Link to="/">Order Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-l2 col-md-6 col-12">
              <div className="wpo-price-item">
                <div className="wpo-pricing-header">
                  <h3>Premium</h3>
                  <span>Per Mile</span>
                </div>
                <div className="wpo-pricing-table">
                  <div className="wpo-price-sub-header">
                    <h4>$250</h4>
                  </div>
                  <ul>
                    <li>3000 kg load</li>
                    <li>125 kg / pallet</li>
                    <li>24/7 support</li>
                    <li>Free Packaging</li>
                    <li>Warehousing</li>
                  </ul>
                  <div className="wpo-pricing-footer">
                    <div className="btns">
                      <div className="btn-style btn-style-4">
                        <Link to="/">Order Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
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

export default {
  name: 'PricingMain',
  components: {},
  setup() {},
}
</script>

<style>
.wpo-pricing-area,
.wpo-pricing-area {
  padding: 170px 0 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}
.wpo-price-item {
  text-align: center;
  background: #f6f6f6;
  transition: all 0.3s;
}
.wpo-price-item:hover {
  background: #e7f9ff;
}
.wpo-pricing-header h3 {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 30px;
}
.wpo-pricing-header {
  padding: 25px 0 13px;
  background: #34ccff;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  z-index: 11;
}
.wpo-pricing-header:before {
  content: '';
  position: absolute;
  left: 0px;
  top: 16px;
  width: 100%;
  height: 85%;
  background: url('@/assets/images/pricing/2.png') no-repeat center center /
    cover;
  z-index: -1;
}
.wpo-price-sub-header {
  padding: 20px 0 10px;
}
.wpo-price-sub-header h4 {
  font-size: 36px;
  color: #34ccff;
}
.wpo-pricing-table {
  padding-bottom: 30px;
}
.wpo-pricing-table li {
  padding: 10px;
  border-top: 1px solid #eeeeee;
}
.col-l {
  padding: 10px;
}
.pricing-img {
  text-align: right;
  position: relative;
  margin-top: -28px;
}
.pricing-img:before {
  content: '';
  position: absolute;
  left: 64%;
  top: 96px;
  width: 65%;
  height: 84%;
  border: 10px solid #34ccff;
  z-index: -1;
}
.btn-style-4 {
  margin-top: 14px;
}
.btn-style-4 a {
  border-radius: 0px;
}
</style>
