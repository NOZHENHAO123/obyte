<template>
  <div class="container">
    <div class="desc">
      <p>矿产剩余总量(LCP)</p>
      <p>500,376,200</p>
    </div>
    <div class="desc">
      <p>矿产剩余总量(LCP)</p>
      <p>500,376,200</p>
    </div>
    <div class="desc">
      <p>矿产剩余总量(LCP)</p>
      <p>500,376,200</p>
    </div>
    <div class="content">
      <h5>下期预计产出</h5>
      <p class="name clearfix">
        <span>起止时间</span>
        <span>预计产出</span>
      </p>
      <ul class="message">
        <li>
          <p class="clearfix"><span>2020/05/01-2021/04/30</span><span>20,000</span></p>
        </li>
        <li>
          <p class="clearfix"><span>2020/05/01-2021/04/30</span><span>20,000</span></p>
        </li>
        <li>
          <p class="clearfix"><span>2020/05/01-2021/04/30</span><span>20,000</span></p>
        </li>
        <li>
          <p class="clearfix"><span>2020/05/01-2021/04/30</span><span>20,000</span></p>
        </li>
        <li>
          <p class="clearfix"><span>2020/05/01-2021/04/30</span><span>20,000</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 矿场详情
export default {
  name: 'initiate'
}
</script>

<style scoped>
  .container {
    padding: 0.16rem 0.31rem 0;
    min-height: 100vh;
    overflow: hidden;
    background: #F2F3F5
  }
  .desc {
    margin-bottom: 0.14rem;
    padding: 0.33rem 0 0.25rem 0.36rem;
    border-radius: 3px;
    color: #666666;
    font-size: 0.28rem;
    background: #fff;
  }
  .desc>p:nth-child(1)  {
    height: 0.28rem;
    line-height: 0.28rem
  }
  .desc>p:nth-child(2) {
    margin-top: 0.16rem;
    color: #000;
    height: 0.36rem;
    line-height: 0.36rem;
    font-weight: 500;
    font-size: 0.36rem
  }
  .content {
    font-size: 0.24rem;
    color: #333;
    border-radius: 3px;
    background: #fff
  }
  .content h5 {
    padding: 0.35rem 0 0 0.35rem;
    font-size: 0.28rem;
    font-weight: 500;
    color: #666
  }
  .content .name {
    padding: 0 0.3rem 0 0.35rem;
    margin-top: 0.46rem;
    color: #666
  }
  .content .name span {
    float: left
  }
  .content .name>span:nth-child(2) {
    float: right
  }
  .message {
    margin-top: 0.05rem
  }
  .message li {
    padding: 0 0.48rem 0 0.35rem;
    height: 0.79rem;
    line-height: 0.79rem;
    border-top: 1px solid #EEEEEE
  }
  .message li p>span:nth-child(2) {
    float: right
  }
</style>
