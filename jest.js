module.exports = {
	extends: ['plugin:jest/recommended', 'plugin:jest/style'],
	plugins: ['jest'],
	env: {
		'jest/globals': true,
	},
	rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'jest/consistent-test-it': ['error'],
	},
};
