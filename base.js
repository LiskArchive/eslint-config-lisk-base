module.exports = {
	extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
	plugins: ['import'],
	rules: {
		// Our preferences
		'import/order': 'error',
		'arrow-parens': ['error', 'as-needed'],
		camelcase: ['error', { properties: 'always' }],
		eqeqeq: ['error', 'always'],
		'new-cap': [
			'error',
			{ newIsCap: true, capIsNewExceptionPattern: 'should[.(]' },
		],
		'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
		'no-tabs': 'off',
		'no-await-in-loop': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		// Prettier conflicts
		curly: 'off',
		'function-paren-newline': 'off',
		indent: 'off',
		'no-confusing-arrow': 'off',
		'no-mixed-operators': 'off',
		'object-curly-newline': 'off',
	},
};
