<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" @handleNavRight="handleNavRight" v-if="titleData.text" :title="titleData"></TabNav>
    <div class="user">
      <p class="name">{{detailData.nodeName}}</p>
      <p class="number">{{detailData.nodeAccount}}</p>
      <ul class="clearfix">
        <li>
          <p>{{detailData.sort}}</p>
          <p>节点排名</p>
        </li>
        <li class="prefix-before">
          <p>{{detailData.nodeAddrate}}%</p>
          <p>加成比例</p>
        </li>
        <li class="prefix-before">
          <p>{{detailData.nodeHashrate}}</p>
          <p>总算力</p>
        </li>
        <li class="prefix-before">
          <p>{{detailData.todayIncome}}</p>
          <p>今日产币</p>
        </li>
      </ul>
      <p class="add clearfix">
        <span @click="skip">+增加算力</span>
        <span @click="vote">投票</span>
      </p>
    </div>
    <div class="message">
      <h3>子节点</h3>
      <ul>
        <li v-for="(item, index) in nodeListData" :key="index">
          <p>地址：{{item.address}}</p>
          <p class="clearfix">
            <span>算力：<i>{{item.account}}</i></span>
            <span>今日产币：<i>{{item.todayIncome}}</i></span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { GetUrlParam } from '@/libs/util'
// 头部导航
import TabNav from '@/components/nav.vue'
// 算力节点详情
export default {
  name: 'initiate',
  data() {
    return {
      detailData: {},  // 详情数据
      nodeListData: [],  // 节点列表数据
      titleData: {
        imgSrc: 'nav-icon02.png',
        text: '算力节点',  // 导航居中文本
        leftText: '返回', // 导航左文本
        rightText: '我的算力', // 导航左文本
        textColor: 'yellow', // 导航颜色
      }
    }
  },
  created () {
    this.getDetail()
    this.getNodeList()
  },
  components: {
    TabNav
  },
  methods: {
    handleNavLeft () {  // 返回
      this.$router.go(-1)
    },
    handleNavRight () {  // 我的算力
      this.$router.push({name: 'my-hashrate', query: {id: GetUrlParam('id')}})
    },
    skip () { // 跳往增加算力
      this.$router.push({name: 'add-hashrate', query: {id: GetUrlParam('id')}})
    },
    vote () { // 跳往投票
      this.$router.push({name: 'vote', query: {id: GetUrlParam('id')}})
    },
    getDetail () {  // 获取详情数据
      this.$api.post('api/node/calculateNodeDetial',{
        nodeId: GetUrlParam('id')
      }).then(res => {
        this.detailData = res.node
      })
    },
    getNodeList () {  // 获取算力节点列表
      this.$api.post('api/node/childNodeList',{
        nodeId: GetUrlParam('id')
      }).then(res => {
        this.nodeListData = res.userList
      })
    }
  }
}
</script>

<style scoped>
  .container {
    min-height: 100vh;
    overflow: hidden;
    background: #F2F3F5 
  }
  .user {
    width: 100%;
    height: 7.5rem;
    color: #FEE7B3;
    font-size: 0.26rem;
    overflow: hidden;
    text-align: center;
    background: url('../assets/banner.png');
    background-size: 100% 100%
  }
  .name {
    margin-top: 1.6rem;
    height: 0.26rem;
    line-height: 0.26rem;
  }
  .number {
    margin-top: 0.32rem;
    height: 0.62rem;
    line-height: 0.62rem;
    font-size: 0.62rem
  }
  .user ul {
    margin-top: 0.83rem;
    width: 100%;
  }
  .user ul li {
    float: left;
    width: 25%;
  }
  .user ul li p {
    text-align: center
  }
  .user ul li>p:nth-child(1) {
    font-size: 0.36rem;
    height: 0.36rem;
    line-height: 0.36rem;
  }
  .user ul li>p:nth-child(2) {
    margin-top: 0.18rem;
    font-size: 0.24rem;
    height: 0.24rem;
    line-height: 0.24rem;
  }
  .prefix-before::before {
    float: left;
    display: inline-block;
    position: relative;
    top: 0.23rem;
    width: 1px;
    height: 0.32rem;
    color: #8D9BA2;
    content: '|'
  }
  .add {
    margin-top: 0.67rem;
    padding: 0 1.62rem;
  }
  .add>span {
    float: left;
    display: inline-block;
    width: 1.8rem;
    height: 0.52rem;
    line-height: 0.52rem;
    border-radius: 30px;
    text-align: center;
    border: 1px solid #FEE7B3;
  }
  .add>span:nth-child(2) {
    float: right;
  }
  .message {
    font-size: 0.24rem;
    font-weight: 500;
    background: #fff
  }
  .message h3 {
    padding: 0 0.51rem 0 0.35rem;
    height: 0.28rem;
    line-height: 0.28rem;
    font-size: 0.28rem;
  }
  .message ul {
    margin-top: 0.11rem
  }
  .message ul li {
    border-top: 1px solid #F2F3F5;
    padding: 0.34rem 0.51rem 0.34rem 0.35rem;
  }
  .message ul li p:nth-child(1) {
    width: 3.55rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .message ul li p:nth-child(2) {
    margin-top: 0.28rem
  }
  .message ul li p:nth-child(2)>span {
    float: left
  }
  .message ul li p:nth-child(2)>span:nth-child(2) {
    float: right
  }
  .message ul li p:nth-child(2)>span:nth-child(1) i {
    color: #666
  }
  .message ul li p:nth-child(2)>span:nth-child(2) i {
    color: #F6144E
  }
</style>
