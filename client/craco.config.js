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
              '@primary-color': '#9C77FF',
              '@link-color': '#9C77FF',
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
        aliases: {
          '@components/*': './src/Components/*'
        }
      }
    },
  ],
}
