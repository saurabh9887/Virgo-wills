<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const address1 = ref("44 The Fairway");
const address2 = ref("44 The Fairway");
const city = ref("greece");
const postcode = ref("12345");
const phoneNumber = ref("1234567898");
const addressSearchVisible = ref(false);
const searchAddress = ref("");

const router = useRouter();

const toggleAddressSearch = () => {
  addressSearchVisible.value = !addressSearchVisible.value;
};

const submitForm = () => {
  // Logic to handle form submission
  console.log("Form submitted with data:", {
    address1: address1.value,
    address2: address2.value,
    city: city.value,
    postcode: postcode.value,
    phoneNumber: phoneNumber.value,
  });
  router.push("/aboutYourselfPartner");
};

const goBack = () => {
  router.push("/yourWill");
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
            <div class="right-widget order-lg-3">
              <li class="nav-item dropdown" style="list-style: none">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Your Account
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
                  <router-link to="/signup" class="dropdown-item"
                    ><span>Save and logout</span></router-link
                  >
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
                        ><img src="../../../images/logo/logo_01.png" alt="" width="100"
                      /></router-link>
                    </div>
                  </li>

                  <li class="nav-item">
                    <router-link to="/" class="nav-link" role="button"
                      >Your progress</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/your-will" class="nav-link" role="button"
                      >Your will</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/who-your-will"
                      class="nav-link"
                      role="button"
                      >Who's in your will</router-link
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- ===Inner Banner=====-->
  <div class="inner-banner-one position-relative">
    <div class="container">
      <div class="position-relative"></div>
    </div>
  </div>

  <section class="job-portal-intro">
    <div class="container">
      <div class="wrapper pt-45 md-pt-50 pb-30 md-pb-50">
        <h1 class="text-center mb-30">Your contact details</h1>
        <form @submit.prevent="submitForm">
          <!-- Address Section -->
          <div class="row mb-3" id="addressSection">
            <div class="col-lg-12">
              <div class="user-info-box row">
                <div class="col-md-5">
                  <h4>Your address</h4>
                  <div class="mb-2">
                    <p>Address line 1</p>
                    <input type="text" v-model="address1" required />
                  </div>
                  <div class="mb-2">
                    <p>Address line 2 (Optional)</p>
                    <input type="text" v-model="address2" />
                  </div>
                </div>
                <div class="col-lg-4 mt-40">
                  <p>City</p>
                  <input type="text" v-model="city" />
                </div>
                <div class="col-lg-3 mt-40">
                  <p>Postcode</p>
                  <input type="text" v-model="postcode" />
                </div>
              </div>
            </div>

            <p class="text-center">
              Or
              <a
                href="#"
                @click="toggleAddressSearch"
                id="searchAddressLink"
                class="text-decoration-underline"
                >search your address</a
              >
            </p>
          </div>

          <!-- Hidden Section for Address Search -->
          <div class="row mb-3" v-if="addressSearchVisible">
            <div class="col-lg-6">
              <div class="user-info-box">
                <h4>Your address</h4>
                <p>
                  Start typing and choose from the list, or
                  <router-link
                    to="/aboutYourselfBasics"
                    class="text-decoration-underline"
                    >enter address manually</router-link
                  >
                </p>
                <input type="text" v-model="searchAddress" required />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="user-info-box">
                <h4>Your phone number</h4>
                <p>We’ll only call you to help you with your will.</p>
                <input type="text" v-model="phoneNumber" />
              </div>
            </div>
          </div>

          <!-- Save and Continue Button -->
          <div class="text-center mb-3 button-flex">
            <button
              type="button"
              class="btn btn-primary mb-3 btn-left py"
              @click="goBack"
            >
              Back
            </button>
            <button type="submit" class="btn btn-primary mb-3 btn-right py">
              Save and continue
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <div class="footer-one">
    <div class="container">
      <div class="inner-wrapper">
        <div class="row">
          <div class="col-lg-4 col-md-3 footer-intro logo-align">
            <div class="logo">
              <router-link to="/" class="d-flex align-items-center">
                <img src="../../../images/logo/logo.png" alt="" />
              </router-link>
            </div>
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
    </div>
  </div>
</template>
