const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/proxy",
    createProxyMiddleware({
      target: "https://api.hashnode.com",
      changeOrigin: true,
      pathRewrite: {
        "^/proxy": "/",
      },
    }),
  );
};
