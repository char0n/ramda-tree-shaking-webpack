# ramda-tree-shaking-webpack
POC of ramda tree-shaking using webpack

### Conclusion

The key to properly **tree-shake** ramda imports is to:

- use [ES6 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- use webpack `mode=production` which sets proper defaults to [webpack optimization config](https://webpack.js.org/configuration/optimization/#optimizationusedexports)
- if you want to adjust [webpack optimization config](https://webpack.js.org/configuration/optimization/#optimizationusedexports) make sure following options are always enabled:

```js
{
  mode: 'production', // drops "dead code" from the bundle by setting proper defaults to `optimization` config
  optimization: {
    sideEffects: true, // tells webpack to recognise the sideEffects flag in package.json, ramda is side effects free
    minimize: true, // needs to be set to `true` for proper tree-shaking
    providedExports: true, // if set to `true` is gives far better results
    usedExports: true, // needs to be set to `true` for proper tree-shaking
    concatenateModules: true, // needs to be set to `true` for proper tree-shaking
  }
}
```

---

### Development setup

```sh
 $ git clone git@github.com:char0n/ramda-tree-shaking-webpack.git
 $ npm i --verbose
```

### Testing npm scripts

All the below-mentioned scripts create a UMD bundle in `./dist/main.js` file.

**Builds source code with no user defined config (using webpack defaults)**:

```sh
 $ npm run build build:webpack:no-config
```

**Builds source code with simple user defined config**:

```sh
 $ npm run build build:webpack:config-simple
```

**Builds source code with simple user defined config and using babel**:

```sh
 $ npm run build build:webpack:config-babel
```
