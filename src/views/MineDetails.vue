<template>
  <div class="container">
    <TabNav @handleNavLeft="handleNavLeft" @handleNavRight="handleNavRight" v-if="titleData.text" :title="titleData"></TabNav>
    <div class="desc">
      <p>矿产剩余总量(LCP)</p>
      <p>{{infoData.totalBalance | formatNumberRgx}}</p>
    </div>
    <div class="desc">
      <p>本期剩余产出(LCP)</p>
      <p>{{infoData.balanceRest | formatNumberRgx}}</p>
    </div>
    <div class="desc">
      <p>本期结束时间</p>
      <p>{{infoData.endTime | intercepting}}</p>
    </div>
    <div class="content">
      <h5>下期预计产出</h5>
      <p class="name clearfix">
        <span>起止时间</span>
        <span>预计产出</span>
      </p>
      <ul class="message">
        <li v-for="(item, index) in minePlanProductListData" :key="index">
          <p class="clearfix"><span>{{item.startTime | intercepting}}-{{item.endTime | intercepting}}</span><span>{{item.planProduct | formatNumberRgx}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 头部导航
import TabNav from '@/components/nav.vue'

// 矿场详情
export default {
  name: 'initiate',
  data () {
    return {
      infoData: {}, // 详情数据
      minePlanProductListData: [],  // 计划列表数据
      titleData: {  // 导航
        imgSrc: 'nav-icon02.png',
        text: '矿场',  // 导航居中文本
        leftText: '返回', // 导航左文本
        rightText: '钱包查询', // 导航左文本
        textColor: 'yellow', // 导航颜色
      }
    }
  },
  components: {
    TabNav
  },
  filters: {
    intercepting (val) {  // 截取时间
      if (val) {
        return val.slice(0,10).replace(/-/g, "/")
      } else {
        return val
      }
    },
    formatNumberRgx(num) { // 数字添加千分号
      if (num) {
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      } else {
        return num
      }
    }
  },
  created () {
    this.getMinePlanList()
    this.getInfoData()
  },
  methods: {
    handleNavLeft () {  // 返回
      this.$router.go(-1)
    },
    handleNavRight () { // 查询钱包（暂未定）

    },
    getInfoData () {  // 详情
      this.$api.post('api/mine/mineInfo').then(res => {
        this.infoData = res.info
      })
    },
    getMinePlanList () { // 获取矿产生产计划列表数据
      this.$api.post('api/mine/listPlanProduct').then(res => {
        this.minePlanProductListData = res.minePlanProductList
      })
    }
  }
}
</script>

<style scoped>
  .container {
    /* padding: 0.16rem 0.31rem 0; */
    padding: 0.96rem 0.31rem 0;
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
