const {Readable} = require('stream')

const inStream = new Readable()

// 第一个 chunk
inStream.push('ABCDEFGHIJKLM')
// 第二个 chunk
inStream.push('NOPQRSTUVWXYZ')

inStream.push(null)

inStream.pipe(process.stdout) // No more data

inStream.on('data', (chunk) => {
  process.stdout.write(chunk)
  console.log('-writed')
})