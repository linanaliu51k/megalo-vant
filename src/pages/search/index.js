import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-search': '/static/vant/dist/search/index',
    },
  },
};
