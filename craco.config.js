const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#4D40F0',
              '@link-color': '#4D40F0',
              '@border-radius-base': '10px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './src'
      }
    }
  ],
}
