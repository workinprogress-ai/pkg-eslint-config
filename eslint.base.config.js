import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.js';

const tsConfig = /** @type {import("eslint").Linter.Config[]} */ (tseslint.configs.strict);

/** @type {import("eslint").Linter.Config[]} */
export default [
    eslint.configs.recommended,
    ...tsConfig,
    eslintConfigPrettier,
    {
        plugins: {
            prettier: eslintPluginPrettier,
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2022,
            },
        },
        rules: {
            'prettier/prettier': ['error', prettierConfig],
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: true,
            },
        },
    },
    {
        ignores: [
            // Build outputs
            '**/dist/**',
            '**/build/**',
            '**/out/**',
            '**/.next/**',

            // Dependencies
            '**/node_modules/**',

            // Version control
            '**/.git/**',

            // Generated files
            '**/*.d.ts',

            // Tools and coverage
            '**/coverage/**',
            '**/.turbo/**',
            '**/.cache/**',

            // Specific files
            '**/public/mockServiceWorker.js',
            'eslint.config.mjs',
            'vite.config.ts',
            'vitest.setup.ts',

            // Config files (more specific)
            '**/*.config.{js,ts,mjs,cjs}',
            '**/*.setup.{js,ts,mjs,cjs}',
            '**/.*rc.{js,ts,json}',
        ],
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'no-console': 'error',
            'no-debugger': 'error',
            'no-alert': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            'prefer-const': 'error',
            'no-var': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/prefer-optional-chain': 'error',
        },
    },
];
