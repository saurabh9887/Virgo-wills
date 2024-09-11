<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  legal_name: "Wowinfotech",
  preferred_name: "Wowinfotech",
  day: "12",
  month: "08",
  year: "1994",
});

const router = useRouter();

const handleSubmit = () => {
  // Save and redirect logic
  router.push("/aboutYourselfBasics");
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
                >
                  Your Account
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/yourServices" class="dropdown-item">
                      <span>Your Services​</span>
                    </router-link>
                  </li>
                  <hr />
                  <li>
                    <router-link to="/accountSettings" class="dropdown-item">
                      <span>Account Settings</span>
                    </router-link>
                  </li>
                  <hr />
                  <li>
                    <router-link to="/messages" class="dropdown-item">
                      <span>Messages</span>
                    </router-link>
                  </li>
                  <hr />
                  <li>
                    <router-link to="/invite" class="dropdown-item">
                      <span>Invite</span>
                    </router-link>
                  </li>
                  <hr />
                  <router-link to="/signup" class="dropdown-item">
                    <span>Save and logout</span>
                  </router-link>
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
                      <router-link to="/" class="d-block">
                        <img
                          src="../../../images/logo/logo_01.png"
                          alt=""
                          width="100"
                        />
                      </router-link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link"
                      >Your progress</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/yourwill" class="nav-link"
                      >Your will</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/who-your-will" class="nav-link"
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

  <section class="job-portal-intro">
    <div class="container">
      <div class="wrapper pt-65 md-pt-50 pb-30 md-pb-50">
        <h1 class="text-center mb-50 sm-mb-20">First, let’s get to know you</h1>
        <form @submit.prevent="handleSubmit">
          <div class="row align-items-start mb-3">
            <!-- Full Legal Name -->
            <div class="col-lg-6">
              <div class="user-info-box">
                <h4>What’s your full legal name?</h4>
                <p>
                  This is the name on your passport or driving licence. For
                  example, Elizabeth Joy Smith.
                </p>
                <input type="text" v-model="form.legal_name" required />
              </div>
            </div>
            <!-- Preferred Name -->
            <div class="col-lg-6">
              <div class="user-info-box">
                <h4>What would you like us to call you?</h4>
                <p>
                  The name you’d like us to use when we send you a message or
                  talk to you on the phone. For example, Lizzie. (optional)
                </p>
                <input type="text" v-model="form.preferred_name" />
              </div>
            </div>
          </div>

          <div class="row justify-content-center mb-3">
            <!-- Date of Birth -->
            <div class="col-lg-6">
              <div class="user-info-box">
                <h4>Your date of birth</h4>
                <p>For example, 19 / 12 / 1951</p>
                <div class="d-flex justify-content-between">
                  <input
                    type="text"
                    v-model="form.day"
                    placeholder="Day"
                    class="dob-input"
                    required
                  />
                  <input
                    type="text"
                    v-model="form.month"
                    placeholder="Month"
                    class="dob-input"
                    required
                  />
                  <input
                    type="text"
                    v-model="form.year"
                    placeholder="Year"
                    class="dob-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Save and Continue Button -->
          <div class="text-center">
            <button type="submit" class="btn btn-primary mt-3">
              Save and continue
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer-one">
    <div class="container">
      <div class="inner-wrapper">
        <div class="row">
          <div class="col-lg-4 col-md-3 footer-intro logo-align">
            <div class="logo">
              <router-link to="/" class="d-flex align-items-center">
                <img src="../../../images/logo/logo.png" alt="" width="200px" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-3 footer-intro"></div>
          <div class="col-lg-4 col-md-3 footer-intro privacsy-align term">
            <ul
              class="d-flex style-none bottom-nav justify-content-center justify-content-lg-start list"
            >
              <li><router-link to="/privacy">Privacy & Terms</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <button class="scroll-top">
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>
