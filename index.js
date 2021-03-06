module.exports = {
  // When using this config with Gulp, you must either use gulp version 5 or add the kibana config as a dependency:
  //   "@elastic/eslint-config-kibana": "^0.7.0"
  extends: [
    '@elastic/eslint-config-kibana'
  ],
  // You must add this plugin as a dev dependency:
  //   "eslint-plugin-siren": "sirensolutions/eslint-plugin-siren"
  plugins: [
    'siren'
  ],
  rules: {
    'siren/memory-leak': "warn",
    'siren/same-core-dependency-version': 'warn',
    "no-console": ["warn", { allow: ["warn", "error"] }]
  }
};
