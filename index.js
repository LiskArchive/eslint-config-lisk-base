module.exports = {
	extends: ['airbnb-base'],
	plugins: ['mocha'],
	rules: {
		// Our preferences
		'arrow-parens': ['error', 'as-needed'],
		camelcase: ['error', { properties: 'always' }],
		eqeqeq: ['error', 'always'],
		'new-cap': [
			'error',
			{ newIsCap: true, capIsNewExceptionPattern: 'should[.(]' },
		],
		'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
		'no-tabs': 'off',

		// Plugin rules
		'import/order': 'error',
		'mocha/handle-done-callback': 'error',
		'mocha/max-top-level-suites': 'warn',
		'mocha/no-async-describe': 'error',
		'mocha/no-exclusive-tests': 'error',
		'mocha/no-global-tests': 'error',
		'mocha/no-identical-title': 'error',
		'mocha/no-nested-tests': 'error',
		'mocha/no-pending-tests': 'error',
		'mocha/no-return-and-callback': 'error',
		'mocha/no-sibling-hooks': 'error',
		'mocha/no-skipped-tests': 'error',
		'mocha/no-synchronous-tests': 'error',
		'mocha/no-top-level-hooks': 'error',

		// Prettier conflicts
		curly: 'off',
		'function-paren-newline': 'off',
		indent: 'off',
		'no-confusing-arrow': 'off',
		'no-mixed-operators': 'off',
		'object-curly-newline': 'off',
	},
};
