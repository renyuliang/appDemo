// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'

import { Button, Search, Toast } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Search.name, Search)

// 消息提示
Vue.prototype.$Toast = Toast

window.onresize = setHtmlFontSize
function setHtmlFontSize () {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.getElementsByTagName('html')[0]
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
};
setHtmlFontSize()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
