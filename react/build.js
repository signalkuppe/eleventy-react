const path = require("path");
const config = require("./config");
const webpack = require("webpack");
const { getFullInputPath, getBundleFileName } = require("./utils");

module.exports = (sourceFiles) =>
  new Promise(async (resolve, reject) => {
    let i = 0;
    sourceFiles.map((sourceFile) => {
      webpack(
        {
          // Configuration Object
          mode: "development",
          entry: getFullInputPath(sourceFile),
          output: {
            path: path.join(process.cwd(), config.cacheDir),
            filename: getBundleFileName(sourceFile),
            publicPath: "/",
            libraryTarget: "commonjs",
          },
          module: config.webpack.module,
          resolve: config.webpack.resolve,
          externals: config.webpack.externals,
        },
        (err, stats) => {
          if (err || stats.hasErrors()) {
            reject(stats.compilation.errors);
          } else {
            i++;
            if (i === sourceFiles.length) {
              resolve(sourceFiles);
            }
          }
        }
      );
    });
  });
