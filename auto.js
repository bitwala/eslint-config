const path = require("path");

const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = require(packageJsonPath);

const hasReact = Boolean(
  (packageJson.dependencies && packageJson.dependencies["react"]) ||
    (packageJson.devDependencies && packageJson.devDependencies["react"])
);

const hasTypescript = Boolean(
  packageJson.devDependencies && packageJson.devDependencies["typescript"]
);

module.exports = {
  extends: [
    "@bitwala/eslint-config/base",
    // If project is using react we load the react config
    hasReact ? "@bitwala/eslint-config/react" : null,
    // If project is not using react it means it's a node project
    !hasReact ? "@bitwala/eslint-config/node" : null,
    // If project is using typescript we load the typescript config
    hasTypescript ? "@bitwala/eslint-config/typescript" : null,
  ].filter((s) => !!s),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
