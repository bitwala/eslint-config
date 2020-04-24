module.exports = {
  env: {
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier", "implicit-dependencies", "jest", "import"],
  rules: {
    "implicit-dependencies/no-implicit": "error",
    camelcase: "off",
    "sort-keys": "off",
    "import/order": "error",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "no-console": "error",
    "no-restricted-globals": "error",
    "no-use-before-define": "off",
    "no-unused-expressions": "off",
    "no-useless-constructor": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prettier/prettier": "error"
  }
};
