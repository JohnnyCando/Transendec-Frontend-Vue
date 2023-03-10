module.exports = {
  plugins: [require.resolve('@prettier/plugin-pug')],
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
  pugSingleQuote: false,
  htmlWhitespaceSensitivity: 'ignore',
  pugAttributeSeparator: 'none',
  pugBracketSameLine: true,
  pugWrapAttributesThreshold: 3,
  pugEmptyAttributes: 'as-is',
  pugFramework: 'vue',
  pugExplicitDiv: false,
  endOfLine: 'auto',
  arrowParens: 'always',
};
