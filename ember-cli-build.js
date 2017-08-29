/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(
    defaults,
    {
      // Add options here
    },
  );

  app.import('vendor/tachyons/tachyons.css');

  return app.toTree();
};
