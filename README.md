# @bitwala/eslint-config

[![npm version](https://badge.fury.io/js/%40bitwala%2Feslint-config.svg)](https://badge.fury.io/js/%40bitwala%2Feslint-config)
[![npm monthly downloads](https://img.shields.io/npm/dm/%40bitwala%2Feslint-config.svg)](https://img.shields.io/npm/dm/%40bitwala%2Feslint-config.svg)

Bitwala eslint config.

## Installation

Using npm:

```sh
npm install --save-dev --save-exact @bitwala/eslint-config
```

or using yarn:

```sh
yarn add --dev --exact @bitwala/eslint-config
```

## Usage

Create a new `.eslintrc.js` for your project and add the following configuration:

```js
module.exports = {
  extends: [
    "@bitwala/eslint-config/react",
    "@bitwala/eslint-config/node",
    "@bitwala/eslint-config/typescript",
  ],
};
```
