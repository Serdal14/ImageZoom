import ImageZoom from "./ImageZoom.vue";
const VueImageZoom = {
    install(Vue) {
        Vue.component("hello-world", ImageZoom);
    }
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueImageZoom);
}
export default VueImageZoom;