<scritp setup>

</scritp>

<template>
  <div class="main-page-wrapper">
    <!-- ===================================================
				Loading Transition
			==================================================== -->

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
                <router-link to="/" class="d-flex align-items-center">
                  <img
                    src="../../../images/logo/logo.png"
                    alt=""
                    class="bg-white"
                    width="200px"
                  />
                </router-link>
              </div>
              <!-- logo -->
              <div class="right-widget S order-lg-3">
                <li class="nav-item dropdown" style="list-style: none">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    >Your Account
                  </a>
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
                      <router-link to="/signup" class="dropdown-item"
                        ><span>Save and logout</span></router-link
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
                        <router-link to="/" class="d-block"
                          ><img
                            src="../../../images/logo/logo_01.png"
                            alt=""
                            width="100"
                        /></router-link>
                      </div>
                    </li>

                    <li class="nav-item">
                      <router-link class="nav-link" to="/" role="button"
                        >Your progress</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/yourwill" role="button"
                        >Your will</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link"
                        hrtoef="/who-your-will"
                        role="button"
                        >Who's in your will</router-link
                      >
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

    <section class="marital-status-form">
      <div class="container">
        <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50 row">
          <div class="col-md-6">
            <h1 class="mb-30">
              Thinking about choosing a professional executor
            </h1>
            <p class="mb-30">
              Even if an estate is straightforward, being an executor can be
              time-consuming and complicated. It’s one of the main reasons
              two-thirds of people choose a professional to do it.
            </p>

            <p>
              Sometimes people choose a solicitor, but you can also use a
              professional executor service. Ours is called Farewill Trustees
              and is founded on the same principles of using technology to offer
              a modern experience at an affordable price.
            </p>
            <p>
              Costs for professional executors can vary hugely, so it’s
              something to think about before you decide.
            </p>
            <div class="partner-selection">
              <label class="partner-option">
                <div class="partner-details xtrime">
                  <div class="check-name">
                    <p>
                      <strong
                        ><i class="fa fa-envelope"></i>
                        <a
                          href="mailto:test@gmail.com"
                          class="text-decoration-underline"
                        >
                          Email us</a
                        ></strong
                      >
                    </p>
                    <p>
                      <strong
                        ><i class="fa fa-phone"></i> Call us on
                        <a
                          href="tel:020 8176 6773 "
                          class="text-decoration-underline"
                          >020 8176 6773
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="col-lg-6">
            <div
              class="ps-xxl-4 wow fadeInRight mb-4 h-auto"
              style="visibility: visible; animation-name: fadeInRight"
            >
              <div class="title-one">
                <h3 class="text-center mb-30">Farewill Trustees</h3>
              </div>
              <p class="">Fixed fee of <b>£1,000-£2,750</b></p>
              <p>(depending on how complicated your estate is)</p>
              <p>Professionally administered estate</p>
              <p>
                We’ll step aside with no fuss and no fee if your estate doesn’t
                need professional help
              </p>
            </div>
            <div
              class="ps-xxl-4 wow fadeInRight h-auto mb-40"
              style="visibility: visible; animation-name: fadeInRight"
            >
              <div class="title-one">
                <h3 class="text-center mb-30">
                  Typical professional executors
                </h3>
              </div>
              <p class="">
                <b
                  >Hourly rates, or fixed fees that are tied to the value of
                  your estate (often 2-4%)</b
                >
              </p>
              <p>(depending on how complicated your estate is)</p>
              <p>
                This could be up to £20,000 if your estate is worth £500,000
                when you die.
              </p>
              <p>Professionally administered estate</p>
              <p>
                Often hassle and a fee to get them to step aside if help isn’t
                wanted
              </p>
            </div>
          </div>

          <div class="text-center mb-3 button-flex">
            <button
              type="button"
              class="btn btn-primary mb-3 btn-left py"
              onclick="location.href='/executors1'"
            >
              Back
            </button>
            <!-- <button type="button" class="btn btn-primary mb-3 btn-right py">Save and continue</button> -->
            <a href="/executors3" class="btn btn-primary mb-3 btn-right py"
              >Next, choose executors
            </a>
          </div>
          <!-- Save and Continue Button -->
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
                <a href="#" class="d-flex align-items-center">
                  <img src="../../../images/logo/logo.png" alt="" width="200px" />
                </a>
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
                <li><a href="#">Privacy & Terms</a></li>
                <li><a href="#"> Contact Us</a></li>
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
  </div>
  <!-- /.main-page-wrapper -->
</template>
