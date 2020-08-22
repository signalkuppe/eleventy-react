const path = require("path");

module.exports = {
  getBundleFromInputPath: (inputPath, cacheDir) => {
    return path.join(
      __dirname,
      cacheDir,
      inputPath.split("/").pop().replace(".jsx", ".js")
    );
  },
  getFullInputPath: (inputPath) => {
    return path.join(__dirname, inputPath);
  },
  getBundleFileName: (inputPath) => {
    return inputPath.split("/").pop().replace(".jsx", ".js");
  },
};
