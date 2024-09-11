<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const handleLogIn = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", form);
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="main-page-wrapper">
    <section
      class="registration-section position-relative pt-100 lg-pt-80 pb-150 lg-pb-80"
    >
      <div class="container">
        <div class="user-data-form">
          <div class="text-center">
            <img
              src="../../images/logo/logo.png"
              alt=""
              class="bg-white mx-auto mb-2"
              width="200px"
            />
            <h2>Log in</h2>
            <!-- <p>Still don't have an account? <a href="#" class="fw-500" data-bs-toggle="modal" data-bs-target="#loginModal">Sign up</a></p> -->
          </div>
          <div class="form-wrapper m-auto">
            <div class="tab-content mt-40">
              <div class="tab-pane fade show active" role="tabpanel" id="fc1">
                <form @submit.prevent="handleLogIn" class="mt-10">
                  <div class="row">
                    <div class="col-12">
                      <div class="input-group-meta position-relative mb-25">
                        <label>Email*</label>
                        <input
                          v-model="form.email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="input-group-meta position-relative mb-20">
                        <label>Password*</label>
                        <input
                          v-model="form.password"
                          type="password"
                          placeholder="Enter Password"
                          class="pass_log_id"
                        />
                        <span class="placeholder_icon"
                          ><span class="passVicon"
                            ><img
                              src="../../images/icon/icon_60.svg"
                              alt="" /></span
                        ></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div
                        class="agreement-checkbox d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <input type="checkbox" id="remember" />
                          <label for="remember">Keep me logged in</label>
                        </div>
                        <a href="forgot-password.html">Forget Password?</a>
                      </div>
                      <!-- /.agreement-checkbox -->
                    </div>
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary fw-500 tran3s d-block mt-20"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.tab-pane -->

              <!-- /.tab-pane -->
            </div>

            <div class="d-flex align-items-center mt-30 mb-10">
              <div class="line"></div>
              <span class="pe-3 ps-3">OR</span>
              <div class="line"></div>
            </div>
            <!-- <div class="row">
                            <div class="col-sm-6">
                                <a href="#" class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                    <img src="images/icon/google.png" alt="">
                                    <span class="ps-2">Signup with Google</span>
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <a href="#" class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                    <img src="images/icon/facebook.png" alt="">
                                    <span class="ps-2">Signup with Facebook</span>
                                </a>
                            </div>
                        </div> -->
            <p class="text-center mt-10">
              Don't have an account?
              <a href="standard-will.html" class="fw-500"
                >Explore our services.</a
              >
            </p>
          </div>
          <!-- /.form-wrapper -->
        </div>
        <!-- /.user-data-form -->
      </div>
    </section>
    <!-- ./registration-section -->

    <!--
		=====================================================
			Footer One
		=====================================================
		-->

    <button class="scroll-top">
      <i class="bi bi-arrow-up-short"></i>
    </button>

    <!-- Optional JavaScript _____________________________  -->

    <!-- jQuery first, then Bootstrap JS -->
    <!-- jQuery -->
    <!-- <script src="vendor/jquery.min.js"></script> -->
    <!-- Bootstrap JS -->
    <!-- <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->
    <!-- WOW js -->
    <!-- <script src="vendor/wow/wow.min.js"></script> -->
    <!-- Slick Slider -->
    <!-- <script src="vendor/slick/slick.min.js"></script> -->
    <!-- Fancybox -->
    <!-- <script src="vendor/fancybox/dist/jquery.fancybox.min.js"></script> -->
    <!-- Lazy -->
    <!-- <script src="vendor/jquery.lazy.min.js"></script> -->
    <!-- js Counter -->
    <!-- <script src="vendor/jquery.counterup.min.js"></script> -->
    <!-- <script src="vendor/jquery.waypoints.min.js"></script> -->
    <!-- Nice Select -->
    <!-- <script src="vendor/nice-select/jquery.nice-select.min.js"></script> -->
    <!-- validator js -->
    <!-- <script src="vendor/validator.js"></script> -->

    <!-- Theme js -->
    <!-- <script src="js/theme.js"></script> -->
  </div>
</template>
