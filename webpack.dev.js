const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    }
};
