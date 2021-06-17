const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#9C77FF',
              '@link-color': '#9C77FF',
              '@border-radius-base': '10px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
