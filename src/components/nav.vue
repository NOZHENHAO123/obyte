<template>
  <div class="nav-content" :class="{colorYellow: title.textColor == 'yellow'}">
    <span @click="handleNavLeft" class="left">
      <img v-if="title.imgSrc=='nav-icon01.png'" src="../assets/nav-icon01.png" alt="">
      <img class="nav-img02" v-if="title.imgSrc=='nav-icon02.png'" src="../assets/nav-icon02.png" alt="">
      <img class="nav-img03" v-if="title.imgSrc=='nav-icon03.png'" src="../assets/nav-icon03.png" alt="">
      <i v-if="title.leftText">{{title.leftText}}</i>
    </span>
    <span class="center">{{title.text}}</span>
    <span @click="handleNavRight" v-if="title.rightText" class="right">{{title.rightText}}</span>
  </div>
</template>

<script>
// 创始节点
// title {
//   text: 'LCP节点',  // 导航居中文本
//   textColor: 'yellow', // 导航颜色
//   leftText: '',  // 左导航文本
//   rightText: '' // 导航右文本
// }
export default {
  name: 'tabNav',
  props: ['title'],
  mounted () {
  },
  methods: {
    handleNavLeft () {
      this.$emit('handleNavLeft')
    },
    handleNavRight () {
      this.$emit('handleNavRight')
    }
  }
}
</script>

<style scoped>
.nav-content {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 0.31rem;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.24rem;
  color: white;
  background: rgba(0,0,0,0)
}
.nav-content img {
  position: relative;
  top: -0.025rem;
  display: inline-block;
  margin-right: 0.11rem;
  width: 0.28rem;
  vertical-align: middle;
}
.nav-content span {
  display: inline-block
}
.nav-content .left {
  width: 10%;
}
.nav-content .center {
  width: 70%;
  text-align: center;
  font-size: 0.32rem;
}
.nav-content .right {
  width: 20%;
}
.colorYellow {
  color: #FEE7B3!important;
  background: #000
}
.nav-img02 {
  width: 0.12rem!important;
}
.nav-img03 {
  width: 0.2rem!important;
}
</style>
