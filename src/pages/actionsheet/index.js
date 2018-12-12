import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-button': '/static/vant/dist/button/index',
      'van-action-sheet': '/static/vant/dist/action-sheet/index',
    },
  },
};
