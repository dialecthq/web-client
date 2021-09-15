require('babel-register')

function isTruthy(value) {
  if (!value) return false
  return ['1', 'true'].indexOf(value.toLowerCase()) >= 0
}

const OFF = 'off'
const ERROR = 'error'
const WARNING = isTruthy(process.env.CI) ? ERROR : 'warn'

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@next/next/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': OFF,
    eqeqeq: [WARNING, 'allow-null'],
    'import/imports-first': OFF,
    // 'import/no-unresolved': OFF,
    quotes: ['error', 'single'],
    indent: [WARNING, 2, { SwitchCase: 1 }],
    'max-len': [WARNING, 100, 2],
    'no-console': [WARNING, { allow: ['warn', 'error'] }],
    'no-debugger': WARNING,
    'no-fallthrough': WARNING,
    'no-unreachable': WARNING,
    'no-unused-vars': [WARNING, { vars: 'all', args: 'none' }],
    'no-var': ERROR,
    'prefer-const': WARNING,
    'react/prop-types': [WARNING, { ignore: ['className'] }],
    'import/no-unresolved': WARNING,
    semi: [WARNING, 'never'],
    'react/no-unescaped-entities': [OFF]
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
}
