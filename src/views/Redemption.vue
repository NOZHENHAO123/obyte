<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" v-if="titleData.text" :title="titleData"></TabNav>
    <h3>选择你要赎回的算力</h3>
    <ul>
      <li>
        <p class="clearfix">
          <span></span>
          <span>2,000 LCP</span>
          <span>123天前投入</span>
        </p>
      </li>
      <li>
        <p class="clearfix">
          <span></span>
          <span>2,000 LCP</span>
          <span>123天前投入</span>
        </p>
      </li>
      <li>
        <p class="clearfix">
          <span></span>
          <span>2,000 LCP</span>
          <span>123天前投入</span>
        </p>
      </li>
    </ul>
    <p class="submit">立即赎回</p>
  </div>
</template>

<script>
// 头部导航
import TabNav from '@/components/nav.vue'

// 赎回
export default {
  name: 'initiate',
  data () {
    return {
      titleData: {
        imgSrc: 'nav-icon02.png',
        text: '赎回算力',  // 导航居中文本
        leftText: '返回', // 导航左文本
        textColor: 'yellow', // 导航颜色
      }
    }
  },
  components: {
    TabNav
  },
  methods: {
    handleNavLeft () { // 返回
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
  .container {
    min-height: 100vh;
    overflow: hidden;
    background: #F2F3F5 
  }
  .container h3 {
    margin-top: 0.8rem;
    padding-left: 0.37rem;
    width: 100%;
    height: 0.82rem;
    line-height: 0.82rem;
    font-weight: 500;
    color: #333;
    font-size: 0.24rem
  }
  .container ul li {
    margin-bottom: 0.08rem
  }
  .container ul li>p {
    padding: 0 0.31rem 0 0.34rem;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    color: #333;
    font-size: 0.28rem
  }
  .container ul li>p>span:nth-child(1) {
    display: inline-block;
    margin-right: 0.25rem;
    width: 0.22rem;
    height: 0.22rem;
    border: 1px solid #999;
    border-radius: 50%
  }
  .container ul li>p>span:nth-child(3) {
    float: right;
    color: #666;
    font-size: 0.24rem
  }
  .submit {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.26rem;
    background: #000;
    color: #FEE7B3
  }
</style>
