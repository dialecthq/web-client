// next.config.js
const withLess = require('next-with-less')

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: {
        '@primary-color': '#4D40F0',
        '@link-color': '#4D40F0',
        '@border-radius-base': '10px'
        /* ... */
      }
    }
  }
})
