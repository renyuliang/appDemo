/*
* Created by 符菲菲 on 2018/1/23
*/
const page = [
  {
    path: '/',
    component: resolve => require(['@/pages/index.vue'], resolve),
    children: [
      {
        path: '/',
        meta: {title: '首页'},
        component: resolve => require(['@/pages/Index/index.vue'], resolve),
        name: 'index'
      }
    ]
  }
]

export default page
