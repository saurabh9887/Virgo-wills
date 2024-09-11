<script setup></script>

<template>
  <div class="main-page-wrapper">
    <!-- ===================================================
				Loading Transition
			==================================================== -->

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
        <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50">
          <form action="#" method="POST">
            <!-- Marital Status Options Section -->
            <div class="row align-items-start mb-50">
              <div class="col-lg-6">
                <h1 class="text-justify mb-10">
                  Are there any gifts you’d like to leave?
                </h1>
                <p class="text-justify mb-10">
                  Everything you own has a story behind it. That’s why so many
                  people choose to leave gifts to their loved ones in their
                  will.
                </p>
                <p class="text-justify mb-10">
                  It could be a memory you shared, something they always
                  cherished, or simply a little token for them to remember you
                  by.
                </p>
                <div class="row align-items-center mt-30">
                  <h4 class="mb-10">Add a gift</h4>
                  <div
                    class="job-list-two style-two p-3 shadow-sm position-relative"
                  >
                    <div class="d-flex align-items-center">
                      <div class="me-3">
                        <img src="../../../images/possession.svg" alt="" />
                      </div>
                      <div>
                        <h5>A one-off item</h5>
                        <p>e.g. Wedding ring, a piece of art...</p>
                      </div>
                      <router-link
                        to="/addGift"
                        type="button"
                        class="btn btn-outline-dark ms-auto"
                      >
                        <i class="fas fa-plus"></i> Add
                      </router-link>
                    </div>
                  </div>
                </div>

                <div class="row align-items-center mt-20">
                  <div
                    class="job-list-two style-two p-3 shadow-sm position-relative"
                  >
                    <div class="d-flex align-items-center">
                      <div class="me-3">
                        <img src="../../../images/collection.svg" alt="" />
                      </div>
                      <div>
                        <h5>A collection of items</h5>
                        <p>e.g. Record collection, mug collection...</p>
                      </div>
                      <router-link
                        to="/addGift"
                        type="button"
                        class="btn btn-outline-dark ms-auto"
                      >
                        <i class="fas fa-plus"></i> Add
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center mt-20">
                  <div
                    class="job-list-two style-two p-3 shadow-sm position-relative"
                  >
                    <div class="d-flex align-items-center">
                      <div class="me-3">
                        <img src="../../../images/vehicle.svg" alt="" />
                      </div>
                      <div>
                        <h5>A vehicle</h5>
                        <p>e.g. Car, van, bike, yacht...</p>
                      </div>
                      <a
                        href="/addGift"
                        type="button"
                        class="btn btn-outline-dark ms-auto"
                      >
                        <i class="fas fa-plus"></i> Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-5">
                <div class="partner-selection">
                  <label class="partner-option">
                    <div class="partner-details xtrime">
                      <div class="check-name">
                        <h5>Related articles</h5>
                        <p>
                          <a href="#" class="text-decoration-underline">
                            Leaving gifts in your will</a
                          >
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50">
              <div class="col-lg-6"></div>
            </div>
            <!-- Save and Continue Button -->
            <div class="text-center mb-3 button-flex">
              <!-- <button type="button" class="btn btn-primary mb-3 btn-left py"
                                onclick="location.href='about-yourself-basics.html'">Back</button> -->
              <button
                type="button"
                class="btn btn-primary mb-3 btn-right py"
                onclick="location.href='your-will.html'"
              >
                Save and continue
              </button>
            </div>
          </form>
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
                  <img
                    src="../../../images/logo/logo.png"
                    alt=""
                    width="200px"
                  />
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
</template>
