'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Добавьте эти опции для включения TinyMCE
    autoImport: {
      webpack: {
        externals: { tinymce: 'tinymce' },
      },
    },
  });

  app.import('node_modules/tinymce/tinymce.min.js');

  const tinymceTree = new Funnel('node_modules/tinymce/', {
    include: ['icons/**/*', 'models/**/*', 'skins/**/*', 'themes/**/*', 'plugins/**/*', 'langs/**/*'],
    destDir: '/assets'
  });

  return app.toTree(tinymceTree);
};
