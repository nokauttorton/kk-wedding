import globalMixin from "./globalMixin";
import globalComponents from "../components/globalComponents";

export default {
    install(Vue, opt) {
        Vue.mixin(globalMixin);
        Vue.use(globalComponents, opt);
    }
}