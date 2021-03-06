import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-popup': '/static/vant/dist/popup/index',
      'van-button': '/static/vant/dist/button/index',
      'van-datetime-picker': '/static/vant/dist/datetime-picker/index',
    },
  },
};
