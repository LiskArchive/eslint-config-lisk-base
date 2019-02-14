# eslint-config-lisk-base

This is the base eslint config for use in Lisk projects. It extends [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), with a few overrides.

## Installation

```bash
npm install --save-dev eslint-config-lisk-base
```

## Usage

In your `.eslintrc.json` file:
```json
{
  "extends": ["lisk-base"]
}
```

## Contributing

PRs are welcome if the reasoning for the proposed change is provided.

## Divergence from `eslint-config-airbnb-base`

### `arrow-parens`

Arrow functions can omit parentheses when they have exactly one parameter. This omission is enforced consistently whether there is a block body for the function or not.

### `camelcase`

Enforce camelcase for properties as well.

### `eqeqeq`

Don’t ignore null.

### `indent` and `no-tabs`

Use tabs. Tabs are for indentation, spaces are for separation.

### `new-cap`

Call uppercase-started functions with `new`. Exception pattern is added for compatibility with [`should.js`](https://shouldjs.github.io/).

### `no-console`

Don’t leave console statements lying around. Exceptions for `console.error`, `console.info` and `console.warn` so you can use console statements if you really mean it.

## Additional rules

### `import/order`

So that imports have a logical structure: built-in node modules, external dependencies, parent modules, siblings, then directory index. This is especially helpful in files that have a lot of imports.

### `mocha/no-async-describe`

This rule disallows the use of an `async` function with `describe`.

### `mocha/handle-done-callback`

So that you don’t forget to call the `done` callback in a test.

### `mocha/max-top-level-suites`

Each file should have only one top-level suite. This is set to `warn` level in case your test file structure mirrors the source file structure, but if the warning is raised, this might be an indication that your source file structure should change.

### `mocha/no-exclusive-tests`

Prevents accidentally committing `.only`.

### `mocha/no-global-tests`

Every test should be inside a suite.

### `mocha/no-identical-title`

Tests should have unique titles.

### `mocha/no-nested-tests`

`it` functions should not be home to further suites/tests.

### `mocha/no-pending-tests`

Prevents accidentally committing unwritten tests.

### `mocha/no-return-and-callback`

It’s confusing to use both forms of asynchronous test at the same time.

### `mocha/no-sibling-hooks`

There should be at most one of each type of hook at a given level of nesting.

### `mocha/no-skipped-tests`

Prevents accidentally committing `.skip`.

### `mocha/no-synchronous-tests`

If you forget to return a promise in an asynchronous test, you can end up with false positives. This rule forces you to return something from every test (or use the `done` callback);

### `mocha/no-top-level-hooks`

Hooks defined outside of a suite affect all other tests. If you really need global hooks (e.g. to reset a sinon sandbox after each test), these should be placed in a sensible location (e.g. `test/_global_hooks.js`) and this rule can be disabled on a per-file basis.
