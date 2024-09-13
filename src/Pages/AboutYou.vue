<script setup>
import AboutYourselfNames from "./AboutYourself/AboutYourselfNames.vue";
import AboutYourselfPartner from "./AboutYourself/AboutYourselfPartner.vue";
import AboutYourselfChildren from "./AboutYourself/AboutYourselfChildren.vue";
import AboutYourselfPets from "./AboutYourself/AboutYourselfPets.vue";
import AboutYourselfBasics from "./AboutYourself/AboutYourselfBasics.vue";
import { reactive, ref } from "vue";

const currStep = ref(0);

const form = reactive({
  legalName: "",
  nickName: "",
  dob: {
    day: null,
    month: null,
    year: null,
  },
  address1: "",
  address2: "",
  city: "",
  postalCode: null,
  maritalStatus: "",
  selectedPartner: [],
  haveChildrens: "",
  childrenSelected: [],
  havePets: "",
  petSelected: [],
});

const handleSaveNames = (data) => {
  form.legalName = data.legalName;
  form.nickName = data.nickName;
  form.dob.day = data.dob.day;
  form.dob.month = data.dob.month;
  form.dob.year = data.dob.year;
  console.log(form);
  currStep.value = 1;
};
const handleSaveBasics = (data) => {
  form.address1 = data.address1;
  form.address2 = data.address2;
  form.postalCode = data.postalCode;
  form.city = data.city;
  console.log(data);
  currStep.value = 2;
};
const handleSavePartners = (data) => {
  form.maritalStatus = data.maritalStatus;
  form.selectedPartner = data.selectedPartner;
  console.log(data);
  currStep.value = 3;
};
const handleSaveChildrens = (data) => {
  form.haveChildrens = data.haveChildrens;
  form.childrenSelected = data.childrenSelected;
  console.log(data);
  currStep.value = 4;
};
const handleSavePets = (data) => {
  form.havePets = data.havePets;
  form.petSelected = data.petSelected;
  console.log(data);
  currStep.value = 5;
};
</script>

<template>
  <AboutYourselfNames
    v-if="currStep === 0"
    :formData="form"
    @saveNames="handleSaveNames"
  />
  <AboutYourselfBasics
    v-if="currStep === 1"
    :formData="form"
    @saveBasics="handleSaveBasics"
  />
  <AboutYourselfPartner
    v-if="currStep === 2"
    :formData="form"
    @savePartner="handleSavePartners"
  />
  <AboutYourselfChildren
    v-if="currStep === 3"
    :formData="form"
    @saveChildren="handleSaveChildrens"
  />
  <AboutYourselfPets
    v-if="currStep === 4"
    :formData="form"
    @savePets="handleSavePets"
  />
</template>
