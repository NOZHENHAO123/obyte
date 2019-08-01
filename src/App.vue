<template>
  <div id="app">
    <router-view/>
    <div id="layer" style="display:none;position:fixed;top:0;width:100vw;height:100vh;background:rgba(0,0,0,0)">
      <div style="margin: 50vh auto 0;display:flex;justify-content:center">
        <span id="layerText" style="padding: 0 0.2rem;max-width:100%;background:rgba(0,0,0,0.7);color:#fff;height:0.7rem;line-height:0.7rem;border-radius:5px;z-index:999;text-align:center;font-size:0.35rem;"></span>
      </div>
    </div>
  </div>
</template>

<script>
// import { nativeMethods } from '@/libs/util.js'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    // let _this = this;
    // XBack.listen(function(){
    //   _this.$router.go(-1)
    // });
  },
  methods: {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html{
  font-size: calc(100vw/7.5);
}
body{
  margin: 0;
  font-family: "Microsoft YaHei",Helvetica;
  min-width: 320px;
}
a{
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
p, ul, ol, li, table, td, th, img, div, h1, h2, h3, h4, h5, h6, dl, dt, dd, form {
  padding: 0;
  margin: 0
}
img{
  display: block;
  border: medium none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p{
  word-wrap: break-word;
}
li{
  list-style-type: none;
}
input{
  margin: 0;
  background-color: inherit;
  color: inherit;
  outline: none;
}
em,strong,var,i{
  font-weight: normal;
  font-style: normal;
}
.clearfix:after{
  display: block;
  content: "";
  clear:both;
  height: 0;
  visibility: hidden;
}
textarea,input[type="search"],input[type="email"],input[type="url"],input[type="number"],input[type="text"],input[type="password"]{font-size:0.14rem;}
</style>
