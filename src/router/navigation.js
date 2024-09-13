import { createWebHistory, createRouter } from "vue-router";
import YourWill from "../Pages/YourWill.vue";
import Home from "../Pages/Home.vue";
import SignUp from "../Pages/SignUp.vue";
import AboutYourselfNames from "../Pages/AboutYourself/AboutYourselfNames.vue";
import AboutYourselfBasics from "../Pages/AboutYourself/AboutYourselfBasics.vue";
import AboutYourselfPartner from "../Pages/AboutYourself/AboutYourselfPartner.vue";
import AboutYourselfChildren from "../Pages/AboutYourself/AboutYourselfChildren.vue";
import AboutYourselfPets from "../Pages/AboutYourself/AboutYourselfPets.vue";
import Guardians1 from "../Pages/Guardians/Guardians1.vue";
import Guardians2 from "../Pages/Guardians/Guardians2.vue";
import Guardians3 from "../Pages/Guardians/Guardians3.vue";
import Guardians4 from "../Pages/Guardians/Guardians4.vue";
import Guardians5 from "../Pages/Guardians/Guardians5.vue";
import AccountsAndProperty from "../Pages/AccountsAndProperty/AccountsAndProperty.vue";
import YourEstate1 from "../Pages/YourEstate/YourEstate1.vue";
import YourEstate2 from "../Pages/YourEstate/YourEstate2.vue";
import YourEstate3 from "../Pages/YourEstate/YourEstate3.vue";
import YourEstate4 from "../Pages/YourEstate/YourEstate4.vue";
import YourEstate5 from "../Pages/YourEstate/YourEstate5.vue";
import YourEstate6 from "../Pages/YourEstate/YourEstate6.vue";
import YourEstate7 from "../Pages/YourEstate/YourEstate7.vue";
import YourEstate8 from "../Pages/YourEstate/YourEstate8.vue";
import Executors1 from "../Pages/Executors/Executors1.vue";
import Executors2 from "../Pages/Executors/Executors2.vue";
import Executors3 from "../Pages/Executors/Executors3.vue";
import Executors4 from "../Pages/Executors/Executors4.vue";
import Funeral1 from "../Pages/Funeral/Funeral1.vue";
import Funeral2 from "../Pages/Funeral/Funeral2.vue";
import Funeral3 from "../Pages/Funeral/Funeral3.vue";
import Funeral4 from "../Pages/Funeral/Funeral4.vue";
import Gifts from "../Pages/Gifts/gifts.vue";
import Register from "../Pages/Register.vue";
import AboutYou from "../Pages/AboutYou.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/yourwill", component: YourWill },
    { path: "/signup", component: SignUp },
    { path: "/register", component: Register },
    { path: "/aboutYourselfNames", component: AboutYourselfNames },
    { path: "/aboutYourselfBasics", component: AboutYourselfBasics },
    { path: "/aboutYourselfPartner", component: AboutYourselfPartner },
    { path: "/aboutYourselfChildren", component: AboutYourselfChildren },
    { path: "/aboutYourselfPets", component: AboutYourselfPets },
    { path: "/aboutYou", component: AboutYou },
    { path: "/guardians1", component: Guardians1 },
    { path: "/guardians2", component: Guardians2 },
    { path: "/guardians3", component: Guardians3 },
    { path: "/guardians4", component: Guardians4 },
    { path: "/guardians5", component: Guardians5 },
    { path: "/accountsAndProperty", component: AccountsAndProperty },
    { path: "/yourEstate1", component: YourEstate1 },
    { path: "/yourEstate2", component: YourEstate2 },
    { path: "/yourEstate3", component: YourEstate3 },
    { path: "/yourEstate4", component: YourEstate4 },
    { path: "/yourEstate5", component: YourEstate5 },
    { path: "/yourEstate6", component: YourEstate6 },
    { path: "/yourEstate7", component: YourEstate7 },
    { path: "/yourEstate8", component: YourEstate8 },
    { path: "/executors1", component: Executors1 },
    { path: "/executors2", component: Executors2 },
    { path: "/executors3", component: Executors3 },
    { path: "/executors4", component: Executors4 },
    { path: "/funeral1", component: Funeral1 },
    { path: "/funeral2", component: Funeral2 },
    { path: "/funeral3", component: Funeral3 },
    { path: "/funeral4", component: Funeral4 },
    { path: "/gifts", component: Gifts },
  ],
});

export default router;
