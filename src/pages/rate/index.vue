<template>
  <div class="app">
    <wrap title="基础用法">
      <van-rate
        custom-class="van-rate"
        data-key="value1"
        :value="value1"
        @change="onChange"
      />
      {{ value1 }}
    </wrap>

    <wrap title="自定义图标">
      <van-rate
        custom-class="van-rate"
        icon="like"
        void-icon="like-o"
        data-key="value2"
        :value="value2"
        @change="onChange"
      />
      {{ value2 }}
    </wrap>

    <wrap title="自定义样式">
      <van-rate
        custom-class="van-rate"
        data-key="value3"
        :value="value3"
        size=" 25 "
        count=" 6 "
        color="#2ba"
        void-color="#ceefe8"
        @change="onChange"
      />
      {{ value3 }}
    </wrap>

    <wrap title="禁用状态">
      <van-rate
        custom-class="van-rate"
        data-key="value4"
        :value="value4"
        :disabled="true"
      />
      {{ value4 }}
    </wrap>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/dist/toast/toast';
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 4,
      value4: 2,
    };
  },
  methods: {
    onChange(event) {
      const {key} = event.currentTarget.dataset;
      this[key] = event.detail;
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.demo-radio-group {
  padding: 0 17px;
}

.demo-radio {
  margin-bottom: 10px;
}
</style>
