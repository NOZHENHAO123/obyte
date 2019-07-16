<template>
  <div>
    <div v-for="(item, index) in hashrateData" @click="skipDetail(item.nodeId)" :key="index" class="message">
      <ul class="clearfix">
        <li class="serial">
          <p>{{item.sort}}</p>
        </li>
        <li class="detail">
          <p>节点名称：<i>{{item.nodeName}}</i></p>
          <p class="desc clearfix">
            <span>加成比例：<i>{{item.nodeAddrate}}</i></span>
            <span>节点资产：<i>{{item.nodeAccount}}</i></span>
          </p>
          <p class="desc clearfix">
            <span>今日产币：<i>{{item.todayIncome}}</i></span>
            <span>总算力：<i>{{item.nodeHashrate}}</i></span>
          </p>
        </li>
        <li class="vote">
          <p>{{item.voteAccount}}</p>
          <p @click.stop.prevent="handleVote(item.nodeId)">投票</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 算力节点
export default {
  name: 'initiate',
  props: ['hashrateData'],
  methods: {
    /**
     * 投票
     * @param {String} -id 算力id
     */
    handleVote (id) {
      this.$router.push({name: 'vote', query: {id: id}})
      // this.$emit('handleVote', id)
    },
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
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #F2F3F5;
  background: #fff
}
.styleColor {
  color: #666!important;
  border: none!important;
}
.message ul {
  padding: 0.39rem 0.32rem;
  font-size: 0.24rem;
  color: #666
}
.message ul li {
  float: left;
  text-align: left
}
.serial {
  margin: 0.43rem 0.26rem 0 0;
  width: 0.36rem;
  height: 0.36rem;
  border: 0.02rem solid #333;
  border-radius: 50%
}
.serial>p {
  margin: 0.02rem auto 0;
  width: 0.28rem;
  height: 0.28rem;
  line-height: 0.28rem;
  font-size: 0.32rem;
  text-align: center;
  border: 0.02rem solid #333;
  border-radius: 50%
}
.detail {
  width: 4.6rem
}
.detail>p {
  margin-top: 0.135rem
}
.detail>p:nth-child(1) {
  margin: 0
}
.message .detail i {
  color: #333;
  font-style: normal
}
.desc {
  width: 100%;
}
.desc>span:nth-child(1){
  float: left;
}
.desc>span:nth-child(2){
  float: right;
  display: inline-block;
  width: 50%
}
.vote {
  float: right!important;
  margin-top: 0.35rem
}
.vote>p:nth-child(1) {
  font-size: 0.36rem;
  font-weight: 500;
  color: #2E3F51;
  text-align: center
}
.vote>p:nth-child(2) {
  width: 0.98rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #333;
  border-radius: 5px;
  background: #FEE7B3;
  text-align: center
}
</style>
