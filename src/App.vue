<template>
  <el-container id="app">
    <el-header>
      <div id="header">
        <div style="float: left;">
          <i class="el-icon-edit" @click="jumptomain()">每日一句心灵鸡汤</i>
        </div>

        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/word">Word</router-link>
    </div> -->
      </div>
    </el-header>
    <el-main style="overflow: hidden;">
      <router-view />
      <!-- <Word /> -->
      <!-- <el-scrollbar style="height: 100%" class="outscoll"> -->
      <!-- </el-scrollbar> -->
    </el-main>
    <el-footer>
      <div class="block">
        <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination> -->
        <p style="display: inline">🚀Powered by </p>
        <el-link href="https://im0o.top/" type="primary" style="display: inline"
          >0ojixueseno0</el-link
        >
      </div>
    </el-footer>
  </el-container>
</template>

<script>
// import Word from "views/word.vue";
export default {
  methods: {
    jumptomain() {
      console.log("abababba");
    }
  },
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Noto Sans SC", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 425px;
  // overflow: hidden;
}

#nav {
  font-size: 18px;
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.el-main {
  overflow-y: hidden;
  height: calc(100vh - 120px);
}
.element-main {
  overflow: hidden;
}
.outscoll {
  display: grid;
}
.el-container {
  // min-width: 725px;
  min-height: 100%;
}
.footerfont {
  font-size: 14px;
}
@media (max-width: 321px) {
  header {
    font-size: 26px;
    user-select: none;
    width: 130vw;
    max-height: 48px;
    margin-top: -8px;
    margin-left: -8px;
    line-height: 155%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .el-container {
    min-width: 320px;
    // min-height: 100%;
  }
}
@media (min-width: 321px) {
  header {
    font-size: 30px;
    user-select: none;
    width: 100vw;
    max-height: 48px;
    margin-top: -8px;
    margin-left: -8px;
    line-height: 155%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .el-container {
    min-width: 720px;
    // min-height: 100%;
  }
}
</style>
