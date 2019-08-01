<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" v-if="titleData.text" :title="titleData"></TabNav>
    <div class="content">
      <input v-model="txId" placeholder="输入交易ID" id="number" type="text">
      <p @click="addHashrate" class="submit">确定</p>
    </div>
    <div class="layer"> 
      <h3>常见问题</h3>
      <p>什么是交易ID？</p>
      <p>每一笔交易都会生成一个唯一的交易ID号。</p>
      <p>怎么找到交易ID？</p>
      <p>你可以在“历史记录”页面找到。具体操作步骤如下：</p>
      <p>1.进入“历史记录”页面；</p>
      <p>2.找到你增加算力的交易记录，点击该条记录进入交易详情页面</p>
      <p>3.在详情页面，“ID”后跟着的长串文字即交易ID</p>
      <p>如何增加算力记录？</p>
      <p>复制交易ID号到此页面并粘贴到输入框内，确认无误后，点击“确定”即可。</p>
    </div>
  </div>
</template>

<script>
import { Layer } from '@/libs/util'
// 头部导航
import TabNav from '@/components/nav.vue'

// 赎回
export default {
  name: 'AddHashrateHistory',
  data () {
    return {
      txId: '', // 交易id
      titleData: {
        imgSrc: 'nav-icon02.png',
        text: '增加算力记录',  // 导航居中文本
        leftText: '返回', // 导航左文本
        textColor: 'yellow', // 导航颜色
      }
    }
  },
  components: {
    TabNav
  },
  created () {
  },
  methods: {
    handleNavLeft () {  // 返回
      this.$router.go(-1)
    },
    addHashrate () {  // 增加算力
      this.$api.post('api/invert/incomeListByTxId',{
        txId: this.txId
      }).then(() => {
        Layer('增加成功')
      })
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
    margin-top: 0.8rem;
    padding: 0.6rem 0.32rem 0 0.32rem;
  }
  /* .content h3 {
    font-size: 0.26rem;
    color: #333;
    font-weight: 500
  } */
  .content input {
    padding-right: 1rem;
    width: 85%;
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
  /* .balance {
    margin-top: 0.3rem;
    font-size: 0.24rem;
    color: #999
  } */
  .submit {
    margin-top: 0.86rem;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 15px;
    text-align: center;
    color: #000;
    font-size: 0.32rem;
    background: #FEE7B3
  }
  /* .message {
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
  } */
  .layer {
    margin-top: 1.62rem;
    padding: 0 0.45rem 0 0.38rem;
    font-size: 0.24rem;
    overflow: hidden;
    color: #333
  }
  .layer h3 {
    font-size: 0.3rem;
    color: #000
  }
  .layer p {
    margin-top: 0.1rem;
    /* margin-top: ; */
    /* height: 0.24rem; */
    line-height: 0.35rem
  }
  .layer>p:nth-child(2) {
    margin-top: 0.46rem;
    font-weight: 600
  }
  .layer>p:nth-child(3) {
    margin-top: 0.1rem;
  }
  .layer>p:nth-child(4) {
    margin-top: 0.46rem;
    font-weight: 600
  }
  .layer>p:nth-child(9) {
    margin-top: 0.46rem;
    font-weight: 600
  }
</style>
