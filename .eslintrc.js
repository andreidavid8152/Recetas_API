/* eslint-env node */
module.exports = {
    env: {
        node: true,
        jest: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    extends: "eslint:recommended",
    rules: {
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    },
    ignorePatterns: ["node_modules/"]
};
