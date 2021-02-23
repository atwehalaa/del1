<template>
  <section class="index3" id="about">
    <div class="midd-w3 py-5">
        <div class="container pb-lg-5 pb-md-4 pb-2">
            <div class="row">
                <div class="col-lg-5 pr-lg-0">
                    <div class="left-img1">
                    </div>
                </div>
                <div class="col-lg-7 pl-lg-0">
                    <div class="right-info">
                        <h6 class="title-small">Our clients</h6>
                        <div class="client-grid">
                            <div class="client-title">
                                <h3 class="title-big">We value client relationships</h3>
                            </div>
                            <div class="clients-info">
                                <h3 class="title-big">45,200</h3>
                                <p>Satisfied customers</p>
                            </div>
                        </div>

                        <div class="clients" id="testimonials">
                            <div id="owl-demo1" class="owl-carousel owl-theme mt-4 pt-2 mb-4">
                                <div class="item">
                                    <div class="testimonial-content">
                                        <div class="testimonial">
                                            <div class="testi-des">
                                                <div class="peopl align-self">
                                                    <h4>John wilson</h4>
                                                    <p class="indentity">Communication executive</p>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <q>OMG! I cannot believe that I have got a property new private house after
                                                    getting villa. It was very comfortable. I can't say enough about Real Estate</q>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="testimonial-content">
                                        <div class="testimonial">
                                            <div class="testi-des">
                                                <div class="peopl align-self">
                                                    <h4>Julia sakura</h4>
                                                    <p class="indentity">Digital Marketer</p>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <q>OMG! I cannot believe that I have got a property new private house after
                                                    getting villa. It was very comfortable. I can't say enough about Real Estate</q>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="testimonial-content">
                                        <div class="testimonial">
                                            <div class="testi-des">
                                                <div class="peopl align-self">
                                                    <h4>John wilson</h4>
                                                    <p class="indentity">Web Developer</p>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <q>OMG! I cannot believe that I have got a property new private house after
                                                    getting villa. It was very comfortable. I can't say enough about Real Estate</q>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="testimonial-content">
                                        <div class="testimonial">
                                            <div class="testi-des">
                                                <div class="peopl align-self">
                                                    <h4>Julia sakura</h4>
                                                    <p class="indentity">Digital Marketer</p>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <q>OMG! I cannot believe that I have got a property new private house after
                                                    getting villa. It was very comfortable. I can't say enough about Real Estate</q>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#agents" class="btn btn-style btn-primary mt-5">Contact our agents</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- /bottom-grids-->
  </section>
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
  .w3l-left-img, .left-img1, .left-img2 {
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

.testi-des h4 {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px; }

p.indentity {
  opacity: .6; }

.testimonial blockquote {
  font-size: 20px;
  color: var(--heading-color);
  margin-top: 20px; }

@media (max-width: 736px) {
  .testimonial blockquote {
    font-size: 18px; } }

@media (max-width: 480px) {
  .client-grid {
    grid-template-columns: 1fr;
    grid-gap: 20px; } }

.company-gd a img {
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%); }

.company-gd:hover a img {
  -webkit-filter: grayscale(0%);
          filter: grayscale(0%); }

.news .blog-info {
  padding: 35px 25px;
  border: 1px solid var(--border-color);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius); }

.news .grids5-info {
  position: relative;
  transition: 0.3s ease-in;
  display: block;
  height: 100%;
  background: var(--bg-color);
  box-shadow: 0px 9px 24px 5px rgba(0, 0, 0, 0.04);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius); }

.news a.zoom {
  overflow: hidden;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius); }

.news a.zoom img {
  transition: 0.3s ease-in-out; }

.news .grids5-info:hover img {
  overflow: hidden;
  transform: scale(1.1);
  transition: 0.3s ease-in-out; }

.news img.news-image {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius); }

.news .grids5-info h4 a {
  font-size: 22px;
  line-height: 27px;
  color: var(--heading-color);
  display: block;
  font-weight: 600; }

.news .grids5-info h4 a:hover {
  color: var(--primary-color); }

