<template>
  <div class="bottom-nav clearfix">
    <ul>
      <li>
        <img src="../assets/nav-icon04.png" alt="">
        <p>首页</p>
      </li>
      <li>
        <img src="../assets/nav-icon05.png" alt="">
        <p>接收</p>
      </li>
      <li>
        <img src="../assets/nav-icon06.png" alt="">
        <p>发送</p>
      </li>
      <li>
        <img src="../assets/nav-icon07.png" alt="">
        <p>历史记录</p>
      </li>
      <li>
        <img src="../assets/nav-icon08.png" alt="">
        <p>节点</p>
      </li>
    </ul>
  </div>
</template>

<script>
// 底部导航
export default {
  name: 'botttom-nav',
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  padding: 0.17rem 0 0.14rem;
  width: 100%;
  height: 0.67rem;
  background: #000
}
.bottom-nav ul {
  width: 100%;
  color: #FEE7B3
}
.bottom-nav ul li {
  float: left;
  width: 20%;
  font-size: 0.2rem
}
.bottom-nav ul li img {
  margin: 0 auto;
}
.bottom-nav ul>li:nth-child(1) img {
  width: 0.38rem
}
.bottom-nav ul>li:nth-child(2) img {
  width: 0.35rem
}
.bottom-nav ul>li:nth-child(3) img {
  width: 0.36rem
}
.bottom-nav ul>li:nth-child(4) img {
  width: 0.33rem
}
.bottom-nav ul>li:nth-child(5) img {
  width: 0.38rem
}
.bottom-nav ul li p {
  text-align: center
}
</style>
