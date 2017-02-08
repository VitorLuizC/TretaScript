const path = require('path')
const glob = require('glob')

/**
 * TypeScript file's source.
 * @type {string}
 */
const root = path.join(__dirname, './src')

/**
 * String pattern to match TypeScript bundle files.
 * @type {string}
 */
const pattern = './**/*.main.ts'

////////////////////////////////////////////////////////////
let entries = {}

let files = glob.sync(pattern, {
  root,
  absolute: true
})

for (let file of files) {
  let filepath = path.normalize(file)
  let filename = filepath.replace(root, '').replace(/\.tsx?$/, '')
  entries[filename] = filepath
}

module.exports = {
  entry: entries,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, './dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
}
