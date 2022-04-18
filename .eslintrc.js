module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@bach": "./src",
          "@bach/test-utils": "./src/test_utils.jsx",
        },
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: false, parser: "flow" }],
    "no-console": "off",
    // You can do your customizations here...
    // For example, if you don't want to use the prop-types package,
    // you can turn off that recommended rule with: 'react/prop-types': ['off']
  },
};
