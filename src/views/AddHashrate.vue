<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" v-if="titleData.text" :title="titleData"></TabNav>
    <div class="message">
      <p>节点名称：{{detailData.nodeName}}</p>
      <p>节点地址：{{detailData.nodeAddress}}</p>
    </div>
    <div class="content">
      <h3>算力</h3>
      <input placeholder="输入算力数量" id="number" type="text">
      <label class="number-desc" for="number">LCP</label>
      <p class="balance">可用余额：{{detailData.nodeAccount}}</p>
      <p class="submit">投入</p>
    </div>
  </div>
</template>

<script>
import { GetUrlParam } from '@/libs/util'
// 头部导航
import TabNav from '@/components/nav.vue'

// 赎回
export default {
  name: 'initiate',
  data () {
    return {
      detailData: {}, // 详情数据
      titleData: {
        imgSrc: 'nav-icon02.png',
        text: '增加算力',  // 导航居中文本
        leftText: '返回', // 导航左文本
        textColor: 'yellow', // 导航颜色
      }
    }
  },
  components: {
    TabNav
  },
  created () {
    this.getDetail()
  },
  methods: {
    handleNavLeft () {  // 返回
      this.$router.go(-1)
    },
    getDetail () {  // 获取详情数据
      this.$api.post('api/node/calculateNodeDetial',{
        nodeId: GetUrlParam('id')
      }).then(res => {
        this.detailData = res.node
      })
    },
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
  .message {
    margin-top: 0.8rem;
    padding: 0.41rem 0 0.4rem 0.32rem;
    font-size: 0.24rem;
    color: #999;
    background: #F2F3F5
  }
  .message>p:nth-child(2) {
    margin-top: 0.25rem;
    width: 4.5rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
</style>
