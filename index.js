import globals from 'globals'
import sortClassMembers from 'eslint-plugin-sort-class-members'
import * as tseslint from 'typescript-eslint'

export default {
    files: ['**/*.{ts,tsx}'],
    plugins: {
        '@typescript-eslint': tseslint.plugin,
        'sort-class-members': sortClassMembers
    },
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
        globals: {
            ...globals.browser,
        },
    },
    rules: {
        ...tseslint.configs.recommended.rules,
        ...tseslint.configs.stylistic.rules,
        'array-bracket-spacing': ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error', 'always'],
        'indent': ['error', 4],
        'keyword-spacing': ['error', {
            after: true,
            before: true,
        }],
        'no-cond-assign': ['error', 'always'],
        'no-console': 'error',
        'no-inline-comments': 'off',
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0, maxEOF: 1}],
        'object-curly-spacing': ['error', 'never'],
        'one-var': 'off',
        'quote-props': ['error', 'as-needed'],
        'semi': ['error', 'never'],
        'sort-class-members/sort-class-members': 'error',
        'sort-keys': 'error',
        'sort-vars': ['error', {ignoreCase: true}],
        'sort-imports': 'error',
        'space-before-function-paren': ['error', 'never'],
        'spaced-comment': ['error', 'always'],
        '@typescript-eslint/ban-ts-comment': 'error',
        'no-array-constructor': 'off',
        'no-unused-vars': 'off',
        'strict': ['error', 'global'],
        'use-isnan': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'varsIgnorePattern': 'h'
            }
        ]
    }
}
