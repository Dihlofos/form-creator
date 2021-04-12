const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  devtool: isDev ? 'source-map' : false,
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components'),
      ui: path.join(__dirname, 'src/ui'),
      locales: path.join(__dirname, 'src/locales'),
      styles: path.join(__dirname, 'src/styles'),
      utils: path.join(__dirname, 'src/utils'),
      store: path.join(__dirname, 'src/store'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: [path.resolve(__dirname, 'node_modules'), /\.test.tsx?$/],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|icon|xml|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets/images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new HtmlWebpackPlugin({
      template: './www/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
