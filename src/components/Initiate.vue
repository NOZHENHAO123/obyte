<template>
  <div>
    <div @click="skipDetail(item.nodeId)" v-for="(item, index) in InitiateData" :key="index" class="message" :class="{messageMagintop: index>0}">
      <ul class="clearfix">
        <li class="detail">
          <p>{{item.nodeAddress}}<span>锁定数量：{{item.nodeAccount}}</span></p>
          <p class="desc clearfix">地址：{{item.nodeAddress}}</p>
        </li>
        <li class="vote">
          <p>{{item.todayIncome}}</p>
          <p>今日产币</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 创始节点
export default {
  name: 'initiate',
  props: ['InitiateData'],
  mounted () {
  },
  methods: {
    /**
     * 跳转详情
     * @param {String} -id 算力id
     */
    skipDetail (id) {
      this.$router.push({name: 'hashrate-details', query: {id: id}})
    }
  }
}
</script>

<style scoped>
  p {
    text-align: left
  }
  .message {
    margin: 0 auto;
    width: 92%;
    height: 1.4rem;
    border-bottom: 1px solid #F2F3F5;
    border-radius: 5px;
    background: #fff
  }
  .styleColor {
    color: #666!important;
    border: none!important;
  }
  .message ul {
    padding: 0.38rem 0.56rem 0.27rem 0.31rem;
    font-size: 0.24rem;
    color: #666
  }
  .message ul li {
    float: left;
    text-align: left;
  }
  .message .detail p:nth-child(1) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    max-width: 4.5rem;
    color: #333;
    font-size: 0.26rem;
  }
  .message .detail p:nth-child(1) span {
    float: right;
    color: #666;
    font-size: 0.24rem
  }
  .message .detail p:nth-child(2) {
    margin-top: 0.1rem
  }
  .message .desc {
    width: 4.5rem;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }
  .vote {
    float: right!important;
    text-align: center
  }
  .vote>p:nth-child(1) {
    font-size: 0.36rem;
    text-align: center;
    font-weight: 500;
    color: #F7154F
  }
  .vote>p:nth-child(2) {
    color: #666666;
    font-size: 0.24rem
  }
  .messageMagintop {
    margin-top: 0.18rem
  }
</style>
