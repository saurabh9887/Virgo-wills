<script setup></script>

<template>
  <div class="main-page-wrapper">
    <!-- ===================================================
				Loading Transition
			==================================================== -->
    <!-- <div id="preloader">
      <div id="ctn-preloader" class="ctn-preloader">
        <div class="icon">
          <img
            src="images/logo/logo-icon.png"
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
                    to="#"
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
                      <router-link class="dropdown-item" to="#">
                        <span>Your Services​</span>
                      </router-link>
                    </li>
                    <hr />
                    <li>
                      <router-link class="dropdown-item" to="#">
                        <span>Account Settings​</span>
                      </router-link>
                    </li>
                    <hr />
                    <li>
                      <router-link class="dropdown-item" to="#">
                        <span>Messages​</span>
                      </router-link>
                    </li>
                    <hr />
                    <li>
                      <router-link class="dropdown-item" to="#">
                        <span>Invite</span>
                      </router-link>
                    </li>
                    <hr />
                    <li>
                      <router-link class="dropdown-item" to="/signup">
                        <span>Save and logout</span>
                      </router-link>
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
                        <router-link class="d-block" to="/">
                          <img
                            src="../images/logo/logo_01.png"
                            alt=""
                            width="100"
                          />
                        </router-link>
                      </div>
                    </li>

                    <li class="nav-item">
                      <router-link class="nav-link" to="/">
                        Your progress
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/yourwill">
                        Your will
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">
                        Who's in your will
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
    <!-- /.inner-banner-one -->s

    <section class="job-portal-intro">
      <div class="container">
        <div class="wrapper pt-65 md-pt-50 pb-30 md-pb-50">
          <div class="row align-items-center">
            <div
              class="col-lg-12 text-center"
              style="box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
            >
              <h1>Your Will</h1>
              <p>Here’s an overview of what’s included in your will.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="job-portal-intro">
      <div class="container">
        <div class="wrapper pt-10 md-pt-20 md-pb-10">
          <h4 style="text-align: center">Your Progress: 15%</h4>
          <div class="step-progress mb-30">
            <div class="circle completed">1</div>
            <div class="line completed"></div>
            <div class="circle completed">2</div>
            <div class="line"></div>
            <div class="circle">3</div>
            <div class="line"></div>
            <div class="circle">4</div>
            <div class="line"></div>
            <div class="circle">5</div>
            <div class="line"></div>
            <div class="circle">6</div>
            <div class="line"></div>
            <div class="circle">7</div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-6 mt-25">
              <div
                class="card-style-five position-relative p-4 pb-35 h-100 lg-pb-20 wow fadeInUp"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div
                  class="numb fw-500 d-flex align-items-center justify-content-center"
                >
                  <span><i class="fas fa-check"></i></span>
                </div>
                <p>STEP 1</p>
                <div class="title fw-500 text-lg text-dark mt-25 mb-10">
                  About you
                </div>
                <p>Testing demo Wowinfotech</p>
                <p>12/08/1994</p>
                <p>Test demo</p>
                <p>Married to ABC</p>
                <p>The parent of xyz and def</p>
                <p>The owner of tommy</p>
                <div class="text-end edit-button">
                  <router-link
                    to="/aboutYourselfNames"
                    class="apply-btn text-center tran3s mb-30"
                  >
                    EDIT
                  </router-link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-25">
              <div
                class="card-style-five position-relative p-4 h-100 pb-35 lg-pb-20 wow fadeInUp"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div
                  class="numb fw-500 d-flex align-items-center justify-content-center"
                >
                  <span><i class="fas fa-check"></i></span>
                </div>
                <p>STEP 2</p>
                <div class="title fw-500 text-lg text-dark mt-25 mb-10">
                  Gaurdian
                </div>
                <p>abc and xyz will look after Heet.</p>
                <p>abc and xyz will look after Dev.</p>
                <p>xyz will look after Tommy.</p>

                <div class="text-end edit-button">
                  <router-link
                    class="apply-btn text-center tran3s mb-30"
                    to="/guardians1"
                  >
                    EDIT
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-25">
              <div
                class="card-style-five position-relative h-100 p-4 pb-35 lg-pb-20 wow fadeInUp"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div
                  class="numb fw-500 d-flex align-items-center justify-content-center"
                >
                  <span><i class="fas fa-check"></i></span>
                </div>
                <p>STEP 3</p>
                <div class="title fw-500 text-lg text-dark mt-25 mb-10">
                  Accounts and property
                </div>
                <p>36 anglesmede crescent,pinner HA5 5SP Property</p>
                <p>ABC Bank account</p>
                <p>XYZ Bank account</p>
                <p>test Life insurance</p>
                <p>demo Bank account</p>
                <p>ha5 1le Property</p>
                <div class="text-end edit-button">
                  <router-link
                    class="apply-btn text-center tran3s mb-30"
                    to="accountsAndProperty"
                  >
                    EDIT
                  </router-link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-25">
              <div
                class="card-style-five position-relative h-100 p-4 pb-35 lg-pb-20 wow fadeInUp"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div
                  class="numb fw-500 d-flex align-items-center justify-content-center"
                >
                  <span><i class="fas fa-check"></i></span>
                </div>
                <p>STEP 4</p>
                <div class="title fw-500 text-lg text-dark mt-25 mb-10">
                  Your estate
                </div>
                <p>Testing demo Wowinfotech ------------- 33.33%</p>
                <p>Backups: remaining beneficiaries</p>
                <p>Breast Cancer Now ------------- 33.33%</p>
                <p>XYZ ------------- 33.34%</p>
                <p>Backups: their children</p>
                <p></p>
                <div class="text-end edit-button">
                  <router-link
                    class="apply-btn text-center tran3s mb-30"
                    to="/yourEstate1"
                  >
                    EDIT
                  </router-link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-25">
              <div
                class="card-style-five position-relative h-100 p-4 pb-35 lg-pb-20 wow fadeInUp"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div
                  class="numb fw-500 d-flex align-items-center justify-content-center"
                >
                  <span><i class="fas fa-check"></i></span>
                </div>
                <p>STEP 5</p>
                <div class="title fw-500 text-lg text-dark mt-25 mb-10">
                  Executors
                </div>
                <p>Your executor is Farewill Trustees</p>
                <div class="text-end edit-button">
                  <router-link
                    class="apply-btn text-center tran3s mb-30"
                    to="/executors1"
                  >
                    EDIT
                  </router-link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-25">
              <div
                class="card-style-five position-relative h-100 p-4 pb-35 lg-pb-20 wow fadeInUp"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div
                  class="numb fw-500 d-flex align-items-center justify-content-center"
                >
                  <span><i class="fas fa-check"></i></span>
                </div>
                <p>STEP 6</p>
                <div class="title fw-500 text-lg text-dark mt-25 mb-10">
                  Funeral wishes
                </div>
                <p>You would like to be cremated.</p>
                <p>
                  You haven’t included any additional details about your
                  funeral.
                </p>
                <div class="text-end edit-button">
                  <router-link
                    to="/funeral1"
                    class="apply-btn text-center tran3s mb-30"
                    >EDIT
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-5 mt-25">
              <div
                class="card-style-five position-relative h-100 p-4 mt-25 pb-35 lg-pb-20 wow fadeInUp"
                style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <div
                  class="numb fw-500 d-flex align-items-center justify-content-center"
                >
                  <span><i class="fas fa-check"></i></span>
                </div>
                <p>OPTIONAL (2-4 MINUTES)</p>
                <div class="title fw-500 text-lg text-dark mt-25 mb-10">
                  Gifts
                </div>
                <p>Leave personal items and messages.</p>
                <div class="text-end edit-button">
                  <router-link
                    to="gifts"
                    class="apply-btn px-4 text-center h-50 w-100 mb-30"
                  >
                    ADD GIFTS
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="job-portal-intro mb-50">
      <div class="container">
        <div class="wrapper pt-50 md-pt-50 pb-10 md-pb-50">
          <div class="row">
            <div class="col-lg-6">
              <div class="job-list-one style-one position-relative">
                <h4>Your will is ready to be checked</h4>
                <p>
                  Congratulations! Your will is ready to be checked by our
                  specialists – but you can still add gifts if you wish.
                </p>
                <router-link
                  to="/signup"
                  class="btn-one lg mb-20 md-mt-30 ml-45"
                >
                  Purchase and send for checking
                </router-link>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="job-list-one style-one position-relative">
                <div
                  class="job-list-one style-two position-relative border-style h-auto mb-20"
                >
                  <div class="row justify-content-between align-items-center">
                    <h4>We have invited testwow@gmail.co.in</h4>
                    <a href>Change testwow’s email</a>
                  </div>
                </div>
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
                <router-link to="#" class="d-flex align-items-center">
                  <img src="../../images/logo/logo.png" alt="" width="200px" />
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
                <li><router-link to="#">Privacy & Terms</router-link></li>
                <li><router-link to="#"> Contact Us</router-link></li>
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
