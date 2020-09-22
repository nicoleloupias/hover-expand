module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        "ecmaVersion": 6,
        "sourceType": "module",
      },
    env: {
      browser: true,
    },
    plugins: [
      '@vue'
    ],
    // add your custom rules here
    rules: {
        "no-param-reassign": "off"
    }
}
