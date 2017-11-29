module.exports = {
	extends: ['airbnb-base'],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		camelcase: ['error', { properties: 'always' }],
		eqeqeq: ['error', 'always'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'new-cap': ['error', { newIsCap: true, capIsNewExceptionPattern: 'should[.(]' }],
		'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
		'no-tabs': 'off',

		'import/order': 'error',

		'mocha/handle-done-callback': 'error',
		'mocha/max-top-level-suites': 'warn',
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
	},
};
