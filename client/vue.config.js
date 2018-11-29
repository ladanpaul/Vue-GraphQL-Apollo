module.exports = {
  chainWebpack(config) {
    config.set("devtool", "cheap-source-map");
    config.module
      .rule("mjs$")
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type("javascript/auto");

    config.resolve.extensions.prepend(".mjs");
  }
};
