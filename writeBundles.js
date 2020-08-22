const path = require("path");
const webpack = require("webpack");
const fastglob = require("fast-glob");
const { ServerStyleSheet } = require("styled-components");
const webpackModule = require("./webpackModule");
const { getFullInputPath, getBundleFileName } = require("./utils");

const findFiles = async function (inputDir) {
  let globPath = path.join(inputDir, "**/*.jsx");
  return fastglob(globPath, {
    caseSensitiveMatch: false,
  });
};

module.exports = (inputDir, cacheDir) =>
  new Promise(async (resolve, reject) => {
    const sourceFiles = await findFiles(inputDir);
    let i = 0;
    sourceFiles.map((sourceFile) => {
      webpack(
        {
          // Configuration Object
          mode: "development",
          entry: getFullInputPath(sourceFile),
          output: {
            path: path.join(__dirname, cacheDir),
            filename: getBundleFileName(sourceFile),
            publicPath: "/",
            libraryTarget: "commonjs",
          },
          module: webpackModule,
          resolve: {
            mainFiles: ["index.jsx"],
          },
          externals: ["react", "styled-components"],
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
