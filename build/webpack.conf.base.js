const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const resolveApp = dir => path.join(__dirname, "..", dir);
const resolvePage = dir => path.join(__dirname, "../src/page", dir);

module.exports = {
    stats: "normal",
    resolve: {
        alias: {
            "@": resolveApp("src"),
            "@style": resolveApp("src/assets/styles"),
        },
        extensions: [".web.js", ".mjs", ".js", ".scss", ".json", ".web.jsx", ".jsx"],
    },
    module: {
        rules: [{
            test: /\.(js|jsx|mjs)$/,
            exclude: /(node_modules)\/(?!(dom7|swiper)\/).*/,
            use: [
                {
                    loader: "babel-loader",
                },
                {
                    loader: "eslint-loader"
                }
            ],
        }, {
            test: /\.(css|scss|sass)$/,
            use: [
                "style-loader",
                "css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]",
                "px2rem-loader?remUnit=75&remPrecision=3",
                "sass-loader",
            ],
        }, {
            test: /\.(bmp|gif|jpe?g|png)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 1024,
                    outputPath: "images/",
                    name: "[name].[hash:8].[ext]",
                    publicPath: "images/",
                }
            }],
        }]
    },
    plugins: [

        //压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
        new OptimizeCSSPlugin(),
    ]
};
