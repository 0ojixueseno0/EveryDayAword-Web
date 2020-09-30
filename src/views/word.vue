<template>
  <el-container align="center">
    <el-main>
      <el-scrollbar style="height: 100%" class="inscroll">
        <ul class="infinite-list" style="overflow:hidden">
          <el-card>
            <div class="contcard">
              <div class="avaterimg">
                <el-avatar
                  shape="square"
                  :size="70"
                  src="https://gitee.com/im0o/photobed/raw/master/img/20200727163358.png"
                />
              </div>
              <div class="textss">
                本站语录大部分收录于 MCBBS论坛中 每日一水心灵鸡汤 有效语录<br />
                原帖地址：https://www.mcbbs.net/thread-1105827-1-1.html<br />
                如需投稿，请联系站长 0ojixueseno0 投稿前请保证使用 WTFPL
                开源协议
              </div>
            </div> </el-card
          ><br />
          <div v-for="i in this.productinfos" :key="i">
            <el-card
              ><i
                class="el-icon-coffee-cup"
                style="float: left;font-size: 23px"
              />{{ i }}</el-card
            >
            <br />
          </div>
        </ul>
        <!-- <v-for></v-for> -->
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script>
// import { Loading } from "element-ui";
export default {
  data() {
    return {
      count: 0,
      productinfos: [],
      isLoading: false
    };
  },
  methods: {
    // this.loadingInstance = Loading.service({text: "正在努力熬煮鸡汤..."});
    // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
    //   this.loadingInstance.close();
    // });
    loading() {
      const loading = this.$loading({
        lock: true,
        text: "正在努力熬煮鸡汤..."
      });
      this.isLoading = true;
      setTimeout(() => {
        loading.close();
        if (this.isLoading == true) {
          this.$message({
            showClose: true,
            message: "连接超时 请尝试刷新或联系站长",
            type: "error"
          });
          this.isLoading = false;
        }
      }, 10000);
      this.axios
        .get("/api/getword") //need to change url
        .then(resp => {
          if (resp.status === 200) {
            // console.log(resp);
            // console.log(resp.data);
            this.productinfos = resp.data.word;
            // console.log(this.productinfos);
            loading.close();
            this.isLoading = false;
          } else {
            this.$message({
              showClose: true,
              message: "哎呀 鸡汤在来的路上洒了 请重新熬一碗吧",
              type: "error"
            });
            loading.close();
            this.isLoading = false;
          }
        })
        // fetch('http://abc.im0o.top:14771/getword')
        //   .then( (res) => {  return res.json() } )//对fetch进行格式化，否则读取不到内容
        //   .then( (data) => { this.productinfos = data; loading.close(); } )//拿到格式化后的数据data
        .catch(error => {
          console.log(error);
          this.$message({
            showClose: true,
            message: "未知错误，请联系站长",
            type: "error"
          });
          loading.close();
          this.isLoading = false;
        });
    }
  },
  created() {
    this.loading();
  }
};
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
  text-align: left;
}

@media only screen and (max-width: 925px) {
  .avaterimg {
    display: flex;
    margin-left: calc(50% - 32px);
    text-align: center;
  }
  .contcard {
    width: 100%;
    text-align: center;
  }
}
</style>
