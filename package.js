Package.describe({
  name: 'mwc:synthesis-minifier',
  version: '1.0.0',
  summary: 'synthesis-minifier',
  git: 'https://github.com/meteorwebcomponents/synthesis-minifier',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('isobuild:minifier-plugin@1.0.0');
  api.use('ecmascript');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.mainModule('synthesis-minifier-tests.js');
});

Package.registerBuildPlugin({
  name: 'synthesizer',
  use: [
    'underscore@1.0.6',
    'minifier-js'
  ],
  sources: [
    'plugin/synthesis-minifier.js'
  ]
});
