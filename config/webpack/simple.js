const simple = {
  mode: 'production', // drops "dead code" from the bundle by setting proper defaults to `optimization` config
  entry: ['./src/index.js'],
  target: 'web',
  output: {
    libraryTarget: 'umd',
    library: 'ramdaTreeShaking',
  },
  // when mode=production, all the below optimization options are set by webpack implicitly
  optimization: {
    sideEffects: true, // tells webpack to recognise the sideEffects flag in package.json, ramda is side effects free
    minimize: true, // needs to be set to `true` for proper tree-shaking
    providedExports: true, // if set to `true` it gives far better results
    usedExports: true, // needs to be set to `true` for proper tree-shaking
    concatenateModules: true, // needs to be set to `true` for proper tree-shaking
  },
};

module.exports = [simple];
