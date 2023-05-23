const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    // 配置多页面
    index: {
      entry: "src/views/IndexPage/main.js",
      template: "public/index.html",
    },
    video: {
      entry: "src/views/VideoPage/main.js",
      template: "public/video.html",
    },
    shortVideo: {
      entry: "src/views/ShortVideoPage/main.js",
      template: "public/shortVideo.html",
    },
    performance: {
      entry: "src/views/PerformancePage/main.js",
      template: "public/performance.html",
    },
    mine: {
      entry: "src/views/MinePage/main.js",
      template: "public/mine.html",
    },
  },
});
