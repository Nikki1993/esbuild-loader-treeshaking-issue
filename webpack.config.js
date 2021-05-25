const path = require('path');
const esbuild = require('esbuild');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const BUILD_TARGET = "es2017";

module.exports = {
	mode: 'production',

	entry: './index.jsx',
    devtool: 'source-map',

	output: {
		clean: true,
		path: path.resolve(__dirname, `./webpack_dist/`),
	},

    module: {
        rules: [  {
            test: /\.(js|jsx|ts|tsx)?$/,
            exclude: [/(node_modules)/],
            use: [
              {
                loader: "esbuild-loader",
                options: {
                    loader: "jsx",
                    target: BUILD_TARGET,
                    implementation: esbuild,                    
                },
              }
            ],
          }]
    },

	optimization: {
		minimizer: [
			new ESBuildMinifyPlugin({
                treeShaking: true,
                target: BUILD_TARGET,
                implementation: esbuild,
			}),
		],
	},
};