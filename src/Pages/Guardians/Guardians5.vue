<script setup>
const handleSubmit = async () => {
  try {
    console.log("handleSubmit");
  } catch (error) {
    console.log(error);
  }
};
</script>

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
                    <router-links to="/signup" class="dropdown-item"
                      ><span>Save and logout</span></router-links
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

  <div class="inner-banner-one position-relative">
    <div class="container">
      <div class="position-relative"></div>
    </div>
  </div>
  <!-- /.inner-banner-one -->

  <section class="marital-status-form">
    <div class="container">
      <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50">
        <h1 class="text-center mb-30">
          Who would you like BROWNIE’s guardian to be?
        </h1>
        <p class="text-center mb-30">
          Your children will be taken care of by your guardians if everyone with
          parental responsibility for them has died before they turn 18.<br />This
          means that you should not choose your partner as a guardian if they
          already have parental responsibility of your children. Not sure? Learn
          more<br />It’s a good idea to choose either a couple or just one
          person as guardian for your children.
        </p>
        <form action="#" method="POST">
          <!-- Marital Status Options Section -->
          <!-- <div class="row align-items-start mb-50">
							<div class="col-lg-12">
								<div class="marital-status-options">
								Status Options -->
          <!-- <label class="status-option"><input type="radio" name="marital-status" value="single"> Single</label>
									<label class="status-option"><input type="radio" name="marital-status" value="living-with-partner"> Living with a partner but not married</label>
									<label class="status-option"><input type="radio" name="marital-status" value="married" checked> Married</label>
									<label class="status-option"><input type="radio" name="marital-status" value="civil-partnership"> Civil Partnership</label>
									<label class="status-option"><input type="radio" name="marital-status" value="engaged"> Engaged</label>
									<label class="status-option"><input type="radio" name="marital-status" value="widowed"> Widowed</label>
									<label class="status-option"><input type="radio" name="marital-status" value="widowed-remarried"> Widowed and remarried</label>
									<label class="status-option"><input type="radio" name="marital-status" value="separated"> Married but separated</label>
									<label class="status-option"><input type="radio" name="marital-status" value="civil-partnership-separated"> Civil partnership but separated</label>
									<label class="status-option"><input type="radio" name="marital-status" value="divorced"> Divorced</label>
								</div>
							</div>
						</div> -->

          <!-- Partner Info Section -->
          <div class="row align-items-start mb-3">
            <div class="col-lg-12">
              <div class="partner-selection">
                <label class="partner-option">
                  <div class="partner-details">
                    <div class="check-name">
                      <p><strong>Nakul Bhoir</strong></p>
                      <p>nilesh@virgofinancial.co.uk</p>
                    </div>
                    <div class="checkamrk">
                      <input
                        type="checkbox"
                        name="partner"
                        value="nakul"
                        checked
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="partner-selection">
                <label class="partner-option">
                  <div class="partner-details">
                    <div class="check-name">
                      <p><strong>Nakul Bhoir</strong></p>
                      <p>nilesh@virgofinancial.co.uk</p>
                    </div>
                    <div class="checkamrk">
                      <input
                        type="checkbox"
                        name="partner"
                        value="nakul"
                        checked
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="partner-selection">
                <label class="partner-option">
                  <div class="partner-details">
                    <div class="check-name">
                      <p><strong>Nakul Bhoir</strong></p>
                      <p>nilesh@virgofinancial.co.uk</p>
                    </div>
                    <div class="checkamrk">
                      <input
                        type="checkbox"
                        name="partner"
                        value="nakul"
                        checked
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="partner-selection">
                <label class="partner-option col-md-3 mx-auto">
                  <!-- Button trigger modal -->
                  <button
                    id=""
                    type="button"
                    class="btn btn-outline-dark w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add Gardient +
                  </button>

                  <!-- Modal -->

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-hidden="true"
                  >
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
                            <h4>Add guardian</h4>
                          </div>

                          <div class="form-wrapper m-auto">
                            <form id="newPartnerForm" action="#">
                              <div class="row">
                                <div class="col-12">
                                  <div
                                    class="input-group-meta position-relative mb-25"
                                  >
                                    <label><b>Full Name</b></label>
                                    <input
                                      type="text"
                                      id="partnerName"
                                      placeholder="Enter Your Name"
                                    />
                                  </div>
                                </div>
                                <div class="col-12" id="emailField">
                                  <div
                                    class="input-group-meta position-relative mb-25"
                                  >
                                    <label><b>Email Address</b></label>
                                    <input
                                      type="email"
                                      id="partnerEmail"
                                      placeholder="Enter Your Email"
                                    />
                                  </div>
                                </div>
                                <!-- <div class="col-12" id="addressField" style="display: none;"> -->
                                <div class="col-12" id="addressField">
                                  <div
                                    class="input-group-meta position-relative mb-25"
                                  >
                                    <label
                                      ><b>Postal Address</b>(Optional)</label
                                    >
                                    <textarea
                                      id="partnerAddress"
                                      placeholder="Enter Your Address"
                                      style="
                                        padding-left: 30px;
                                        padding-top: 20px;
                                        width: 100%;
                                        background: rgba(49, 121, 90, 0.09);
                                        border: 1px solid rgba(0, 0, 0, 0.06);
                                        border-radius: 8px;
                                      "
                                    ></textarea>
                                  </div>
                                </div>
                                <!-- <div class="col-12" id="dobField" style="display: none;"> -->
                                <div class="col-12" id="dobField">
                                  <div
                                    class="input-group-meta position-relative mb-25"
                                  >
                                    <label><b>Birth Date </b> (Optional)</label>
                                    <div class="d-flex justify-content-between">
                                      <input
                                        type="text"
                                        name="day"
                                        placeholder="Day"
                                        value="12"
                                        class="dob-input"
                                        required
                                      />
                                      <input
                                        type="text"
                                        name="month"
                                        placeholder="Month"
                                        value="08"
                                        class="dob-input"
                                        required
                                      />
                                      <input
                                        type="text"
                                        name="year"
                                        placeholder="Year"
                                        value="1994"
                                        class="dob-input"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12" id="dobField">
                                  <div class="position-relative mb-25">
                                    <label><b>Age </b> (Optional)</label>
                                    <div class="d-flex mt-10">
                                      <div
                                        class="form-check form-check-inline ps-4"
                                      >
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="inlineRadioOptions"
                                          id="inlineRadio1"
                                          value="option1"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="inlineRadio1"
                                        >
                                          Over 18
                                        </label>
                                      </div>
                                      <div class="form-check form-check-inline">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="inlineRadioOptions"
                                          id="inlineRadio2"
                                          value="option2"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="inlineRadio2"
                                          >Under 18</label
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="col-12">
                                  <div
                                    class="agreement-checkbox d-flex justify-content-between align-items-center"
                                  >
                                    <div>
                                      <!-- <p><a href="#" id="useAddress">Use postal address instead</a></p>
																					<p><a href="#" id="useDob">Use date of birth instead</a></p> -->
                                      <p>
                                        We’ll use this to help whoever deals
                                        with your will identify this person. We
                                        will never contact them without your
                                        permission.
                                      </p>
                                    </div>
                                  </div>
                                  <!-- /.agreement-checkbox -->
                                </div>
                                <div class="col-12">
                                  <button
                                    class="btn-eleven fw-500 tran3s d-block mt-20"
                                  >
                                    Save Person
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
                </label>
              </div>
            </div>
            <div
              class="row align-items-start mb-3"
              id="partnerSelectionSection"
              style="display: none"
            >
              <div class="col-lg-6"></div>
              <div class="col-lg-6">
                <div class="partner-selection">
                  <label class="partner-option">
                    <div class="partner-details">
                      <div class="check-name">
                        <p><strong>Nadeem N</strong></p>
                        <p>nadeem@gmail.com</p>
                      </div>
                      <div class="checkamrk">
                        <input type="checkbox" name="partner" value="nadeem" />
                      </div>
                    </div>
                  </label>
                  <label class="partner-option">
                    <div class="partner-details">
                      <div class="check-name">
                        <p><strong>SUREKHA RATHOD</strong></p>
                        <p>SUREKHA@GMAIL.COM</p>
                      </div>
                      <div class="checkamrk">
                        <input type="checkbox" name="partner" value="surekha" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3"></div>
            </div>
          </div>
          <div
            class="row align-items-start mb-3"
            id="partnerSelectionSection"
            style="display: none"
          >
            <div class="col-lg-6"></div>
            <div class="col-lg-6">
              <div class="partner-selection">
                <label class="partner-option">
                  <div class="partner-details">
                    <div class="check-name">
                      <p><strong>Nadeem N</strong></p>
                      <p>nadeem@gmail.com</p>
                    </div>
                    <div class="checkamrk">
                      <input type="checkbox" name="partner" value="nadeem" />
                    </div>
                  </div>
                </label>
                <label class="partner-option">
                  <div class="partner-details">
                    <div class="check-name">
                      <p><strong>SUREKHA RATHOD</strong></p>
                      <p>SUREKHA@GMAIL.COM</p>
                    </div>
                    <div class="checkamrk">
                      <input type="checkbox" name="partner" value="surekha" />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-3"></div>
          </div>

          <!-- Update Information Link -->
          <div class="row align-items-start mb-3">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 text-center">
              <p class="pragp">
                Need to update someone’s details?
                <a href="#" class="text-decoration-underline"
                  >Edit their information here.</a
                >
              </p>
            </div>

            <div class="col-lg-3"></div>
          </div>
          <div class="text-center mb-3 button-flex">
            <button
              type="button"
              class="btn btn-primary mb-3 btn-left py"
              onclick="location.href='/guardians4'"
            >
              Back
            </button>
            <!-- <button type="button" class="btn btn-primary mb-3 btn-right py">Save and continue</button> -->
            <router-link
              to="/yourwill"
              class="btn btn-primary mb-3 btn-right py"
              >Save and continue
            </router-link>
          </div>
          <!-- Save and Continue Button -->
        </form>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen modal-dialog-centered">
      <div class="container">
        <div class="user-data-form modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="text-center">
            <h4>Add Person</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form id="newPartnerForm" action="#">
              <div class="row">
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Full Name</b></label>
                    <input
                      type="text"
                      id="partnerName"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div class="col-12" id="emailField">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Email Address</b></label>
                    <input
                      type="email"
                      id="partnerEmail"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div class="col-12" id="addressField" style="display: none">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Postal Address</b></label>
                    <textarea
                      id="partnerAddress"
                      placeholder="Enter Your Address"
                      style="
                        padding-left: 30px;
                        padding-top: 20px;
                        width: 100%;
                        background: rgba(49, 121, 90, 0.09);
                        border: 1px solid rgba(0, 0, 0, 0.06);
                        border-radius: 8px;
                      "
                    ></textarea>
                  </div>
                </div>
                <div class="col-12" id="dobField" style="display: none">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Birth Date</b></label>
                    <div class="d-flex justify-content-between">
                      <input
                        type="text"
                        name="day"
                        placeholder="Day"
                        value="12"
                        class="dob-input"
                        required
                      />
                      <input
                        type="text"
                        name="month"
                        placeholder="Month"
                        value="08"
                        class="dob-input"
                        required
                      />
                      <input
                        type="text"
                        name="year"
                        placeholder="Year"
                        value="1994"
                        class="dob-input"
                        required
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="col-12">
                  <div
                    class="agreement-checkbox d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <p>
                        <a href="#" id="useAddress"
                          >Use postal address instead</a
                        >
                      </p>
                      <p>
                        <a href="#" id="useDob">Use date of birth instead</a>
                      </p>
                      <p>
                        We’ll use this to help whoever deals with your will
                        identify this person. We will never contact them without
                        your permission.
                      </p>
                    </div>
                  </div>
                  <!-- /.agreement-checkbox -->
                </div>
                <div class="col-12">
                  <button class="btn-eleven fw-500 tran3s d-block mt-20">
                    Save Person
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
