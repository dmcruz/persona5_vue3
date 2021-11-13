module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/persona5_vue3/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
