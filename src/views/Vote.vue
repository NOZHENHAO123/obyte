<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" v-if="titleData.text" :title="titleData"></TabNav>
    <div class="desc">
      <p class="clearfix">
        <span>节点名称：{{nodeInfoData.currentNode.nodeName}}</span>
        <span>节点排名：{{nodeInfoData.currentNode.sort}}</span>
      </p>
      <p class="margintop clearfix">
        <span>节点得票数：{{nodeInfoData.currentNode.voteAccount}}</span>
        <span>加成比例：{{nodeInfoData.currentNode.nodeAddrate}}%</span>
      </p>
      <p class="margintop clearfix">
        <span>距上1名节点票数：{{nodeInfoData.difference}}</span>
        <span>上1名节点加成：{{nodeInfoData.previousNode.nodeAddrate}}%</span>
      </p>
      <p class="margintop clearfix">
        <span>上1名节点预计产出：{{nodeInfoData.previousNodeExpectedOutput}}</span>
      </p>
    </div>
    <!-- <div class="content">
      <h3>投票</h3>
      <input placeholder="输入投票数量" id="number" type="text">
      <label class="number-desc" for="number">LCP</label>
      <p class="balance">可用余额：{{nodeInfoData.totalBalance}}</p>
      <p class="submit">投票</p>
    </div> -->
    <div class="copy">
      <h3>点击复制投票地址到发送页面进行投票</h3>
      <div class="copy-content" @click="handleCopy">
        <img src="../assets/copy.png" alt="">
        <input ref="copy" type="text" :value="nodeInfoData.currentNode.nodeAddress">
        <!-- <p class="copy-mask">modao.cc/app/f710e3ce322d11dc66d85390f023b2bb#screen</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { GetUrlParam, Layer } from '@/libs/util'
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
      this.$api.post('api/node/calculateNodeAndLast', {nodeId: GetUrlParam('id'), userId: '3'}).then(res => {
        this.nodeInfoData = res.所有信息
      })
    },
    handleNavLeft () { // 返回
      this.$router.go(-1)
    },
    handleCopy () { // 复制
      this.$refs.copy.select()
      document.execCommand("Copy")
      Layer('复制成功')
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
  .copy {
    font-size: 0.26rem;
    color: #333;
    overflow: hidden
  }
  .copy h3 {
    margin: 0.63rem 0 0.37rem;
    width: 100%;
    height: 0.26rem;
    line-height: 0.26rem;
    font-weight: 500;
    text-align: center
  }
  .copy .copy-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem 0 0.4rem
  }
  .copy .copy-content img {
    position: relative;
    top: 0.08rem;
    width: 0.3rem;
    height: 0.33rem
  }
  .copy .copy-content input {
    width: 6.29rem;
    height: 0.49rem;
    line-height: 0.49rem;
    border-radius: 5px;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    text-indent: 0.2rem;
    font-size: 0.2rem;
    color: #666;
    /* opacity: 0; */
  }
  /* .copy-mask {
    position: absolute;
    top: 0.01rem;
    right: 0.3rem;
    width: 6.29rem;
    height: 0.49rem;
    line-height: 0.49rem;
    border-radius: 5px;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    text-indent: 0.2rem;
    font-size: 0.2rem;
    color: #666;
  } */
</style>
