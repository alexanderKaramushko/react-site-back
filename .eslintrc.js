module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 0,
    "lines-between-class-members": ["error", "always", {
			exceptAfterSingleLine: true
		}],
		"padded-blocks": ["error", {
			"classes": "always"
		}],
		"no-unused-vars": ["error", {
			"vars": "all",
			"args": "after-used",
			"ignoreRestSiblings": false
		}],
		'implicit-arrow-linebreak': 'off',
		'import/extensions': ['error', 'ignorePackages', {
			js: 'never',
			json: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never'
		}],
		'import/prefer-default-export': 'off',
		'indent': ['error', 4, {
			'ignoredNodes': ['JSXElement'],
		}],
		'linebreak-style': ['error', 'windows'],
		'linebreak-style': 0,
		'max-len': ['error', {
			code: 120,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true
		}],
		'no-console': 'error',
		'no-debugger': 'error',
		'no-multiple-empty-lines': ['error', {
			max: 1,
			maxBOF: 0,
			maxEOF: 0
		}],
		quotes: ['error', 'single'],
	  'sort-keys': ['error', 'asc', {
			caseSensitive: true,
			natural: false
		}],
		"object-curly-newline": ["error", {
			"ObjectPattern": { "multiline": true },
			"ImportDeclaration": "never",
			"ExportDeclaration": { "multiline": true, "minProperties": 3 }
		}],
		"indent": ["error", 2],
		"padding-line-between-statements": ["error",
			{ blankLine: "always", prev: "*", next: "return" },
			{ blankLine: "always", prev: "const", next: "*" },
			{ blankLine: "always", prev: "let", next: "*" }
		],
  },
  settings: {
		'import/extensions': ['.ts'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts']
		},
		'import/resolver': {
			'node': {
				'extensions': ['ts']
			},
			"typescript": {
        "alwaysTryTypes": true,
      }
		},
	}
};
