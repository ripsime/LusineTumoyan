const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin")

process.env.NODE_ENV = "development";

module.export = {
    mode: "development",
    target: "web",
    devtool: "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: "node_modules",
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                exclude: "node_modules",
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                exclude: "node_modules",
                use: ["less-loader?pack=defaults"],
            },
            {
                test: /\.(gif|png|jpg|eot|svg|ttf|woff|woff2)$/,
                exclude: "node_modules",
                use: ["file-loader"],
            },
        ],
    },
}