import path from "path";
import express from "express";
import bodyParser from "body-parser";

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import historyFallback from 'connect-history-api-fallback';

import webpackDevConfig from "../webpack.config.dev";

const dev = process.env.NODE_ENV !== "production";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

if(dev) {
    const bundler = webpack(webpackDevConfig);
    app.use(webpackDevMiddleware(bundler, {
        publicPath: "/static/", //webpackDevConfig.output.publicPath,
        hot: true,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    }));
    app.use(webpackHotMiddleware(bundler));

    app.get('*', (req, res) => {
        res
            .status(200)
            .render('index');
        });
} else {
    app.use("/static", express.static(path.join(__dirname, "static")));
}
app.use(bodyParser.json());
// app.use(historyFallback());

export default app;
