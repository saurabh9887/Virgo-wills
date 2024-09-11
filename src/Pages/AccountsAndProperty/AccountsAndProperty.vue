<script setup></script>

<template>
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
                    <a href="#" class="dropdown-item"><span>Messages</span></a>
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
                      to="/who-your-wills"
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
                List your accounts and property
              </h1>
              <p class="text-justify mb-10">
                This includes bank accounts, pensions, property and life
                insurance policies. It helps your executors, the people who will
                deal with your estate after you die, know which providers to
                contact.
              </p>
              <p class="text-justify mb-10">
                We will not ask for specific details like account numbers.
              </p>
              <div class="row align-items-center mt-30">
                <div
                  class="job-list-two style-two p-3 shadow-sm position-relative"
                >
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5>36 anglesmede crescent,pinner HA5 5SP</h5>
                      <p>Property - I own it jointly with someone else</p>
                    </div>
                    <button
                      type="button"
                      class="pet-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    >
                      <i class="fas fa-pen"></i> Edit
                    </button>
                  </div>
                </div>
              </div>

              <div class="row align-items-center mt-20">
                <div
                  class="job-list-two style-two p-3 shadow-sm position-relative"
                >
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5>santander</h5>
                      <p>Bank account</p>
                    </div>
                    <button
                      type="button"
                      class="pet-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#editBank"
                    >
                      <i class="fas fa-pen"></i> Edit
                    </button>
                  </div>
                </div>
              </div>
              <div class="row align-items-center mt-20">
                <div
                  class="job-list-two style-two p-3 shadow-sm position-relative"
                >
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5>barclays</h5>
                      <p>Bank account</p>
                    </div>
                    <button
                      type="button"
                      class="pet-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#editBank"
                    >
                      <i class="fas fa-pen"></i> Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
              <section class="job-portal-intro">
                <div class="container">
                  <div class="wrapper pt-88 md-pt-50 pb-10 md-pb-50">
                    <div class="row align-items-center mt-20">
                      <div
                        class="job-list-two style-two p-3 shadow-sm position-relative"
                      >
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5>vitalitylife</h5>
                            <p>Life insurance</p>
                          </div>
                          <button
                            type="button"
                            class="pet-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#editInsurance"
                          >
                            <i class="fas fa-pen"></i> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center mt-20">
                      <div
                        class="job-list-two style-two p-3 shadow-sm position-relative"
                      >
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5>hsbc</h5>
                            <p>Bank account</p>
                          </div>

                          <button
                            type="button"
                            class="pet-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#editBank"
                          >
                            <i class="fas fa-pen"></i> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center mt-20">
                      <div
                        class="job-list-two style-two p-3 shadow-sm position-relative"
                      >
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5>36 anglesmede crescent,pinner HA5 5SP</h5>
                            <p>Property - I own it jointly with someone else</p>
                          </div>
                          <button
                            type="button"
                            class="pet-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                          >
                            <i class="fas fa-pen"></i> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="job-portal-intro">
                <div class="container">
                  <div class="wrapper pt-10 md-pt-50 pb-10 md-pb-50">
                    <div class="row align-items-center">
                      <div class="position-relative text-center">
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#addChildModal"
                          class="btn btn-outline-dark"
                        >
                          + Add Account or property
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50">
            <div class="col-lg-6">
              <div class="partner-selection">
                <label class="partner-option">
                  <div class="partner-details xtrime">
                    <div class="check-name">
                      <h5>Related articles</h5>
                      <p>
                        <a href="#" class="text-decoration-underline">
                          How to avoid inheritance tax</a
                        >
                      </p>
                      <p>
                        <a href="#" class="text-decoration-underline"
                          >How to update or amend your will</a
                        >
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <!-- Save and Continue Button -->
          <div class="text-center mb-3 button-flex">
            <!-- <button type="button" class="btn btn-primary mb-3 btn-left py"
                                onclick="location.href='about-yourself-basics.html'">Back</button> -->
            <button
              type="button"
              class="btn btn-primary mb-3 btn-right py"
              onclick="location.href='/yourwill'"
            >
              Save and continue
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- edit account and property -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="container">
        <div class="user-data-form modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="text-center">
            <h4>Edit account and property</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form id="newPartnerForm" action="#">
              <div class="row">
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label for="assetType" class="form-label">Asset type</label>
                    <select
                      class="form-select"
                      id="assetType"
                      aria-label="Select asset type"
                    >
                      <option selected>Select asset type</option>
                      <option value="Property">Property</option>
                      <option value="Bank Account">Bank Account</option>
                      <option value="Investment">Investment</option>
                      <option value="Pension">Pension</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label for="address" class="form-label">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="e.g. 27 Downham Road, London, N1 5AA"
                      value="36 anglesmede crescent, pinner HA5 5SP"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label class="form-label"
                      >Does this property have a mortgage?</label
                    ><br />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="mortgage"
                        id="mortgageYes"
                        value="Yes"
                        checked
                      />
                      <label class="form-check-label" for="mortgageYes">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="mortgage"
                        id="mortgageNo"
                        value="No"
                      />
                      <label class="form-check-label" for="mortgageNo">
                        No
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="mortgage"
                        id="mortgageUnknown"
                        value="Unknown"
                      />
                      <label class="form-check-label" for="mortgageUnknown">
                        I don’t know
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label class="form-label">Who owns this property?</label
                    ><br />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ownership"
                        id="ownershipOnlyOwner"
                        value="OnlyOwner"
                      />
                      <label class="form-check-label" for="ownershipOnlyOwner">
                        I am the only owner
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ownership"
                        id="ownershipJoint"
                        value="JointOwner"
                        checked
                      />
                      <label class="form-check-label" for="ownershipJoint">
                        I own it jointly with someone else
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ownership"
                        id="ownershipUnknown"
                        value="Unknown"
                      />
                      <label class="form-check-label" for="ownershipUnknown">
                        I don’t know
                      </label>
                    </div>
                  </div>
                </div>

                <hr />

                <div
                  class="col-12 justify-content-between"
                  style="display: flex"
                >
                  <button
                    class="btn btn-primary fw-500 tran3s d-block mt-20"
                    data-bs-toggle="modal"
                    data-bs-target="#confirmRemoveModal"
                  >
                    Remove asset
                  </button>
                  <button class="btn btn-primary fw-500 tran3s d-block mt-20">
                    Save asset
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- /.form-wrapper -->
        </div>
        <!-- /.user-data-form -->
      </div>
    </div>
  </div>

  <!-- edit account and property -->
  <!-- edit bank account  -->

  <div class="modal fade" id="editBank" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="container">
        <div class="user-data-form modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="text-center">
            <h4>Edit Bank account</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form id="newPartnerForm" action="#">
              <div class="row">
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label for="assetType" class="form-label">Asset type</label>
                    <select
                      class="form-select"
                      id="assetType"
                      aria-label="Select asset type"
                    >
                      <option selected>Select asset type</option>
                      <option value="Property">Property</option>
                      <option value="Bank Account">Bank Account</option>
                      <option value="Investment">Investment</option>
                      <option value="Pension">Pension</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label for="address" class="form-label">Bank name </label>
                    <p>e.g. HSBC</p>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="Test bank name"
                    />
                  </div>
                </div>

                <hr />

                <div
                  class="col-12 justify-content-between"
                  style="display: flex"
                >
                  <button
                    class="btn btn-primary fw-500 tran3s d-block mt-20"
                    data-bs-toggle="modal"
                    data-bs-target="#confirmRemoveModal"
                  >
                    Remove asset
                  </button>
                  <button class="btn btn-primary fw-500 tran3s d-block mt-20">
                    Save asset
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- /.form-wrapper -->
        </div>
        <!-- /.user-data-form -->
      </div>
    </div>
  </div>
  <!-- edit bank account  -->
  <!-- edit life insurance -->
  <div class="modal fade" id="editInsurance" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="container">
        <div class="user-data-form modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="text-center">
            <h4>Edit Bank account</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form id="newPartnerForm" action="#">
              <div class="row">
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label for="assetType" class="form-label">Asset type</label>
                    <select
                      class="form-select"
                      id="assetType"
                      aria-label="Select asset type"
                    >
                      <option selected>Select asset type</option>
                      <option value="Property">Property</option>
                      <option value="Bank Account">Bank Account</option>
                      <option value="Investment">Investment</option>
                      <option value="Pension">Pension</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label for="address" class="form-label">Provider </label>
                    <p>e.g. Legal & General</p>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="Test Life Insurance"
                    />
                  </div>
                </div>

                <hr />

                <div
                  class="col-12 justify-content-between"
                  style="display: flex"
                >
                  <button
                    class="btn btn-primary fw-500 tran3s d-block mt-20"
                    data-bs-toggle="modal"
                    data-bs-target="#confirmRemoveModal"
                  >
                    Remove asset
                  </button>
                  <button class="btn btn-primary fw-500 tran3s d-block mt-20">
                    Save asset
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- /.form-wrapper -->
        </div>
        <!-- /.user-data-form -->
      </div>
    </div>
  </div>
  <!-- edit life insurance -->
  <!-- Modal -->
  <div class="modal fade" id="addChildModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="container">
        <div class="user-data-form modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="text-center">
            <h4>Add new account or property</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form id="newPartnerForm" action="#">
              <div class="row">
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label for="assetType" class="form-label">Asset type</label>
                    <select
                      class="form-select"
                      id="assetType"
                      aria-label="Select asset type"
                    >
                      <option selected>Select asset type</option>
                      <option value="Property">Property</option>
                      <option value="Bank Account">Bank Account</option>
                      <option value="Investment">Investment</option>
                      <option value="Pension">Pension</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                  </div>
                </div>

                <hr />

                <div class="col-12" style="display: flex">
                  <button class="btn btn-primary fw-500 tran3s d-block mt-20">
                    Save asset
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- /.form-wrapper -->
        </div>
        <!-- /.user-data-form -->
      </div>
    </div>
  </div>

  <!-- Confirmation Modal -->
  <div
    class="modal fade"
    id="confirmRemoveModal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Remove account or property</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to remove this asset?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Yes,Remove this asset
          </button>
        </div>
      </div>
    </div>
  </div>
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
</template>
