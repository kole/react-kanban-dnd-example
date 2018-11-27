module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'string-quotes': 'single',
    'font-family-name-quotes': 'always-where-recommended',
    'selector-pseudo-class-no-unknown': [
      true, {
        ignorePseudoClasses: [
          'global'
        ]
      }
    ],
    'order/properties-alphabetical-order': true,
    'property-no-unknown': [
      true, {
        ignoreProperties: [
          'composes'
        ]
      }
    ],
    indentation: 2
  }
};
