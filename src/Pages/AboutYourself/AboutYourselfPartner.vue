<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import AddPartner from "../../Components/AddPartner.vue";
import axios from "axios";

const router = useRouter();

const showAddPartner = ref(false);
const showChangePartner = ref(true);

// Marital Status Options
const maritalStatusOptions = [
  { value: "single", label: "Single" },
  {
    value: "living-with-partner",
    label: "Living with a partner but not married",
  },
  { value: "married", label: "Married" },
  { value: "civil-partnership", label: "Civil Partnership" },
  { value: "engaged", label: "Engaged" },
  { value: "widowed", label: "Widowed" },
  { value: "widowed-remarried", label: "Widowed and remarried" },
  { value: "separated", label: "Married but separated" },
  {
    value: "civil-partnership-separated",
    label: "Civil partnership but separated",
  },
  { value: "divorced", label: "Divorced" },
];

const selectedStatus = ref("married");
const selectedPartners = ref(["nakul"]);
const showMorePartners = ref(false);

const morePartners = ref([
  { value: "nadeem", name: "Nadeem N", email: "nadeem@gmail.com" },
  { value: "surekha", name: "SUREKHA RATHOD", email: "SUREKHA@GMAIL.COM" },
]);

const newPartner = reactive({
  name: "",
  email: "",
  address: "",
  dob: {
    day: "",
    month: "",
    year: "",
  },
  age: "",
});

const toggleMorePartners = () => {
  showMorePartners.value = !showMorePartners.value;
  showAddPartner.value = !showAddPartner.value;
  showChangePartner.value = !showChangePartner.value;
};

const submitForm = () => {
  console.log("Form submitted with data:", {
    selectedStatus: selectedStatus.value,
    selectedPartners: selectedPartners.value,
  });
  router.push("/aboutYourselfChildren");
};

const goBack = () => {
  router.push("/yourwill");
};

const handleSavePartner = async (partnerData) => {
  try {
    // alert("Person saved successfully!");
    // alert("Partner saved successfully!");
    // console.log(parterData);

    const res = await axios.post(
      "http://localhost:3000/api/partner/add",
      partnerData
    );
    morePartners.value.push({
      name: res.data.name,
      value: res.data._id,
      email: res.data.email,
    });
    showAddPartner.value = !showAddPartner.value;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

const savePartner = () => {
  console.log("New partner saved:", newPartner);
  // Add logic to handle new partner data
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
                    <a href="signup.html" class="dropdown-item"
                      ><span>Save and logout</span></a
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
                    <router-link class="nav-link" to="yourwill" role="button"
                      >Your will</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      to="who-your-will.html"
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
        <h1 class="text-center mb-30">What is your marital status?</h1>
        <p class="text-center mb-30">
          Select your current legal status, even if you know it’s going to
          change soon. You can always update this in the future.
        </p>
        <form @submit.prevent="submitForm">
          <!-- Marital Status Options Section -->
          <div class="row align-items-start mb-50">
            <div class="col-lg-12">
              <div class="marital-status-options">
                <!-- Status Options -->
                <label
                  class="status-option"
                  v-for="option in maritalStatusOptions"
                  :key="option.value"
                >
                  <input
                    type="radio"
                    name="marital-status"
                    :value="option.value"
                    v-model="selectedStatus"
                  />
                  {{ option.label }}
                </label>
              </div>
            </div>
          </div>

          <!-- Partner Info Section -->
          <div class="partner-selection-wrapper">
            <div class="partner-selection-initial">
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
                      v-model="selectedPartners"
                    />
                  </div>
                </div>
              </label>
            </div>

            <!-- Hidden content to show later -->
            <div class="partner-selection-more" v-show="showMorePartners">
              <label
                class="partner-option"
                v-for="partner in morePartners"
                :key="partner.value"
              >
                <div class="partner-details">
                  <div class="check-name">
                    <p>
                      <strong>{{ partner.name }}</strong>
                    </p>
                    <p>{{ partner.email }}</p>
                  </div>
                  <div class="checkamrk">
                    <input
                      type="checkbox"
                      name="partner"
                      :value="partner.value"
                      v-model="selectedPartners"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Add Partner and Change Partner Buttons -->
          <div class="row align-items-start justify-content-center mb-3">
            <div class="col-lg-6 text-center">
              <button
                v-if="showChangePartner"
                type="button"
                class="btn btn-secondary change-partner"
                @click="toggleMorePartners"
              >
                + Change partner
              </button>
              <button
                v-if="showAddPartner"
                type="button"
                class="btn btn-secondary add-partner"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                + Add partner
              </button>
            </div>
          </div>

          <!-- Update Information Link -->
          <div class="row align-items-start justify-content-center mb-3">
            <div class="col-lg-6">
              <p class="text-center mb-30 edit-info-section">
                Need to update someone’s details?
                <a href="#" class="text-decoration-underline"
                  >Edit their information here.</a
                >
              </p>
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

  <!-- Modal -->

  <div
    v-if="showAddPartner"
    class="modal fade"
    id="loginModal"
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
            <h4>Add Person</h4>
          </div>

          <!-- Add partner form added -->
          <AddPartner :partner="newPartner" @save="handleSavePartner" />

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
