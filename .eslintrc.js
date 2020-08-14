module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "prettier/prettier": "error"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "ignorePatterns": ['node_modules/'],
};
