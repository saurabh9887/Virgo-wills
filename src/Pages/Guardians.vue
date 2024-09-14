<script setup>
import { onMounted, ref } from "vue";
import Guardians1 from "./Guardians/Guardians1.vue";
import Guardians2 from "./Guardians/Guardians2.vue";
import Guardians5 from "./Guardians/Guardians5.vue";
import axios from "axios";

const partnersArray = ref([]);
const childrensArray = ref([]);
const petsArray = ref([]);

const currIndex = ref(0);

const currComponent = ref(1);
const childerensProcessed = ref(false);

// const nextStep = () => {
//   if (currComponent.value === 1) {
//     currComponent.value = 2;
//   } else if (currComponent.value === 2) {
//     currComponent.value = 1;
//   }

//   if (currIndex.value < childrensArray.value.length - 1) {
//     currIndex.value += 1;
//   } else {
//     // childerensProcessed.value = true;
//     console.log("All childrens processed!");
//   }
// };

const nextStep = () => {
  if (currComponent.value === 1) {
    currComponent.value = 2;
  } else if (currComponent.value === 2) {
    if (currIndex.value < childrensArray.value.length - 1) {
      currIndex.value += 1;
      currComponent.value = 1;
    } else {
      childerensProcessed.value = true;
      console.log("All children processed!");
    }
  }
};

onMounted(async () => {
  try {
    // Patners array
    const res1 = await axios.get("http://localhost:3000/api/people");
    partnersArray.value = res1.data;
    console.log(partnersArray.value);

    // Childrens array

    const res2 = await axios.get("http://localhost:3000/api/children");
    childrensArray.value = res2.data;
    console.log(childrensArray.value);
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <!-- <div class="childGuardian" v-for="(x, index) in childrensArray" :key="index">
    <Guardians1 :child="x" @save1="nextStep" />
    <Guardians2 :child="x" @save2="nextStep" />
  </div>
  <Guardians5 /> -->
  <!-- <div class="childGuardian" v-for="(x, index) in childrensArray" :key="index">
    <Guardians1
      v-if="currComponent === 1 && index === currIndex"
      :child="x"
      @save1="nextStep"
    />
    <Guardians2
      v-if="currComponent === 2 && index === currIndex"
      :child="x"
      @save2="nextStep"
    />
  </div>
  <Guardians5 v-if="childerensProcessed" /> -->
  <!-- <div v-if="!childerensProcessed" class="childGuardian">
    <Guardians1
      v-if="currComponent === 1"
      :child="childrensArray[currIndex]"
      @save1="nextStep"
    />
    <Guardians2
      v-if="currComponent === 2"
      :child="childrensArray[currIndex]"
      @save2="nextStep"
    />
  </div>
  <Guardians5 v-else /> -->
  <div
    v-if="childrensArray.length && !childerensProcessed"
    class="childGuardian"
  >
    <Guardians1
      v-if="currComponent === 1"
      :child="childrensArray[currIndex]"
      @save1="nextStep"
    />
    <Guardians2
      v-if="currComponent === 2"
      :child="childrensArray[currIndex]"
      @save2="nextStep"
    />
  </div>
  <Guardians5 v-if="childerensProcessed" />
</template>
