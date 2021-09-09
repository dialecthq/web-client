const CracoLessPlugin = require('craco-less')
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
              '@border-radius-base': '10px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
