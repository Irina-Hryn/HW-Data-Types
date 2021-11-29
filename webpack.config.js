const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
    entry: './src/script/app.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};