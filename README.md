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

### Create a new release

1. Edit the version in the `package.json` file.
2. `git add package.json`.
3. Commit the changes `git commit -m vx.x.x`.
4. Create a new git tag `git tag -a vx.x.x -m vx.x.x`.
5. Run `yarn npm publish` to publish the package to the registry.
6. Push the changes `git push`.
