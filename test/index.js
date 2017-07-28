import Vue from "vue";
import UkProgress from "../dist/build";

Vue.component("uk-progress", UkProgress);
new Vue({
    el: "#app",
    data: {
        selectedValue: 10,
        selectedMax: 100,
        selectedColor: "default",
        selectedWidth: 100,
        options: [
            { value: 10, text: 10 },
            { value: 20, text: 20 },
            { value: 40, text: 40 },
            { value: 60, text: 60 },
            { value: 80, text: 80 },
            { value: 100, text: 100 }
        ]
    },
    computed: {
        width() {
            return this.selectedWidth + "%";
        }
    }
});
