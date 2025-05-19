// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        files: ['**/*.ts'],
        ignores: ['**/*.js, ./**/*.js'],
        extends: [
            eslint.configs.recommended,
            tseslint.configs.recommended,
        ],
        rules: {
            "@typescript-eslint/array-type": ["error", {default: "array"}],
            "semi": "warn",
            "@typescript-eslint/no-explicit-any": ["off", {}],
            "@typescript-eslint/typedef": ["error",
                {
                    "arrowParameter": true,
                    "variableDeclaration": true,
                    "memberVariableDeclaration": true,
                    "parameter": true,
                    "propertyDeclaration": true,
                }
            ]
        }
    }
);