module.exports = {
    "extends": [
      "airbnb-base",
      "plugin:vue/recommended"
    ],
    "plugins":[
      "vue"
    ],
    "env":{
      "browser":true
    },
    "parserOptions":{
      "parser": "babel-eslint",
      "ecmaVersion":6,
      "sourceType":"module",
      "ecmaFeatures":{
        "jsx":true
      }
    },
    "rules":{
      "semi": 0,
      "linebreak-style": 0
    }
};
