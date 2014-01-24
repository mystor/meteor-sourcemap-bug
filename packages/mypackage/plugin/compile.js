var fs = Npm.require('fs');

Plugin.registerSourceHandler('cjs', function (compileStep) {
  if (!compileStep.archMatches('browser'))
    return;

  var src = compileStep.read().toString('utf8');

  var srcmap = fs.readFileSync(compileStep._fullInputPath + '.map', {encoding: 'utf-8'});

  compileStep.addJavaScript({
    path: compileStep.inputPath + '.js',
    sourcePath: compileStep.inputPath,
    sourceMap: srcmap,
    data: src,
    bare: true
  });
});
