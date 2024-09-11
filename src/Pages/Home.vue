<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(userInfo);

const router = useRouter();

const logout = async () => {
  try {
    localStorage.removeItem("userInfo");
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="main-page-wrapper">
    <!-- ===================================================
				Loading Transition
			==================================================== -->

    <!-- <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
          <div class="icon">
            <img
              src="../images/logo/logo-icon.png"
              alt=""
              class="m-auto d-block"
              width="60"
            />
          </div>
          <div class="txt-loading">
            <span data-text-preloader="v" class="letters-loading"> v </span>
            <span data-text-preloader="i" class="letters-loading"> i </span>
            <span data-text-preloader="r" class="letters-loading"> r </span>
            <span data-text-preloader="g" class="letters-loading"> g </span>
            <span data-text-preloader="o" class="letters-loading"> o </span>
            <span data-text-preloader="w" class="letters-loading"> w </span>
            <span data-text-preloader="i" class="letters-loading"> i </span>
            <span data-text-preloader="l" class="letters-loading"> l </span>
            <span data-text-preloader="l" class="letters-loading"> l </span>
            <span data-text-preloader="s" class="letters-loading"> s </span>
          </div>
        </div>
      </div> -->

    <!-- 
		=============================================
				Theme Main Menu
		============================================== 
		-->
    <header class="theme-main-menu menu-overlay menu-style-one sticky-menu">
      <div class="inner-content position-relative">
        <div class="container">
          <div class="top-header">
            <div class="d-flex align-items-center justify-content-between">
              <div class="logo order-lg-0">
                <router-link class="d-flex align-items-center" to="/">
                  <img
                    src="../../images/logo/logo.png"
                    alt=""
                    class="bg-white"
                    width="200px"
                  />
                </router-link>
              </div>
              <!-- logo -->
              <div class="right-widget S order-lg-3">
                <li class="nav-item dropdown" style="list-style: none">
                  <router-link
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Your Account
                  </router-link>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#" class="dropdown-item"
                        ><span>Your Services​</span></a
                      >
                    </li>
                    <hr />
                    <li>
                      <a href="#" class="dropdown-item"
                        ><span>Account Settings</span></a
                      >
                    </li>
                    <hr />
                    <li>
                      <a href="#" class="dropdown-item"
                        ><span>Messages</span></a
                      >
                    </li>
                    <hr />
                    <li>
                      <a href="#" class="dropdown-item"><span>Invite</span></a>
                    </li>
                    <hr />
                    <li>
                      <span
                        @click="logout"
                        class="dropdown-item"
                        style="cursor: pointer"
                        >Save and logout</span
                      >
                    </li>
                  </ul>
                </li>
              </div>
              <!--/.right-widget-->
              <nav class="navbar navbar-expand-lg p0 ms-lg-5 ms-3 order-lg-2">
                <button
                  class="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav align-items-lg-center">
                    <li class="d-block d-lg-none">
                      <div class="logo">
                        <router-link to="/" class="d-block">
                          <img
                            src="../../images/logo/logo_01.png"
                            alt=""
                            width="100"
                          />
                        </router-link>
                      </div>
                    </li>
                    <li class="nav-item">
                      <router-link to="/"> Your progress </router-link>
                    </li>
                    <li class="nav-item">
                      <!-- <a class="nav-link" href="your-will.html" role="button"
                          >Your will</a
                        > -->
                      <router-link class="nav-link" to="/yourwill"
                        >Your will
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/"
                        >Who's in your will
                      </router-link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <!--/.top-header-->
        </div>
        <!-- /.inner-content -->
      </div>
    </header>
    <!-- /.theme-main-menu -->

    <!-- ===Inner Banner=====-->

    <div class="inner-banner-one position-relative">
      <div class="container">
        <div class="position-relative"></div>
      </div>
    </div>
    <!-- /.inner-banner-one -->

    <section class="job-portal-intro">
      <div class="container">
        <div class="wrapper pt-65 md-pt-50 pb-30 md-pb-50">
          <div class="row align-items-center">
            <div
              class="col-lg-6"
              style="box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
            >
              <h1>Welcome Back Dnyaneshwar</h1>
              <p>Let's get your will sorted</p>
            </div>
            <div class="col-lg-6">
              <div class="text-center text-lg-end" style="float: right">
                <img src="../../images/welcome.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="job-portal-intro">
      <div class="container">
        <div class="wrapper pt-10 md-pt-20 md-pb-10">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div
                class="mb-4 p-3"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div class="d-flex align-items-center mt-20">
                  <div
                    class="block-numb text-center fw-500 text-white rounded-circle me-2"
                  >
                    <span style="margin-top: 5px">1</span>
                  </div>
                  <h4>Write your will</h4>
                </div>
                <p>
                  Congratulations! You’ve finished writing your will. Now you
                  just need to pay to get it checked by our will specialists.
                </p>
                <router-link
                  to="/signup"
                  class="btn-one lg mb-20 md-mt-30 w-100"
                >
                  Purchase and send for checking
                </router-link>
                <router-link
                  class="btn-once mb-20 md-mt-30 w-100"
                  :to="userInfo ? '/yourwill' : '/register'"
                >
                  Create my will
                </router-link>
              </div>
              <div
                class="accordion accordion-style-one mt-20 mb-50"
                id="accordionOne"
              >
                <div class="accordion-item">
                  <div class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <div
                        class="block-numb text-center fw-500 text-white rounded-circle me-2"
                      >
                        2
                      </div>
                      Our specialists check your will
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionOne"
                    style=""
                  >
                    <div class="accordion-body">
                      <p>
                        Our specialists will check your will within 5 working
                        days. If they recommend any changes, make your updates
                        within 30 days, and they’ll check your will again.
                        Simple.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div
                        class="block-numb text-center fw-500 text-white rounded-circle me-2"
                      >
                        3
                      </div>
                      Make it legal
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionOne"
                  >
                    <div class="accordion-body">
                      <p>
                        To make your will legally binding, you need to sign a
                        printed copy in front of two witnesses. You can choose
                        to download and print your will at home or order a
                        printed copy.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div
                        class="block-numb text-center fw-500 text-white rounded-circle me-2"
                      >
                        <i class="fas fa-sync-alt"></i>
                      </div>

                      Keep your will up to date
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionOne"
                  >
                    <div class="accordion-body">
                      <p>
                        Once you’ve signed your will, it’s important to update
                        it when circumstances change. Traditionally, that means
                        paying a solicitor’s fee or the cost of a whole new
                        will. With Farewill you can make unlimited changes for
                        just £10 a year – you’ll find the option at the
                        checkout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="job-list-two style-two position-relative">
                <p>We're here to help you</p>
                <div class="d-flexs align-item-right position-relative">
                  <img
                    src="../images/assets/img_14.jpg"
                    alt=""
                    class="author-img rounded-circle position-relative"
                  />
                  <img
                    src="../images/assets/img_14.jpg"
                    alt=""
                    class="author-img rounded-circle position-relative"
                  />
                  <img
                    src="../images/assets/img_14.jpg"
                    alt=""
                    class="author-img rounded-circle position-relative"
                  />
                </div>

                <p class="mb-0">
                  <i class="fas fa-phone-alt"></i> Call us on
                  <a href="tel:0123456789" class="phone-contact">0123456789</a>
                </p>

                <p class="mb-3">
                  <i class="fas fa-envelope"></i> Email us at
                  <a href="mailto:hello@virgowills.com" class="email-contact"
                    >hello@virgowills.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- /.footer-one -->
    <div class="footer-one">
      <div class="container">
        <div class="inner-wrapper">
          <div class="row">
            <div class="col-lg-4 col-md-3 footer-intro logo-align">
              <div class="logo">
                <router-link class="d-flex align-items-center" to="#">
                  <img src="../images/logo/logo.png" alt="" width="200px" />
                </router-link>
              </div>
              <!-- <img src="images/lazy.svg" data-src="images/shape/shape_28.svg" alt=""
							class="lazy-img sm-mt-30 sm-mb-20"> -->
              <!-- logo -->
            </div>
            <div class="col-lg-4 col-md-3 footer-intro"></div>
            <div class="col-lg-4 col-md-3 footer-intro privacsy-align term">
              <ul
                class="d-flex style-none bottom-nav justify-content-center justify-content-lg-start list"
              >
                <li>
                  <router-link to="#"> Privacy & Terms </router-link>
                </li>
                <li>
                  <router-link to="#"> Contact Us </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /.inner-wrapper -->
      </div>
    </div>
    <!-- /.footer-one -->

    <!-- Modal -->

    <button class="scroll-top">
      <i class="bi bi-arrow-up-short"></i>
    </button>

    <!-- Optional JavaScript _____________________________  -->

    <!-- jQuery first, then Bootstrap JS -->
    <!-- jQuery -->
    <!-- <script src="../vendor/jquery.min.js"></script> -->
    <!-- <script src="../vendor/jquery.min.js"></script> -->
    <!-- Bootstrap JS -->
    <!-- <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->
    <!-- WOW js -->
    <!-- <script src="../vendor/wow/wow.min.js"></script> -->
    <!-- Slick Slider -->
    <!-- <script src="../vendor/slick/slick.min.js"></script> -->
    <!-- Fancybox -->
    <!-- <script src="../vendor/fancybox/dist/jquery.fancybox.min.js"></script> -->
    <!-- Lazy -->
    <!-- <script src="../vendor/jquery.lazy.min.js"></script> -->
    <!-- js Counter -->
    <!-- <script src="../vendor/jquery.counterup.min.js"></script> -->
    <!-- <script src="../vendor/jquery.waypoints.min.js"></script> -->
    <!-- Nice Select -->
    <!-- <script src="../vendor/nice-select/jquery.nice-select.min.js"></script> -->
    <!-- validator js -->
    <!-- <script src="../vendor/validator.js"></script> -->

    <!-- Theme js -->
    <!-- <script src="js/theme.js"></script> -->
    <!-- <script src="../js/theme.js"></script> -->
  </div>
</template>
