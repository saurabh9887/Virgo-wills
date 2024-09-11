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
                        to="/who-your-will"
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
              <div class="col-lg-12">
                <h1 class="text-justify mb-10">Your estate</h1>
                <p class="text-justify mb-10">
                  Your estate is everything you own apart from any specific
                  gifts you decide to leave to people later on. This is known as
                  your residuary estate.
                </p>
                <p class="text-justify mb-10">
                  In this section you’ll be able to divide your residuary estate
                  between people and even charities.
                </p>
                <p class="text-justify mb-10">
                  You’ll be able to add your gifts later.
                </p>
                <div class="selection-buttons"></div>
              </div>
            </div>
            <div class="row mb-30">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h5>
                      <i class="fa fa-check-circle text-success"></i> What your
                      residuary estate includes
                    </h5>
                  </li>
                  <li class="list-group-item">Your bank accounts and ISAs</li>
                  <li class="list-group-item">Stocks and shares</li>
                  <li class="list-group-item">
                    Property when you own it by yourself
                  </li>
                  <li class="list-group-item">
                    Property when you own a specific percentage of it (also
                    known as tenants in common)
                  </li>
                  <li class="list-group-item">
                    Any other assets in your sole name, or your share of those
                    assets
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h5>
                      <i class="fa fa-times-circle text-danger"></i> What your
                      residuary estate does not include
                    </h5>
                  </li>
                  <li class="list-group-item">
                    Gifts of specific items, like jewellery
                  </li>
                  <li class="list-group-item">
                    Gifts of specific sums of money (cash gifts)
                  </li>
                  <li class="list-group-item">Most pension plans</li>
                  <li class="list-group-item">Most life insurance</li>
                  <li class="list-group-item">
                    Property when you own it together with someone else (also
                    known as joint tenants)
                  </li>
                  <li class="list-group-item">Joint bank accounts</li>
                </ul>
              </div>
            </div>

            <!-- Save and Continue Button -->
            <div class="text-center mb-3 button-flex">
              <button
                type="button"
                class="btn btn-primary mb-3 btn-right py"
                onclick="location.href='/yourEstate2'"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>

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

  <button class="scroll-top">
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>
