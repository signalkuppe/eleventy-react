module.exports = {
  cacheDir: ".cache",
  inputDir: "src",
  componentsDir: "components",
  webpack: {
    resolve: {
      mainFiles: ["index.jsx", "index.js"],
    },
    externals: ["react", "styled-components"],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
  },
};
