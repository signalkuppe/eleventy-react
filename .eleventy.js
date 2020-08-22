const { getBundleFromInputPath, getBundleFileName } = require("./utils");
const writeBundles = require("./writeBundles");
const renderBundle = require("./renderBundle");
const cacheDir = ".cache";
const inputDir = "src";

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./components"); // we avoid to build components, but we wanna watch them for hot reloading
  eleventyConfig.addTemplateFormats("jsx");
  eleventyConfig.addPassthroughCopy(`${inputDir}/js`);
  eleventyConfig.addPassthroughCopy(`${inputDir}/img`);
  eleventyConfig.addExtension("jsx", {
    read: false,
    data: true,
    getData: true,
    getInstanceFromInputPath: async (inputPath) => {
      try {
        const bundle = getBundleFromInputPath(inputPath, cacheDir);
        return require(bundle);
      } catch (err) {
        throw new Error(err);
      }
    },
    init: async () => {
      try {
        await writeBundles(inputDir, cacheDir);
      } catch (err) {
        throw new Error(err);
      }
    },
    compile: (permalink, inputPath, c) => {
      return async (data) => {
        try {
          return renderBundle(permalink, inputPath, cacheDir, data);
        } catch (err) {
          throw new Error(err);
        }
      };
    },
  });

  return {
    dir: {
      input: inputDir, // we watch only this jsx files, not components
    },
  };
};
