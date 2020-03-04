'use strict';
/*eslint linebreak-style: ["error", "windows"]*/
module.exports = {
  root: true,
	extends: 'airbnb',
	parser: 'babel-eslint',
  env: { browser: true },
  rules: {
		quotes: [2, 'single'],
		strict: [2, 'global'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-console': 0,
		'arrow-parens': [2, 'as-needed'],
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		"linebreak-style": 0
	},
	overrides: [
		{
			files: ['webpack.config.js', 'babel.config.js'],
			parserOptions: { sourceType: 'script' },
		},
		{
			files: ['**/__tests__/*.spec.js', '**/__mocks__/*.js'],
			env: { node: true, jest: true },
		},
	],
};
