<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" v-if="titleData.text" :title="titleData"></TabNav>
    <div class="desc">
      <p class="clearfix">
        <span>节点名称：{{nodeInfoData.nodeName}}</span>
        <span>节点排名：{{nodeInfoData.sort}}</span>
      </p>
      <p class="margintop clearfix">
        <span>节点得票数：{{nodeInfoData.voteAccount}}</span>
        <span>加成比例：{{nodeInfoData.nodeAddrate}}%</span>
      </p>
      <p class="margintop clearfix">
        <span>距第1名节点票数：45.29</span>
        <span>第1名节点加成：20%</span>
      </p>
      <p class="margintop clearfix">
        <span>第1名节点预计产出：321</span>
      </p>
    </div>
    <div class="content">
      <h3>投票</h3>
      <input placeholder="输入投票数量" id="number" type="text">
      <label class="number-desc" for="number">LCP</label>
      <p class="balance">可用余额：10.000000000000</p>
      <p class="submit">投票</p>
    </div>
  </div>
</template>

<script>
import { GetUrlParam } from '@/libs/util'
// 头部导航
import TabNav from '@/components/nav.vue'
// 投票
export default {
  name: 'vote',
  data () {
    return {
      nodeInfoData: {},  // 节点详情
      titleData: {
        imgSrc: 'nav-icon02.png',
        text: '投票',  // 导航居中文本
        leftText: '返回', // 导航左文本
        textColor: 'yellow', // 导航颜色
      }
    }
  },
  components: {
    TabNav
  },
  created () {
    this.getNodeInfo()
  },
  methods: {
    getNodeInfo () { // 获取节点详情
      this.$api.post('api/node/calculateNodeDetial', {nodeId: GetUrlParam('id')}).then(res => {
        this.nodeInfoData = res.node
      })
    },
    handleNavLeft () { // 返回
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .container {
    min-height: 100vh;
    overflow: hidden
  }
  .content {
    padding: 0.6rem 0.32rem 0 0.32rem;
  }
  .content h3 {
    font-size: 0.26rem;
    color: #333;
    font-weight: 500
  }
  .content input {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.32rem;
    color: #C4C4C4;
    border: none;
    outline: none;
    border-bottom: 1px solid #8D9BA2
  }
  input::-webkit-input-placeholder {
    color: #999
  }
  .number-desc {
    position: relative;
    top: -0.55rem;
    float: right;
    color: #666;
    font-size: 0.32rem;
  }
  .balance {
    margin-top: 0.3rem;
    font-size: 0.24rem;
    color: #999
  }
  .submit {
    margin-top: 0.81rem;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 15px;
    text-align: center;
    color: #000;
    font-size: 0.32rem;
    background: #FEE7B3
  }
  .desc {
    padding: 1.21rem 0 0.44rem 0.32rem;
    background: #F2F3F5;
    font-size: 0.24rem;
    color: #999
  }
  .desc p.margintop {
    margin-top: 0.3rem
  }
  .desc p>span:nth-child(2) {
    float: right;
    width: 3.27rem;
  }
</style>
