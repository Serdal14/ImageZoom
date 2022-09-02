import { createApp } from 'vue'
import App from './ImageZoom.vue'
import VueImageZoom from "@/install";
App.use(VueImageZoom);
createApp(App).mount('#app')
