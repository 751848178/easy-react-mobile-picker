const path = require("path");
const generateScopedName = require("./util");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const resolveApp = dir => path.join(__dirname, "..", dir);

module.exports = {
    stats: "normal",
    externals: {
        // "react": "window.React",
        // "react-dom": "window.ReactDOM"
    },
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
            // include: /(node_modules)\/(?!(dom7|swiper)\/).*/,
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
                {
                    loader: "css-loader",
                    options: {
                        minimize: true, //css压缩
                        modules: true,
                        getLocalIdent({resourcePath}, localIdentName, localName) {
                            return generateScopedName(localName, resourcePath);
                        }
                    }
                },
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
};
