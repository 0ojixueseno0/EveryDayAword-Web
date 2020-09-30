<template>
<el-container align="center">
    <el-main>
      <el-scrollbar style="height: 100%" class="inscroll">
        <ul class="infinite-list" style="overflow:hidden">
        <el-card>
          <div class="contcard">
            <div class="avaterimg">
            <el-avatar shape="square" :size="70" src="https://gitee.com/im0o/photobed/raw/master/img/20200727163358.png" />
            </div>
            <div class="textss">
              本站语录大部分收录于 MCBBS论坛中 每日一水心灵鸡汤 有效语录<br>
              原帖地址：https://www.mcbbs.net/thread-1105827-1-1.html<br>
              如需投稿，请联系站长 0ojixueseno0 投稿前请保证使用 WTFPL 开源协议
            </div>
          </div>

          </el-card><br>
          <div v-for="i in this.productinfos.word" :key="i">
            <el-card><i class="el-icon-coffee-cup" style="float: left;font-size: 23px" />{{ i }}</el-card>
            <br>
          </div>
        </ul>
        <!-- <v-for></v-for> -->
      </el-scrollbar>
    </el-main>
</el-container>

</template>

<script>
import { Loading } from 'element-ui';
  export default {
    data () {
      return {
        count: 0,
        productinfos: [],
        loadingInstance: true,
      }
    },
    methods: {
        initWebpack(){//初始化websocket
          // Loading.service({text: "正在努力熬煮鸡汤..."});
          this.loadingInstance = Loading.service({text: "正在努力熬煮鸡汤..."});
          const wsuri = "ws://abc.im0o.top:14771/";
          this.websock = new WebSocket(wsuri);//这里面的this都指向vue
          this.websock.onopen = this.websocketopen;
          this.websock.onmessage = this.websocketonmessage;
          this.websock.onclose = this.websocketclose;
          this.websock.onerror = this.websocketerror;
        },
        websocketopen(){//打开
          console.log("WebSocket连接成功")
          this.websock.send("getword")
        },
        websocketonmessage(e){ //数据接收
          // console.log(e)
          this.productinfos = JSON.parse(e.data);
          // console.log(this.productinfos.word)
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            this.loadingInstance.close();
          });
        },
        websocketclose(){ //关闭
          console.log("WebSocket关闭");
        },
        websocketerror(){ //失败
          console.log("WebSocket连接失败");
        },
    },
    created () {
      this.initWebpack()
    }
  }
</script>

<style lang="scss">
.inscroll {
  overflow: -moz-hidden-unscrollable;
  overflow-x: hidden;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.textss {
  display: inline-flex;
  margin-inline-start: 10px;
  // width: 40px
  // margin-bottom: 20px;
}
.avaterimg {
  display: inline;
  float: left;
  margin-bottom: 10px;
}
.contcard {
  width: 80%;
  text-align: left
}

@media only screen and (max-width: 925px) {
    .avaterimg {
      display: flex;
      margin-left: calc(50% - 32px);
      text-align: center;
    }
    .contcard {
      width: 100%;
      text-align: center
    }
}
</style>