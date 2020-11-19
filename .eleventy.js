const path = require("path");
const config = require("./react/config");
const { getBundleFromInputPath } = require("./react/utils");
const { pages } = require("./react/findSources");
const build = require("./react/build");
const render = require("./react/render");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./components"); // we avoid to build components, but we wanna watch them for hot reloading
  eleventyConfig.addWatchTarget("./theme");
  eleventyConfig.addTemplateFormats("jsx");
  eleventyConfig.addPassthroughCopy(`${config.inputDir}/js`);
  eleventyConfig.addPassthroughCopy(`${config.inputDir}/img`);
  eleventyConfig.addExtension("jsx", {
    read: false,
    data: true,
    getData: true,
    getInstanceFromInputPath: async (inputPath) => {
      try {
        const bundle = getBundleFromInputPath(inputPath);
        return require(bundle);
      } catch (err) {
        throw new Error(err);
      }
    },
    init: async () => {
      try {
        const PAGES = await pages();
        await build(PAGES);
      } catch (err) {
        throw new Error(err);
      }
    },
    compile: (permalink, inputPath) => {
      return async (data) => {
        try {
          return render(permalink, inputPath, data);
        } catch (err) {
          throw new Error(err);
        }
      };
    },
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob(path.join(config.inputDir, "_posts/*.md"))
      .sort(function (a, b) {
        return b.date - a.date;
      });
  });

  // add this client side js lib to our otuput dir
  eleventyConfig.addPassthroughCopy({
    "node_modules/fisarmonica": `${config.outputLibDir}/fisarmonica`,
  });

  return {
    dir: {
      input: config.inputDir, // we watch only this jsx files, not components
      outout: config.outputDir,
    },
    markdownTemplateEngine: "jsx", // parse markdown file with jsx template engine
  };
};
