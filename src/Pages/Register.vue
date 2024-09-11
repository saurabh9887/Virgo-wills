<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const form = reactive({
  name: "",
  email: "",
  password: "",
  contactNumber: null,
});

const router = useRouter();

const handleSubmit = async () => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/register",
      form
    );
    const userInfo = res.data;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    router.push("/yourwill");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <section
    class="registration-section position-relative pt-60 lg-pt-80 pb-150 lg-pb-80"
  >
    <div class="container">
      <div class="user-data-form">
        <div class="text-center">
          <img
            src="../../images/logo/logo.png"
            alt=""
            class="bg-white mx-auto mb-25"
            width="160px"
          />
          <h2>Sign Up</h2>
          <!-- <p>Still don't have an account? <a href="#" class="fw-500" data-bs-toggle="modal" data-bs-target="#loginModal">Sign up</a></p> -->
        </div>
        <div class="form-wrapper m-auto">
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <div class="col-12">
                <div class="input-group-meta position-relative mb-25">
                  <label>Name*</label>
                  <input
                    type="text"
                    placeholder="Ener Your Name"
                    v-model="form.name"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-group-meta position-relative mb-25">
                  <label>Email*</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-group-meta position-relative mb-20">
                  <label>Password*</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    class="pass_log_id"
                    v-model="form.password"
                  />
                  <span class="placeholder_icon"
                    ><span class="passVicon"
                      ><img src="../../images/icon/icon_60.svg" alt="" /></span
                  ></span>
                </div>
              </div>
              <div class="col-12">
                <div class="input-group-meta position-relative mb-25">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    placeholder="Enter Your Contact Number"
                    v-model="form.contactNumber"
                  />
                </div>
              </div>

              <div class="col-12">
                <div
                  class="agreement-checkbox d-flex justify-content-between align-items-center"
                >
                  <div>
                    <input type="checkbox" id="remember" />
                    <label for="remember"
                      >By hitting the "Register" button, you agree to the
                      <a href="#">Terms conditions</a> &
                      <a href="#">Privacy Policy</a></label
                    >
                  </div>
                </div>
                <!-- /.agreement-checkbox -->
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="btn-eleven fw-500 tran3s d-block mt-20"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
          <div class="d-flex align-items-center mt-30 mb-10">
            <div class="line"></div>
            <span class="pe-3 ps-3">OR</span>
            <div class="line"></div>
          </div>

          <p class="text-center mt-10">
            Already have an account?
            <router-link to="/signup" class="fw-500">Sign In</router-link>
          </p>
        </div>
        <!-- /.form-wrapper -->
      </div>
      <!-- /.user-data-form -->
    </div>
  </section>

  <button class="scroll-top">
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>
