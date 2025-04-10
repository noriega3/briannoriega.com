import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "prettier"],
    ignorePatterns: [
      '.next/*',
      '*.css',
      'dist',
      'esm;/*',
      'public/*',
      'tests/*',
      'scripts/*',
      '*.config.js',
      'node_modules',
      'coverage',
      '.next',
      'build',
    ]
  }),
];

export default eslintConfig;
