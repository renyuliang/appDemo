<template>
  <div class="systemAllNav">
    <mt-button type="primary" icon="back">微信</mt-button>
    <p class="text">蓝山咖啡是领导饭</p>
    <a class="text" href="javascript:;" @click="btn">点击提示</a>
    <mt-search v-model="value"></mt-search>
  </div>
</template>
<script>

export default {
  name: 'index',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    btn () {
      this.$Toast({
        message: '提示',
        duration: 50000
      })
      console.log(11)
    }
  }
}
</script>
