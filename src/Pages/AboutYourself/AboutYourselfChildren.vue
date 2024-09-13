<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const form = reactive({
  name: "",
  dob: {
    day: null,
    month: null,
    year: null,
  },
  userId: userInfo._id,
});

const router = useRouter();
const allChildrens = ref([]);

const props = defineProps({
  formData: Object,
});

const emit = defineEmits(["saveChildren"]);
const formData = reactive({ ...props.formData });

const handleSubmit = () => {
  emit("saveChildren", formData);
  console.log(formData);
};

const handleAddChild = async () => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/children/add",
      form
    );
    allChildrens.value.push(res.data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/children");
    allChildrens.value = res.data;
    allChildrens.value.forEach((item) =>
      formData.childrenSelected.push(item._id)
    );
  } catch (error) {
    console.log(error);
  }
});

const logout = async () => {
  try {
    localStorage.removeItem("userInfo");
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

// Navigate back
const goBack = () => {
  window.location.href = "/aboutYourselfPartner";
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
                    <router-link
                      class="nav-link"
                      to="yourwill.html"
                      role="button"
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

  <section class="marital-status-form">
    <div class="container">
      <div class="wrapper pt-45 md-pt-50 pb-20 md-pb-50">
        <form @submit.prevent="handleSubmit">
          <!-- Marital Status Options Section -->
          <div class="row align-items-start mb-50">
            <div class="col-lg-6">
              <h1 class="text-justify mb-10">Do you have any children?</h1>
              <p class="text-justify mb-10">
                If your first child is on the way, select “No” for now. You can
                always update this in the future.
              </p>
              <p class="text-justify mb-10">
                Add all your biological and legally adopted children, whether or
                not you want to leave things to them in your will.
              </p>
              <p class="text-justify mb-10">
                Do not add any step children here. You can add them later if you
                wish to leave them part of your estate.
              </p>
              <br />
              <ul class="w-100 style-none">
                <li class="me-2 w-100 mb-3">
                  <input
                    v-model="formData.haveChildrens"
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
                    v-model="formData.haveChildrens"
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
            <div class="col-lg-1"></div>
            <div class="col-lg-4">
              <section
                v-for="(x, index) in allChildrens"
                :key="index"
                class="job-portal-intro"
              >
                <div class="container">
                  <div class="wrapper pt-10 md-pt-50 pb-10 md-pb-50">
                    <div class="row align-items-center">
                      <div
                        class="job-list-two style-two p-3 shadow-sm position-relative"
                      >
                        <div class="d-flex justify-content-between">
                          <div class="">
                            <h5>{{ x.name }}</h5>
                            <p>
                              {{ x.dob.day }}/{{ x.dob.month }}/{{ x.dob.year }}
                            </p>
                          </div>
                          <button
                            type="button"
                            class="edit-btn"
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
                        class="btn btn-outline-dark"
                      >
                        + Add Child
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
              onclick="location.href='/aboutYourselfPartner'"
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
            <h4>Edit Testing Demo Name</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form id="newPartnerForm" action="#">
              <div class="row">
                <section class="job-portal-intro">
                  <div class="container">
                    <div class="wrapper pt-10 md-pt-50 pb-10 md-pb-50">
                      <div class="row align-items-center">
                        <div class="job-list-two style-two position-relative">
                          <div class="d-flex justify-content-between">
                            <div>
                              <h5>Appearances in your will:</h5>
                              <ul>
                                <li>is your child</li>
                                <li>will be looked after by Nadeem N</li>
                                <li>has 33.34% of your residual estate</li>
                              </ul>
                            </div>
                            <a type="button" class="info-btn text-end">
                              <i class="fas fa-info-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Your child’s full name</b></label>
                    <input
                      type="text"
                      id="partnerName"
                      placeholder="Testing demo Name"
                    />
                  </div>
                </div>
                <div class="col-12" id="emailField">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Your child’s date of birth</b></label>
                    <p>For example, 27 10 1983</p>
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
                <p>
                  If your child has a disability or will need a guardian after
                  they turn 18, we recommend you seek specialist advice
                </p>

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
                    Remove Child
                  </button>
                  <button class="btn btn-primary fw-500 tran3s d-block mt-20">
                    Save Child
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

  <!-- Add child modal -->
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
            <h4>Add a child</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form
              @submit.prevent="handleAddChild"
              id="newPartnerForm"
              action="#"
            >
              <div class="row">
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Your child’s full name</b></label>
                    <input
                      v-model="form.name"
                      type="text"
                      id="partnerName"
                      placeholder="Testing demo Name"
                    />
                  </div>
                </div>
                <div class="col-12" id="emailField">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Your child’s date of birth</b></label>
                    <p>For example, 27 10 1983</p>
                    <div class="d-flex justify-content-between">
                      <input
                        v-model="form.dob.day"
                        type="text"
                        name="day"
                        placeholder="Day"
                        value="12"
                        class="dob-input"
                        required
                      />
                      <input
                        v-model="form.dob.month"
                        type="text"
                        name="month"
                        placeholder="Month"
                        value="08"
                        class="dob-input"
                        required
                      />
                      <input
                        v-model="form.dob.year"
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
                <p>
                  If your child has a disability or will need a guardian after
                  they turn 18, we recommend you seek specialist advice.
                </p>

                <hr />

                <div class="col-12" style="display: flex">
                  <button
                    type="submit"
                    class="btn btn-primary fw-500 tran3s d-block mt-20"
                  >
                    Save Child
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
          <h5 class="modal-title">Remove Testing Demo Name</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Are you sure you want to remove this person from your will? This
            will remove them from everywhere you’ve appointed them (e.g.
            guardian, executor), so you might have to replace them with someone
            new.
          </p>
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
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
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
            <h4>Edit Testing Demo Name</h4>
          </div>

          <div class="form-wrapper m-auto">
            <form id="newPartnerForm" action="#">
              <div class="row">
                <section class="job-portal-intro">
                  <div class="container">
                    <div class="wrapper pt-10 md-pt-50 pb-10 md-pb-50">
                      <div class="row align-items-center">
                        <div class="job-list-two style-two position-relative">
                          <div class="d-flex justify-content-between">
                            <div>
                              <h5>Appearances in your will:</h5>
                              <ul>
                                <li>is your child</li>
                                <li>will be looked after by Nadeem N</li>
                                <li>has 33.34% of your residual estate</li>
                              </ul>
                            </div>
                            <a type="button" class="info-btn text-end">
                              <i class="fas fa-info-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div class="col-12">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Your child’s full name</b></label>
                    <input
                      type="text"
                      id="partnerName"
                      placeholder="Testing demo Name"
                    />
                  </div>
                </div>
                <div class="col-12" id="emailField">
                  <div class="input-group-meta position-relative mb-25">
                    <label><b>Your child’s date of birth</b></label>
                    <p>For example, 27 10 1983</p>
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
                <p>
                  If your child has a disability or will need a guardian after
                  they turn 18, we recommend you seek specialist advice
                </p>

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
                    Remove Child
                  </button>
                  <button class="btn btn-primary fw-500 tran3s d-block mt-20">
                    Save Child
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

  <!-- Add child modal -->
  <!-- Modal -->

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
          <h5 class="modal-title">Remove Testing Demo Name</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Are you sure you want to remove this person from your will? This
            will remove them from everywhere you’ve appointed them (e.g.
            guardian, executor), so you might have to replace them with someone
            new.
          </p>
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
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
