module.exports = {
	extends: ["airbnb-base", "plugin:import/errors", "plugin:import/warnings"],
	plugins: ["import"],
	rules: {
		// Our preferences
		"import/order": "error",
		"arrow-parens": ["error", "as-needed"],
		camelcase: ["error", { properties: "always" }],
		eqeqeq: ["error", "always"],
		"new-cap": [
			"error",
			{ newIsCap: true, capIsNewExceptionPattern: "should[.(]" }
		],
		"no-console": ["error", { allow: ["error", "info", "warn"] }],
		"no-tabs": "off",
		// Prettier conflicts
		curly: "off",
		"function-paren-newline": "off",
		indent: "off",
		"no-confusing-arrow": "off",
		"no-mixed-operators": "off",
		"object-curly-newline": "off"
	}
};
