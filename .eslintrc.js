require("@babel/register")

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:@next/next/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
}
