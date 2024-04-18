'use strict';

module.exports = {
  extends: ['recommended', 'stylistic'],
  rules: {
    'no-bare-strings': true
  },
  ignore: [
  ],
  pending: [
    {
      "moduleId": "tests/dummy/app/templates/application",
      "only": [
        "no-bare-strings"
      ]
    },
  ]
};
