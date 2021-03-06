var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.jsx',
  
  output: {
    path:'./dist',
    filename: 'bundle.js',
  },
  
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    port: 8080
  },
  
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'es2017', 'react', 'stage-2'],
        plugins: ['add-module-exports', 'istanbul', 'transform-class-properties', 'transform-require-ignore', 'transform-runtime']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css")
    }, {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract("css!sass")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css!sass")
    }, {
      test: /.*\.(jpe?g|png|gif)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.json$/,
      loader: "json"
    }]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
}