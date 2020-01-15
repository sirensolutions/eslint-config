module.exports = {
  extends: [
    '@elastic/eslint-config-kibana'
  ],
  plugins: [
    'siren'
  ],
  rules: {
    'siren/memoryleaks': 1
  }
};
