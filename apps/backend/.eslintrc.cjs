/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    node: true,
  },
  extends: ['linkmarker'],
  rules: {
    "semi": ["error", "always"],
  },
};