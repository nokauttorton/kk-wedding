import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GlobalLib from './mixins/globalLib'
import scrollFadeAnimation from './directives/scroll-fade-animation'
import './assets/scss/index.scss';

Vue.config.productionTip = false
Vue.directive('scrollfadeanimation', scrollFadeAnimation)

Vue.use(GlobalLib, {
    router: router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