.news .grids5-info p {
  margin-top: 15px; }

.news p.date {
  font-size: 15px;
  margin-top: 8px;
  color: #949494; }

.news .grids5-info img {
  width: 100%;
  display: block; }

.news a.btn-news {
  padding: 0;
  border-bottom: 2px solid var(--primary-color);
  color: var(--heading-color);
  transition: 0.3s ease-in-out;
  font-weight: 600;
  border-radius: 0; }

.news a.btn-news:hover {
  letter-spacing: 1px;
  transition: 0.3s ease-in-out; }

@media all and (max-width: 1280px) {
  .news .d-grid {
    grid-gap: 15px; } }

@media all and (max-width: 1080px) {
  .news .d-grid {
    grid-template-columns: 1fr 1fr; } }

@media all and (max-width: 800px) {
  .news .d-grid {
    grid-gap: 30px; } }

@media all and (max-width: 768px) {
  .news .grids5-info h4 a {
    font-size: 20px;
    line-height: 25px; } }

@media all and (max-width: 668px) {
  .news .d-grid {
    grid-template-columns: 1fr; } }

@media all and (max-width: 568px) {
  .news .d-grid {
    grid-template-columns: 1fr; }
  .news .grids5-info p {
    margin-top: 12px; } }

@media all and (max-width: 414px) {
  .news .grids5-info h4 a {
    font-size: 20px; } }

a.category {
  margin-bottom: 8px;
  display: inline-block;
  font-size: 17px; }

span.posted-date {
  position: absolute;
  background: var(--bg-color);
  left: 20px;
  top: -20px;
  border-top: 2px solid var(--primary-color);
  padding: 10px 25px;
  text-align: center;
  border-radius: var(--border-radius);
  z-index: 2; }

span.small {
  display: block;
  color: var(--heading-color);
  font-weight: 600; }

span.big {
  display: block;
  color: var(--heading-color);
  font-weight: 600;
  font-size: 30px;
  line-height: 1;
  margin-top: 8px; }

@media (max-width: 736px) {
  span.big {
    font-size: 25px;
    margin-top: 4px; }
  span.posted-date {
    padding: 10px 20px; } }

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes fadeOut {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

.owl-height {
  transition: height .5s ease-in-out; }

.owl-carousel .owl-item .owl-lazy {
  opacity: 0;
  transition: opacity .4s ease; }

.owl-carousel .owl-item .owl-lazy:not([src]),
.owl-carousel .owl-item .owl-lazy[src^=""] {
  max-height: 0; }

.owl-carousel .owl-item img.owl-lazy {
  transform-style: preserve-3d; }

.owl-carousel .owl-video-wrapper {
  position: relative;
  height: 100%;
  background: #000; }

.owl-carousel .owl-video-play-icon {
  position: absolute;
  height: 80px;
  width: 80px;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -40px;

  cursor: pointer;
  z-index: 1;
 
  transition: transform .1s ease; }

.owl-carousel .owl-video-play-icon:hover {
  transform: scale(1.3, 1.3); }

.owl-carousel .owl-video-playing .owl-video-play-icon,
.owl-carousel .owl-video-playing .owl-video-tn {
  display: none; }

.owl-carousel .owl-video-tn {
  opacity: 0;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity .4s ease; }

.owl-carousel .owl-video-frame {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%; }

@media (max-width: 568px) {
  .owl-carousel .owl-dots.disabled,
  .owl-carousel .owl-nav.disabled {
    display: none; } }

/**
  * Owl Carousel v2.3.4
  * Copyright 2013-2018 David Deutsch
  * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
  */
.owl-theme .owl-dots,
.owl-theme .owl-nav {
  -webkit-tap-highlight-color: transparent; }

.owl-theme .owl-nav {
  display: block; }

.owl-dots {
  margin-top: 0px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -50px;
  background: none; }

.owl-blog .owl-dots {
  display: none; }

.owl-theme .owl-nav [class*=owl-] {
  color: #fff;
  font-size: 18px;
  margin: 0px;
  width: 50px;
  background: rgba(255, 255, 255, 0.2);
  display: inline-block;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 50px;
  line-height: 50px;
  border-radius: 50%; }

.owl-theme .owl-nav [class*=owl-]:hover {
  background: rgba(255, 255, 255, 0.25);
  opacity: 1;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  transition: 0.3s ease-in-out; }

.owl-theme .owl-nav [class*=owl-]:focus,
.owl-theme:focus,
.owl-dots:focus,
.owl-dot:focus {
  outline: none;
  box-shadow: none; }

.owl-theme .owl-nav .disabled {
  opacity: .5;
  cursor: default; }

.owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 0px;
  text-align: left; }

.w3l-portflioblock .owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 0px;
  text-align: center; }

.w3l-blog-slider .owl-dots {
  text-align: center; }

.owl-theme .owl-dots .owl-dot {
  display: inline-block;
  zoom: 1;
  background: transparent; }

.owl-theme .owl-dots .owl-dot span {
  width: 8px;
  height: 8px;
  margin: 5px 2px;
  background: #d8d8d8;
  display: block;
  
  transition: opacity .2s ease;
  border-radius: 30px;
  position: relative; }

button.owl-next,
button.owl-prev {
  position: absolute;
  bottom: 50%; }

button.owl-prev {
  left: 10px; }

button.owl-next {
  right: 10px; }

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: var(--primary-color); }

