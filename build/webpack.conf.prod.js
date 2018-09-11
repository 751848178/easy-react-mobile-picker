const path = require("path");
const webpack = require("webpack");
const baseWebpackConfig = require("./webpack.conf.base");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const resolveApp = dir => path.join(__dirname, "..", dir);

const devWebpackConfig = merge(baseWebpackConfig, {
    entry: {
        main: resolveApp("src/Picker"),
        // vendor: ["react", "react-dom"],
    },
    output: {
        path: resolveApp("lib"),
        filename: "Picker.js",
        publicPath: "/",
        libraryTarget: "umd"
    },
    plugins: [
        new CleanWebpackPlugin(["lib"], {
            root: resolveApp(""),
            verbose: true,
            dry: false
        }),
        // new BundleAnalyzerPlugin()
    ]
});

module.exports = devWebpackConfig;
