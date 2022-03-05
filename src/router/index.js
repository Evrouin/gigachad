import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "../views/Signup.vue";
import Gigachad from ".././views/Gigachad.vue";
import Profile from ".././views/Profile.vue";
import SetReminder from ".././views/SetReminder.vue";
import DietaryTips from "../views/DietaryTips.vue";
import RestartProgress from "../views/RestartProgress.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Signup",
        component: Signup,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("token")) {
                return next({ name: "Gigachad" });
            }
            next();
        },
    },
    {
        path: "/home",
        name: "Gigachad",
        component: Gigachad,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem("token")) {
                return next({ name: "Signup" });
            }
            next();
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem("token")) {
                return next({ name: "Signup" });
            }
            next();
        },
    },
    {
        path: "/reminder",
        name: "SetReminder",
        component: SetReminder,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem("token")) {
                return next({ name: "Signup" });
            }
            next();
        },
    },
    {
        path: "/diet",
        name: "Dietary Tips",
        component: DietaryTips,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem("token")) {
                return next({ name: "Signup" });
            }
            next();
        },
    },
    {
        path: "/restart",
        name: "RestartProgress",
        component: RestartProgress,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem("token")) {
                return next({ name: "Signup" });
            }
            next();
        },
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;
