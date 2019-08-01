import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    { // 算力
      path: '/',
      component: () => import(/* webpackChunkName: "node" */ './views/Node.vue')
    },
    { // 算力
      path: '/node',
      name: 'node',
      component: () => import(/* webpackChunkName: "node" */ './views/Node.vue')
    },
    { // 矿场详情
      path: '/mine-details',
      name: 'mine-details',
      component: () => import(/* webpackChunkName: "node" */ './views/MineDetails.vue')
    },
    { // 算力节点详情
      path: '/hashrate-details',
      name: 'hashrate-details',
      component: () => import(/* webpackChunkName: "node" */ './views/HashrateDetails.vue')
    },
    { // 我的算力
      path: '/my-hashrate',
      name: 'my-hashrate',
      component: () => import(/* webpackChunkName: "node" */ './views/MyHashrate.vue')
    },
    { // 赎回
      path: '/redemption',
      name: 'redemption',
      component: () => import(/* webpackChunkName: "node" */ './views/Redemption.vue')
    },
    { // 投票
      path: '/vote',
      name: 'vote',
      component: () => import(/* webpackChunkName: "node" */ './views/Vote.vue')
    },
    { // 增加算力
      path: '/add-hashrate',
      name: 'add-hashrate',
      component: () => import(/* webpackChunkName: "node" */ './views/AddHashrate.vue')
    },
    { // 增加算力记录
      path: '/add-hashrate-history',
      name: 'add-hashrate-history',
      component: () => import(/* webpackChunkName: "node" */ './views/AddHashrateHistory.vue')
    }
  ]
})
