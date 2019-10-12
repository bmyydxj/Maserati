const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/safety.html",
        filename: "static/pages/safty.html",
        chunks: ["safety"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/fleet-maintenance-program.html",
        filename: "static/pages/fleet-maintenance-program.html",
        chunks: ["fleet"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/ghibli_car.html",
        filename: "static/pages/ghibli_car.html",
        chunks: ["ghibli"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/service.html",
        filename: "static/pages/service.html",
        chunks: ["service"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/news.html",
        filename: "static/pages/news.html",
        chunks: ["news"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/news_detail.html",
        filename: "static/pages/news_detail.html",
        chunks: ["news_detail"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/service_detail.html",
        filename: "static/pages/service_detail.html",
        chunks: ["service_detail"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/register.html",
        filename: "static/pages/register.html",
        chunks: ["register"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/enroll.html",
        filename: "static/pages/enroll.html",
        chunks: ["enroll"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/brand.html",
        filename: "static/pages/brand.html",
        chunks: ["brand"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/testdrive.html",
        filename: "static/pages/testdrive.html",
        chunks: ["testdrive"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/grzx.html",
        filename: "static/pages/grzx.html",
        chunks: ["grzx"]
    }),
]