@media all and (max-width: 640px) {
  .owl-dots {
    margin-top: 30px; }
  button.owl-next,
  button.owl-prev {
    position: absolute;
    bottom: 38%; } }

.breadcrumb-bg-about {
  background-size: cover;
  background-image: linear-gradient(to right, rgba(25, 25, 25, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/images/banner.jpg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: fixed; }

h2.title {
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  margin-top: 95px;
  text-align: center; }

.w3l-breadcrumb {
  background-color: var(--bg-color); }

.breadcrumbs-custom-path {
  padding: 20px 0;
  text-align: center; }

.breadcrumbs-custom-path li {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  text-transform: capitalize; }

.breadcrumbs-custom-path li span.fa {
  font-size: 14px; }

.breadcrumbs-custom-path a,
.breadcrumbs-custom-path a:active,
.breadcrumbs-custom-path a:focus {
  color: #777; }

.breadcrumbs-custom-path a:hover {
  color: var(--primary-color); }

.breadcrumbs-custom-path li.active {
  font-weight: 600;
  color: var(--heading-color); }

@media (max-width: 568px) {
  .breadcrumbs-custom-path {
    padding: 15px 0; } }

.right-info h5 {
  font-size: 20px;
  line-height: 30px; }

.right-info span.video-play-icon {
  display: inline-block;
  width: 55px;
  height: 55px;
  font-size: 20px;
  padding-left: 6px;
  text-align: center;
  line-height: 55px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  -webkit-animation: ripple 1s linear infinite;
  animation: ripple 1s linear infinite;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--primary-color);
  border: 2px solid var(--primary-color);
  margin-right: 12px; }

.right-info a.play-view {
  font-size: 18px;
  color: var(--heading-color);
  font-weight: 600; }

.right-info a.play-view:hover {
  color: var(--primary-color); }

@media (max-width: 568px) {
  .right-info h5 {
    font-size: 18px;
    line-height: 28px; } }

@media (max-width: 415px) {
  .right-info a.play-view {
    font-size: 16px; } }

.area-box {
  padding: 50px 40px;
  position: relative;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 25px 98px 0 rgba(0, 0, 0, 0.03);
  background-color: var(--bg-color); }
  .area-box h4 a.title-head {
    margin-top: 25px;
    display: block;
    color: var(--heading-color);
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 15px;
    font-size: 24px; }
  .area-box h4 a.title-head:hover {
    color: var(--primary-color); }

@media (max-width: 991px) {
  .area-box h4 a.title-head {
    line-height: 1.2;
    font-size: 22px; }
  .area-box {
    padding: 40px 35px; } }

@media (max-width: 736px) {
  .area-box h4 a.title-head {
    font-size: 22px; } }

@media (max-width: 415px) {
  .area-box h4 a.title-head {
    font-size: 20px;
    margin-top: 20px; }
  .area-box {
    padding: 35px 30px; } }

.grids-feature span.fa {
  color: var(--primary-color);
  font-size: 30px; }

.area-box.no-box-shadow {
  box-shadow: none; }

.w3l-aboutblock2 {
  background: var(--bg-color); }

.w3l-stats {
  background-size: cover;
  background-image: linear-gradient(to right, rgba(25, 25, 25, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/images/stats.jpg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center;
  background-attachment: fixed; }

.stats_info {
  text-align: center;
  padding: 0 30px; }

.stats_info h3 {
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 15px;
  color: #eee;
  display: inline-block;
  text-transform: capitalize; }

p.counter {
  font-size: 50px;
  font-weight: 600;
  color: #fff;
  margin: 30px 0;
  display: inline-block;
  opacity: 1; }

span.plus {
  font-size: 45px;
  font-weight: 600;
  color: #eee;
  margin-left: 6px; }

@media only screen and (max-width: 1080px) {
  .stats_info {
    padding: 0 10px; }
  p.counter {
    font-size: 40px; }
  span.plus {
    font-size: 35px; }
  .stats_info h3 {
    font-size: 17px; } }

@media only screen and (max-width: 736px) {
  p.counter {
    margin: 0px 0px;
    line-height: 60px; } }

@media only screen and (max-width: 415px) {
  p.counter {
    font-size: 35px;
    line-height: 50px; }
  span.plus {
    font-size: 30px;
    margin-left: 0; } }

@media only screen and (max-width: 375px) {
  .stats_info {
    padding: 0 15px; }
  .stats_info h3 {
    font-size: 16px; } }

/* Magnific Popup CSS */
.mfp-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;
  background: #0b0b0b;
  opacity: 0.8; }

.mfp-wrap {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: none !important;
   }

.mfp-container {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  box-sizing: border-box; }

.mfp-container:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle; }

.mfp-align-top .mfp-container:before {
  display: none; }

.mfp-content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045; }

.mfp-inline-holder .mfp-content,
.mfp-ajax-holder .mfp-content {
  width: 100%;
  cursor: auto; }

.mfp-ajax-cur {
  cursor: progress; }

.mfp-zoom-out-cur,
.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
  cursor: zoom-out; }

