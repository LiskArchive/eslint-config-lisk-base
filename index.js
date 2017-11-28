module.exports = {
	extends: ['airbnb-base'],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		camelcase: ['error', { properties: 'always' }],
		eqeqeq: ['error', 'always'],
		indent: ['error', 'tab'],
		'new-cap': ['error', { newIsCap: true, capIsNewExceptionPattern: 'should[.(]' }],
		'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
		'no-tabs': 'off',

		'import/order': 'error',
	},
};
