import path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
	mode: 'production',
	entry: {
		sort: './src/sort.tsx',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	target: ['web', 'es2020'],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};

export default config;
