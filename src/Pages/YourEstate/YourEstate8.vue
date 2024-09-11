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
        <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50 row">
          <div class="col-lg-6">
            <h2 class="mb-30">Your estate summary</h2>
            <ul class="list-group">
              <li class="list-group-item">
                <p class="mb-0">Inheriting your estate:</p>
              </li>
              <li class="list-group-item">
                <i class="fas fa-pound-sign text-secondary"></i> Breast Cancer
                Now
              </li>
              <li class="list-group-item">
                <i class="fas fa-pound-sign text-secondary"></i> The Royal
                British Legion
              </li>
              <li class="list-group-item">
                <i class="fa fa-user text-secondary"></i> Nadeem N
                <p class="mb-0 text-secondary">Backups: their children</p>
              </li>
              <li class="list-group-item">
                <i class="fa fa-user text-secondary"></i> SUREKHA RATHOD
              </li>
              <li class="list-group-item">
                <i class="fa fa-user text-secondary"></i> Nakul Bhoir
              </li>
              <li class="list-group-item">
                <i class="fas fa-pound-sign text-secondary"></i> Macmillan
                Cancer Support
              </li>
              <li class="list-group-item">
                <i class="fas fa-pound-sign text-secondary"></i> Great Ormond
                Street Hospital Children's Charity
              </li>
              <li class="list-group-item">
                <i class="fas fa-pound-sign text-secondary"></i> NSPCC
              </li>
              <li class="list-group-item">
                <i class="fas fa-pound-sign text-secondary"></i> The RNLI
              </li>
              <!-- Button trigger modal -->
              <li class="list-group-item text-center">
                <a href="/yourEstate2" class="btn btn-outline-dark w-75 mx-auto"
                  >Make changes</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3 class="mb-30">
              Is there anyone who you’ve specifically chosen to leave out of
              your will?
            </h3>
            <p class="mb-30">
              Such as close family, partners or someone who relies on you
              financially.
            </p>

            <form action="#" method="POST">
              <ul class="btn-group w-100 style-none">
                <li class="me-2 w-100 mb-3">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options1"
                    id="option5"
                    autocomplete="off"
                    checked=""
                  />
                  <label class="btn btn-outline-dark w-100" for="option5"
                    >Yes</label
                  >
                </li>
                <li class="me-2 w-100 mb-3">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options1"
                    id="option6"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-dark w-100" for="option6"
                    >No</label
                  >
                </li>
              </ul>
              <div class="row align-items-start mb-3 mt-30 hid-show">
                <h5>Please give more details about your choice below</h5>
                <p>
                  Include who you have not put into your will and why. This is
                  important evidence to support your will if someone ever
                  challenges it.
                </p>
                <p>
                  It can help to explain why you’ve chosen other people or
                  charities instead of the person you’ve not put in the will.
                </p>
                <textarea class="form-control" type="text" rows="5"></textarea>
                <div class="accordion mt-20 px-0" id="accordionExample">
                  <div class="accordion-item border-0">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button pt-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Your message will only be seen by your executors
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body py-0">
                        They are the people dealing with your estate after you
                        die. They will decide whether it’s absolutely necessary
                        to share this message or not if someone challenges your
                        will.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mb-3 button-flex mt-50">
                <button
                  type="button"
                  class="btn btn-primary mb-3 btn-left py"
                  onclick="location.href='/yourEstate6'"
                >
                  Back
                </button>
                <router-link
                  to="yourwill"
                  class="btn btn-primary mb-3 btn-right py"
                  >Done</router-link
                >
              </div>
            </form>
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

    <button class="scroll-top">
      <i class="bi bi-arrow-up-short"></i>
    </button>
  </div>
</template>
