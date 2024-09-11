<script setup>
import { reactive, ref, toRefs } from "vue";

// Props for the parent component to pass data
const props = defineProps({
  partner: Object,
});

const emit = defineEmits(["save"]);

const showAddPartner = ref(true);

// Make sure that partner is reactive or referenced correctly. If partner is a prop, Vue might be preventing direct modification. To make partner reactive and avoid mutating the prop directly, wrap it with toRefs or reactive in the child component.

// const { partner } = toRefs(props);
// Create a reactive copy of the props to avoid direct mutation
const partner = reactive({ ...props.partner });

// Method to emit the saved partner data to the parent component
const savePartner = () => {
  // console.log(partner);
  emit("save", partner);
};
</script>

<template>
  <div class="form-wrapper m-auto">
    <form id="newPartnerForm" @submit.prevent="savePartner">
      <div class="row">
        <div class="col-12">
          <div class="input-group-meta position-relative mb-25">
            <label><b>Full Name</b></label>
            <input
              type="text"
              v-model="partner.name"
              placeholder="Enter Your Name"
            />
          </div>
        </div>
        <div class="col-12" id="emailField">
          <div class="input-group-meta position-relative mb-25">
            <label><b>Email Address</b></label>
            <input
              type="email"
              v-model="partner.email"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
        <div class="col-12" id="addressField">
          <div class="input-group-meta position-relative mb-25">
            <label><b>Postal Address</b> (Optional)</label>
            <textarea
              v-model="partner.address"
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
        <div class="col-12" id="dobField">
          <div class="position-relative mb-25">
            <label><b>Birth Date</b> (Optional)</label>
            <div class="d-flex justify-content-between">
              <input
                type="text"
                v-model="partner.dob.day"
                placeholder="Day"
                class="dob-input"
                required
              />
              <input
                type="text"
                v-model="partner.dob.month"
                placeholder="Month"
                class="dob-input"
                required
              />
              <input
                type="text"
                v-model="partner.dob.year"
                placeholder="Year"
                class="dob-input"
                required
              />
            </div>
          </div>
        </div>
        <div class="col-12" id="dobField">
          <div class="position-relative mb-25">
            <label><b>Age</b> (Optional)</label>
            <div class="d-flex mt-10">
              <div class="form-check form-check-inline ps-4">
                <input
                  class="form-check-input"
                  type="radio"
                  id="ageOver18"
                  value="over18"
                  v-model="partner.age"
                />
                <label class="form-check-label" for="ageOver18">
                  Over 18
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="ageUnder18"
                  value="under18"
                  v-model="partner.age"
                />
                <label class="form-check-label" for="ageUnder18"
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
              <p>
                We’ll use this to help whoever deals with your will identify
                this person. We will never contact them without your permission.
              </p>
            </div>
          </div>
          <!-- /.agreement-checkbox -->
        </div>
        <div class="col-12">
          <button type="submit" class="btn-eleven fw-500 tran3s d-block mt-20">
            Save Person
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
