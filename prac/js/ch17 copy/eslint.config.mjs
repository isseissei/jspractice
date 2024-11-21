import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */

module.exports = {
  env: {
    jest: true, 
  },
};
export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                process: 'readonly',
            },
        },
        ignores: ['ex01 / format_sample.js'],
    },

    pluginJs.configs.recommended,
    {
        rules: {
            indent: ['error', 4], //本当は2だけどvscodeプラグインのフォーマッタの設定に合わせて4
            quotes: ['error', 'single', { avoidEscape: true }],
            semi: ['error', 'always'],
            // 'max-len': ['error', { code: 80, tabWidth: 2, ignoreUrls: true }],
            'keyword-spacing': ['error', { before: true, after: true }],
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            'no-extra-parens': [
                'error',
                'all',
                { nestedBinaryExpressions: false },
            ],
            // 'no-console': 'warn',
            'prefer-const': 'error',
            'object-curly-spacing': ['error', 'always'],
            'arrow-parens': ['error', 'as-needed'],
            'no-multiple-empty-lines': ['error', { max: 2 }], //オリジナル
        },
    },
];
