module.exports = {
	plugins: ["jest"],
	env: {
		"jest/globals": true
	},
	rules: {
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }]
	}
};
