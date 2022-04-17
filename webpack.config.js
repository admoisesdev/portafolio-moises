//* Plugins 
const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");
//* Ruta absoluta para cambiar punto de salida
const path = require('path');

module.exports = {
  output: {
    // entry: './src/index.js', //* No se especifica punto de entrada por defecto es ./src/index.js
    path: path.resolve(__dirname,'build') //* Cambiando a 'build' el nombre de carpeta como punto de salida 
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|avif)$/i, //* Archivos de imagenes(jpeg,jpg,png,gif,svg,webp)
        //?'file-loader' permite importar imagenes en JS para ocuparlas y 'image-webpack-loader' las hace ligeras
        use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
      },
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