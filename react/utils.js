const path = require("path");
const config = require("./config");

module.exports = {
  getBundleFromInputPath: (inputPath) => {
    return path.join(
      process.cwd(),
      config.cacheDir,
      inputPath.split("/").pop().replace(".jsx", ".js")
    );
  },
  getFullInputPath: (inputPath) => {
    return path.join(process.cwd(), inputPath);
  },
  getBundleFileName: (bundlePath) => {
    const pathArray = bundlePath.split("/");
    if (bundlePath.indexOf("components") !== -1) {
      return `${pathArray[pathArray.length - 2]}.js`;
    } else {
      return pathArray.pop().replace(".jsx", ".js");
    }
  },
};
