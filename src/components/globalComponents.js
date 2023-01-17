import WPageBlock from './w-page-block.vue'
import WCounter from './w-counter.vue'

export default {
    install(Vue) {
        Vue.component(WPageBlock.name, WPageBlock);
        Vue.component(WCounter.name, WCounter);
    }
}