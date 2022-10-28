module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:vue/vue3-recommended", "linkmarker"],
  "overrides": [
    {
      "files": ["src/**/*.vue"],
      "parser": "vue-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
        "ecmaVersion": "latest"
      }
    }
  ],
  "plugins": ["vue"],
  "rules": {}
};