.mfp-zoom {
  cursor: pointer;
  cursor: zoom-in; }

.mfp-auto-cursor .mfp-content {
  cursor: auto; }

.mfp-close,
.mfp-arrow,
.mfp-preloader,
.mfp-counter {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.mfp-loading.mfp-figure {
  display: none; }

.mfp-hide {
  display: none !important; }

.mfp-preloader {
  color: #CCC;
  position: absolute;
  top: 50%;
  width: auto;
  text-align: center;
  margin-top: -0.8em;
  left: 8px;
  right: 8px;
  z-index: 1044; }

.mfp-preloader a {
  color: #CCC; }

.mfp-preloader a:hover {
  color: #FFF; }

.mfp-s-ready .mfp-preloader {
  display: none; }

.mfp-s-error .mfp-content {
  display: none; }

button.mfp-close,
button.mfp-arrow {
  overflow: visible;
  cursor: pointer;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  box-shadow: none;
  touch-action: manipulation; }

button::-moz-focus-inner {
  padding: 0;
  border: 0; }

.mfp-close {
  line-height: 40px;
  position: absolute;
  right: 0px;
  top: -40px;
  text-decoration: none;
  text-align: center;
  padding: 0 0 18px 10px;
  color: #FFF;
  font-style: normal;
  font-size: 28px;
  font-family: Arial, Baskerville, monospace;
  background: transparent; }

.mfp-close-btn-in .mfp-close {
  color: #fff; }

.mfp-image-holder .mfp-close,
.mfp-iframe-holder .mfp-close {
  color: #FFF;
  right: -6px;
  text-align: right;
  padding-right: 6px;
  width: 100%; }

.mfp-counter {
  position: absolute;
  top: 0;
  right: 0;
  color: #CCC;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap; }





  

</style>