module.exports = {
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
};
