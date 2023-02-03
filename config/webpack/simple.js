const simple = {
  mode: 'production',
  entry: ['./src/index.js'],
  target: 'web',
  output: {
    libraryTarget: 'umd',
    library: 'ramdaTreeShaking',
  },
  optimization: {
    minimize: true, // needs to be set to `true` for proper tree shaking
    providedExports: true,
    usedExports: true, // needs to be set to `true` for proper tree shaking
    concatenateModules: true, // needs to be set to `true` for proper tree shaking
  },
};

module.exports = [simple];
