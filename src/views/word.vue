<template>
<el-container align="center">
    <el-main>
      <el-scrollbar style="height: 100%" class="inscroll">
        <ul class="infinite-list" style="overflow:hidden">
        <el-card>
          <div style="width: 80%">
            
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
          const wsuri = "ws://localhost:8887";
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
          console.log(e)
          this.productinfos = JSON.parse(e.data);
          console.log(this.productinfos.word)
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
</style>