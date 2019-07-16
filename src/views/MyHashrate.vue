<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" v-if="titleData.text" :title="titleData"></TabNav>
    <div class="title">
      <p>今日产币</p>
      <p>{{hashrateInfoData.user.todayIncome}}</p>
    </div>
    <div class="content">
      <p class="total clearfix">
        <span>算力记录</span>
        <span>共计：{{hashrateInfoData.totalHasdrete}}</span>
      </p>
      <ul>
        <li v-for="(item, index) in HashrateHistoryList">
          <p class="clearfix">
            <span>增加算力</span>
            <span>+293</span>
          </p>
          <p class="clearfix">
            <span>2019/05/09 12:30</span>
            <span>审核中</span>
          </p>
        </li>
        <li>
          <p class="clearfix">
            <span>增加算力</span>
            <span>+293</span>
          </p>
          <p class="clearfix">
            <span>2019/05/09 12:30</span>
            <span>审核中</span>
          </p>
        </li>
        <li>
          <p class="clearfix">
            <span>增加算力</span>
            <span>+293</span>
          </p>
          <p class="clearfix">
            <span>2019/05/09 12:30</span>
            <span>审核中</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="footer">
      <p class="clearfix">
        <span @click="handleRedeem">赎回算力</span>
        <span @click="handleAdd">增加算力</span>
      </p>
    </div>
  </div>
</template>

<script>
import { GetUrlParam } from '@/libs/util'
// 头部导航
import TabNav from '@/components/nav.vue'

// 我的算力
export default {
  name: 'initiate',
  data () {
    return {
      titleData: {
        imgSrc: 'nav-icon02.png',
        text: '我的算力',  // 导航居中文本
        leftText: '返回', // 导航左文本
        textColor: 'yellow', // 导航颜色
      },
      hashrateInfoData: {}, // 算力详情
      HashrateHistoryList: [] // 算力记录列表
    }
  },
  components: {
    TabNav
  },
  created () {
    this.getMyHashrate()
    this.getHashRateHistory()
  },
  methods: {
    handleNavLeft () { // 返回
      this.$router.go(-1)
    },
    handleRedeem () { // 跳往赎回
      this.$router.push({name: 'redemption', query: {id: GetUrlParam('id')}})
    },
    handleAdd () {  // 增加算力
      this.$router.push({name: 'add-hashrate', query: {id: GetUrlParam('id')}})
    },
    getMyHashrate () {  // 用户算力详情
      this.$api.post('api/user/userHashrate',{
        userId: '1'
      }).then(res => {
        this.hashrateInfoData = res
      })
    },
    getHashRateHistory () { // 获取算力记录
      this.$api.post('api/user/HashrateList',{
        userId: '1'
      }).then(res => {
        this.HashrateHistoryList = res.invertRecordList
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
  .title {
    width: 100%;
    height: 3.31rem;
    color: #FEE7B3;
    overflow: hidden;
    background: #000
  }
  .title p {
    width: 100%;
    text-align: center
  }
  .title p:nth-child(1) {
    margin-top: 1.55rem;
    font-size: 0.26rem;
    height: 0.26rem;
    line-height: 0.26rem
  }
  .title p:nth-child(2) {
    margin-top: 0.3rem;
    font-size: 0.62rem;
    height: 0.62rem;
    line-height: 0.62rem
  }
  .content {
    background: #fff
  }
  .content .total {
    padding: 0 0.33rem 0 0.37rem;
    height: 0.78rem;
    line-height: 0.78rem;
    color: #333;
    font-size: 0.24rem
  }
  .content .total>span:nth-child(2) {
    float: right
  }
  .content ul li {
    padding: 0.34rem 0.33rem 0.25rem 0.34rem;
    border-top: 1px solid #F2F3F5;
    font-size: 0.24rem
  }
  .content ul li p:nth-child(1)>span:nth-child(1) {
    color: #333
  }
  .content ul li p:nth-child(1)>span:nth-child(2) {
    color: #F6144E
  }
  .content ul li p:nth-child(2) {
    color: #666
  }
  .content ul li p>span:nth-child(2) {
    float: right;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .footer p {
    width: 100%;
    font-size: 0.26rem
  }
  .footer p>span {
    float: left;
    display: inline-block;
    width: 50%;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    color: #FEE7B3;
    background: #000
  }
  .footer p>span:nth-child(2) {
    background: #313131
  }
</style>
