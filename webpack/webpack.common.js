const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    alias: {
      components: path.resolve(__dirname, '..', './src/components'),
      appRedux: path.resolve(__dirname, '..', './src/redux'),
      utils: path.resolve(__dirname, '..', './src/utils'),
      services: path.resolve(__dirname, '..', './src/services'),
      styles: path.resolve(__dirname, '..', './src/styles'),
    },
    fallback: {
      path: require.resolve('path-browserify'),
    },
    extensions: ['', '.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /theme\.json$/,
        use: [
          'sass-loader',
          {
            loader: 'json-loader',
            options: {
              outputStyle: 'compressed',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
  ],
  stats: 'errors-only',
};
