"use strict";

const gulp = require("gulp");
const named = require("vinyl-named");
const webpack = require("webpack-stream");

const config = {
    output: {
        filename: "[name].js"
    },

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ]
    }
};

function TretaScript() {
    var tsDir = "/Scripts/";
    var tsFiles = gulp.src(`.${tsDir}**/*.main.ts`, { base: `.${tsDir}` });

    return tsFiles
        .pipe(named(function (file) {
            let filename = "";

            // Remove static path
            filename = file.path.replace(`${__dirname}${tsDir.replace(/\//g, "\\")}`, "");
            // Remove .main
            filename = filename.replace(".main", "");
            // Remove .ts
            filename = filename.replace(".ts", "");

            return filename;
        }))
        .pipe(webpack(config))
        .pipe(gulp.dest("./Content"));
}

gulp.task("build", TretaScript);
