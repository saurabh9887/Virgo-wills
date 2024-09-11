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
            <h1 class="mb-30">Choosing your executors</h1>
            <p class="mb-30">
              You can choose between one and four executors. We recommend
              choosing more than one, especially if any beneficiaries of your
              will are currently under 18.
            </p>
            <h4>Choosing friends & family</h4>
            <p>
              Being an executor can be stressful. There are a few important
              things to consider if you’re choosing friends or family:
            </p>
            <ul>
              <li>That they’re over 18</li>
              <li>That you trust them</li>
              <li>They’re good with finances and paperwork</li>
              <li>You’re happy to tell them you’ve chosen them</li>
            </ul>
            <h4>Choosing Farewill Trustees</h4>
            <p>
              About two thirds of people choose a professional executor to help
              with their estate after they die. Even if you choose friends and
              family as your executors, the chances are that they will consult a
              professional to help them anyway.
            </p>
            <p>Farewill Trustees can:</p>
            <ul>
              <li>Take the stress away from family and friends</li>
              <li>Act as a fair, objective third party if conflict happens</li>
              <li>Resolve the probate process quickly and professionally</li>
              <li>
                Save your family time and money compared to them choosing a
                traditional professional after you’ve died
              </li>
            </ul>
            <h4>Choosing friends & family and Farewill Trustees together</h4>
            <p>
              Bringing together people who knew you personally with a
              professional to take care of the technical stuff can provide
              balance and make things less stressful. We’d share the work fairly
              and appropriately based on who is best for each task.
            </p>
            <h6>No hard commitments</h6>
            <p>
              If your co-executors are comfortable enough with administering
              your estate and don’t need professional help - unlike many
              professional executors - we don’t charge for stepping aside if
              we’re not needed.
            </p>
          </div>

          <div class="col-lg-6">
            <h3>Who would you like to choose as your executor?</h3>

            <ul class="w-100 style-none mb-40">
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
                  >Friends & family</label
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
                  >Farewill Trustees</label
                >
              </li>
              <li class="me-2 w-100 mb-3">
                <input
                  type="radio"
                  class="btn-check"
                  name="options1"
                  id="option8"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark w-100" for="option8"
                  >Friends & family and Farewill Trustees</label
                >
              </li>
            </ul>
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

          <div class="text-center mb-3 button-flex">
            <button
              type="button"
              class="btn btn-primary mb-3 btn-left py"
              onclick="location.href='/executors2'"
            >
              Back
            </button>
            <!-- <button type="button" class="btn btn-primary mb-3 btn-right py">Save and continue</button> -->
            <router-link
              to="/executors4"
              class="btn btn-primary mb-3 btn-right py"
              >Next
            </router-link>
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
