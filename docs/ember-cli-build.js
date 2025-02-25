'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const crawl = require('prember-crawler');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    snippetPaths: ['app/components/snippets', 'app/templates/snippets'],
    'ember-prism': {
      components: ['scss', 'javascript'], //needs to be an array, or undefined.
    },
    prember: {
      urls: crawl,
    },
    autoImport: {
      watchDependencies: ['ember-basic-dropdown'],
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
