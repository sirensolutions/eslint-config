module.exports = {
  extends: [
    '@elastic/eslint-config-kibana'
  ],
  plugins: [
    'siren'
  ],
  rules: {
    'siren/memoryleaks': 1
    "no-unused-vars": 0,
    "no-var": 1,
    "prefer-const": 1,
    "no-extra-semi": 0,
    "quotes": 0,
    "import/no-unresolved": 0,
    "import/named": 0,
    "import/no-named-as-default-member": 0,
    "import/no-duplicates": 0,
    "import/default": 0,
    "memoryleaks": 1,
    "keyword-spacing": 2,
    "comma-spacing": 2
  }
};
