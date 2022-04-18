//* Plugins 
const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//* Ruta absoluta para cambiar punto de salida
const path = require('path');

module.exports = {
  output: {
    // entry: './src/index.js', //* No se especifica punto de entrada por defecto es ./src/index.js
    path: path.resolve(__dirname,'build'), //* Cambiando a 'build' el nombre de carpeta como punto de salida 
    assetModuleFilename: "assets/[name][ext]"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: { 
              minimize: true 
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i, 
        type: "asset/resource", //* Permitiendo mostrar recursos de url() en CSS
        use: {
          loader: "image-webpack-loader", //* Aligerando imagenes
        }
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), //* Minifica CSS
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", //* Punto de entrada
      filename: "./index.html", //* Nombre en el punto de salida
    }),
    new MiniCssExtractPlugin(),
  ],
};






