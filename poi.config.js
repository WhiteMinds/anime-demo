module.exports = {
  entry: 'src/index',
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
    },
  ],
  devServer: {
    port: 4005,
  },
}
