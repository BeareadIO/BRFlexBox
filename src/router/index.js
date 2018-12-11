import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlexBox from '@/components/FlexBox'
import FlexBoxPubu from '@/components/FlexBoxPubu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/flexBox',
      name: 'FlexBox',
      component: FlexBox
    },
    {
      path: '/flexBoxPubu',
      name: 'FlexBoxPubu',
      component: FlexBoxPubu
    }
  ]
})
