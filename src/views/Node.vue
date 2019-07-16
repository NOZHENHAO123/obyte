<template>
  <div class="container">
    <TabNav v-if="titleData.text" :title="titleData"></TabNav>
    <div class="banner">
      <div class="title">
        <p>本期剩余产出</p>
        <p>
          <span>LCP</span>
          {{MineInfoData.account | formatNumberRgx}}
        </p>
        <div class="line">
          <div></div>
        </div>
        <ul class="desc clearfix">
          <li>结束时间：{{MineInfoData.endTime}}</li>
          <li>矿场剩余总量：{{MineInfoData.account | formatNumberRgx}}</li>
          <li>流通总量：{{MineInfoData.circulateAccount | formatNumberRgx}}</li>
          <li>已销毁总量：{{MineInfoData.destroyAccount | formatNumberRgx}}</li>
        </ul>
        <img class="unfold" src="../assets/unfold.png" alt="">
      </div>
    </div>
    <div class="content">
      <p>
        <span @click="tab = 0" :class="{borderBottom: tab === 0}">算力节点</span>
        <span @click="tab = 1" :class="{borderBottom: tab === 1}" class="styleColor">创始节点</span>
      </p>
        <Hashrate :hashrateData="hashrateData" v-if="tab === 0"></Hashrate>
        <Initiate :InitiateData="InitiateData" v-else></Initiate>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
// 头部导航
import TabNav from '@/components/nav.vue'
// 底部导航
import BottomNav from '@/components/BottomNav.vue'
// 算力节点
import Hashrate from '@/components/Hashrate.vue'
// 创始节点
import Initiate from '@/components/Initiate.vue'

export default {
  name: 'node',
  data () {
    return {
      tab: 0, // 0:算力节点 1：创始节点
      hashrateData: [], // 算力节点数据
      InitiateData: [], // 创始节点数据
      MineInfoData: {}, // 矿场详情数据
      titleData: {  // 头部导航数据
        imgSrc: 'nav-icon01.png',
        text: 'LCP节点',  // 导航居中文本
        textColor: 'white', // 导航颜色
      }
    }
  },
  components: {
    Hashrate,
    Initiate,
    TabNav,
    BottomNav
  },
  created() {
    this.getHashrateListData()
    this.getInitiateListData()
    this.getMineInfo()
  },
  filters: {
    formatNumberRgx(num) { // 数字添加千分号
      if (num) {
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      } else {
        return num
      }
    }
  },
  methods: {
    getHashrateListData () { // 获取算力节点列表数据
      this.$api.post('api/node/calculateNode').then(res => {
        this.hashrateData = res.nodeList
      })
    },
    getInitiateListData () { // 获取创始节点列表数据
      this.$api.post('api/node/initiateNode').then(res => {
        this.InitiateData = res.nodeList
      })
    },
    getMineInfo () {  // 获取矿场信息
      this.$api.post('api/mine/mineDetial').then(res => {
        this.MineInfoData = res['矿场信息']
        // 流通量
        this.MineInfoData.circulateAccount = res['矿场信息'].initialAccount - res['矿场信息'].account - res['矿场信息'].destroyAccount
        // 结束时间
        this.MineInfoData.endTime = res['结束时间'].replace(/-/g, "/")
      })
    }
  }
}
</script>

<style scoped>
.unfold {
  margin: 0.47rem 0 0 45%;
  width: 0.2rem;
  height: 0.17rem;
}
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #F2F3F5
}
.banner {
  width: 100%;
  height: 4.05rem;
  background: url('../assets/node-banner.png');
  background-size: 100% 100%
}
.title {
  position: relative;
  top: 1.45rem;
  margin: 0 auto 0;
  padding: 0.54rem 0.52rem 0;
  width: 5.8rem;
  height: 3.56rem;
  border-radius: 5px;
  background: rgba(255,255,255,0.9);
  box-shadow:0px 4px 68px 0px rgba(39,52,125,0.25);
  -webkit-box-shadow:0px 4px 68px 0px rgba(39,52,125,0.25);
}
.title p:nth-child(1) {
  font-size: 0.28rem;
  color: #333
}
.title p:nth-child(2) {
  margin-top: 0.45rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-weight: 700;
  font-size: 0.6rem;
  color: #000
}
.title p:nth-child(2) span {
  position: relative;
  top: -0.15rem;
  padding: 0.135rem 0.165rem;
  font-size: 0.24rem;
  height: 0.24rem;
  line-height: 0.24rem;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  background: #F103F7
}
.line {
  position: relative;
  margin-top: 0.24rem;
  width: 100%;
  height: 0.04rem;
  background: #fff;
}
.line>div {
  position: absolute;
  top: 0;
  left: 0;
  width: 4.5rem;
  height: 0.04rem;
  background: #F103F7;
}
.container .desc {
  width: 100%;
}
.container .desc li {
  float: left;
  margin-top: 0.25rem;
  width: 50%;
  height: 0.24rem;
  line-height: 0.24rem;
  font-size: 0.24rem;
  color: #333;
  list-style-type: none;
}
.content {
  padding-bottom: 0.98rem
}
.content>p:nth-child(1) {
  margin-top: 2.22rem;
  padding: 0 0.32rem;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.28rem
}
.borderBottom {
  border-bottom: 1px solid #000;
}
.content>p:nth-child(1) span {
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #000;
}
.content>p:nth-child(1)>span:nth-child(2) {
  margin-left: 0.66rem
}
</style>
