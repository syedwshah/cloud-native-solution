module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  'overrides': [
    {
      'env': {
        'node': true,
        'es6': true,
      },
      'globals': {
        'process': true, // Add "process" as a global variable
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'quotes': ['error', 'single'],
    // we want to force semicolons
    'semi': ['error', 'never'], // Disable semicolons
    // we use 2 spaces to indent our code
    'indent': ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0, 'maxBOF': 0 }]
  }
}