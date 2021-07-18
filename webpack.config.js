const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        open: true,
    },
    experiments: {
        asset:true
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test:/\.svg$/,
                type: "asset",
                use: "svgo-loader"
            }
        ]
    }

}