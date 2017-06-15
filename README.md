# TretaScript

[![Greenkeeper badge](https://badges.greenkeeper.io/VitorLuizC/TretaScript.svg)](https://greenkeeper.io/)
- Use glob to match entry files;
- Transpile TypeScript to JavaScript (ES5);
- Keep same source folder's structure in dist.

## Solution

MacGyver way, of course... :weary:
<br />
[glob][1] can match TypeScript file and with their paths create a dinamic entry
object using paths.

```js
// Match pattern using glob (Sync sucks!)
let files = glob.sync(pattern, {

  // Match in source root
  root,

  // Return absolute paths
  absolute: true 
})

for (let file of files) {
  // Normalize file's absolute path
  let filepath = path.normalize(file)

  // filename doesn't has entire path and extension
  let filename = filepath.replace(root, '').replace(/\.tsx?$/, '')

  // Add to entries object
  // {
  //   entry: entries
  //   ...
  entries[filename] = filepath
}
```

## Build

```sh
npm install
npm start
```

[1]: https://github.com/isaacs/node-glob
