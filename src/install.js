import ImageZoom from "./ImageZoom.vue";

const VueImageZoom = {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("hello-world", ImageZoom);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueImageZoom);
}

export default VueImageZoom;