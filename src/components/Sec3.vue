<template>
<div>
 <section class="index3" id="about">
    <div class="midd-w3 pb-5">
        <div class="container pb-lg-5 pb-md-4 pb-2">
            <div class="row">
                <div class="col-lg-5 pr-lg-0">
                    <div class="left-img">
                        
                    </div>
                </div>
                <div class="col-lg-7 pl-lg-0">
                    <div class="right-info">
                        <h6 class="title-small">Who we are</h6>
                        <h3 class="title-big">The experts in local and international property</h3>
                        <p class="mt-4">We have over 15 year experience, Over 20,000 people work for us in more than 70
                            countries all over the world. Learn more about our work!
                            Lorem ipsum vive dolor sit amet.
                        </p>
                        <p class="mt-3">Viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel lorem ipsum.</p>
                        <ul class="right-book right-book-grid mt-md-5 mt-4">
                            <li><span class="fa fa-check" aria-hidden="true"></span>Outstanding property</li>
                            <li><span class="fa fa-check" aria-hidden="true"></span>Social responsibility</li>
                            <li><span class="fa fa-check" aria-hidden="true"></span>Get expert advice</li>
                            <li><span class="fa fa-check" aria-hidden="true"></span>Group structure</li>
                            <li><span class="fa fa-check" aria-hidden="true"></span>Specialist services</li>
                            <li><span class="fa fa-check" aria-hidden="true"></span>Vision & strategy</li>
                        </ul>
                        <a href="#services" class="btn btn-style btn-primary mt-4">Discover our services</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>
<!-- /bottom-grids-->
<section class="bottom-grids py-5" id="steps">
    <div class="container py-lg-5 py-md-4 py-2">
        <div class="grids-area-hny main-cont-wthree-fea row">
            <div class="col-lg-4 col-md-6 grids-feature">
                <div class="area-box no-box-shadow">
                    <h4><a href="#feature" class="title-head">Buy a home</a></h4>
                    <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.</p>
                    <a href="#more" class="more">Read More </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                <div class="area-box no-box-shadow">
                    <h4> <a href="#feature" class="title-head">Rent a home </a></h4>
                    <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.</p>
                    <a href="#more" class="more">Read More  </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                <div class="area-box no-box-shadow">
                    <h4><a href="#feature" class="title-head">See neighbourhoods</a></h4>
                    <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.</p>
                    <a href="#more" class="more">Read More  </a>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
</template>
<script>
export default {

}
</script>

<style>
.index3 ul.right-book-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 20px; }

.index3 ul.right-book li {
  margin-bottom: 10px;
  color: var(--font-color);
  font-size: 19px;
  list-style: inside;
  font-weight: 400;
  list-style-type: none; }

.index3 ul.right-book li span {
  font-size: 12px;
  margin-right: 16px;
  opacity: 0.4; }

.right-info {
  background: var(--bg-color);
  padding: 80px 60px;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  box-shadow: 0px 9px 24px 5px rgba(0, 0, 0, 0.04); }

.left-img {
  background: url(../assets/images/who.jpg) no-repeat center center;
  background-size: cover;
  position: relative;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  height: 100%; }

.left-img1 {
  background: url(../assets/images/who1.jpg) no-repeat center center;
  background-size: cover;
  position: relative;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  height: 100%; }

.left-img2 {
  background: url(../assets/images/about1.jpg) no-repeat center center;
  background-size: cover;
  position: relative;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  height: 100%; }

@media (max-width: 991px) {
  .left-img, .left-img1, .left-img2 {
    height: 300px;
    border-radius: 0;
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius); } }

@media (max-width: 736px) {
  .right-info {
    padding: 60px 40px; }
  .index3 ul.right-book li {
    font-size: 17px; } }

@media (max-width: 480px) {
  .index3 ul.right-book-grid {
    grid-template-columns: 1fr;
    grid-gap: 0 0px; }
  .index3 ul.right-book li {
    display: grid;
    grid-template-columns: auto 1fr; } }

@media (max-width: 415px) {
  .right-info {
    padding: 40px 20px; } }

.bottom-grids {
  background: var(--bg-color); }

.bottom-grids .area-box {
  padding: 0px 25px;
  border-radius: var(--border-radius);
  text-align: center; }

.bottom-grids .area-box h5 {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .5px;
  margin-top: 15px;
  color: var(--font-color);
  opacity: .6; }

.bottom-grids .grids-feature span.fa {
  color: var(--primary-color);
  font-size: 30px; }

.bottom-grids h4 a.title-head {
  font-size: 22px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 20px;
  display: block;
  color: var(--heading-color); }

.bottom-grids h4 a.title-head:hover {
  color: var(--primary-color); }

@media (max-width: 1080px) {
  .bottom-grids .area-box {
    padding: 40px 10px 0px; } }

@media (max-width: 991px) {
  .bottom-grids {
    position: relative;
    z-index: 1;
    margin-top: 0px; } }

@media (max-width: 480px) {
  .bottom-grids h4 a.title-head {
    font-size: 22px;
    letter-spacing: 0; }
  .bottom-grids .area-box {
    padding: 20px 10px 0px; } }

.client-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-content: space-between;
  grid-gap: 30px; }

.testimonial {
  border-top: 1px solid var(--border-color-light);
  padding-top: 30px; }
</style>