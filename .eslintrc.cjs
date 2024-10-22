module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'jest.config.js',
    'jest.setup.ts',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
};
