const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
      template: "./src/index.html", //* Punto de entrada
      filename: "./index.html", //* Nombre en el punto de salida
    }),
    new MiniCssExtractPlugin(),
  ],
};