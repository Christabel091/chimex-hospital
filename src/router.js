import { createRouter, createWebHistory } from "vue-router";

// Import pages
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Program from "./pages/Program.vue";
import Donate from "./pages/Donate.vue";
import Appointment from "./pages/Appointment.vue";
import Contact from "./pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/program",
    name: "Program",
    component: Program,
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
  },
  {
    path: "/appointment",
    name: "Appointment",
    component: Appointment,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
