<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const form = reactive({
  name: "",
  userId: userInfo._id,
});

const allPets = ref([]);

const handleAddPet = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/pet/add", form);
    allPets.value.push(res.data);
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    localStorage.removeItem("userInfo");
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

const props = defineProps({
  formData: Object,
});

const emit = defineEmits(["savePet"]);
const formData = reactive({ ...props.formData });
console.log(formData);

const handleSubmit = async () => {
  // emit("savePet", formData);
  // console.log(formData);

  try {
    const res = await axios.post(
      "http://localhost:3000/api/aboutyou/add",
      formData
    );
    router.push("/yourwill");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/pet");
    allPets.value = res.data;
    allPets.value.forEach((item) => formData.petSelected.push(item._id));
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div>
    <!-- Header Section -->
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
                      <span class="dropdown-item" @click="logout"
                        >Save and logout</span
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
                        to="who-your-will"
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

    <!-- Main Content Section -->
    <section class="marital-status-form">
      <div class="container">
        <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50">
          <form @submit.prevent="handleSubmit">
            <!-- Marital Status Options Section -->
            <div class="row align-items-start mb-50">
              <div class="col-lg-6">
                <h1 class="text-justify mb-10">Do you have any pets?</h1>
                <p class="text-justify mb-10">
                  You can choose guardians for your pets in the next section.
                </p>
                <div class="selection-buttons">
                  <ul class="w-100 style-none">
                    <li class="me-2 w-100 mb-3">
                      <input
                        v-model="formData.havePets"
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
                        v-model="formData.havePets"
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
                  <!-- Partner Info Section -->
                </div>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-4">
                <section
                  v-for="(x, index) in allPets"
                  :key="index"
                  class="job-portal-intro"
                >
                  <div class="container">
                    <div class="wrapper pt-10 md-pt-50 pb-10 md-pb-50">
                      <div class="row align-items-center">
                        <div
                          class="job-list-two p-3 shadow-sm style-two position-relative"
                        >
                          <div class="d-flex justify-content-between">
                            <h5>{{ x.name }}</h5>

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
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#addChildModal"
                          class="btn btn-outline-dark w-100"
                        >
                          + Add a pet
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-lg-1"></div>
            </div>

            <!-- Save and Continue Button -->
            <div class="text-center mb-3 button-flex">
              <button
                type="button"
                class="btn btn-primary mb-3 btn-left py"
                onclick="location.href='/aboutYourselfChildren'"
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
              <h4>Edit Tommy</h4>
            </div>

            <div class="form-wrapper m-auto">
              <form id="newPartnerForm" action="#">
                <div class="row">
                  <section class="job-portal-intro">
                    <div class="container">
                      <div class="wrapper pt-10 md-pt-50 pb-10 md-pb-50">
                        <div class="row align-items-center">
                          <div class="job-list-two style-two position-relative">
                            <h5>Appearances in your will:</h5>
                            <ul>
                              <li>is your pet</li>
                              <li>will be looked after by Nakul Bhoir</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div class="col-12">
                    <div class="input-group-meta position-relative mb-25">
                      <label><b>Your pet’s name</b></label>
                      <input type="text" id="partnerName" placeholder="Tommy" />
                    </div>
                  </div>

                  <hr />

                  <div class="col-12 d-flex justify-content-between">
                    <button
                      class="btn btn-primary fw-500 tran3s d-block mt-20"
                      data-bs-toggle="modal"
                      data-bs-target="#confirmRemoveModal"
                    >
                      Remove Pet
                    </button>
                    <button class="btn btn-primary fw-500 tran3s d-block mt-20">
                      Save Pet
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

    <!-- Modal -->
    <div class="modal fade" id="addChildModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="container">
          <div class="user-data-form modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="text-center">
              <h4>Add a Pet</h4>
            </div>

            <div class="form-wrapper m-auto">
              <form @submit="handleAddPet" id="newPartnerForm" action="#">
                <div class="row">
                  <div class="col-12">
                    <div class="input-group-meta position-relative mb-25">
                      <label><b>Your pet’s name</b></label>
                      <input
                        v-model="form.name"
                        type="text"
                        id="partnerName"
                        placeholder="Tommy"
                      />
                    </div>
                  </div>

                  <hr />

                  <div class="col-12" style="display: flex">
                    <button
                      type="submit"
                      class="btn btn-primary fw-500 tran3s d-block mt-20"
                    >
                      Save Pet
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
            <h5 class="modal-title">Remove Tommy</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to remove this pet?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Yes,Remove this pet
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.footer-one -->
    <!-- /.footer-one -->

    <!-- Modal -->
  </div>
  <!-- /.main-page-wrapper -->
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
