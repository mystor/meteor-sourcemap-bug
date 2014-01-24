Package.describe({
  summary: 'Example Package'
});

Package._transitional_registerBuildPlugin({
  name: 'compileStuff',
  use: [],
  sources: [
    'plugin/compile.js'
  ],
  npmDependencies: {}
});
