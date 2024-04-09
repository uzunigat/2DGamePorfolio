module.exports = {
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['prettier', 'react', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        semi: false,
        printWidth: 140,
      },
    ],
    'prefer-template': 'error',
    'react/static-property-placement': 2,
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-unresolved': 2,
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'off',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '/test/**/*.*',
          '/seeds/**/*.*',
        ],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'node/no-unpublished-require': [
      'off',
      {
        devDependencies: ['/mocks/*.js'],
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    'import/external-module-folders': [
      'node_modules',
      'node_modules/@types',
      './src',
    ],
  },
};
