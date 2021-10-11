module.exports = {
  plugins: [
      require('cssnano')({
          preset: [
              'default',
              { orderedValues: false },
          ],
      }),
  ],
}
