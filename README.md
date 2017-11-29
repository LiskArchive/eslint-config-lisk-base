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

Don't ignore null.

### `indent` and `no-tabs`

Use tabs. Tabs are for indentation, spaces are for separation.

### `new-cap`

Call uppercase-started functions with `new`. Exception pattern is added for compatibility with [`should.js`](https://shouldjs.github.io/).

### `no-console`

Don't leave console statements lying around. Exceptions for `console.error`, `console.info` and `console.warn` so you can use console statements if you really mean it.
