module.exports = {
  extends: [
    "./base.js",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
      },
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              object: false,
              // Enable this rule at some point
              "{}": false,
            },
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
