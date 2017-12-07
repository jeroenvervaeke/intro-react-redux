import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

var babelOptions = {
  "presets": [
    "react", [
      "env",
      {
        "modules": false
      }
    ]
  ]
};

const config: webpack.Configuration = {
  cache: true,
  entry: {
    'scripts/main': './src/main.tsx',
    'scripts/vendor': ['babel-polyfill']
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader',
          options: babelOptions
        },
        {
          loader: 'ts-loader'
        }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: babelOptions
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new webpack.optimize.CommonsChunkPlugin({
    name: 'scripts/vendor',
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
  })],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};

export default config;