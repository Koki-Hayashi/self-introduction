const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = (process.env.NODE_ENV === 'production');
const fileName = isProd ? 'bundle.js.[hash]' : 'bundle.js';


const config = {
  entry: [
	'babel-polyfill',
	'./src/index.js'
  ],
  output: {path: __dirname + '/public/', filename: 'js/' + fileName},
  module: {
	rules: [
	  {
		test: /\.js$/,
		exclude: /node_modules/,
		use: [{
		  loader: 'happypack/loader?id=js'
		}]
	  },
	  {
		test: /\.jsx$/,
		exclude: /node_modules/,
		use: [{
		  loader: 'happypack/loader?id=js',
		}]
	  },
	  {
		test: /\.html$/,
		loader: 'html-loader'
	  }],

  },
  externals: {
	"react": "React",
	"react-dom": "ReactDOM",
	'redux': 'Redux',
	'react-redux': 'ReactRedux'
  },
  plugins: [
	new webpack.DefinePlugin({
	  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}),
	new HappyPack({
	  id: 'js',
	  cache: true,
	  threads: 4,
	  loaders: [{
		loader: 'babel-loader',
		options: {
		  presets: ['react', 'es2015', 'stage-0'],
		  cacheDirectory: true
		}
	  }]
	}),
	new HtmlWebpackPlugin({
	  template: './views/_index_template.html',
	  assets: {
		"bundle": '/js/' + fileName
	  },
	  filename: './index.html',
	  inject: 'body'
	})
  ],
  devtool: isProd ? '' : 'source-map'
};


module.exports = config;
