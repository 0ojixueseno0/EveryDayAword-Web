module.exports = {
  devServer: {
    proxy: {
      "*/api": {
        target: "http://abc.im0o.top:14771",
        //   ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
};
