import ImageZoom from "./ImageZoom.vue";

const VueImageZoom = {
    install(Vue) {
        Vue.component("ImageZoom", ImageZoom);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueImageZoom);
}

export default VueImageZoom;