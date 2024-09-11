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
          <div class="col-md-6">
            <h1 class="mb-30">
              If Nadeem N dies before you, who should inherit their share of the
              estate instead?
            </h1>
            <p class="mb-30">
              Writing a will is all about being prepared for the unexpected.
              This is why we also ask you to name back-ups in case your chosen
              beneficiary dies before you. These are known as secondary
              beneficiaries.
            </p>

            <form action="#" method="POST">
              <ul class="w-100 style-none">
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
                    >Their children</label
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
                    >Specific people or charities</label
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
                    >Split between remaining beneficiaries</label
                  >
                </li>
              </ul>
              <!-- Partner Info Section -->
              <div class="row align-items-start mb-3 mt-30">
                <p>
                  Selecting ‘their children’ includes all Nadeem N’s biological
                  and legally adopted children but not step-children.
                </p>
                <hr />
                <p>
                  If both your original and back-up beneficiaries die before
                  you, this share of your estate will be divided between your
                  other beneficiaries (the people you’ve chosen to inherit your
                  estate).
                </p>
              </div>
            </form>
            <!-- Closing form tag here -->
          </div>

          <div class="col-lg-6">
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
            </ul>
          </div>

          <div class="text-center mb-3 button-flex">
            <button
              type="button"
              class="btn btn-primary mb-3 btn-left py"
              onclick="location.href='your-estate4.html'"
            >
              Back
            </button>
            <!-- <button type="button" class="btn btn-primary mb-3 btn-right py">Save and continue</button> -->
            <router-link
              to="yourEstate6"
              class="btn btn-primary mb-3 btn-right py"
              >Save and continue</router-link
            >
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
</template>
