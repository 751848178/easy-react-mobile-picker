const path = require("path");
const webpack = require("webpack");
const baseWebpackConfig = require("./webpack.conf.base");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const resolveApp = dir => path.join(__dirname, "..", dir);

const devWebpackConfig = merge(baseWebpackConfig, {
    entry: {
        main: resolveApp("example/main.js"),
        vendor: ["react", "react-dom"],
    },
    output: {
        path: resolveApp("lib"),
        filename: "static/scripts/[name].[hash:8].js",
        chunkFilename: "static/scripts/[name].[chunkhash:8].chunk.js",
        publicPath: "/",
    },
    devtool: "inline-source-map",
    devServer: {
        host: "0.0.0.0",
        useLocalIp: true,
        historyApiFallback:{
            rewrites:[
                {from:/./,to:"/main.html"}
            ]
        },
        stats: {
            // 添加资源信息
            assets: true,
        },
        publicPath: "/",
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                //打包重复出现的代码
                vendor: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    name: "vendor"
                },
                //打包第三方类库
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: Infinity
                }
            }
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: resolveApp("static"),
                to: "static",
                ignore: [".*"]
            }
        ]),

        new HtmlWebpackPlugin({
            filename: resolveApp("lib/main.html"),
            template: resolveApp("tpl/main.tpl.html")
        }),

    ],
});

module.exports = devWebpackConfig;
