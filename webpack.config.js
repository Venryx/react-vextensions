/* global __dirname */
var webpack = require("webpack");

module.exports = {
	mode: "none",
	entry: [
		"./src/index.ts"
	],
	output: {
		path: __dirname + "/dist",
		publicPath: "http://localhost:8080/",
		filename: "index.js",
		libraryTarget: "umd",
    	//library: "react-vscrollview",
	},
	resolve: {
		//root: paths.client(),
		//root: "src",
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
	},
	externals: [
		 (context, request, callback)=> {
			/*const externalLibs = ["react", "react-dom", "react-dom/server"];
			if (externalLibs.indexOf(request) != -1) {*/
			const externalLibs = ["react", "react-dom"];
			if (externalLibs.some(lib=>request.match(new RegExp(`^${lib}(/|$)`)))) {
				return callback(null, "commonjs " + request);
			}
			callback();
		},
	],
    /*module: {
        noParse: ["react"]
    },*/
    module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react"]
				}
			},
			{test: /\.tsx?$/, loader: "ts-loader"},
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		//new webpack.IgnorePlugin(/react/),
	]
};