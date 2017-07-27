import Vue from "vue";
import UkProgress from "../dist/build";

Vue.component("uk-progress", UkProgress);
new Vue({
    el: "#app"
});
