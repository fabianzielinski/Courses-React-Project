// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { index: path.join(__dirname, "./src/index.tsx") },

  output: {
    path: __dirname + "/dist",
    filename: "main.[contenthash].js",
  },

  plugins: [
    new webpack.ProgressPlugin(),
    // new CleanWebpackPlugin("src/public/dist"),
    // new MiniCssExtractPlugin({ filename: "main.[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  resolve: {
    symlinks: false,
    alias: {
      helpers: path.resolve(__dirname, "src/helpers/"),
      store: path.resolve(__dirname, "src/store/"),
    },
    extensions: [".tsx", ".ts", ".js", "jsx", ".scss"],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
};
