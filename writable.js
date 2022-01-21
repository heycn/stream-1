const {Writable} = require('stream')

const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  }
})

// 你给我什么内容，我就输出什么内容
process.stdin.pipe(outStream)
// process.stdin.on(('data'), (chunk) => {
//     outStream.write(chunk)
//   }
// )

